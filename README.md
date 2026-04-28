# TBT Contact Directory

A contact directory widget built with Vue 3, TypeScript, and Tailwind CSS. Displays a list of contacts with a detail card view, switching between a dropdown on mobile and a sidebar list on desktop.

## Tech Stack

- [Vue 3](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)

## Prerequisites

- Node.js 18+
- npm

## Setup

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be available at `http://localhost:5173`.

## Scripts

| Command            | Description                          |
| ------------------ | ------------------------------------ |
| `npm run dev`      | Start development server             |
| `npm run build`    | Type-check and build for production  |
| `npm run preview`  | Preview the production build locally |
| `npm run lint`     | Lint with ESLint                     |
| `npm run lint:fix` | Auto-fix lint issues                 |
| `npm run format`   | Format source files with Prettier    |

## Project Structure

```
src/
├── components/
│   ├── ContactCard.vue   # Detail view for a selected contact
│   ├── ContactList.vue   # Sidebar list (desktop)
│   └── Select.vue        # Dropdown selector (mobile)
├── data/
│   └── Contact.ts        # Contact type definition and data
├── App.vue
└── main.ts
```

## Adding Contacts

Edit [src/data/Contact.ts](src/data/Contact.ts) and add an entry to the `contacts` array:

```ts
{
  id: "unique-id",
  name: "Full Name",
  role: "Job Title",
  email: "email@example.com",
  phone: "+44 20 0000 0000",
  address: "Street, City, Postcode",
  initials: "FN",
  department: "Department",
}
```
