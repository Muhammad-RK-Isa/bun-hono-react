import {
  useQuery,
} from "@tanstack/react-query"
import { api } from "~/lib/api"

async function getTotalSpentFn() {
  try {
    const res = await api.expenses["total-spent"].$get()
    const data = res.json()
    return data
  } catch (error) {
    throw error
  }
}

export function useGetTotalSpent() {
  return useQuery({
    queryKey: ['get-total-spent'],
    queryFn: getTotalSpentFn,
  })
}