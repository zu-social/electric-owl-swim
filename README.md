# Catlow Yarns - Gotland Wool End of Summer Sale

A beautiful landing page for Catlow Yarns' Gotland Wool end of Summer Sale, built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Deploy to Portainer

### Option 1: Using Docker Compose (Recommended)

1. **Clone this repository:**
   ```bash
   git clone https://github.com/yourusername/catlow-yarns-gotland-sale.git
   cd catlow-yarns-gotland-sale
   ```

2. **Deploy via Portainer:**
   - Go to your Portainer dashboard
   - Navigate to "Stacks" → "Add Stack"
   - Choose "Git repository" as build method
   - Enter your GitHub repository URL
   - Set the Compose path to `docker-compose.yml`
   - Click "Deploy the stack"

### Option 2: Manual Docker Build

```bash
# Build the image
docker build -t catlow-yarns-gotland-sale:latest .

# Run the container
docker run -d \
  --name catlow-yarns-gotland-sale \
  -p 80:80 \
  --restart unless-stopped \
  catlow-yarns-gotland-sale:latest
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
├── src/
│   ├── components/          # Reusable components
│   ├── pages/              # Page components
│   ├── hooks/              # Custom hooks
│   └── utils/              # Utility functions
├── Dockerfile              # Production Docker configuration
├── docker-compose.yml      # Docker Compose for deployment
├── nginx.conf             # Nginx configuration
└── README.md              # This file
```

## 🌐 Environment Variables

No environment variables are required for basic deployment. The app runs on port 80 by default.

## 🔧 Customization

- Update product details in `src/components/ProductShowcase.tsx`
- Modify colors and branding in Tailwind config
- Update sale end date in `src/components/SaleCountdown.tsx`

## 📱 Responsive Design

The landing page is fully responsive and works on all device sizes.

## 🚀 Deployment Checklist

- [ ] Fork/clone this repository
- [ ] Update product details and branding
- [ ] Push to your GitHub repository
- [ ] Deploy via Portainer using Docker Compose
- [ ] Update DNS settings if using custom domain