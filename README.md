# ReCoM Management System — V9.4 cloud deployment

This private repository contains the ReCoM Next.js application and its Prisma/PostgreSQL schema.

## Cloud build

The source is bundled as Brotli-encoded text under `payload/` for this initial automated upload. The `postinstall` script runs `unpack.mjs` to reconstruct the 31 application source files, then runs `prisma generate`.

**Deployment environment:** Railway project `ReCoM Management System`, service `recom-web`, plus `Postgres`.

**Status:** App source uploaded, but Railway cannot connect to this private repository until the Railway GitHub App is granted access. On GitHub, go to Settings → Applications → Installed GitHub Apps → Railway → Configure → Repository access and authorize `ahmadqutob/recom-management-system`.

Do not commit real `.env` files or credentials. This build excludes the original header/footer image binaries and the legacy V8 HTML, which still need migration before full production use.

The next step is attaching `ahmadqutob/recom-management-system` to `recom-web` at Railway, building, and verifying `/api/health`. Do not consider production ready until those pass.
