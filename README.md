# Video Time Link

**Video Time Link** is a lightweight Chrome extension that updates the current video URL to include the exact playback position (timestamp).

With a single click, the current time of the video is written into the URL — without reloading the page — so the link can be saved, shared, or restored later.

---

## What this extension does

- Reads the current playback time of an HTML5 video
- Updates the browser URL **without page reload**
- Encodes the timestamp directly into the URL
- Works entirely on the client side

### Supported platforms

- **YouTube** — uses `?t=SECONDS`
- **Vimeo** — uses `#t=SECONDSs`

On unsupported sites, the extension does nothing.

---

## Why this exists

Many video platforms automatically resume playback using account-based history.  
However, that behavior is:

- account-dependent
- opaque
- not shareable
- unreliable when history is disabled
- unavailable across platforms or contexts

This extension makes the playback position **explicit**, **portable**, and **controlled by the user** by storing it in the URL itself.

---

## Typical use cases

- Saving progress in long videos or lectures
- Sharing a precise moment in a video with others
- Keeping video references in notes, tasks, or documentation
- Working with videos while history tracking is disabled
- Power-user workflows where the URL is the source of truth

---

## Target audience

This extension is designed primarily for:

- Developers and engineers
- Students and researchers
- Technical users watching long-form content
- Privacy-conscious users who disable watch history
- Anyone who prefers explicit, deterministic behavior over implicit platform features

It is **not** intended as a replacement for platform-specific “Continue watching” features, but as a complementary utility.

---

## How it works

1. You click the extension icon
2. The extension reads `video.currentTime`
3. The timestamp is written into the URL using `history.replaceState`
4. The page does **not** reload
5. The updated URL is preserved in browser session restore

---

## Privacy & permissions

- No accounts
- No backend
- No tracking
- No analytics
- No data leaves your browser

The extension only runs on the active tab when you click it.

---

## Current limitations

- Manual trigger only (click to update URL)
- No automatic updates while playing
- No user-configurable platforms yet

These are deliberate design choices to keep the extension minimal and predictable.

---

## Status

This is an early, focused version with a single responsibility.

Future improvements (if needed) may include:

- optional automatic updates
- user-configurable platform rules
- additional video platforms

---

## License

[MIT](./LICENSE)
