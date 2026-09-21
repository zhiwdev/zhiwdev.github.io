# Blog

The blog is a single tagged index at `blog/index.html`. Posts live in `blog/posts/`.

## Sections (tags)

| Display name | Filter key (`data-tag`) | Covers |
|---|---|---|
| Pharma | `pharma` | Industry/domain thinking — epi, RWE, forecasting, market dynamics |
| Career | `career` | Leadership, growing teams, navigating the industry |
| AI Learning | `ai` | AI tools and techniques, learned in public |
| Products | `products` | The making of Overdue Studio — decisions, pricing, distribution |

## Publishing a post

1. Copy `blog/posts/_template.html` to `blog/posts/<slug>.html` and fill in the
   placeholders (title, date, tag, body). The sec-label link (`../#<tag-slug>`)
   deep-links back to the index with that filter applied.
2. Add a row to the post list in `blog/index.html`, newest first:
   ```html
   <li class="post-row" data-tag="pharma">
       <span class="post-date">2026-09-21</span>
       <a class="post-title" href="posts/my-post.html">My Post Title</a>
       <span class="tag">Pharma</span>
   </li>
   ```
3. Commit and push. The "No posts yet" note hides itself once a row exists.
