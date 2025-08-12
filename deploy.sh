#!/bin/bash

# Build and deploy script for Portainer
echo "Building Catlow Yarns Gotland Wool Sale Landing Page..."

# Build the Docker image
docker build -t catlow-yarns-gotland-sale:latest .

# Stop existing container if running
docker stop catlow-yarns-gotland-sale || true

# Remove existing container
docker rm catlow-yarns-gotland-sale || true

# Run the new container
docker run -d \
  --name catlow-yarns-gotland-sale \
  -p 80:80 \
  --restart unless-stopped \
  catlow-yarns-gotland-sale:latest

echo "Deployment complete!"
echo "Your landing page is now running at http://localhost"