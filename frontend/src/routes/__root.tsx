import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { cn } from '~/lib/utils'
import { buttonVariants } from '~/components/ui/button'
import { Navbar } from '~/components/navbar'
import { Toaster } from 'sonner'
import { useMediaQuery } from '~/lib/hooks/use-media-query'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const isTablet = useMediaQuery("(min-width: 640px)")
  return (
    <main className='relative'>
      <header className='sticky top-0 z-10 bg-background/40 backdrop-blur-sm border-b'>
        <Navbar />
      </header>
      <Outlet />
      <Toaster
        richColors={true}
        position={isTablet ? "bottom-right" : "top-center"}
      />
      {/* <TanStackRouterDevtools position="bottom-right" /> */}
    </main>
  )
}
