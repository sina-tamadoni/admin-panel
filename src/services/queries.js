import { useQuery } from "@tanstack/react-query";
import api from "../configs/api";

const useGetProducts = (page, name) => {
  const queryFn = () => api.get(`products?page=${page}&limit=10&name=${name}`);
  const queryKey = ["products", page, name];
  return useQuery({ queryFn, queryKey });
};

export { useGetProducts };
