# André Benatti — Personal Blog

Personal technical blog and portfolio built with **Next.js**, **React**, and **TypeScript**, with articles authored in **MDX** and support for English and Portuguese.

The project is designed around a simple static-content workflow: posts live in the repository, their frontmatter is validated at build/runtime boundaries, Markdown/MDX is compiled into React, and post assets are synchronized into `public/`.

## Overview

This repository powers [dotpegaso.com.br](https://dotpegaso.com.br) and contains:

- A localized blog available in **English (`en`)** and **Portuguese (`pt`)**
- MDX-based technical articles
- Typed post frontmatter validation
- Reading-time calculation for articles
- Syntax-highlighted code blocks
- Per-post assets stored alongside the article source
- Next.js App Router architecture
- TypeScript-first implementation
- A small build-time asset synchronization script
- Tailwind CSS 4 and ESLint for the development workflow

The repository is intentionally lightweight: there is no database or CMS dependency for publishing posts. Content is versioned together with the application source.

## Tech Stack

| Technology | Purpose |
| --- | --- |
| **Next.js 16** | Application framework and routing |
| **React 19** | UI layer |
| **TypeScript 5** | Static typing |
| **MDX** | Authoring posts with Markdown + React components |
| **next-mdx-remote** | Runtime/server-side MDX compilation |
| **gray-matter** | Frontmatter parsing |
| **Zod** | Frontmatter schema validation |
| **rehype-pretty-code** | Code block formatting |
| **Shiki** | Syntax highlighting |
| **remark-gfm** | GitHub-Flavored Markdown support |
| **Tailwind CSS 4** | Styling |
| **ESLint 9** | Code quality |
| **fs-extra** | Post asset synchronization |

The versions currently declared by the project are Next.js `16.2.6` and React `19.2.4`.

## Architecture

The project uses the Next.js App Router with a content-driven architecture.

At a high level:

```text
content/posts/
       │
       ├── post-slug/
       │     ├── en.mdx
       │     ├── pt.mdx
       │     └── assets...
       │
       ▼
   lib/posts.ts
       │
       ├── read filesystem
       ├── parse frontmatter
       ├── validate metadata
       └── calculate reading time
       │
       ▼
   Next.js App Router
       │
       ▼
   MDX compiler
       │
       ├── rehype-pretty-code
       └── custom MDX components
       │
       ▼
     Rendered post
```

The root route redirects to `/en`, while the localized homepage is generated for both supported locales.

## Internationalization

The application currently supports:

- 🇺🇸 English — `/en`
- 🇧🇷 Portuguese — `/pt`

Locale dictionaries are kept in:

```text
messages/
├── en.json
└── pt.json
```

The locale type is derived directly from the available dictionaries, keeping the supported locales type-safe.

New locales can be introduced by adding the corresponding dictionary and extending the application routes/content accordingly.

## Content Model

Each post is represented by a directory under:

```text
content/posts/
```

A post contains one MDX file per supported locale:

```text
content/posts/
└── example-post/
    ├── en.mdx
    ├── pt.mdx
    └── image.png
```

The frontmatter schema currently expects:

```yaml
---
title: "Post title"
spoiler: "Short description"
author: "André Benatti"
date: 2026-01-01
featuredImage: "/posts/example-post/image.png"
---
```

### Frontmatter

| Field | Required | Description |
| --- | --- | --- |
| `title` | Yes | Post title |
| `spoiler` | Yes | Short post description/preview |
| `author` | Yes | Post author |
| `date` | Yes | Publication date |
| `featuredImage` | No | Optional featured image |

Frontmatter is parsed with `gray-matter` and validated using Zod before being exposed to the application.

This keeps content errors from silently propagating into the UI.

## MDX

Posts are authored using MDX rather than plain Markdown.

That provides the simplicity of Markdown while allowing the application to render custom React components inside articles.

The MDX pipeline uses:

- `next-mdx-remote`
- `rehype-pretty-code`
- custom MDX components
- Dracula syntax-highlighting theme

Code blocks are processed through the MDX compilation pipeline and formatted with `rehype-pretty-code`.

GitHub-Flavored Markdown is also supported through `remark-gfm`.

## Reading Time

Each post receives an automatically calculated reading time.

The current implementation:

1. Trims the article content
2. Splits it into words
3. Assumes approximately **200 words per minute**
4. Rounds up to the next minute
5. Enforces a minimum of one minute

This calculation is intentionally simple and deterministic.

## Static Content & Assets

Post content is stored directly in the Git repository.

Because posts can contain images and other local assets, the project includes:

```text
scripts/sync-assets.mjs
```

Before development and production builds, the script:

1. Iterates over `content/posts`
2. Finds each post directory
3. Ignores `.mdx` files
4. Copies the remaining assets
5. Places them under the corresponding directory in `public/posts`

For example:

```text
content/posts/my-post/image.png
        │
        ▼
public/posts/my-post/image.png
```

This keeps article source files and their assets colocated while making those assets available through Next.js's public directory.

## Project Structure

```text
.
├── app/                    # Next.js App Router
├── components/             # Reusable UI and MDX components
├── content/
│   └── posts/              # MDX articles and post assets
├── lib/
│   ├── i18n.ts             # Locale dictionaries and locale types
│   ├── mdx.ts              # MDX compilation
│   ├── posts.ts            # Post filesystem/data access
│   ├── reading-time.ts     # Reading-time calculation
│   └── schema.ts           # Zod frontmatter schema
├── messages/
│   ├── en.json             # English translations
│   └── pt.json             # Portuguese translations
├── public/                 # Public/static assets
├── scripts/
│   └── sync-assets.mjs     # Copies post assets to public/
├── AGENTS.md               # Next.js development guidance
├── CLAUDE.md               # Claude Code project instructions
├── next.config.ts          # Next.js + MDX configuration
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── eslint.config.mjs
```

## Getting Started

### Requirements

- Node.js
- npm, pnpm, yarn, or Bun

### Installation

```bash
git clone https://github.com/dotpegaso/blog.git
cd blog
npm install
```

### Development

```bash
npm run dev
```

The development server runs at:

```text
http://localhost:3000
```

The `dev` script also synchronizes post assets before starting Next.js.

### Production Build

```bash
npm run build
```

The build process also runs the asset synchronization step before invoking `next build`.

### Start Production Server

```bash
npm run start
```

### Lint

```bash
npm run lint
```

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Synchronizes assets and starts the Next.js development server |
| `npm run build` | Synchronizes assets and creates a production build |
| `npm run start` | Starts the production Next.js server |
| `npm run lint` | Runs ESLint |
| `npm run sync-assets` | Copies post assets into `public/posts` |

## Creating a New Post

Create a new directory under:

```text
content/posts/
```

For example:

```text
content/posts/my-new-post/
├── en.mdx
├── pt.mdx
└── image.png
```

Add the required frontmatter to each localized MDX file:

```mdx
---
title: "My New Post"
spoiler: "A short description of the article."
author: "André Benatti"
date: 2026-09-22
---

# My New Post

Article content goes here.
```

If the article uses local images or other assets, keep them inside the same post directory. The asset synchronization script will make them available under `/posts/<slug>/`.

## Design Decisions

### Filesystem-based content

A database or headless CMS would introduce additional infrastructure for a personal technical blog. Keeping content in the repository provides:

- Git history
- Pull-request based editing
- Simple deployment
- No database maintenance
- Content portability
- A straightforward local development experience

### MDX instead of a CMS

MDX provides a good balance between writing ergonomics and frontend flexibility. Articles remain readable as Markdown while still allowing the application to provide custom components when needed.

### Runtime validation with Zod

Content is code-adjacent data, so validating frontmatter at the boundary prevents malformed metadata from leaking into rendering logic.

### Localized content directories

Keeping translations together under the same post slug makes the relationship between language versions explicit:

```text
my-post/
├── en.mdx
└── pt.mdx
```

This also keeps the content model independent from the UI implementation.

### Minimal abstraction

The project intentionally keeps the content layer small:

- `posts.ts` handles filesystem access
- `schema.ts` handles validation
- `mdx.ts` handles MDX compilation
- `i18n.ts` handles dictionaries/locales
- `reading-time.ts` handles reading-time calculation

Each module has a focused responsibility without introducing a larger content-management abstraction.

## Deployment

The repository is configured as a standard Next.js application and can be deployed to platforms that support Next.js.

The original project scaffold also documents deployment through Vercel.

Production deployment should execute:

```bash
npm run build
npm run start
```

For platforms that perform the build automatically, the `build` script already includes the post-asset synchronization step.

## License

This repository is a personal project. No explicit open-source license is currently declared in the repository.
