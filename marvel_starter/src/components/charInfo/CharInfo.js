import { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton';
import MarverService from '../../services/MarvelService';
import './charInfo.scss';

class CharInfo extends Component {
	state = {
		char: null,
		loading: false,
		error: false
	}

	marvelService = new MarverService();

	componentDidMount() {
		this.updateChar();
	}

	componentDidUpdate(prevProps) {
		if (this.props.charID !== prevProps.charID) {
			this.updateChar();
		}
	}

	updateChar = () => {
		const {charID} = this.props;

		if (!charID) {
			return;
		}

		this.setState({
			loading: true
		});

		this.marvelService
			.getCharachter(charID)
			.then(this.onCharLoaded)
			.catch(this.onError);
	}

	onCharLoaded = (char) => {
		this.setState({
			char: char, 
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

	render() {
		const {char, loading, error} = this.state;

		const skeleton = char || loading || error ? null: <Skeleton/>
		const errorMessage = error ? <ErrorMessage/> : null;
		const spinner = loading ? <Spinner/> : null;
		const content = !(loading || error || !char) ? <View charachter={char}/> : null;
		return (
			<div className="char__info">
				{skeleton}
				{errorMessage}
				{spinner}
				{content}
			</div>
		)
	}
}

const View = ({charachter}) => {
	const {thumbnail, name, homepage, wiki, description, comics} = charachter;
	const objectFitProperty = thumbnail.includes("image_not_available") ? "contain" : null;
	return (
		<>
			<div className="char__basics">
					<img src={thumbnail} alt={name} style={{objectFit: objectFitProperty}}/>
					<div>
						<div className="char__info-name">{name}</div>
						<div className="char__btns">
							<a href={homepage} className="button button__main">
								<div className="inner">homepage</div>
							</a>
							<a href={wiki} className="button button__secondary">
								<div className="inner">Wiki</div>
							</a>
						</div>
					</div>
				</div>
				<div className="char__descr">
					{description}
				</div>
				<div className="char__comics">Comics:</div>
				<ul className="char__comics-list">
					{
						comics.length > 0 ? null : "Комиксы отсутствуют"
					}
					{
						comics.map((item, i) => {
							if (i > 9) return;
							return (
								<li className="char__comics-item" key={i}>
									{item.name}
								</li>
							)
						})
					}
				</ul>
		</>
	)
}

CharInfo.propTypes = {
	charID: PropTypes.number
}

export default CharInfo;