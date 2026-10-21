# CERAS HRC

A six-page Jekyll website for CERAS HRC — Humanoid Robotics Club at Northwestern. Built on [Minima 2.5](https://github.com/jekyll/minima/tree/v2.5.1), with a custom dark visual identity and CERAS blue (`#1AAFFF`).

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
| `mission.md` | Mission, engineering objectives, and concept image |
| `progress.md` | Completed drummer build, photo, and alt text |
| `plan.md` | Plan page heading and introduction |
| `sponsor.md` | Sponsorship heading, school funding update, and corporate partnership announcement text |
| `join-us.md` | Discord page heading |
| `_data/projects.yml` | Project names, status, summaries, images, and links |
| `_data/progress.yml` | Completed development checks, simulator screenshot, and draft-arm explanation |
| `_data/plan.yml` | Timeline periods, phases, and planned work |
| `_data/contact.yml` | Discord invite, QR image, and sponsorship email |
| `_data/navigation.yml` | Navigation labels and links |
| `_config.yml` | Metadata and hosting path |

Text between the `---` lines at the top of a page is YAML front matter. The text below it is Markdown. Keep indentation when editing YAML and quote values containing colons.

Keep completed work in `_data/progress.yml`. Edit the timeline in `_data/plan.yml`; each entry has a period, status, phase title, and brief description. The Progress page shows completed work only, and the Plan page holds current and future milestones. The 2027–2028 and 2028–2029 entries follow the Year 2 and Year 3 roadmap on slide 13 of the supplied pitch.

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
- Home uses a generated humanoid study inspired by the supplied CERAS CAD design. Mission uses a generated illustration of physical teaching through drumming. Asset paths and exact prompts are documented in [_docs/image-prompts.md](_docs/image-prompts.md).
- Progress uses the supplied screenshot of the custom MuJoCo dynamics simulator (`assets/images/mujoco-dynamics-simulator.png`) and the actual drummer photo (`assets/images/drumming-system.jpg`) in matching-width image columns. The simulator screenshot stays uncropped and links to its full resolution. The section summarizes drumming simulations, dynamics analysis, and the software and mechanical teams' current work; the image caption identifies the draft arm. Edit this text and image metadata in `_data/progress.yml`. The drummer photo keeps its full portrait aspect ratio; its path and alt text are editable in `progress.md`. Home uses the same simulator screenshot with a basic-draft caption and a drummer-photo close-up. Decorative SVG robot artwork remains removed.
- The supplied pitch remains as an unused source asset at `assets/documents/ceras-pitch.pdf`.
- Metrics and project descriptions reflect the Fall 2026 pitch and should be updated as the team evolves.
- Shared colors and responsive styling live in `_sass/_ceras.scss`. The primary accent is exactly `#1AAFFF`.
- The supplied hand pictograph and stylized CERAS lettering are kept unchanged in `assets/brand/ceras-original.png`. `_includes/brand.html` renders the header identity, with the full “Humanoid Robotics Club” name on one line in club blue on desktop and stacked on phones. CSS crops the paper margins and renders the artwork in white on the dark background.
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
