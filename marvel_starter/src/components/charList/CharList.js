import { Component } from 'react';
import MarverService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';


import './charList.scss';

class CharList extends Component {
    state = {
        charachters: [],
        loading: true,
        error: false
    }

    marvelService = new MarverService();

    componentDidMount() {
		this.renderCharachters();
	}

    renderCharachters = () => {
		this.marvelService
			.getAllCharachters()
			.then(this.onCharachtersLoaded)
            .catch(this.onError)
	}

    onCharachtersLoaded = (charachters) => {
		this.setState({
            charachters, 
            loading: false
        });
	}

    addMoreCharachters = () => {
        this.setState({
            loading: true
        });
        this.renderCharachters();
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    renderItems = (array) => {
        const items = array.map(item => {
            const {name, thumbnail, id} = item;
            const objectFitProperty = thumbnail.includes("image_not_available") ? "contain" : null;
            return (
                <li className="char__item" key={id} onClick={() => {this.props.onCharSelected(item.id)}}>
                    <img src={thumbnail} alt={name} style={{objectFit: objectFitProperty}}/>
                    <div className="char__name">{name}</div>
                </li>
            )
        });
        return (
            <ul className="char__grid">
                {items}
            </ul>
        )
    }
    

    render() {
        const {error, loading, charachters} = this.state;
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? this.renderItems(charachters) : null;
        return (
            <div className="char__list">
                {errorMessage}
                {spinner}
                {content}
                <button className="button button__main button__long" onClick={this.addMoreCharachters}>
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

export default CharList;