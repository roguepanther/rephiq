# Security notes (pre-deployment)

## Supabase

- **Row Level Security (RLS)** must be enabled on every table that holds user data (including `waitlist_emails`). Define policies that match how the app accesses data.
- Waitlist writes go through `POST /api/waitlist` using the **anon (or publishable) key on the server**. That key is still public in `NEXT_PUBLIC_*`; security relies on **RLS**, not on hiding the anon key.
- **Never** put the **service_role** key in `NEXT_PUBLIC_*` or import it from client components. If you add `SUPABASE_SERVICE_ROLE_KEY`, keep it server-only and use it only in Route Handlers or other server code.
- Rotate keys in the Supabase dashboard if a key was ever committed, logged, or shared.

## Environment variables

- `NEXT_PUBLIC_*` values are embedded in the client bundle. Only use that prefix for data that is safe to expose (e.g. Supabase project URL, anon/publishable key).
- Set the same variables in the Vercel project **Settings → Environment Variables** for Production (and Preview if needed).

## Optional hardening

- Add rate limiting or bot protection (e.g. Vercel Firewall, Turnstile) on `POST /api/waitlist` if abuse becomes an issue.
- Prefer a service-role insert from the API route with RLS denying direct anon access to `waitlist_emails` if you want the smallest browser-facing surface.
