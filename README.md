

# React Kitchen Sink

A small collection of reusable React components written in TypeScript and showcased with Storybook (React Storybook). Use this repo to develop, preview, and iterate on UI components in isolation.

## Get the code
Clone the repository and switch to the development branch:
```bash
git clone https://github.com/jasmitbajaria/Web-kitchenSink.git
git checkout development
```

## Prerequisites
- Node.js (14+)
- npm

## Quick start
1. Install dependencies
   npm install

2. Run Storybook (dev)
   npm run storybook

3. Build Storybook (static)
   npm run build-storybook

## Typical package scripts
- npm run storybook — start Storybook dev server (default port 6006)
- npm run build-storybook — build static Storybook site


## Adding a new component
1. Create component: src/components/MyComponent/MyComponent.tsx (use .tsx and typed props)
2. Add a story: src/components/MyComponent/MyComponent.stories.tsx using Storybook CSF
3. Add tests and types if needed, then run:
   
   npm run storybook

## Storybook tips
- Write stories in Component Story Format (CSF).
- Use controls and args to create interactive stories.
- Add addons in .storybook/main.js for docs, controls, accessibility, etc.


## Contributing
- Open issues or PRs.
- Run linters, formatters, tests and type checks before submitting.
- Keep commits focused and documented.
```