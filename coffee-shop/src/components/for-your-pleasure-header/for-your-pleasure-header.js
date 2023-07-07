import Menu from "../menu/menu";

import "./for-your-pleasure-header.sass";

const ForYourPleasureHeader = (props) => {
	return (
		<div className="for-your-pleasure-header">
			<div className="promo__wrapper">
				<Menu color={'white'} onChangePage={props.onChangePage}/>
				<div className="promo__content">
					<h1 className="promo__header">For your pleasure</h1>
				</div>
			</div>
		</div>
	)
}


export default ForYourPleasureHeader;