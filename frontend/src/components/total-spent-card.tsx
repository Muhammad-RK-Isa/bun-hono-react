import React from 'react'
import { useGetTotalSpent } from '~/lib/hooks/use-get-total-spent'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Skeleton } from './ui/skeleton'

export const TotalSpentCard = () => {
  const { data, isPending } = useGetTotalSpent()
  return (
    <Card>
      <CardHeader>
        <CardTitle>Total Spent</CardTitle>
        <CardDescription>The total amount spent by all expenses</CardDescription>
      </CardHeader>
      <CardContent>
        {isPending
          ? <Skeleton className='h-8 w-full'/> :
          <h2 className='text-2xl font-bold'>${data?.totalSpent}</h2>
        }
      </CardContent>
    </Card>
  )
}
