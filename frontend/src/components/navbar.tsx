import { Link } from '@tanstack/react-router'
import React from 'react'
import { UserButton } from '~/components/user-button'

export const Navbar = () => {
  return (
    <nav className='mx-auto flex items-center gap-4 max-w-lg w-full p-4'>
      <Link
        to="/"
        activeProps={{
          className: "text-primary"
        }}
        activeOptions={{ exact: true }}
        className='text-muted-foreground lg:hover:underline hover:text-primary transition-all'
      >
        Home
      </Link>
      <Link
        to="/about"
        activeProps={{
          className: "text-primary"
        }}
        className='text-muted-foreground lg:hover:underline hover:text-primary transition-all'
      >
        About
      </Link>
      <Link
        to="/settings"
        activeProps={{
          className: "text-primary"
        }}
        className='text-muted-foreground lg:hover:underline hover:text-primary transition-all'
      >
        Settings
      </Link>
      <UserButton />
    </nav>
  )
}
