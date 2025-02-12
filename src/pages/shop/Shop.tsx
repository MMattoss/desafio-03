import Banner from "../../components/Banner";
import filterIcon from "../../assets/filter-icon.svg";
import gridIcon from "../../assets/grid-filter-icon.svg";
import listIcon from "../../assets/list-filter-icon.svg";
import { useEffect, useState } from "react";
import { fetchProducts, Product } from "../../utils/fetchProducts";
import ProductCard from "../../components/ProductCard";
import Pagination from "./components/Pagination";
import BenefitsBanner from "../../components/BenefitsBanner";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "../../store/cart/cartSlice"

const Shop = () => {
	const [products, setProducts] = useState<Product[] | null>([]);
	const [currPage, setCurrPage] = useState(1);
	const [productsPerPage, setProductsPerPage] = useState(16);
	const lastProductIndex = currPage * productsPerPage;
	const firstProductIndex = lastProductIndex - productsPerPage;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchProducts();
				setProducts(data.res);
			} catch (err) {
				console.error(err);
			}
		};
		fetchData();
	}, [productsPerPage]);

	const currentProducts = products?.slice(
		firstProductIndex,
		lastProductIndex
	);

	return (
		<>
			<Banner route="shop" />
			{/* Filters */}
			<div className="bg-[#F9F1E7] w-screen flex justify-between px-24 py-6">
				{/* Left */}
				<div className="flex items-center gap-6">
					<div className="flex items-center gap-3">
						<img src={filterIcon} alt="Filter" />
						<span className="text-xl">Filter</span>
					</div>

					<img src={gridIcon} alt="Grid view" />
					<img src={listIcon} alt="List view" />

					<div className="divider divider-horizontal m-0"></div>

					<p className="text-base">
						Showing 1 - 16 of {products?.length} results
					</p>
				</div>

				{/* Right */}
				<div className="flex items-center justify-center gap-6">
					<div className="flex items-center gap-3">
						<span className="text-xl">Show</span>
						<div className="px-4 py-3 w- bg-white text-xl text-gray-400 flex items-center justify-center">
							<input type="number" />
						</div>
					</div>

					<div className="flex items-center gap-3">
						<span className="text-xl">Sort by</span>
						<div className="px-4 py-3 bg-white text-xl text-gray-400 flex items-center justify-center">
							Default
						</div>
					</div>
				</div>
			</div>

			<section className="px-24 mt-16 mb-20" id="productsList">
				<div className="grid grid-cols-4 gap-8 mb-8">
					{currentProducts?.map((product, index) => (
						<ProductCard {...product} key={index} onClick/>
					))}
				</div>
				<Pagination
					totalProducts={products?.length}
					productsPerPage={productsPerPage}
					setCurrPage={setCurrPage}
					currPage={currPage}
				/>
			</section>

			<BenefitsBanner />
		</>
	);
};

export default Shop;
