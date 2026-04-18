# #SometimesaBaker

A PWA recipe hub for your personal card collection.
Model: **claude-sonnet-4-6** (~$0.08/card)

## Files

| File | Purpose |
|------|---------|
| `index.html` | App shell — search, filter, browse, generate |
| `manifest.json` | PWA installability |
| `sw.js` | Service worker — offline support |
| `recipes.json` | Recipe catalog |

## Folder structure

```
sometimesabaker/
  index.html
  manifest.json
  sw.js
  recipes.json
  recipes/
    sourdough_marble_rye.html
    memphis-pulled-pork-sliders.html
    ... (drop cards here)
```

## API key setup

1. Click the **Key** button in the header
2. Paste your `sk-ant-…` key from console.anthropic.com
3. Hit Save — stored in localStorage

For local dev only, you can hard-code it at the top of the `<script>` block:
```js
const HARDCODED_KEY = 'sk-ant-YOUR-KEY-HERE';
```
⚠ Never commit a real key to a public repo.

## Deploy

**GitHub Pages:** Create repo → upload folder → Settings → Pages → main branch / root → Save.
Live at `yourusername.github.io/sometimesabaker`. Install on iPhone via Safari → Share → Add to Home Screen.

**Netlify:** Drag folder onto netlify.com dashboard. Done.

## Adding new cards

1. Generate a card via the app (or use the copy-paste prompt flow without a key)
2. Drop the `.html` file into `recipes/`
3. Add one entry to `recipes.json`
4. Commit / push or re-drag to Netlify

## Swatch reference

| Category | Gradient |
|----------|---------|
| Sourdough | `linear-gradient(90deg,#4a3018,#8b6340)` |
| Bread | `linear-gradient(90deg,#5c4020,#c8a060)` |
| Pastry | `linear-gradient(90deg,#3a2060,#8060c0)` |
| Sweet | `linear-gradient(90deg,#8b5e0a,#d4a017)` |
| Savory | `linear-gradient(90deg,#2a1e0e,#8b5e2a)` |
| BBQ/Smoky | `linear-gradient(90deg,#7a1f0a,#c8500e)` |
