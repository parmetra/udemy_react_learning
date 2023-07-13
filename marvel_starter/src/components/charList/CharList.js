import { Component } from 'react';
import PropTypes from 'prop-types';

import MarverService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';


import './charList.scss';

class CharList extends Component {
    state = {
        charachters: [],
        loading: true,
        error: false,
        newItemLoading: false,
        countItems: 450,
        charEnded: false
    }

    marvelService = new MarverService();

    componentDidMount() {
		this.renderCharachters(); 

        window.addEventListener("scroll", this.onScroll);
	}

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll);
    }

    onScroll = () => {
        if (this.state.newItemLoading) return;
        
        if (this.state.charEnded) {
            window.removeEventListener("scroll", this.onScroll);
        }
        
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
            
            this.onCharachtersLoading();
            this.renderCharachters(this.state.countItems);
        }
        
    }

    renderCharachters = (offset) => {
        this.onCharachtersLoading();
		this.marvelService
			.getAllCharachters(offset)
			.then(this.onCharachtersLoaded)
            .catch(this.onError)
	}

    onCharachtersLoading = () => {
        this.setState({
            newItemLoading: true
        })
    }

    onCharachtersLoaded = (newCharachters) => {
        let ended = false;
        if (newCharachters.length < 9) {
            ended = true;
        }

		this.setState(({countItems, charachters}) => (
            {
                charachters: [...charachters, ...newCharachters], 
                loading: false,
                newItemLoading: false,
                countItems: countItems + 9,
                charEnded: ended
            }
        ));
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
        const {error, loading, charachters, newItemLoading, countItems, charEnded} = this.state;
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? this.renderItems(charachters) : null;
        return (
            <div className="char__list">
                {errorMessage}
                {spinner}
                {content}
                <button className="button button__main button__long" 
                    id='loadMoreBtn'
                    disabled={newItemLoading}
                    style={{"display": charEnded ? "none" : "block"}}
                    onClick={() => this.renderCharachters(countItems)}>
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default CharList;