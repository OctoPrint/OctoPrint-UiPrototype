import React from "react";

import {IconButton} from "@mui/material";
import PlusOne from "@mui/icons-material/PlusOne";

import {ExtensionContext} from "./extensions/ExtensionProvider";
import DashboardContainer from "./DashboardContainer";
import extensionregistry from "../lib/extensionregistry";

const ExtensionSpawner = ({name}) => {
    const {registry} = React.useContext(ExtensionContext);
    const [counter, setCounter] = React.useState(1);

    const spawnExtension = () => {
        const Component = () => {
            return (
                <DashboardContainer mode="narrow">
                    Spawned component #{counter}
                </DashboardContainer>
            );
        };
        registry.registerExtension("Dashboard.Containers", Component);
        setCounter(counter + 1);
    };

    return (
        <IconButton color="inherit" onClick={spawnExtension}>
            <PlusOne />
        </IconButton>
    );
};

extensionregistry.registerExtension(
    "Dashboard.Navigation.NavigationBar.Icons",
    ExtensionSpawner
);

export default ExtensionSpawner;
