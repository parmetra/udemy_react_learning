import "./divider.sass";

const Divider = ({color}) => {
	return (
		<div className="divider">
			<span style={{backgroundColor: color}}></span>
			<div style={{background: color}}></div>
			<span style={{backgroundColor: color}}></span>
		</div>
	)
}

export default Divider;