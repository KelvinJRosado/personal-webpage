FROM node:latest

# Set up environment
EXPOSE 3000

# Copy directory
COPY . /app
WORKDIR /app

# Install dependencies 
RUN npm install

# Start
CMD ["npm", "start"]