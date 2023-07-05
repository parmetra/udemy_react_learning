import Product from "../product/product";

import "./our-best.sass";

const OurBest = ({data}) => {

	// Фильтруем только isFavorite
	const bestProducts = data.filter(item => item.isFavorite);

	const products = bestProducts.map(item => {
		const {id, country, ...itemProps} = item;
		return (
			<Product
				key={id} 
				{...itemProps}
			/>
		)
	});

	return (
		<div className="our-best">
			<h2 className="promo__subheader">Our best</h2>
			<div className="our-best__products">
				{products}
			</div>
				
		</div>
	)
}



export default OurBest;