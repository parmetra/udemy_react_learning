import Menu from "../menu/menu";

import "./our-coffee.sass";

const OurCoffee = (props) => {
	return (
		<div className="our-coffee">
			<div className="promo__wrapper">
				<Menu color={'white'} onChangePage={props.onChangePage}/>
				<div className="promo__content">
					<h1 className="promo__header">Our Coffee</h1>
				</div>
			</div>
		</div>
	)
}



export default OurCoffee;