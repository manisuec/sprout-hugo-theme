# Sprout Hugo Theme

A modern, clean Hugo theme designed for parenting blogs, family websites, and lifestyle content. Built with Tailwind CSS and Alpine.js for a beautiful, responsive experience.

## Features

- **Modern Design**: Clean, professional layout with smooth gradients and animations
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Tailwind CSS**: Utility-first styling via CDN (no build step required)
- **Alpine.js**: Lightweight interactivity for navigation and UI components
- **Blog Ready**: Full blog support with categories, tags, and author profiles
- **SEO Optimized**: Proper meta tags, RSS feeds, and XML sitemaps
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

## Configuration

Add the theme to your site's `hugo.toml`:

```toml
theme = "sprout-hugo-theme"
```

### Full Configuration Example

```toml
baseURL = "https://example.com"
languageCode = "en-us"
title = "Your Site Title"
theme = "sprout-hugo-theme"

[params]
  description = "Your site description"

  [params.contact]
    email = "hello@example.com"
    address = "Your Address"

  [params.socials]
    facebook = "https://facebook.com/yourpage"
    twitter = "https://twitter.com/yourhandle"
    instagram = "https://instagram.com/yourprofile"
    linkedin = "https://linkedin.com/in/yourprofile"

[menu]
  [[menu.main]]
    name = "About"
    url = "#about"
    weight = 1

  [[menu.main]]
    name = "Posts"
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

resources:
  headline: "Resources Headline"
  subheadline: "Resources description"
  ctaText: "View All"
  items:
    - title: "Article Title"
      description: "Article description"
      imageUrl: "https://example.com/image.jpg"
      readTime: "5 min read"

cta:
  headline: "CTA Headline"
  subheadline: "CTA description"
  primaryCta: "Get Started"
  secondaryCta: "Learn More"
---
```

### Blog Posts (`content/posts/`)

```yaml
---
title: "Your Post Title"
date: 2024-01-20
draft: false
description: "Post description"
category: "Category Name"
image: "https://example.com/featured-image.jpg"
tags:
  - tag1
  - tag2
author:
  name: "Author Name"
  role: "Author Role"
  avatar: "https://example.com/avatar.jpg"
  bio: "Author bio"
---

Your markdown content here...
```

## Available Icons

The theme includes these built-in SVG icons (use in front matter):

- `baby` - Baby icon
- `brain` - Brain/intelligence icon
- `heart` - Heart icon
- `heart-handshake` - Partnership icon
- `shield-check` - Verified/secure icon
- `stethoscope` - Medical/health icon
- `users` - Community icon
- `users-2` - People icon
- `utensils-crossed` - Food/nutrition icon
- `facebook` - Facebook social icon
- `twitter` - Twitter social icon
- `instagram` - Instagram social icon
- `linkedin` - LinkedIn social icon

## Customization

### Colors

The theme uses Tailwind CSS with custom color palettes:

- **Primary**: Green (emerald tones)
- **Accent**: Orange

To customize, modify the Tailwind config in `layouts/_default/baseof.html`.

### Adding Custom Icons

Create new icon partials in `layouts/partials/icons/`:

```html
<!-- layouts/partials/icons/custom-icon.html -->
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <!-- Your SVG path -->
</svg>
```

Then use in front matter: `icon: "custom-icon"`

## Development

### Running the Example Site

```bash
cd exampleSite
hugo server --themesDir ../..
```

### Building for Production

```bash
hugo --minify
```

## Requirements

- Hugo Extended v0.112.0 or later

## License

MIT License - see [LICENSE](LICENSE) for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
