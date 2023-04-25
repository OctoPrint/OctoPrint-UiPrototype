import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import DashboardContainer from "./components/DashboardContainer";

import extensionregistry from "./lib/extensionregistry";

import * as components from "./components";

function createTestComponent(name) {
    return () => {
        console.log(name);
        return <DashboardContainer mode="narrow">{name}</DashboardContainer>;
    };
}

function injectScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

const registrations = {
    "Dashboard.Containers": [
        createTestComponent("TestComponentA"),
        createTestComponent("TestComponentB"),
        createTestComponent("TestComponentD"),
        createTestComponent("TestComponentE"),
        createTestComponent("TestComponentC")
    ]
};
extensionregistry.registerExtensions(registrations);

const OCTOPRINT_CONFIG = window.OCTOPRINT_CONFIG;

for (const key of Object.keys(OCTOPRINT_CONFIG.modules)) {
    const script = OCTOPRINT_CONFIG.modules[key];
    if (!script) {
        continue;
    }

    const url = OCTOPRINT_CONFIG.modulePrefix + script;
    injectScript(url)
        .then(() => {
            const module = window[key];
            if (module && module.default && module.default.extensionPoints) {
                extensionregistry.registerExtensions(module.default.extensionPoints);
            }
        })
        .catch(() => {
            console.error(`Failed to load module ${key} from ${url}`);
        });
}

const rootElement = document.getElementById("root");
if (rootElement) {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}

export {components, App};
