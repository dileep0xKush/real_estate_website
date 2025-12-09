# 🏠 Real Estate Backend

A **NestJS** backend application for a real estate platform, leveraging **Prisma ORM** for MongoDB database interactions. The project follows modern development practices, including environment configuration, linting, and modular architecture for scalability.

---

## **Table of Contents**

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Setup & Installation](#setup--installation)
- [Environment Configuration](#environment-configuration)
- [Database Setup](#database-setup)
- [Prisma ORM](#prisma-orm)
- [NestJS Module Structure](#nestjs-module-structure)
- [Creating Modules, Services, and Controllers](#creating-modules-services-and-controllers)
- [Linting & Formatting](#linting--formatting)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## **Project Overview**

This backend application provides a robust API for managing real estate data.
It is designed with scalability and maintainability in mind, using NestJS modular architecture and Prisma for type-safe database access.

---

## **Tech Stack**

- **Backend:** NestJS
- **Database:** MongoDB (Local or Atlas)
- **ORM:** Prisma
- **Language:** TypeScript
- **Linting & Formatting:** ESLint + Prettier
- **Authentication:** JWT

---

## **Prerequisites**

- Node.js (>=18.x recommended)
- npm or yarn
- MongoDB (local installation or Atlas cluster)
- Git

---

## **Setup & Installation**

1. Clone the repository:

```bash
git clone <repository_url>
```

2. Navigate to project directory:

```bash
cd real-estate-backend
```

3. Install dependencies:

```bash
npm install
```

---

## **Environment Configuration**

- Copy `.env.example` to `.env`.

- Configure the following variables:
  - `NODE_ENV` – Environment (development, production)
  - `PORT` – Application port
  - `DATABASE_URL` – MongoDB connection string
  - `JWT_SECRET` – Secret key for authentication

- `.env` supports **local MongoDB** or **MongoDB Atlas**.

---

## **Database Setup**

### **Local MongoDB**

- Ensure MongoDB is installed and running.
- The database and collections are automatically created on first write using Prisma.

### **MongoDB Atlas**

- Create a cluster and a database user.
- Use a standard connection string (avoid `+srv` if DNS issues occur).
- Prisma will handle collection creation automatically.

---

## **Prisma ORM**

- Prisma handles database schema, type-safe queries, and migrations.

- Steps include:
  1. Define models in `schema.prisma`
  2. Generate Prisma client
  3. Push schema to the database

- Recommended for **safe, maintainable database interactions**.

---

## **NestJS Module Structure**

- Global `PrismaService` for database access

- Feature modules (e.g., UserModule, PropertyModule)

- Controllers handle HTTP requests

- Services contain business logic

- Modular design ensures **scalability and maintainability**.

---

## **Creating Modules, Services, and Controllers**

- Use NestJS CLI to generate modules, services, and controllers:

```bash
nest g module <module-name>
nest g service <module-name>
nest g controller <module-name>
```

- Or generate resources with CRUD boilerplate:

```bash
nest g resource <resource-name>
```

---

## **Linting & Formatting**

- Check ESLint issues:

```bash
npm run lint
```

- Automatically fix formatting:

```bash
npm run lint -- --fix
```

- Prettier ensures consistent code formatting across the project.

---

## **Running the Application**

- Start in development mode:

```bash
npm run start:dev
```

- Default URL: `http://localhost:3000`
- Prisma connects to the database automatically.

---

## **Project Structure**

```
src/
├─ prisma/           # PrismaService and module
├─ user/             # User module, service, controller
├─ app.module.ts     # Root module
├─ main.ts           # Application bootstrap
prisma/
├─ schema.prisma     # Database schema
.env                 # Environment configuration
```

---

## **Contributing**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/xyz`)
3. Commit changes (`git commit -m "Add feature"`)
4. Push branch (`git push origin feature/xyz`)
5. Open a Pull Request

- Follow linting and formatting rules.

---

## **License**

This project is licensed under the **MIT License**.

npx prisma migrate dev --name init
npx prisma db push
