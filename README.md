# Core Keeper Cooking App

### Passion project. **_Work In Progress_**

## Features

- Lists of ingredients by category.
- Full list of ingredients.

### Tech Stack

- NextJS
- Prisma
- Typescript
- Shadcn.UI
- Posthog

## Setting Up The Project

### Installation

To get started clone this repository and run the following command:

```
pnpm install
```

### Database

I'm using Vercel's built in Postgres Storage, you can use any other Postgres provider such as Supabase.
Make sure your `.env` file follows the naming from `.env.example`.

```prisma
datasource db {
  provider  = "postgresql"
  url       = env("POSTGRES_PRISMA_URL")
}
```

#### Local Database

I also included a docker-compose file to spin a postgres image to do work locally.

To use this run the following command on your terminal

```
docker-compose -f docker-compose.yml -p core-keeper-app up -d database
```

#### Migrating

Once you have either a remote or local database set up and environment variables set up you can run the following command to get the tables up.

```
pnpm migrate:dev
```

### Scraping

This project includes a scraping script that extracts up to date data using [Cysidus' Wiki](https://corekeeper.atma.gg/en/Core_Keeper_Wiki). **This is script is a WIP**

To run these files you can run the following command

```
pnpm scrape
```

Multiple files should be created under the same directory (`/scraping/`) named `*data*-out.json`. You can use these files to seed the Database.

#### Seeding

This project includes a seeding script.
After installing the dependencies and running the previous command you can run the following command to populate the DB.

```
pnpm db:seed
```

### Running Locally

Once dependencies are installed and Database has some data you can run the dev command to get a development enviroment running.

```
pnpm dev
```

## Analytics

This site uses [Posthog](https://posthog.com) for metrics and analytics and it's, by extension, [GDPR](https://gdpr.eu/) compliant. <i>See [Posthog's GDPR compliance docs](https://posthog.com/docs/privacy/gdpr-compliance)</i>.
<br/>
This service requires a public key in order to work, for obvious reasons it is not provided within this repo, but for contribution or local development it is not required.

## To-Do:

- [ ] Calculator feature.
- [ ] Make public API.
- [ ] Potions?
- [x] Integrate seed and scrape scripts together.
- [ ] Implement cookie disclaimer.
- [ ] Figure out a way to implement Cysidus' Wiki images for ingredients

## Contributing
