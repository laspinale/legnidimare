# Legni di Mare portfolio

Portfolio site for Paolo Marzullo's Legni di Mare resin and sea-wood creations.
It is adapted from the generic Next.js portfolio template with shadcn/ui.

Source content and imagery are based on https://www.legnidimare.it.

## Development

```bash
pnpm install
pnpm lint
pnpm typecheck
pnpm build
```

## Adding components

To add components to your app, run the following command:

```bash
npx shadcn@latest add button
```

This will place the ui components in the `components` directory.

## Using components

To use the components in your app, import them as follows:

```tsx
import { Button } from "@/components/ui/button";
```
