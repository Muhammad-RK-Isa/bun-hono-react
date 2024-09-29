import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { serveStatic } from 'hono/bun'

import { expensesRoute } from './routes/expenses'

const app = new Hono()

app.use('*', logger())

const apiRoutes = app.basePath('/api')
  .route('/expenses', expensesRoute)

app.use('*', serveStatic({ root: './frontend/dist' }))
app.use('*', serveStatic({ path: './frontend/dist/index.html' }))

export default app
export type TApiRoutes = typeof apiRoutes
