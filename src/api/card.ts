import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { api } from "./axiosConfig";

const getCards = async () => {
    const response = await api.get('/photos?per_page=30');
    return response.data
  }

export const useGetCards = () => {
    return useQuery({ queryKey: ['photos'], queryFn: getCards })
}

export const useAddFavorite = () => {
  const queryClient = useQueryClient();

  return useMutation<{ message: string }, Error, string>({
    mutationFn: async (id: string) => {
      const res = await api.post('/favorites', { id });
      return res.data;
    },
    onSuccess: (_, id) => {
      queryClient.setQueryData<DataItemCard[]>(['photos'], (old) => {
        if (!old) return old;
        return old.map((p) =>
          p.id === id ? { ...p, isFavorite: !p.isFavorite } : p
        );
      });
    },
  });
};