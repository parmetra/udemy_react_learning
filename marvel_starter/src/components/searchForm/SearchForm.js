import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { Link } from "react-router-dom";

import useMarverService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";

import "./SearchForm.scss";

const SearchForm = () => {
	const [foundChar, setFoundChar] = useState(0);

	const {loading, clearError, getCharachterByName} = useMarverService();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data)
		clearError();
		getCharachterByName(data.search)
			.then(renderItem);
	};

	const renderItem = (res) => {
		setFoundChar(res);
		console.log(res)
	}

	const spinner = loading ? <Spinner/> : null;
	const content = !(loading || foundChar == 0) ? <View charachter={foundChar}/> : null;

	return (
		<div className="search-form">
			<span className="search-form__title">Or find a character by name:</span>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input 
					onChange={() => renderItem(0)} 
					placeholder="Enter name" 
					name="search" 
					id="search" 
					{...register("search", { required: "This field is required", minLength: {value: 3, message: "Minimum 3 letters"} })}
				/>
				<input type="submit" name="submit" value="Найти" id="toFind" className="button button__main"/ >
			</form>
			{spinner}
			{errors.search && <div className="not-found" style={{marginTop: '25px'}}>{errors.search?.message}</div>}
			{content}
		</div>
	)
};

const View = ({charachter}) => {
	if (charachter) {
		return (
			<div className="results">
				<span className="found">Перейти к персонажу {charachter.name}?</span>
				<Link to={`/hero/${charachter.id}`}>
					<button className="button button__secondary">
						<div className="inner">
							Вперёд
						</div>
					</button>
				</Link>
			</div>
		)
	} else {
		return (
			<div className="results">
				<span className="not-found">The character was not found. Check the name and try again.</span>
			</div>
		)
	}
}

export default SearchForm;