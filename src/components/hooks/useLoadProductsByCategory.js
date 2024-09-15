import { useState, useEffect } from "react";

export default function useLoadProductsByCategory({ url, category }) {
  console.log(url);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setError("");
        setIsLoading(true);
        const res = await fetch(url);
        const data = await res.json();
        const nextData = data.filter(
          (product) => product?.category === category
        );
        setProducts(nextData);
      } catch (err) {
        console.log(err);
        setError(err?.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [url, category]);

  return { products, error, isLoading };
}
