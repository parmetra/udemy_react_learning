
import "./product.sass";

const Product = (props) => {
	const {name, image, country, price} = props;
	return (
		<div className="product">
			<img src={image} alt={name}></img>
			<span className="product__name">{name}</span>
			{country && <span className="product__country">{country}</span>} {/* Если страна не передана в пропсах, не отрисовывать такой span */}
			<span className="product__price">{price}$</span>
		</div>
	)
}



export default Product;