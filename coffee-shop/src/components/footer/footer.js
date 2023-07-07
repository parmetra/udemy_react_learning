import Menu from "../menu/menu";
import Divider from "../divider/divider";

import "./footer.sass";

const Footer = (props) => {
	
	return (
		<div className="footer">
			<Menu color={'black'} onChangePage={props.onChangePage}/>
			<Divider color={'black'}/>
		</div>
	)
}



export default Footer;