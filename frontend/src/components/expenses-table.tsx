import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { useGetExpenses } from '~/lib/hooks/use-get-expenses'
import { Skeleton } from './ui/skeleton'

export const ExpensesTable = () => {

  const { data, isPending } = useGetExpenses()

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Expenses
        </CardTitle>
        <CardDescription>
          An overview of your expenses
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[150px]'>Title</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className="text-right">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isPending
              ? Array.from({length: 3}).map((_, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Skeleton className='h-5 w-full'/>
                  </TableCell>
                  <TableCell>
                    <Skeleton className='h-5 w-full'/>
                  </TableCell>
                  <TableCell>
                    <Skeleton className='h-5 w-full'/>
                  </TableCell>
                </TableRow>
              ))
              : data?.expenses.map((exp) => (
                <TableRow key={exp.id}>
                  <TableCell className="font-medium">{exp.title}</TableCell>
                  <TableCell>${exp.amount}</TableCell>
                  <TableCell className="text-right">{exp.date}</TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell >Total</TableCell>
              <TableCell colSpan={2}>{
                isPending ? <Skeleton className='h-5 w-full'/> : `$${data?.total}`
              }</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </CardContent>
    </Card>
  )
}
