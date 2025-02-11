import { dbApiBaseUrl } from "./baseUrls";

export interface Product {
	title: string;
	description: string;
	price: number;
	isNew: boolean;
	hasDiscount: boolean;
	discount: number;
	thumbnailUrl: string;
}

export interface FetchProductsReturn {
	res: Product[] | null;
	error: boolean;
}

export const fetchProducts = async (
	quantity?: number
): Promise<FetchProductsReturn> => {
	try {
		const url = quantity
			? `${dbApiBaseUrl}/products?_limit=${quantity}`
			: `${dbApiBaseUrl}/products`;
		const response = await fetch(url);

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
