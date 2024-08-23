# Core Keeper Cooking App

### Passion project. **_Work In Progress_**

## Features

- Lists of ingredients by category.
- Full list of ingredients.

### Tech Stack

- NextJS
- Prisma
- Typescript

## Setting Up The Project

### Installation

To get started clone this repository and run the following command:

`pnpm install`

### Database

I'm using Vercel's built in Postgres Storage, you can use any other Postgres provider such as Supabase.
Make sure your `.env` file follows the naming from `.env.example`. If you run with a different Database provider or run your own make sure to change the variable invocation on `schema.prisma`

```
datasource db {
  provider  = "postgresql"
  url       = env("POSTGRES_PRISMA_URL")
  directUrl = env("POSTGRES_URL_NON_POOLING")
}
```

This project includes a seeding script for a basic (and outdated) dataset.
After installing the dependencies you can run the following command to populate the DB

`pnpm db:seed`

### Scraping

I aim to get a scraping/parsing script to get more accurate and up to date data using [RussDev's CoreKeepersWorkshop](https://github.com/RussDev7/CoreKeepersWorkshop) JSON output files.
Currently there's a parsing script in `/scraping/index.ts` but it needs more work, such as online scraping to avoid handling files and integration with the DB seed script.

### Running Locally

Once dependencies are installed and Database has some data you can run the dev command to get a development enviroment running.

`pnpm dev`

## To-Do:

- [ ] Calculator feature.
- [ ] Make public API.
- [ ] Potions support?
