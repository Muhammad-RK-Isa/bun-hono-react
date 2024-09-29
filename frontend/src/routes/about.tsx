import * as React from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutComponent,
})

function AboutComponent() {
  return (
    <div className="p-4 mx-auto max-w-lg">
      <h3>
        A project by&nbsp;
        <a
          href='https://github.com/muhammad-RK-Isa'
          target='_blank'
          className="hover:underline transition-all">
          Muhammad Isa
        </a>
      </h3>
    </div>
  )
}
