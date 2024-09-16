import { useState, useEffect } from "react";

export default function useLoadProducts() {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setError("");
        setIsLoading(true);
        const res = await fetch("/menu.json");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.log(err);
        setError(err?.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return { products, error, isLoading };
}
