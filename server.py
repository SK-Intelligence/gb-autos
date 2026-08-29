#!/usr/bin/env python3
"""Tiny dependency-free static server with an index fallback for app routes."""
import mimetypes
import os
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

mimetypes.add_type("image/x-icon", ".ico")
mimetypes.add_type("application/manifest+json", ".webmanifest")


class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        requested = Path(self.translate_path(self.path.split("?", 1)[0]))
        route = self.path.split("?", 1)[0].rstrip("/") or "/"
        routes = {
            "/",
            "/services",
            "/contact",
            "/blog",
            "/blog-post",
            "/blog-post1",
            "/best-cheap-cars-for-high-reliability",
            "/all-you-need-to-know-about-tyres",
            "/blog-post2",
            "/blog-post3",
        }
        if route in routes or (not requested.exists() and "." not in Path(route).name):
            self.path = "/index.html"
        super().do_GET()


if __name__ == "__main__":
    port = int(os.environ.get("PORT", "4173"))
    print(f"GB Autos & Tyres: http://0.0.0.0:{port}")
    ThreadingHTTPServer(("0.0.0.0", port), Handler).serve_forever()
