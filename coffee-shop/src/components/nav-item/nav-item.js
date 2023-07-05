import "./nav-item.sass";

const NavItem = ({value}) => {
	return (
		<li>
			<span className="nav-item">{value}</span>
		</li>
	)
}

export default NavItem;