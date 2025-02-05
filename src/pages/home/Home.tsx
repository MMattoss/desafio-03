import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

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

interface ProductList {
  data: Product[];
}

const Home = () => {
  const [productsList, setProductsList] = useState<ProductList | []>([]);

  async function getProducts(): Promise<ProductList> {
    try {
      const response = await fetch("http://3.145.17.162:5173/products");
      if (!response.ok) {
        throw new Error("Erro ao buscar os produtos");
      }
      const data: ProductList = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      console.error(error);
      return { data: [] };
    }
  }

  useEffect(() => {
    async function fetchData() {
      const products = await getProducts();
      setProductsList(products);
    }
    fetchData();
  }, []);

  return (
    <>
      <section id="hero" style={{ backgroundImage: `url(https://furniro-images.s3.us-east-2.amazonaws.com/homeImages/hero-bg.png)` }} className='bg-no-repeat bg-cover bg-center h-[712px] flex items-center justify-end pr-[18px]'>
        <div className='w-[643px] h-[443px] bg-color-primary-light pt-16 pl-10 pr-11 pb-9 rounded-lg'>
          <h3 className='text-base font-semibold text-dark-grey tracking-widest '>New Arrival</h3>
          <h1 className='text-[52px] text-color-primary font-bold leading-tight mb-6'>Discover Our <br /> New Collection</h1>
          <p className='text-lg font-medium text-dark-grey leading-tight mb-11'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br /> elit tellus, luctus nec ullamcorper mattis.</p>
          <button className='w-[222px] h-[74px] bg-color-primary uppercase font-bold text-white'>Buy now</button>
        </div>
      </section>

      <section id='categories' className='mt-14 pl-[131px] pr-32 '>
        <header className='mb-16'>
          <h1 className='text-[34px] text-dark-grey font-bold text-center'>Browse The Range</h1>
          <p className='text-xl text-semi-dark-grey font-normal text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </header>

        <div className='flex gap-5'>
          <div>
            <img src="https://furniro-images.s3.us-east-2.amazonaws.com/homeImages/category-dining.png" alt="Dining table" className='mb-[30px] rounded'/>
            <h3 className='text-dark-grey text-2xl font-semibold text-center'>Dining</h3>
          </div>
          <div>
            <img src="https://furniro-images.s3.us-east-2.amazonaws.com/homeImages/category-living-room.png" alt="Living room" className='mb-[30px] rounded' />
            <h3 className='text-dark-grey text-2xl font-semibold text-center'>Living</h3>
          </div>
          <div>
            <img src="https://furniro-images.s3.us-east-2.amazonaws.com/homeImages/category-bathroom.png" alt="Bathroom" className='mb-[30px] rounded' />
            <h3 className='text-dark-grey text-2xl font-semibold text-center'>Bedroom</h3>
          </div>

        </div>
      </section>

      <section id='products' className='mt-14 px-[102px] text-center mb-16'>
        <h3 className='text-[40px] text-dark-grey font-bold mb-8'>Our Products</h3>

        <div className="grid grid-cols-4 gap-8 mb-8">
          {productsList.map((product: Product) => <ProductCard key={product.id} {...product} />)}
        </div>

        <button className="bg-white w-[245px] h-12 border border-color-primary text-color-primary text-center text-base font-semibold ">Show more</button>
      </section>
    </>
  )
}

export default Home;