# 1. Використовуємо офіційний образ Node.js
FROM node:18-alpine AS builder

# 2. Встановлюємо робочу директорію
WORKDIR /app

# 3. Копіюємо package.json і встановлюємо залежності
COPY package.json package-lock.json ./
RUN npm install

# 4. Копіюємо код і змінні середовища
COPY . .
COPY .env .env

# 5. Збираємо фронтенд
RUN npm run build

# 6. Використовуємо Nginx для продакшену
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# 7. Відкриваємо порт
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
