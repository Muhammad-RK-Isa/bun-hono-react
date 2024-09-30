import React from 'react'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { authConfigManager, SessionProvider } from "@hono/auth-js/react"

import { routeTree } from './routeTree.gen'

import './index.css'

// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
})

// Set up a query client instance
const queryClient = new QueryClient()

authConfigManager.setConfig({
  baseUrl: 'http://localhost:8000',
  credentials: 'include',
});

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Get the root element
const rootElement = document.getElementById('app')!

// Render the app along with the router and the query client provider
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </SessionProvider>
  )
}
