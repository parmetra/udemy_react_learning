import "./nav-item.sass";

const NavItem = ({value, dataPage, onChangePage}) => {
	return (
		<li onClick={onChangePage}>
			<span className="nav-item" data-page={dataPage}>{value}</span>
		</li>
	)
}

export default NavItem;