# Sprout Hugo Theme

A modern, performant Hugo theme designed for parenting blogs, family websites, and lifestyle content. Built with Tailwind CSS and Alpine.js for a beautiful, responsive experience.

## Features

- **Modern Design**: Clean, professional layout with smooth gradients and animations
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Build-Time Tailwind CSS**: Pre-compiled, tree-shaken CSS (~32KB vs ~300KB CDN)
- **Alpine.js**: Lightweight interactivity for navigation and UI components
- **Blog Ready**: Full blog support with categories, tags, and author profiles
- **SEO Optimized**: Schema.org structured data, Open Graph, and Twitter Cards
- **Performance Focused**: Lazy loading, optimized scroll handlers, CLS prevention
- **Customizable Homepage**: Data-driven sections (hero, features, resources, CTA)
- **Icon Library**: Built-in SVG icon partials

## Quick Start

### Option 1: Git Clone

```bash
cd your-hugo-site/themes
git clone https://github.com/manisuec/sprout-hugo-theme.git
```

### Option 2: Git Submodule

```bash
cd your-hugo-site
git submodule add https://github.com/manisuec/sprout-hugo-theme.git themes/sprout-hugo-theme
```

### Option 3: Hugo Module

Add to your `hugo.toml`:

```toml
[module]
  [[module.imports]]
    path = "github.com/manisuec/sprout-hugo-theme"
```

Then run:

```bash
hugo mod get -u
```

## Installation & Setup

### 1. Install Dependencies

The theme uses build-time Tailwind CSS for optimal performance. Install dependencies:

```bash
cd themes/sprout-hugo-theme
npm install
```

### 2. Build CSS

For development (watch mode):

```bash
npm run watch:css
```

For production:

```bash
npm run build:css
```

### 3. Configure Your Site

Add the theme to your site's `hugo.toml`:

```toml
theme = "sprout-hugo-theme"
```

## Configuration

### Full Configuration Example

```toml
baseURL = "https://example.com"
languageCode = "en-us"
title = "Your Site Title"
theme = "sprout-hugo-theme"

[pagination]
  pagerSize = 6

[params]
  description = "Your site description"
  logo = "/images/logo.png"

  [params.contact]
    email = "hello@example.com"
    address = "Your Address"

  [params.socials]
    facebook = "https://facebook.com/yourpage"
    twitter = "https://twitter.com/yourhandle"
    instagram = "https://instagram.com/yourprofile"
    pinterest = "https://pinterest.com/yourprofile"
    youtube = "https://youtube.com/@yourchannel"

  # Optional: Newsletter integration (Mailerlite)
  [params.mailerlite]
    apiKey = "your-api-key"
    groupId = "your-group-id"

[taxonomies]
  tag = "tags"
  category = "categories"

[markup]
  [markup.tableOfContents]
    endLevel = 3
    ordered = false
    startLevel = 2
  [markup.goldmark]
    [markup.goldmark.renderer]
      unsafe = true

[menu]
  [[menu.main]]
    name = "About"
    url = "/about"
    weight = 1

  [[menu.main]]
    name = "Blog"
    url = "/posts/"
    weight = 2
```

## Content Structure

### Homepage (`content/_index.md`)

The homepage is driven by front matter data:

```yaml
---
title: "Home"

hero:
  badge: "Your Badge Text"
  title:
    prefix: "Your Title"
    highlight: "Highlighted Part"
  description: "Your hero description"
  primaryCta: "Primary Button"
  secondaryCta: "Secondary Button"
  trustIndicators:
    - icon: "shield-check"
      text: "Expert Verified"
    - icon: "users"
      text: "Community Driven"
  image:
    main: "https://example.com/image.jpg"
    alt: "Image description"

features:
  headline: "Features Headline"
  subheadline: "Features description"
  items:
    - title: "Feature 1"
      description: "Feature description"
      icon: "baby"
    - title: "Feature 2"
      description: "Feature description"
      icon: "heart"

resources:
  headline: "Resources Headline"
  subheadline: "Resources description"
  ctaText: "View All"

cta:
  headline: "CTA Headline"
  subheadline: "CTA description"
---
```

### Blog Posts (`content/posts/`)

```yaml
---
title: "Your Post Title"
date: 2024-01-20
draft: false
description: "Post description for SEO and previews"
categories:
  - "Category Name"
tags:
  - tag1
  - tag2
titleImage: "https://example.com/featured-image.jpg"
author:
  name: "Author Name"
  role: "Author Role"
  avatar: "https://example.com/avatar.jpg"
  bio: "Author bio"
---

Your markdown content here...
```

### About Page (`content/about/_index.md`)

