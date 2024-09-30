import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { serveStatic } from 'hono/bun'
import { DrizzleAdapter } from '@auth/drizzle-adapter'
import GoogleProvider from '@auth/core/providers/google'
import { authHandler, initAuthConfig, verifyAuth } from '@hono/auth-js'

import { expensesRoute } from './routes/expenses'
import { db } from './db'

const app = new Hono()

app.use('*', logger())

app.use('*', initAuthConfig((c) => ({
  secret: process.env.AUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  callbacks: {
    redirect: () => process.env.AUTH_REDIRECT_URL ?? 'http://localhost:3000',
  },
  adapter: DrizzleAdapter(db)
})))

app.use('/api/auth/*', authHandler())
app.use('/api/expenses/*', verifyAuth())

const apiRoutes = app.basePath('/api')
  .route('/expenses', expensesRoute)

app.use('*', serveStatic({ root: './frontend/dist' }))
app.use('*', serveStatic({ path: './frontend/dist/index.html' }))

export default app

export type TApiRoutes = typeof apiRoutes
