import { hc } from "hono/client"

import { type TApiRoutes } from "@server/app"

const client = hc<TApiRoutes>('/')

export const api = client.api
