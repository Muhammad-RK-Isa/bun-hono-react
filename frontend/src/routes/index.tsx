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

  return (
    <div className="mx-auto max-w-lg p-4 min-h-[calc(100vh-3.6rem)] flex flex-col gap-4">
      <TotalSpentCard />
      <ExpensesTable />
      <ExpenseFormModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Button
        onClick={() => setIsOpen(true)}
        className='bottom-4 w-full mt-auto'
        size='lg'
      >
        <PlusIcon className='size-4 mr-2' />
        Add expense
      </Button>
    </div>
  )
}
