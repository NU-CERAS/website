# CERAS HRC

A Jekyll website for CERAS HRC — Humanoid Robotics Club at Northwestern. Built on [Minima 2.5](https://github.com/jekyll/minima/tree/v2.5.1), with a custom dark visual identity and CERAS blue (`#1AAFFF`).

## Run locally

Requires Ruby 3.1 or newer and Bundler.

```sh
bundle install
bundle exec jekyll serve --livereload
```

Open <http://localhost:4000>. Jekyll rebuilds when content or styles change. Restart the server after changing `_config.yml`.

```sh
bundle exec jekyll build --strict_front_matter
```

The static site is generated in `_site/` (ignored by Git).

## Edit content

| File | What it controls |
| --- | --- |
| `index.md` | Home page heading lines, introduction, and concept image |
| `mission.md` | Mission sections and engineering objectives |
| `progress.md`, `plan.md` | Redirects to the homepage work timeline |
| `sponsor.md` | Sponsorship heading, school funding update, and corporate partnership announcement text |
| `join-us.md` | Discord page heading |
| `_data/work.yml` | Homepage timeline entries, newest first, with dates, copy, images, and captions |
| `_data/progress.yml` | Completed development checks, simulator screenshot, and draft-arm explanation |
| `_data/plan.yml` | Timeline periods, phases, and planned work |
| `_data/contact.yml` | Discord invite, QR image, and sponsorship email |
| `_data/navigation.yml` | Navigation labels and links |
| `_config.yml` | Metadata and hosting path |

Text between the `---` lines at the top of a page is YAML front matter. The text below it is Markdown. Keep indentation when editing YAML and quote values containing colons.

Edit homepage work updates in `_data/work.yml`, with newest entries first. The homepage “View our work” link jumps to this timeline. Former Progress and Plan URLs redirect to it; existing drummer and development anchors are preserved. Future ambitions are summarized on the Mission page.

## Connect joining and sponsorship

Edit `_data/contact.yml`:

```yaml
discord_url: ""                              # Your Discord invite URL
discord_qr: /assets/images/discord-qr.png      # QR image encoding that same URL
sponsor_email: sponsors@example.com          # Replace with the public club email
sponsor_email_placeholder: true              # Set false once the email is real
```

The Join us page has a centered heading and QR block. The current QR is clearly labeled as a placeholder and encodes `https://example.com/ceras-discord`. Replace the PNG with a QR for the real invite, and set `discord_url` to the same address. This makes the QR clickable and adds a direct join link for people browsing on their phones. Keep a white quiet zone around the QR so it scans correctly.

The Sponsor page centers the contact heading, funding update, and prominent email address. Its copy states that Northwestern currently provides financial support, corporate partnership discussions are active, and the partnership list will be announced soon. The email has a working `mailto:` link and uses the reserved `example.com` domain as filler. No pitch download appears on the site.

## Design and assets

- Minima is installed through the Gemfile and selected in `_config.yml`. `assets/main.scss` imports its Sass, then applies `_sass/_ceras.scss`. Templates in `_layouts` and `_includes` override the theme presentation.
- Barlow Condensed (bold headings) and Manrope (body text) are self-hosted in `assets/fonts/`; their OFL licenses are included. No third-party font requests or tracking scripts are needed.
- The earlier visual style is retained: oversized uppercase Barlow headings, a dark background, and blue section dividers. Consistent columns, section spacing, and concise copy keep the layout organized. The homepage title uses `headline_lines` in `index.md`; other page titles use `headline`.
- Home uses a transparent generated humanoid cutout with the blue hand emblem on its monitor face, inspired by the supplied CERAS CAD design. Mission presents matching text sections on music as the first application and the future general hardware platform for human–robot interaction research, followed by engineering objectives. Asset paths and exact prompts are documented in [_docs/image-prompts.md](_docs/image-prompts.md).
- Progress uses the supplied screenshot of the custom MuJoCo dynamics simulator (`assets/images/mujoco-dynamics-simulator.png`) and the actual drummer photo (`assets/images/drumming-system.jpg`) in matching-width image columns. The simulator screenshot stays uncropped and links to its full resolution. The section summarizes drumming simulations, dynamics analysis, and the software and mechanical teams' current work; the image caption identifies the draft arm. Edit this text and image metadata in `_data/progress.yml`. The drummer photo keeps its full portrait aspect ratio; its path and alt text are editable in `progress.md`. Home uses the same simulator screenshot with a basic-draft caption and a drummer-photo close-up. Decorative SVG robot artwork remains removed.
- The supplied pitch remains as an unused source asset at `assets/documents/ceras-pitch.pdf`.
- Metrics and project descriptions reflect the Fall 2026 pitch and should be updated as the team evolves.
- Shared colors and responsive styling live in `_sass/_ceras.scss`. The primary accent is exactly `#1AAFFF`.
- The blue hand and angular CERAS lettering are redrawn as scalable vectors from the supplied reference in `assets/brand/ceras-hand.svg` and `ceras-wordmark.svg`. The sticky top bar pairs the lettering with “Humanoid Robotics Club” on its right. A large, translucent hand stays fixed behind the scrolling content on every page; the hand also serves as the favicon. `_includes/hand.html` keeps decorative instances accessible; the header link has the full club name as its accessible label.
- The mobile menu supports keyboard controls, Escape, and a no-JavaScript fallback. Reduced-motion preferences are respected.

## Hosting

The repository uses GitHub Pages-compatible Jekyll and Minima versions. For branch-based GitHub Pages hosting, select the `main` branch and repository root in repository Settings → Pages after committing and pushing your changes.

Before deploying, set `url` to the public origin and `baseurl` to the path prefix:

```yaml
# Example for this repository's default GitHub Pages address:
url: "https://nu-ceras.github.io"
baseurl: "/website"
```

For a custom domain or a root-level site, use an empty `baseurl`. Internal links and assets use Jekyll's `relative_url` filter, and font paths are relative to the stylesheet, so both hosting modes work. The default blank values keep local preview straightforward.

The site has not been deployed automatically. Minima's MIT license is in `LICENSE-THEME.txt`; club content and imagery retain their original ownership.

## Add a homepage timeline update

Edit `_data/work.yml`. Copy an existing entry to the top for a newer update, give it a unique `id`, and update `period`, `title`, and `bullets`. Keep each bullet short. Add photos under `images`, each with a `path` pointing to `assets/images/`, descriptive `alt` text, and a `caption`. Copy a photo item to add more pictures. Omit `images` for a text-only entry. The vertical line, dots, spacing, and mobile layout are automatic.
