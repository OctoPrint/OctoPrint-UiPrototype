import React from "react";

import extensionregistry from "../../lib/extensionregistry";

export const ExtensionContext = React.createContext();

export const ExtensionProvider = ({children}) => {
    const [update, forceUpdate] = React.useState(0);
    extensionregistry.on("change", () => {
        forceUpdate(update + 1);
    });

    return (
        <ExtensionContext.Provider value={{registry: extensionregistry, update: update}}>
            {children}
        </ExtensionContext.Provider>
    );
};

export default ExtensionProvider;