```yaml
---
title: "About Us"
layout: "list"
badge: "Our Story"
subtitle: "Your tagline here"
image: "https://example.com/about-image.jpg"

values:
  headline: "Our Values"
  items:
    - title: "Value 1"
      description: "Description"
      icon: "shield-check"
    - title: "Value 2"
      description: "Description"
      icon: "heart"

cta:
  headline: "Join Our Community"
  description: "CTA description"
  buttonText: "Subscribe"
---

Your about page content here...
```

## Available Icons

The theme includes these built-in SVG icons (use in front matter):

| Icon | Description |
|------|-------------|
| `baby` | Baby/child icon |
| `brain` | Brain/intelligence icon |
| `heart` | Heart/love icon |
| `heart-handshake` | Partnership/support icon |
| `shield-check` | Verified/secure icon |
| `stethoscope` | Medical/health icon |
| `users` | Community/people icon |
| `utensils-crossed` | Food/nutrition icon |
| `facebook` | Facebook social icon |
| `twitter` | Twitter/X social icon |
| `instagram` | Instagram social icon |
| `pinterest` | Pinterest social icon |
| `youtube` | YouTube social icon |
| `linkedin` | LinkedIn social icon |
| `whatsapp` | WhatsApp social icon |

## SEO Features

The theme includes comprehensive SEO support:

### Schema.org Structured Data
- **Organization**: Site-wide organization data
- **WebSite**: Search engine site information
- **BlogPosting**: Article structured data for posts
- **BreadcrumbList**: Navigation breadcrumbs

### Open Graph & Twitter Cards
- Dynamic og:title, og:description, og:image
- Twitter card support (summary_large_image)
- Article metadata (published time, author, tags)

## Performance Optimizations

The theme is optimized for Core Web Vitals:

- **Build-time CSS**: Tree-shaken Tailwind (~32KB vs ~300KB CDN)
- **Lazy Loading**: Below-fold images use `loading="lazy"`
- **Priority Hints**: Hero images use `fetchpriority="high"`
- **Scroll Optimization**: Throttled handlers with `requestAnimationFrame`
- **CLS Prevention**: Fixed navbar height, image aspect ratios
- **Resource Hints**: DNS prefetch and preconnect for external resources

## Development

### NPM Scripts

```bash
# Build minified CSS for production
npm run build:css

# Watch CSS changes during development
npm run watch:css

# Run both CSS watcher and Hugo server
npm run dev

# Full production build
npm run build
```

### Running the Example Site

```bash
# Start CSS watcher in one terminal
npm run watch:css

# Start Hugo server in another terminal
cd exampleSite
hugo server --themesDir ../.. --theme sprout-hugo-theme
```

Or use the combined command:

```bash
npm run dev
```

### Building for Production

```bash
# Build CSS and Hugo site
npm run build

# Or manually
npm run build:css
hugo --minify
```

## Customization

### Colors

Modify colors in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ecfdf5',
          // ... customize your primary color palette
          600: '#059669',
        },
        accent: {
          // ... customize your accent color palette
        }
      }
    }
  }
}
```

After changing colors, rebuild CSS:

```bash
npm run build:css
```

### Adding Custom Icons

Create new icon partials in `layouts/partials/icons/`:

```html
<!-- layouts/partials/icons/custom-icon.html -->
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
  <!-- Your SVG path -->
</svg>
```

Then use in front matter: `icon: "custom-icon"`

## Requirements

- Hugo Extended v0.112.0 or later
- Node.js 16+ (for building Tailwind CSS)
- npm or yarn

## File Structure

```
sprout-hugo-theme/
├── assets/
│   ├── css/
│   │   └── tailwind.css      # Tailwind input file
│   └── scss/
│       └── main.scss         # Custom SCSS styles
├── layouts/
│   ├── _default/
│   │   ├── baseof.html       # Base template
│   │   ├── single.html       # Single post template
│   │   └── list.html         # List template
│   ├── partials/
│   │   ├── icons/            # SVG icon partials
│   │   ├── schema/           # Schema.org templates
│   │   ├── navbar.html
│   │   ├── footer.html
│   │   ├── hero.html
│   │   └── opengraph.html
│   └── posts/
│       └── list.html         # Blog listing template
├── static/
│   └── css/
│       └── styles.css        # Generated Tailwind CSS
├── exampleSite/              # Demo site
├── package.json              # NPM scripts
└── tailwind.config.js        # Tailwind configuration
```

## License

MIT License - see [LICENSE](LICENSE) for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Credits

- Built with [Hugo](https://gohugo.io/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Interactivity by [Alpine.js](https://alpinejs.dev/)
- Icons from [Lucide](https://lucide.dev/)
