# Get the base image of Node version 22
FROM node:22

# Get the latest version of Playwright
FROM mcr.microsoft.com/playwright:v1.47.2-focal
 
# Set the work directory for the application
WORKDIR /app
 
# Set the environment path to node_modules/.bin
ENV PATH=/app/node_modules/.bin:$PATH

# COPY the needed files to the app folder in Docker image
COPY package*.json /app/
COPY tests/ /app/tests/
COPY page-objects/ /app/page-objects/
COPY playwright.config.ts /app/
COPY .env /app/
COPY . .do

# Get the needed libraries to run Playwright
RUN apt-get update && apt-get -y install libnss3 libatk-bridge2.0-0 libdrm-dev libxkbcommon-dev libgbm-dev libasound-dev libatspi2.0-0 libxshmfence-dev

# Install the dependencies in Node environment
RUN npm install
RUN npx playwright install --with-deps chromium

# Default command to run tests
CMD ["npm", "run", "test-all"]