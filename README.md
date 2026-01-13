# Neigut Vineyard — Simple Static Website

This is a minimal, elegant static website scaffold for a small winery or boutique vineyard. It includes three pages:

- `index.html` — Landing page / welcome
- `our-story.html` — Story page with placeholder copy and photo collage
- `order.html` — Product-style order layout with placeholder bottles

How to view locally

Open the `index.html` file in your browser. From the project root (macOS), you can run a quick static server, for example:

```bash
# from this repo root
python3 -m http.server 8000
# then open http://localhost:8000/index.html
```

Notes

- Typography uses Google Fonts (Playfair Display for headings, Inter for body).
- Colors are a restrained palette (off-white background, muted gray text, burgundy accent).
- Images are SVG placeholders located in `assets/`.
- No checkout functionality — the "Order" buttons are visual placeholders.

Next steps (suggested)

- Replace placeholder copy on `our-story.html` with real text.
- Replace SVG placeholders with real photography and product images (optimize for web).
- Add a real contact / order form and backend when ready.

Run helper script (recommended)

There's a small helper script `serve.sh` included to make viewing the site easy on macOS:

```bash
# make it executable (only once)
chmod +x serve.sh

# run the helper — it starts a local server and opens your browser
./serve.sh
```

The helper will start a Python HTTP server on port 8000, open `index.html` in your default browser, and stop when you press Enter in the terminal.
