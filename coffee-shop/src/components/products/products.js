import Product from "../product/product";

import "./products.sass";

const Products = (props) => {

	const products = props.data.map(item => {
		const {id, ...itemProps} = item;
		return (
			<Product
				key={id}
				dataId={id}
				showThisCoffee={props.showThisCoffee}
				{...itemProps}
			/>
		)
	});

	return (
		<div className="products__wrapper">
			<div className="products">
				{products}
			</div>
		</div>
	)
}



export default Products;