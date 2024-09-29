import React from 'react'
import { Button } from "~/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer"
import { useMediaQuery } from '~/lib/hooks/use-media-query'
import { UpsertExpenseForm } from './upsert-expense-form'
import { Expense } from '@server/types'

interface ExpenseFormModalProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  data?: Expense
}

export const ExpenseFormModal: React.FC<ExpenseFormModalProps> = ({
  isOpen,
  setIsOpen,
  data,
}) => {
  const isTablet = useMediaQuery("(min-width: 640px)")

  const title = data ? "Edit Expense" : "Add Expense"

  if (isTablet) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <UpsertExpenseForm onResolve={() => setIsOpen(false)} />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerContent>
        <div className="mx-auto w-full max-w-lg">
          <DrawerHeader>
            <DrawerTitle>{title}</DrawerTitle>
          </DrawerHeader>
          <div className="p-4">
            <UpsertExpenseForm onResolve={() => setIsOpen(false)} />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
