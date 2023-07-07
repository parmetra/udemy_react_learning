import Product from "../product/product";

import "./our-best.sass";

const OurBest = (props) => {

	// Фильтруем только isFavorite
	const bestProducts = props.data.data.filter(item => item.isFavorite);

	const products = bestProducts.map(item => {
		const {id, country, ...itemProps} = item;
		return (
			<Product
				key={id}
				dataId={id}
				{...itemProps}
				showThisCoffee={props.data.showThisCoffee}
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