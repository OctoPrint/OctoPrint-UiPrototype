import React from "react";
import {ExtensionContext} from "./ExtensionProvider";

class ExtensionErrorBoundary extends React.Component {
    // see https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    componentDidCatch(error, info) {
        console.error(error, info);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }

        return this.props.children;
    }
}

const ExtensionPoint = ({name, sort, ...props}) => {
    const {registry} = React.useContext(ExtensionContext);
    const extensions = registry.getExtensionsFor(name, sort);

    console.log(
        `Rendering extension point ${name} with ${extensions.length} extensions...`
    );

    if (extensions.length === 0) {
        return null;
    }

    return (
        <React.Fragment>
            {extensions.map((Extension, index) => {
                return (
                    <ExtensionErrorBoundary key={index} fallback={"💩"}>
                        <Extension {...props} />
                    </ExtensionErrorBoundary>
                );
            })}
        </React.Fragment>
    );
};

export default ExtensionPoint;
