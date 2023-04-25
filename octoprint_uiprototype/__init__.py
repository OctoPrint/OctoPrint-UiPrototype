import octoprint.plugin


import os
import tornado.web

from octoprint.server.util.tornado import (
    RequestlessExceptionLoggingMixin,
    CorsSupportMixin,
)


class FileHandler(
    RequestlessExceptionLoggingMixin,
    CorsSupportMixin,
    tornado.web.StaticFileHandler,
):
    def initialize(self, *args, **kwargs):
        super().initialize(*args, **kwargs)


class UiPrototypePlugin(octoprint.plugin.UiPlugin, octoprint.plugin.TemplatePlugin):
    def will_handle_ui(self, request):
        return "uiprototype" in request.args or request.cookies.get(
            "uiprototype", False
        )

    def on_ui_render(self, *args, **kwargs):
        from flask import make_response, render_template

        modules = self._gather_modules()
        return make_response(render_template("index.html.jinja2", modules=modules))

    def route_hook(self, server_routes, *args, **kwargs):
        return [
            (
                # /plugin/uiprototype/dist/*
                r"/dist/(.*)",
                FileHandler,
                {"path": os.path.join(self._basefolder, "dist")},
            ),
        ]

    def _gather_modules(self):
        modules = {}

        for name, hook in self._plugin_manager.get_hooks(
            "octoprint.plugin.uiprototype.gather_modules"
        ).items():
            try:
                result = hook()
                if result is not None:
                    modules.update(
                        {
                            (module_name, self._convert_module_url(name, module_path))
                            for (module_name, module_path) in result.items()
                        }
                    )
            except Exception:
                self._logger.exception(
                    f"Error while calling hook of plugin {name}",
                    extra={"plugin": name},
                )

        return modules

    @staticmethod
    def _convert_module_url(name, module):
        if module.startswith("pluginstatic://"):
            module = module[len("pluginstatic://") :]
            return f"plugin/{name}/static/{module}"
        return module


__plugin_name__ = "UI Prototype Plugin"
__plugin_pythoncompat__ = ">=3,<4"  # Only Python 3
__plugin_implementation__ = UiPrototypePlugin()

__plugin_hooks__ = {
    "octoprint.server.http.routes": __plugin_implementation__.route_hook,
}
