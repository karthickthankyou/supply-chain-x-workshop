# Boilerplate Project README

## Overview

Welcome to the Full-Stack Boilerplate Project! This project is a comprehensive template designed to jumpstart your development with a powerful and versatile tech stack. It combines the best of Next.js, NestJS, Prisma, and various UI and form libraries, providing a solid foundation for building robust, modern web applications.

## Key Features

- **Next.js**: A cutting-edge version 14 using the latest React 18 features.
- **NextAuth**: The authentication system for Next.js applications.
- **Dark Mode Toggle**: Built-in support for light and dark themes, enhancing the user interface.
- **NestJS**: A progressive Node.js framework for scalable server-side applications.
- **GraphQL & REST API Support**: Flexibility to use GraphQL or REST APIs or both according to your project needs.
- **Prisma**: Modern ORM for Node.js and TypeScript.
- **UI Libraries**: Integrated Shadcn UI and Tailwind CSS for crafting beautiful, responsive user interfaces.
- **Form Handling**: Utilizes Zod for schema validation and React Hook Form for efficient form management.
- **GraphQL Codegen**: Streamlines your workflow by automatically generating code from your GraphQL schema.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Docker

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/karthickthankyou/supply-chain-x-workshop
   ```

2. **Install the dependencies**

   ```bash
   pnpm install
   ```

3. **Setup .env variables**

   ```bash
   # Rename all .env.example to .env and populate the values.
   ```

4. **Build applications and libraries**
   ```bash
   pnpm build

   pnpm nx connect
   ```
5. **Run development servers**

   ```
   cd apps/api
   docker compose up -d
   pnpm prisma migrate dev
   pnpm dev

   cd apps/web
   pnpm dev
   ```
