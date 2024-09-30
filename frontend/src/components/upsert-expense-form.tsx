import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import type { Expense, UpsertExpenseInput } from '@server/types'
import { upsertExpenseSchema } from '@server/lib/validations'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { Button } from '~/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover'
import { cn } from '~/lib/utils'
import { Calendar } from '~/components/ui/calendar'
import { toast } from 'sonner'

interface UpsertExpenseFormProps {
  onResolve: () => void
  data?: Expense
}

export const UpsertExpenseForm: React.FC<UpsertExpenseFormProps> = ({
  data,
  onResolve,
}) => {
  const [isCalOpen, setIsCalOpen] = React.useState(false)

  const form = useForm<UpsertExpenseInput>({
    resolver: zodResolver(upsertExpenseSchema),
    defaultValues: data ?? {
      title: undefined,
      amount: undefined,
      date: new Date(),
    },
  })

  const onSubmit = () => {
    toast.message(JSON.stringify(form.getValues()))
    onResolve()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Rent" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type='number'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>When did you spend?</FormLabel>
              <Popover open={isCalOpen} onOpenChange={setIsCalOpen}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={(v) => {
                      field.onChange(v)
                      setIsCalOpen(false)
                    }}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className='w-full'
          size="lg"
        >
          Done
        </Button>
      </form>
    </Form>
  )
}
