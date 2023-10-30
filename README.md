# "Bakery" demo for Digiloikka Oy

This project uses Next.js, Redux Toolkit, and TypeScript. The app was initialized using [these instructions](https://react-redux.js.org/introduction/getting-started). Tools used during development: Node.js v.18.18.1, Windows 11 Home (22H2), Visual Studio Code, and Git Bash for Windows.

## Usage

Launch the app locally with

```
npm run dev
```

### Code formatting

This project uses ESLint and Prettier and is configured to format code on save/paste when VSCode is used with recommended extensions. This _should_ work out-of-the box but is not verified on another machine.

### Troubleshoot

If you see the following error with e.g. `React.PropsWithChildren` or any other import 

```
Type annotations can only be used in TypeScript files.ts(8010)
```

disable the builtin extension _TypeScript and JavaScript Language Features_ - this does not disable ESLint.

## Requirements

This should preferably be in some project management system e.g. Jira.

### Main requiremenets

- Page header
- Landing page
- Order page
- Snackbars

### Tasks

#### Page header

- ~~A text "Ab Yritys Oy" on the left side of the section.~~
- **Dependency to Order page header**
  - Sync using Redux

#### Landing page

- A form input for "Customer Number" and a button "Continue"
- An error message if the customer number does not result to anything.
  - **Dependecy to Snackbar**

#### Order page

- Header: A text "Total: X XXX,XX €" (formatted total sum of the selected products using a space as a thousand separator and a comma as a decimal separator) and a button "Order" on the right side of the section.
  - The "Order" button must be disabled if the order status is "ordered".
- Product listing: Show 6 selectable product cards per page. Each card must contain the following: image, name, description, rating (stars X out of 5), price (format: XX,XX €), and a ✓ check mark indicating selection.
  - Additionally, show the following in the top right corner of the image:
    - If a product has an index divisible by 3, then show a 👍 thumbs up emoji.
    - If a product has an index divisible by 5, then show a 💖 sparkling heart emoji.
    - If a product has an index divisible by 3 and 5, then show a 😍 heart eyes emoji.
    - Else show a number (index + 1), for example #1 for the first card.

- A product listing pagination with buttons "Previous" and "Next" and a text indicating the total amount of products and pages (XX products, page X out of Y).
- An error message if the submission (place order) fails.
  - **Dependecy to Snackbar**
- A success message if the submission (place order) succeeds.
  - **Dependecy to Snackbar**
- Show the order status (not ordered or ordered) and the selected products in the same view. The customer cannot change the selected products or place a new order, if the order status is "ordered".

#### Snackbars

- Customer number not found
- Order placement succeeded
- Order placement failed
