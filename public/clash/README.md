# Anime Clash card images

Drop your four character images here with these exact names:

| File                      | Card    | SFX      | Suggested image                          |
| ------------------------- | ------- | -------- | ---------------------------------------- |
| `public/clash/zoro.jpg`   | Zoro    | ZAN!!!   | Green-hair three-sword slash (red trail) |
| `public/clash/luffy.jpg`  | Luffy   | DON!!!   | Straw-hat Gear punch (yellow burst)      |
| `public/clash/naruto.jpg` | Naruto  | GOOO!!!  | Spiral Rasengan orb (blue swirl)         |
| `public/clash/sasuke.jpg` | Sasuke  | BZZT!!!  | Crackling Chidori hand (purple lightning)|

Notes:
- Square (1024×1024) images work fine — cards crop to a 3:4 portrait.
- `.png` also works; if you use PNGs, update the `img` paths in
  `src/components/portfolio/AnimeClashPanel.tsx` from `.jpg` to `.png`.
- Until a file exists, the card shows a styled fallback (no broken image).
