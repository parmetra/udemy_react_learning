import { useState } from "react";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";

import useMarverService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";

import "./SearchForm.scss";

const setContent = (process, Component, charachter) => {
	switch(process) {
		case "waiting":
			break;
		case "loading":
			return <Spinner/>;
			break;
		case "confirmed":
			return <Component charachter={charachter}/>
			break;
		default:
			throw new Error("Unexpected process state");
	}
}

const SearchForm = () => {
	const [foundChar, setFoundChar] = useState(0);

	const {clearError, getCharachterByName, process, setProcess} = useMarverService();

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		mode: "all"
	});

	const onSubmit = (data) => {
		clearError();
		getCharachterByName(data.search)
			.then(renderItem)
			.then(() => setProcess("confirmed"));
	};

	const renderItem = (res) => {
		setFoundChar(res);
		console.log(res)
	}

	return (
		<div className="search-form">
			<span className="search-form__title">Or find a character by name:</span>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input 
					placeholder="Enter name" 
					name="search" 
					id="search" 
					{...register("search", 
						{ 
							required: "This field is required", 
							minLength: {value: 3, message: "Minimum 3 letters"} 
						})
					}
				/>
				<input type="submit" name="submit" value="Найти" id="toFind" className="button button__main" disabled={!isValid} />
			</form>
			{errors?.search && <div className="not-found" style={{marginTop: '25px'}}>{errors.search?.message}</div>}
			{setContent(process, View, foundChar)}
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