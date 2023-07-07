import Divider from "../divider/divider";
import DividerLong from "../divider-long/divider-long";

import photo from "../../images/drinkingCoffee.jpg";
import "./about-our-beans.sass";

const AboutOurBeans = () => {

	return (
		<>
		<div className="about-our-beans">
			<div className="about-our-beans__photo">
				<img src={photo} alt="Drinking Coffee" />
			</div>
			<div className="about-our-beans__text">
				<h2 className="promo__subheader">About our beans</h2>
				<Divider color={'black'}/>
				<div className="about-our-beans__descr">
					<p>
						Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
					</p>
					<p>
						Afraid at highly months do things on at. Situation recommend objection do intention so questions. 
					<br/>
						As greatly removed calling pleased improve an.
					<br/>
						Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.
					</p>
				</div>
			</div>
		</div>
		<DividerLong/>
		</>
	)
}



export default AboutOurBeans;