import About from "../about/about";
import OurBest from "../our-best/our-best";

import "./content.sass";

const Content = (props) => {
	return (
		<div className="content">
			<About/>
			<OurBest data={props.data}/>
		</div>
	)
}



export default Content;