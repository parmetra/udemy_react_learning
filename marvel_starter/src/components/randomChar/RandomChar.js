import { Component } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarverService from '../../services/MarvelService';

import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';

class RandomChar extends Component {

	state = {
		charachter: {},
		loading: true,
		error: false
	}

	marvelService = new MarverService();

	componentDidMount() {
		this.updateChar();
	}

	onCharLoaded = (charachter) => {
		this.setState({
			charachter: charachter, 
			loading: false,
			error: false
		});
	}

	onError = () => {
		this.setState({
			loading: false,
			error: true
		});
	}

	updateChar = () => {
		this.setState({
			loading: true,
			error: false
		});
		const id = Math.floor(Math.random() * (1011050 - 1010900) + 1010900);
		this.marvelService
			.getCharachter(id)
			.then(this.onCharLoaded)
			.catch(this.onError);
	}

    render() {
		const {charachter, loading, error} = this.state;
		const errorMessage = error ? <ErrorMessage/> : null;
		const spinner = loading ? <Spinner/> : null;
		const content = !(loading || error) ? <View charachter={charachter}/> : null;

        return (
            <div className="randomchar">
                {errorMessage}
                {spinner}
                {content}
                <div className="randomchar__static">
                    <p className="randomchar__title">
                        Random character for today!<br/>
                        Do you want to get to know him better?
                    </p>
                    <p className="randomchar__title">
                        Or choose another one
                    </p>
                    <button className="button button__main" onClick={this.updateChar}>
                        <div className="inner">try it</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
                </div>
            </div>
        )
    }
}

const View = ({charachter}) => {

	const {name, description, thumbnail, homepage, wiki } = charachter;
	const clazz = "randomchar__img" + (thumbnail.includes("image_not_available") ? " image_not_available" : "");

	return (
		<div className="randomchar__block">
			<img src={thumbnail} alt="Random character" className={clazz}/>
			<div className="randomchar__info">
				<p className="randomchar__name">{name}</p>
				<p className="randomchar__descr">{description}</p>
				<div className="randomchar__btns">
					<a href={homepage} className="button button__main">
						<div className="inner">homepage</div>
					</a>
					<a href={wiki} className="button button__secondary">
						<div className="inner">Wiki</div>
					</a>
				</div>
			</div>
		</div>
	)
}
export default RandomChar;