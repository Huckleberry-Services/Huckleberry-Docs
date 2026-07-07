# CLAUDE.md — Huckleberry-Docs

Customer-facing documentation site built with **Fumadocs** (`fumadocs-mdx` + Next.js). Content lives in `content/docs/**.mdx`. Each folder's `meta.json` controls sidebar order via a `pages` array of file basenames (no extension).

## Voice

Customer-facing and benefit-oriented. **No internal jargon** — no Jira ticket IDs, PR numbers, repo/file names, or engineering detail. Describe what users can now do and why it helps.

The internal, engineering-facing production release log (per-repo, with tickets/PRs/root causes) lives separately in the Confluence **"Release Notes"** page (id `414154754`). Keep the two distinct; don't copy engineering detail into these docs.

## Release notes — one page per month

`content/docs/release-notes/` is a landing page plus **one page per release month**:

- `index.mdx` — landing page; lists releases (most recent first) with a link to each month page, plus a short earlier-releases note.
- `<month>-<year>.mdx` — e.g. `july-2026.mdx`, with `title` (e.g. `"July 2026"`) and `description` frontmatter. Body is a series of bold feature headers (`**Feature Name**` followed by two trailing spaces for a hard line break) each with a short benefit paragraph.
- `meta.json` — sidebar order.

**To add a new month:**

1. Create `content/docs/release-notes/<month>-<year>.mdx` with `title` / `description` frontmatter and the feature sections.
2. Prepend its basename to the `pages` array in `release-notes/meta.json` (after `"index"`, most recent first).
3. Add a bullet linking it at the top of the **Releases** list in `release-notes/index.mdx`.

## Before committing

- Run `npm run types:check` (regenerates the Fumadocs MDX collection + runs `tsc --noEmit`); it catches frontmatter-schema and MDX errors without a full build.
- Branch off `main` and open a PR (main is the default/deploy branch).
