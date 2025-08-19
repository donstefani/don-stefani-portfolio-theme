# Tailwind CSS Setup for Shopify Theme

This theme now includes Tailwind CSS for utility-first styling.

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build Tailwind CSS for development (with watch mode):**
   ```bash
   npm run build:css
   ```

3. **Build Tailwind CSS for production (minified):**
   ```bash
   npm run build:css:prod
   ```

## File Structure

- `src/input.css` - Source CSS file with Tailwind directives
- `assets/tailwind.css` - Compiled Tailwind CSS (generated)
- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration

## Integration with Existing Theme

The Tailwind CSS is configured to work with your existing CSS variables:

- `--color-background` → `bg-background`
- `--color-foreground` → `text-foreground`
- `--font-primary--family` → `font-primary`
- `--page-width` → `max-w-page`
- `--page-margin` → `px-page-margin`
- `--style-border-radius-inputs` → `rounded-input`

## Usage Examples

```html
<!-- Using theme colors -->
<div class="bg-background text-foreground">
  <h1 class="font-primary text-2xl">Hello World</h1>
</div>

<!-- Using custom components -->
<button class="btn-primary">Click me</button>
<div class="card">Card content</div>
```

## Development Workflow

1. Start the Tailwind build process: `npm run build:css`
2. Edit your Liquid templates using Tailwind classes
3. The CSS will automatically rebuild when you save changes
4. For production, run `npm run build:css:prod` to minify the output
