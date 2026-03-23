# Badge Component – Design System Task

This project implements a reusable **Badge component** as part of a design system exercise.
The goal was to build a production-ready component, considering scalability, consistency, and user experience.

The component is documented in Storybook and tested with Cypress component testing.
<br />
<br />


## Tech Stack

- **React + TypeScript** - type-safe component development
- **Tailwind CSS** - utility-first styling with design token integration
- **Storybook** - component documentation with interactive playground
- **Cypress (Component Testing)** - Component test coverage
<br />


## Features

### 🎨 Token-driven design

- Color and radius values are defined as reusable design tokens
- Tailwind is extended to reflect these tokens as utility classes
- Ensures consistency and scalability across the system


### 🧩 Flexible component API

The Badge supports:
- **Color variants** (blue, purple, red, green, yellow, grey)
- **Radius variants** (square, circle, rounded)
- **Fill & outline states** (aligned with design specifications)
- **Optional icon support**


### 📚 Storybook documentation

The component is documented with:
- **Playground** - interactive control of all props
- **Default** - base component
- **Badge Variations** - overview of the system
- **Stories based on single dimensions**:
  - Color
  - Radius
  - Fill & Outline
  - Icon

This structure provides:
- Quick visual understanding
- Detailed exploration of each dimension


### ✔️ Cypress component tests

Tests cover:
- Default rendering
- All color variants
- All radius variants
- Supported fill/outline combinations
- Icon rendering when specified

The tests focus on:
- Public component behavior
- Meaningful assertions
<br />


## Running the project

### Install dependencies

```bash
npm install
```


### Run development server

```bash
npm run dev
```


### Run Storybook

```bash
npm run storybook
```


### Run Cypress (component tests)

```bash
npx cypress open
```

Then select **Component Testing**
<br />
<br />


## Approach

- **Token-based approach**
  For better scalability, aligns with design systems
- **Separation of concerns**
  Tokens → Tailwind config → Component mapping
- **Testing approach**
  Focus on supported variants and meaningful assertions
- **Storybook structure**
  Include exploration with Playground, and clarity with stories covering each component dimension
