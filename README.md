# Prisma

SORAYUT NOOKAEW

## Required
- Git
- Docker & Docker Compose
- PostgreSQL
- Node.js
- Prisma

## Runnig
### Database
```
docker-compose up -d
```
### Schema
```
npx prisma init --datasiurce-porvider postgresql
npx prisma generate
npx prisma db push
npx prisma studio
```
## develop
```bash
npx prisma generate
```
