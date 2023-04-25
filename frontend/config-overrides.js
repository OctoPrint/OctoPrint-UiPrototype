function muiExternals({request}, callback) {
    if (
        request === "@mui/material" ||
        request === "@mui/material/utils" ||
        request === "@mui/material/styles"
    ) {
        return callback(null, "var window['MaterialUI']");
    }

    if (/^@mui\/material\/.+$/.test(request)) {
        const name = request.replace(/^@mui\/material\//, "");
        const ref =
            "{ ...window['MaterialUI']" +
            name
                .split(".")
                .map((n) => "['" + n + "']")
                .join("") +
            " }";
        return callback(null, `var ${ref}`);
    }

    callback();
}

module.exports = function override(config, env) {
    return {
        ...config,
        optimization: {minimize: env.DEVELOPMENT ? false : true},
        externalsType: "window",
        externals: [
            {
                "react": "React",
                "react-dom": "ReactDOM",
                "react-is": "ReactIs"
            },
            muiExternals
        ]
    };
};
