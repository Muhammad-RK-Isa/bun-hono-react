import React from 'react'
import { signIn, signOut, useSession } from '@hono/auth-js/react'

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { Button } from '~/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export const UserButton = () => {
  const { data: session } = useSession()

  if (!session?.user)
    return (
      <button
        onClick={() => signIn('google')}
        className='text-muted-foreground lg:hover:underline hover:text-primary transition-all ml-auto'
      >
        Sign in
      </button>
    )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className='size-7 ml-auto rounded-full'
        >
          <Avatar className='size-7'>
            {session.user.image ? (
              <AvatarImage src={session.user.image} />
            ) : (
              <AvatarFallback>{session.user.name?.charAt(0).toUpperCase()}</AvatarFallback>
            )}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" side='bottom' align='end'>
        <DropdownMenuLabel>
          <div className='flex flex-col'>
            <span className='font-semibold text-sm'>{session.user.name}</span>
            <span className='text-xs text-muted-foreground'>{session.user.email}</span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
