import { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../../../utils/fetchProducts";
import LoadingProduct from "./LoadingProduct";

interface Product {
  title: string;
  description: string;
  price: number;
  isNew: boolean;
  hasDiscount: boolean;
  discount: number;
  thumbnailUrl: string;
  id: string;
}

const ProductsGrid = () => {
  const [productsList, setProductsList] = useState<Product[] | null>(null);
  const [productError, setProductError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (gridRef.current) {
      const observer = new IntersectionObserver(async (entries) => {
        if (entries[0].isIntersecting) {
          observer.unobserve(gridRef.current);

          setIsLoading(true);
          try {
            const data = await fetchProducts();

            if (!data.error) {
              setProductsList(data.res);
              setProductError(false);
            } else {
              setProductError(true);
            }
          } catch (error) {
            setProductError(true);
            console.error(error)
          } finally {
            setTimeout(() => setIsLoading(false), 1000)
          }
        }
      }, { threshold: 0.5 });

      observer.observe(gridRef.current);
    }
  }, []);

  if (isLoading) return <div ref={gridRef} className="grid grid-cols-4 gap-8 mb-8"><LoadingProduct /></div>
  if (productError) return <h1 className="text-red-500 text-xl font-bold">Erro ao carregar produtos.</h1>;

  return (
    <div ref={gridRef} className="grid grid-cols-4 gap-8 mb-8">
      {productsList?.map(product => (
        <ProductCard {...product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductsGrid;
