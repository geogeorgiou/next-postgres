# next-postgres

<div align="center">
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Docker-black?style=for-the-badge&logoColor=white&logo=docker&color=2496ED" alt="docker" />
    <img src="https://img.shields.io/badge/-Postgres-black?style=for-the-badge&logoColor=white&logo=Postgres&color=47A248" alt="Postgres" />
  </div>

  <h3 align="center">Docker Crash Course</h3>

   <div align="center">
     This is a sample project to integrate NextJS with Postgres!
    </div>
</div>

<br />

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🤸 [Quick Start](#quick-start)

<br />

## <a name="introduction">🤖 Introduction</a>

Learn the process of containerizing NextJS along with Postgres.

This repository contains latest Docker features, including `docker compose watch` along with fresh and perhaps bleeding edge tech from the `NextJS App Router` paradigm.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Docker
- Next.js - 14.1.0
- Postgres - 15
- Tailwind CSS

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js - 18.17.0](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [pnpm - 8.14.3](https://pnpm.io/)
- [Docker - 4.26.1](https://www.docker.com/products/docker-desktop/)

**Installation**

Install the project dependencies using npm:

```bash
pnpm i
```

Spin up docker daemon and run:

```bash
docker compose up
```

Apply necessary migrations:

```bash
pnpm db:migrate
```

**Running the Project 🎉🎉🎉**

```bash
pnpm run dev
```
