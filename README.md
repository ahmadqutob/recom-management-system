# ReCoM Management System

Private source repository for ReCoM business-management app.

## Deployment

Production infrastructure is provisioned on Railway (recom-web + PostgreSQL). This repository is being prepared for the ReCoM V9.4 Next.js source upload.

**Important:** This README is not the application. Do not consider the service deployed until the full V9.4 source is uploaded, a production build succeeds, and the health endpoint confirms database connectivity.

Never commit `.env`, `.env.local`, `node_modules`, `.next` or generated Prisma credentials.
