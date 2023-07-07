import Menu from "../menu/menu";
import Divider from "../divider/divider";

import "./promo.sass";

const Promo = (props) => {
	return (
		<div className="promo">
			<div className="promo__wrapper">
				<Menu color={'white'} onChangePage={props.onChangePage}/>
				<div className="promo__content">
					<h1 className="promo__header">Everything You Love About Coffee</h1>
					<Divider color={'white'}/>
					<div className="promo__subheader">
						<h2>We makes every day full of energy and taste</h2>
						<h2>Want to try our beans?</h2>
					</div>
					<button className="promo__more" data-page='2' onClick={props.onChangePage}>More</button>
				</div>
			</div>
		</div>
	)
}



export default Promo;