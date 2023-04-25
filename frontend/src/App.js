import React from "react";

import {CssBaseline} from "@mui/material";

import Dashboard from "./components/Dashboard";
import ExtensionProvider from "./components/extensions/ExtensionProvider";

function App() {
    return (
        <ExtensionProvider>
            <CssBaseline />
            <Dashboard />
        </ExtensionProvider>
    );
}

export default App;
