# 1. Install dependencies stage
FROM node:18-alpine AS dependencies
WORKDIR /app

# package.json과 yarn.lock 복사 후 종속성 설치
COPY package.json yarn.lock ./
RUN yarn install

# 2. Build stage
FROM node:18-alpine AS builder
WORKDIR /app

# 프로젝트 파일 복사
COPY . .

# 종속성 설치
COPY --from=dependencies /app/node_modules ./node_modules

# Next.js 빌드
RUN yarn build

# 3. Production stage
FROM node:18-alpine AS runner
WORKDIR /app

# 필수 파일 복사
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/yarn.lock ./yarn.lock

# 프로덕션 종속성 설치
RUN yarn install --production

# 기본 실행 포트
EXPOSE 3000

# 프로덕션 실행
CMD ["yarn", "start"]
