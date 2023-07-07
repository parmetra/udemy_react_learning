import Promo from "../promo/promo";
import OurCoffee from "../our-coffee/our-coffee";

const Header = ({currentPage, onChangePage}) => {
	switch(currentPage){
		case 2: 
			return <OurCoffee onChangePage={onChangePage}/>
		case 3:
			break
		default:
			return <Promo onChangePage={onChangePage}/>
	}
}

export default Header;