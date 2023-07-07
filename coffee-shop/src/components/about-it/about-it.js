import Divider from "../divider/divider";

import "./about-it.sass";

const AboutIt = (props) => {
	const myCoffeeArr = props.data.data.filter(item => item.id === Number(props.data.currentCoffee));

	if (myCoffeeArr.length < 1) {
		return (
			<div className="about-it">
				<div className="about-it__text">
					<h2 className="promo__subheader">Error 404</h2>
					<Divider color={'black'}/>
				</div>
			</div>
		)
	} else {
		const myCoffee = myCoffeeArr[0];
		return (
			<div className="about-it">
				<div className="about-it__photo">
					<img src={myCoffee.image} alt={myCoffee.name} />
				</div>
				<div className="about-it__text">
					<h2 className="promo__subheader">About it</h2>
					<Divider color={'black'}/>
					<div className="about-it__descr">
						<p>
							<span className="text_bold">Country</span>: {myCoffee.country}
						</p>
						<p>
							<span className="text_bold">Description</span>: {myCoffee.description}
						</p>
						<p>
							<span className="text_bold">Price: <span className="text_fz24">{myCoffee.price}$</span></span>
						</p>
					</div>
				</div>
			</div>
		)
	}
}



export default AboutIt;