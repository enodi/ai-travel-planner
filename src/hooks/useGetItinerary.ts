import axios from "axios"
import { useQuery } from "@tanstack/react-query"

export function useGetItinerary(prompt: string) {
  const getItinerary = async () => {
    const url = "/api/llm"
    const response = await axios.get(url, { params: { prompt } });
    return response.data.data ?? null
  }

  const query = useQuery({
    queryKey: ["getItinerary"],
    queryFn: getItinerary,
    enabled: !!prompt
  })

  return query
}
