import { Link } from "react-router-dom";

import img from "../../resources/img/404-Page.jpg"

const Page404 = () => {
	return (
		<div 
			style={{display: 'block', 
					backgroundImage: `url(${img})`, 
					width: '1140px', 
					height: '600px'}}>
			{/* <img src={img} alt="404" /> */}
			<Link 
				to='/'
				style={{
					display: "block",
					textAlign: 'center',
					fontSize: '28px',
					color: "#9f0013",
					textDecoration: 'underline',
					textTransform: 'uppercase'
				}}	
			>
				<h2>Go Home</h2>
			</Link>
		</div>
	)
}

export default Page404;