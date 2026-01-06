# TRANSACTION PAGE FOR REEPAY-TEST

A simple transaction page that displays list of transactions (mock data) and allow filtering by status.

## SETUP INSTRUCTIONS

### PREREQUISITES

- Node.js 18+
- Yarn

## PREVIEW 

## ALL TRANSACTIONS (DEFAULT)
<img width="832" height="965" alt="Screenshot 2026-01-06 at 23 01 50" src="https://github.com/user-attachments/assets/e2b366b3-fd73-498f-b2a6-a42b326f58dc" />

## FILTERED TRANSACTIONS

#### SUCCESS
<img width="835" height="969" alt="Screenshot 2026-01-06 at 23 02 05" src="https://github.com/user-attachments/assets/a87ab842-0a59-4e37-bb7b-49406612256f" />

#### FAILED
<img width="832" height="960" alt="Screenshot 2026-01-06 at 23 02 16" src="https://github.com/user-attachments/assets/7eb6d55e-165d-4e32-8b97-7b5a8d55d55e" />

#### PENDING
<img width="832" height="962" alt="Screenshot 2026-01-06 at 23 02 27" src="https://github.com/user-attachments/assets/d8840b56-f719-450c-9300-962833bc5365" />


### INSTALL & RUN

```bash
# Install deps
yarn install

# Run dev server
yarn run dev
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
