interface PaginationProps {
	totalProducts: number,
	productsPerPage: number,
	setCurrPage: React.Dispatch<React.SetStateAction<number>>,
	currPage: number
}

const Pagination = ({
	totalProducts,
	productsPerPage,
	setCurrPage,
	currPage,
}: PaginationProps) => {
	const totalPages = Math.ceil(totalProducts / productsPerPage);
	const pages: number[] = [];

	const startPage = Math.max(1, currPage - 1);
	const endPage = Math.min(totalPages, startPage + 2);

	for (let i = startPage; i <= endPage; i++) {
		pages.push(i);
	}

	const changePage = (page: number) => {
		setCurrPage(page);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className="flex items-center justify-center gap-4">

			{pages.map((page) => (
				<button
					className={`px-4 py-2 rounded-md text-lg ${
						currPage === page
							? "bg-color-primary text-white"
							: "bg-[#F9F1E7] text-black"
					}`}
					key={page}
					onClick={() => changePage(page)}
				>
					{page}
				</button>
			))}

			{/* "Next" */}
			{currPage < totalPages && (
				<button
					className="px-4 py-2 rounded-md text-lg bg-color-primary text-white"
					onClick={() => changePage(currPage + 1)}
				>
					Next
				</button>
			)}
		</div>
	);
};

export default Pagination;