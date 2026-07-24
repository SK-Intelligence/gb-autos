# GB Autos and Tyres

A dependency-free, responsive recreation of the GB Autos and Tyres website. The site uses semantic HTML, CSS, and plain JavaScript, with a small Python static server for clean route handling.

## Run locally

```sh
python3 server.py
```

Open `http://localhost:4173/`.

The server reads Railway's `PORT` environment variable automatically and
listens on `0.0.0.0`, while retaining port `4173` for local development.

## Pages

- `/` — home, business overview, statistics, and location
- `/services` — tyre and mechanical services gallery
- `/contact` — contact form, hours, and location
- `/blog` — four-article blog index
- `/blog-post` — “Essential Insights for Every Garage Visitor”
- `/blog-post1` — “10 Essential Tips to Improve Your Car's Reliability and Performance”
- `/blog-post2` — “All You Need to Know About Tyres”
- `/blog-post3` — “Best Cheap Cars for High Reliability”

The descriptive aliases `/all-you-need-to-know-about-tyres` and `/best-cheap-cars-for-high-reliability` are also supported. Unknown routes render an accessible in-app 404 page.

All visible photography, the logo, and static map fallbacks are stored locally. When available, the map frame loads the live Google Maps view over the matching local fallback.

The contact and footer forms validate in the browser and hand the completed message to the visitor's email client using `mailto:` because the static site has no server-side email credentials.

## Validation captures

The repository includes a macOS WebKit capture utility that works without adding a package dependency:

```sh
capture_cache=/tmp/gb-capture-swift-cache
mkdir -p "$capture_cache/clang" "$capture_cache/swift"
CLANG_MODULE_CACHE_PATH="$capture_cache/clang" \
SWIFT_MODULECACHE_PATH="$capture_cache/swift" \
swift -suppress-warnings \
  -Xfrontend -interface-compiler-version -Xfrontend 6.3.2 \
  tools/capture.swift /services 1440 1200 /tmp/services.png
```

Use `768 1024` or `390 844` for the tablet and mobile viewports. Add `menu-open` after the output path to capture the expanded mobile navigation.

The full-resolution reference crops and their source coordinates are documented in `assets/reference/README.md`; optimized delivery copies live in `assets/web/`.

## Deploy on Railway

This repository includes `railway.json`, so Railway uses Railpack, runs
`python3 server.py`, and checks `/` before marking a deployment healthy.

1. Create a Railway project and add a service from this GitHub repository.
2. Select the `main` branch and leave the root directory as `/`.
3. Wait for the first deployment to become active.
4. In **Settings → Networking → Public Networking**, choose
   **Generate Domain**.

No application variables are required. Railway supplies `PORT` automatically.
