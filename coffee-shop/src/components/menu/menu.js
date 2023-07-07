import NavItem from "../nav-item/nav-item";

import "./menu.sass";

const Nav = ({color, onChangePage}) => {
	const menuItems = [
		{id: 1, name: 'Coffee house'}, 
		{id: 2, name: 'Our coffe'}, 
		{id: 3, name: 'For your pleasure'}
	];
	const menuItem = menuItems.map(item => {
		const {id, name} = item;
		return (
			<NavItem
				key={id}
				value={name}
				dataPage={id}
				onChangePage={(e) => onChangePage(e)}
			/>
		)

	});

	

	return (
		<div className="menu">
			<div style={{background: color}}></div>
			<ul>
				{menuItem}
			</ul>
		</div>
	)
}



export default Nav;