# /samvaya-matrimony — Samvaya mirror (test deploy)

Self-hosted copy of samvayamatrimony.com, fully detached from Framer.
Source of truth: **beast-clone/samvaya-private-office** (`framer-export/site/`).

**This copy is path-pinned.** The source uses root-relative asset paths; every
`/assets-fx/`, `/icons/` and `/vendor/` reference here is prefixed with
`/samvaya-matrimony` so it works under this subfolder. If the page ever moves to a
different path or to a domain root, re-derive it from the source repo rather than
editing these files — 568 references are prefixed.

`.mjs` files need a JavaScript MIME type; the hub's root `_headers` sets it.
