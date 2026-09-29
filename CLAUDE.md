# zhiwdev.github.io

Zhi Wang's personal site: static HTML/CSS served by GitHub Pages from `main`. No build step.
Blog conventions (tags, index rows, template) are in `blog/README.md`.

## Writing or editing blog posts

1. Read `blog/VOICE.md` first. It is Zhi's voice and the public-writing guardrails.
2. Run the `humanizer` skill (`.claude/skills/humanizer/`) on every post before committing,
   in file mode, with `blog/VOICE.md` as the writing sample. Its dash rule follows the sample:
   dashes stay sparing, not zero.
3. Do not add facts, numbers, anecdotes, or feelings Zhi didn't give. Ask instead.
4. New posts start unlisted: `<p class="post-meta">Draft</p>`, `<meta name="robots" content="noindex">`,
   and no row in `blog/index.html` until Zhi approves.
5. Visuals reuse the post components in `styles.css` (`.flow`, `.pull-quote`, `.timeline`,
   `.checklist`, `.compare`, `.layers`, `.tuesday`). Check desktop and 390px widths for
   horizontal scroll before committing.

## Publishing

Work on a branch. Merge to `main` (which publishes the site) only when Zhi says so.
