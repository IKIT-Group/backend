# Project Back-End
### Tech Stack
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=fff)
![NestJS](https://img.shields.io/badge/-NestJS-E0234E?logo=nestjs&logoColor=fff)
![Prisma](https://img.shields.io/badge/-Prisma-2D3748?logo=prisma&logoColor=fff)\
![Docker](https://img.shields.io/badge/-Docker-2496ED?logo=docker&logoColor=fff)
![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-4169E1?logo=postgresql&logoColor=fff)

### Information
Before installing, make sure you have following tools installed:\
`git`, `node`, `npm`, `docker`, `docker-compose`, `@nestjs/cli`, `prisma`\
We have swagger documentation, it is located on `/swagger` route

### Installation
1. Clone this repo
2. Setup `.env` file (check `.env.example`)
3. Run docker compose (`docker compose up -d`)
4. Run prisma migration (`npx prisma migrate dev --name init`)
5. Start the server (`npm start`)
