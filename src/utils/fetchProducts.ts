interface Product {
  title: string;
  description: string;
  price: number;
  isNew: boolean;
  hasDiscount: boolean;
  discount: number;
  thumbnailUrl: string;
}

interface FetchProductsReturn {
  res: Product[] | null;
  error: boolean;
}

export const fetchProducts = async (): Promise<FetchProductsReturn> => {
  try {
    const response = await fetch('http://3.145.17.162:5173/products');

    if (!response.ok) {
      return {
        res: null,
        error: true,
      };
    }

    const productData: Product[] = await response.json();
    return {
      res: productData,
      error: false,
    };
  } catch (err) {
    console.error("Error: ", err);
    return {
      res: null,
      error: true,
    };
  }
};