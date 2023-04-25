const extensions = {};
const listeners = {};

const getDisplayName = (WrappedComponent) =>
    WrappedComponent.displayName || WrappedComponent.name || "Component";

const _registerExtension = (name, extension) => {
    const extensionName = getDisplayName(extension);
    console.log(`Registering ${extensionName} for extension point ${name}`);
    if (!extensions[name]) {
        extensions[name] = [];
    }
    if (extensions[name].includes(extension)) {
        console.warn(
            `Extension ${extensionName} is already registered for extension point ${name}`
        );
        return;
    }
    extensions[name].push(extension);
    console.log("Registered extensions: ", extensions);
};

const registerExtensions = (registrations) => {
    for (const name in registrations) {
        for (const extension of registrations[name]) {
            registerExtension(name, extension);
        }
    }
    trigger("change");
};

const registerExtension = (name, extension) => {
    _registerExtension(name, extension);
    trigger("change");
};

const getExtensionsFor = (name, sorter) => {
    if (sorter) {
        return extensions[name].sort(sorter) || [];
    }
    return extensions[name] || [];
};

const on = (event, callback) => {
    if (!listeners[event]) {
        listeners[event] = [];
    }
    if (listeners[event].includes(callback)) {
        return;
    }
    listeners[event].push(callback);
};

const trigger = (event, ...args) => {
    if (!listeners[event]) {
        return;
    }
    for (const callback of listeners[event]) {
        callback(...args);
    }
};

const registry = {
    registerExtension,
    registerExtensions,
    getExtensionsFor,
    on
};

export default registry;
