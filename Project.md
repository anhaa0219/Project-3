# Project 24 — Markdown Live Preview

**Difficulty:** med · **Category:** Tool · **Core demo:** ~20 min

## What you're building
A split-screen text editor: type Markdown syntax on the left, and see it rendered as live-updating formatted HTML on the right as you type — no submit button needed.

## The 20-minute core (MVP)
- A `<textarea>` on the left for typing raw markdown
- A preview panel on the right that updates instantly on every keystroke
- Support at minimum: `#` headings, `**bold**`, and `- ` bullet lists rendered correctly

## How it works (concept — no code)
- **Detecting every keystroke:** attach an `input` event listener to the `<textarea>` — this fires on every change (typing, pasting, deleting), unlike `change` which only fires on blur.
- **Getting the raw text:** read `textarea.value` each time the input event fires to get the current full markdown text as a string.
- **Converting markdown to HTML — two options:**
  - **Easy path (recommended for the 20-min core):** load the `marked` library via a CDN `<script>` tag. It exposes a global function (`marked.parse(text)` or similar depending on version) that takes a markdown string and returns an HTML string.
  - **Challenge path (no library):** manually process the string yourself using string methods students already know — split the text into lines with `.split('\n')`, then for each line check if it starts with `#` characters (heading), starts with `-` (list item), or contains `**text**` patterns (bold) using `.startsWith()`, `.includes()`, and `.replace()`, building up an HTML string as you go.
- **Rendering the result:** set the generated HTML string onto the preview panel's `innerHTML` property. This is the DOM API that injects HTML (as opposed to `textContent`, which only inserts plain text).
- **Security note worth mentioning:** setting arbitrary user input into `innerHTML` can be a security risk (XSS) in real production apps — worth a short conceptual mention even though it's not a concern for this local practice project.
- **Keeping panels in sync while scrolling (stretch):** listening to the `scroll` event on one panel and setting the other's `scrollTop` proportionally.

## What you'll use
- HTML/CSS: two-column split layout (flex or grid), monospace font for the editor, styled typography for the rendered preview
- JavaScript: string methods (`split`, `startsWith`, `includes`, `replace`), loops, string building
- Browser APIs: `input` event, `innerHTML`
- Public API (if any): none — optionally the `marked` library via CDN (not an API, a client-side JS library, free, no key)

## Design prompt (paste it → get a visual spec sheet → build from it)
Paste the prompt below into an AI/design tool that can output HTML (Claude, ChatGPT, v0, etc.). It returns a **single annotated design-spec sheet** — a picture of the screen with the exact pixel spacing, colors, and font sizes labeled on it, plus a per-component breakdown — so you can read every number and rebuild it yourself in plain HTML/CSS/JS. It's a spec to copy, **not** the finished app.

> Create a single self-contained HTML file that is an **annotated design-spec sheet** (like a Figma redline) for a split-screen markdown live preview editor — NOT a working app. Include: (1) a clean static mockup of the main screen with realistic placeholder content (header bar, markdown textarea editor pane, rendered HTML preview pane, divider); (2) small labeled chips placed on the mockup marking the key spacing and sizes in pixels — padding, gaps, border-radius, main element sizes, and the biggest font size; (3) a **Colors** panel — each color as a swatch + hex code + what it is used for, and make sure body text stays at least 4.5:1 contrast against its background; (4) a **Typography** panel — each text element with its pixel font-size and weight; (5) a **Spacing & sizes** panel — max width, paddings, gaps, corner radii in px, plus one note on how the layout reflows on a narrow phone screen (a single breakpoint); (6) a **States** strip — small mini-mockups of the empty/first-load, loading, and error (or permission-denied) states, since the working app needs them; (7) a **Component-by-component breakdown** where each component shown in the mockup above gets its own small card listing all of its specs: width/height, padding, background hex, border and border-radius, and text color + font size + weight — so I can build one component at a time just by reading its card. Use the Manrope font for the mockup so it matches the style below, and keep the spec panels themselves in a clean readable sans-serif. Make it clean and beginner-friendly so someone who has coded for one month can read the numbers and implement it by looking. Style direction: clean developer-tool aesthetic, dark editor pane and light preview pane. Do NOT include any interactivity, JavaScript, or real data — it is a static spec sheet I will read and rebuild by hand.

## Resources
- https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event
- https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
- https://marked.js.org/

## Stretch goals
- Support links `[text](url)` and inline code `` `code` ``
- Save the current text to `localStorage` so it survives a page refresh
- Add a "Copy rendered HTML" button using the Clipboard API
- Add syntax highlighting to the editor pane itself

## Skills it drills
- String manipulation methods
- Loops and conditionals over text
- DOM rendering via innerHTML (new concept, explained above)
- Real-time input events (new concept, explained above)