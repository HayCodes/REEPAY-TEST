# TRANSACTION PAGE FOR REEPAY-TEST

A simple transaction page that displays list of transactions (mock data) and allow filtering by status.

## SETUP INSTRUCTIONS

### PREREQUISITES

- Node.js 18+
- Yarn

## PREVIEW 
<div style="position: relative; padding-bottom: 62.57242178447277%; height: 0;"><iframe src="https://www.loom.com/embed/b417406d91e84f18918cf9d4fd1d9c51" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>


### INSTALL & RUN

```bash
# Install deps
yarn install

# Run dev server
yarn run dev or yarn dev
```

## MY APPROACH

- Built a Next.js page component: "/components/transaction/transactions.tsx
- Import the page component into my main page.tsx for rendering: "/app/(main)/page.tsx"
  In order to achieve a very good structure and clean codebase the following were utilized:
- Created a "CONSTANTS" folder that houses my mock array.
- Organized type assertions and type guards in a dedicated `types.ts` file for better type safety
- Stored reusable little helper functions in `utils.ts` under "LIB" folder.
- Shadcn Library was installed and used to get clean UI Components for the table, badges etc.

## AI TOOLS USED AND HOW

- CLAUDE.AI was used to:
  - Generate mock transaction dataset.
  - Generate helper functons for formatting date.
- OPENAI was used to, explain and get sample of how the README Content should be and format my README doc.

## WHAT I'LL IMPROVE WITH MORE TIME

- Search: search by Transaction ID.
- Pagination: handle larger datasets without showing everything at once.
- UI states: add a lightweight “empty state” illustration and optional loading skeleton.
