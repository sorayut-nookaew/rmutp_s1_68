# Prisma

Prawee Wongsa

## Required
- Git
- Docker & Docker Compose
- PostgreSQL
- Node.js
- Prisma
- VSCode
    - PostgreSQL extensions (Chris Kolkman)

## Running
### Database
```
docker-compose up -d
```
### Schema
```
npx prisma generate
npx prisma studio
```

## Develop
### First time
```bash
npx prisma init --datasource-provider postgresql
npx prisma generate
npx prisma db push
```

### Update schema
1. Update some schema
2. Run this command `npx prisma generate`
    2.1 `npx prisma studio` ชื่อตารางเปลี่ยน แต่ขึ้น popup ผิดพลาด
    2.2 connect db ชื่อตารางยังไม่ถูกเปลี่ยน
3. Run this command `npx prisma db push`
    3.1 `npx prisma studio` ชื่อตารางเปลี่ยน ไม่แต่ขึ้น error 
    3.2 connect db ชื่อตารางเปลี่ยนเป็นข้อมูลล่าสุด

### Normal
```bash
npx prisma generate
```