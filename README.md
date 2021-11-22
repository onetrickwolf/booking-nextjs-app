# Booking Next.js App

Simple booking system using Next.js

## Demo

### [http://ec2-54-197-30-158.compute-1.amazonaws.com:3000](http://ec2-54-197-30-158.compute-1.amazonaws.com:3000)

## Configuration

### Step 1. Set up a MySQL database

Set up a MySQL server either locally or with any cloud provider.

`npm run mysql` will run a local Dockerized version of MySQL.

### Step 2. Set up environment variables

`.env.local` is set up for the default MySQL Docker, change configuration if you are hosting MySQL elsewhere.

### Step 3. Install dependencies and run migration script

You'll need to run a migration to create the necessary table and data for the example.

```bash
npm install
npm run migrate && npm run migrate-rooms
```

### Step 4. Run Next.js in development mode

```bash
npm run dev
```

Your app should be up and running on [http://localhost:3000](http://localhost:3000)!
