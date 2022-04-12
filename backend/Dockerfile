# build stage
FROM maven:3.8.5-openjdk-11-slim as build
COPY src /home/app/src
COPY pom.xml /home/app
RUN mvn -f /home/app/pom.xml clean package

# production stage
FROM openjdk:8-alpine
COPY --from=build /home/app/target/backend-0.0.1-SNAPSHOT.jar /app/backend.jar
EXPOSE 8080

CMD ["java","-jar","app/backend.jar"]