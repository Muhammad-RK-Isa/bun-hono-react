import { Link } from '@tanstack/react-router'
import React from 'react'

export const Navbar = () => {
  return (
    <nav className='mx-auto flex items-center space-x-4 max-w-lg w-full p-4'>
      <Link
        to="/"
        activeProps={{
          className: "text-primary"
        }}
        activeOptions={{ exact: true }}
        className='text-muted-foreground hover:underline hover:text-primary transition-all'
      >
        Home
      </Link>
      <Link
        to="/about"
        activeProps={{
          className: "text-primary"
        }}
        className='text-muted-foreground hover:underline hover:text-primary transition-all'
      >
        About
      </Link>
    </nav>
  )
}
