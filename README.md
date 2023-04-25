# Plugin enabled UI Prototype

Basic Prototype for a Material based UI supporting extension by plugins.

Can be accessed by attaching `?uiprototype` to the OctoPrint URL. Be advised that this is really just a demo of the
extension concept, it's non functional as an OctoPrint frontend itself.

## Setup

Install via the bundled [Plugin Manager](https://docs.octoprint.org/en/master/bundledplugins/pluginmanager.html)
or manually using this URL:

    https://github.com/OctoPrint/OctoPrint-UiPrototype/archive/main.zip

## Implementation details

### OctoPrint plugin

The OctoPrint plugin is a `UiPlugin` that renders the contents of `index.html.jinja2` when invoked. That page
takes care of loading React and MaterialUI as UMD files from the `unpkg.com` CDN, and also loading the frontend
bundle and binding it to the root DOM node.

Additional plugins are loaded via the `octoprint.plugin.uiprototype.gather_modules` hook, which needs to return 
a dictionary consisting of a global identifier and a JS file to load. See the [test plugin]() 
for an example of how to do that. The outcome of gathering plugins is made available on the frontend via
`OCTOPRINT_CONFIG.modules`.

### Frontend

The frontend source can be found in the `frontend/` directory. There's a bunch of commands available:

- `npm install`: Install deps
- `npm run watch`: Runs the webpack build that compiles to `dist/` in the plugin folder, watches for file changes
- `npm run build`: Runs the webpack build that compiles to `dist/` once.

The initialization code loads info about available plugins from `OCTOPRINT_CONFIG.modules` and registers
them with the extension point system.

## Open questions

- [ ] How to make components from the default UI available to plugins?
- [ ] Component usage by from other plugins? (probably related to ⬆)
- [ ] Global event bus? (custom context? see first todo)
- [ ] Global API access? (custom context? see first todo)
- ...
