import { signIn, useSession } from '@hono/auth-js/react'
import { createFileRoute } from '@tanstack/react-router'
import { PlusIcon } from 'lucide-react'
import * as React from 'react'
import { ExpenseFormModal } from '~/components/expense-form-modal'
import { ExpensesTable } from '~/components/expenses-table'
import { TotalSpentCard } from '~/components/total-spent-card'
import { Button } from '~/components/ui/button'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  const [isOpen, setIsOpen] = React.useState(false)
  const { data: session } = useSession()

  return (
    <div className="mx-auto max-w-lg p-4 space-y-4">
      {!session?.user ? (
        <Button
          onClick={() => signIn('google')}
          className='w-full'
        >
          Sign in to continue
        </Button>
      ) : (
        <>
          <TotalSpentCard />
          <ExpensesTable />
          <ExpenseFormModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
          <Button
            onClick={() => setIsOpen(true)}
            className='w-full'
            size='lg'
          >
            <PlusIcon className='size-4 mr-2' />
            Add expense
          </Button>
        </>
      )}
    </div>
  )
}
