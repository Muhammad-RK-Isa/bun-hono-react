import { useQuery } from "@tanstack/react-query";
import { api } from "~/lib/api";

async function getExpensesFn() {
  try {
    // await new Promise(r => setTimeout(r, 5000))
    const res = await api.expenses.$get()
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export function useGetExpenses() {
  const query = useQuery({
    queryKey: ['expenses'],
    queryFn: getExpensesFn,
  })
  return query
}