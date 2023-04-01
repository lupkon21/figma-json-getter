#### BACKEND ####
FROM maven:3.8.4-openjdk-11-slim AS build-backend
WORKDIR /app
COPY ./backend .
RUN --mount=type=cache,target=/root/.m2/repository mvn -q clean package -DskipTests

#### FINAL STAGE ####
FROM adoptopenjdk/openjdk11:jre-11.0.12_7-alpine
RUN apk add nodejs npm
WORKDIR /app
COPY --from=build-backend /app/target/backend-0.0.1-SNAPSHOT.jar backend.jar

WORKDIR /app/frontend
COPY ./frontend .
RUN --mount=type=cache,target=/root/.npm npm ci

WORKDIR /app

EXPOSE 8080
EXPOSE 80

CMD ["sh", "-c", "java -jar backend.jar & cd frontend && npm run docker"]
