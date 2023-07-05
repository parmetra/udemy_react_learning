import NavItem from "../nav-item/nav-item";

import "./nav.sass";
import logo from "../../icons/coffee-beans.png";

const Nav = ({menuItems}) => {
	const menuItem = menuItems.map(item => {
		const {id, name} = item;
		return (
			<NavItem
				key={id}
				value={name}
			/>
		)

	})

	return (
		<div className="nav">
			<img src={logo} alt="coffee-logo" />
			<ul>
				{menuItem}
			</ul>
		</div>
	)
}



export default Nav;