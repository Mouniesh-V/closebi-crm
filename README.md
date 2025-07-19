# Installation & Setup

## Prerequisites

- Node.js (v16+ recommended)
- npm, pnpm, or yarn

## 1. Install Dependencies

This project uses **Tailwind CSS** and **shadcn/ui** for UI components.

Install all dependencies:

```bash
npm install
```

If you are setting up Tailwind or shadcn/ui in a new project, run:

```bash
npm install -D tailwindcss postcss autoprefixer @tailwindcss/vite tailwind-merge
npx tailwindcss init
```

## 2. Tailwind CSS Setup

- The main Tailwind CSS file is: `src/index.css`
- Tailwind is imported at the top of this file:
  ```css
  @import "tailwindcss";
  @import "tw-animate-css";
  ```
- Tailwind config file (e.g., `tailwind.config.js`) should be present in the project root. If missing, generate it with:
  ```bash
  npx tailwindcss init
  ```
- Tailwind is integrated in `vite.config.ts`:
  ```ts
  import tailwindcss from '@tailwindcss/vite'
  // ...
  plugins: [react(), tailwindcss()],
  ```

## 3. shadcn/ui Setup

This project uses [shadcn/ui](https://ui.shadcn.com/) for prebuilt, accessible React components styled with Tailwind.

- The project contains a `components.json` file, which is the shadcn/ui registry/config.
- Example config:
  ```json
  {
    "$schema": "https://ui.shadcn.com/schema.json",
    "style": "new-york",
    "tsx": true,
    "tailwind": {
      "css": "src/index.css",
      "baseColor": "slate",
      "cssVariables": true
    },
    "aliases": {
      "components": "@/components",
      "utils": "@/lib/utils",
      "ui": "@/components/ui",
      "lib": "@/lib",
      "hooks": "@/hooks"
    },
    "iconLibrary": "lucide"
  }
  ```
- To add new components from shadcn/ui, use the CLI:
  ```bash
  npx shadcn-ui@latest add button
  ```
  This will add the component to `src/components/ui/`.

## 4. Usage Example

Import and use UI components from `@/components/ui/` in your React code:

```tsx
import { Button } from "@/components/ui/button"

export default function Example() {
  return <Button>Click me</Button>
}
```

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
