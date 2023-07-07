import Divider from "../divider/divider";
import DividerLong from "../divider-long/divider-long";

import photo from "../../images/hot_coffee.png";
import "./for-your-pleasure.sass";

const ForYourPleasure = (props) => {
	return (
		<>
			<div className="for-your-pleasure">
				<div className="for-your-pleasure__photo">
					<img src={photo} alt="Hot Coffee" />
				</div>
				<div className="for-your-pleasure__text">
					<h2 className="promo__subheader">About our goods</h2>
					<Divider color={'black'}/>
					<div className="for-your-pleasure__descr">
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



export default ForYourPleasure;