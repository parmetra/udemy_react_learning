// import {useFormik} from "formik";
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from "yup";

/* const validate = (values) => {
	const errors = {};
	
	if (!values.name) {
		errors.name = "Обязательное поле";
	} else if (values.name.length < 2) {
		errors.name = "Минимум 2 символа в имени";
	}

	if (!values.email) {
		errors.email = "Обязательное поле";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
		errors.email = "Неверный формат E-Mail";
	}

	if (!values.amount) {
		errors.amount = "Обязательное поле";
	} else if (typeof(values.amount) != "number") {
		errors.amount = "Нужно ввести число";
	}

	return errors;
} */

const MyTextInput = ({label, ...props}) => {
	const [field, meta] = useField(props);
	return (
		<>
			<label htmlFor={props.name}>{label}</label>
			<input {...props} {...field} />
			{meta.touched && meta.error ? (
				<div className='error'>{meta.error}</div>
			) : null}
		</>
	)
};

const MyCheckbox = ({children, ...props}) => {
	const [field, meta] = useField({...props, type: "checkbox"});
	return (
		<>
			<label className='checkbox'>
				<input type="checkbox" {...props} {...field} />
				{children}
			</label>

			{meta.touched && meta.error ? (
				<div className='error'>{meta.error}</div>
			) : null}
		</>
	)
};

const AppForm = () => {
	return (
		<Formik
			initialValues = {{
				name: "",
				email: "",
				amount: "",
				currency: 0,
				text: "",
				terms: false
			}}
			validationSchema = {Yup.object({
				name: Yup.string()
						.min(2, "Минимум 2 символа в имени")
						.required("Обязательное поле"),
				email: Yup.string()
						.email("Неверный формат E-Mail")
						.required("Обязательное поле"),
				amount: Yup.number()
						.positive("Только положительное значение")
						.required("Обязательное поле"),
				currency: Yup.string().required("Выберите валюту"),
				text: Yup.string().min(10, "Введите не менее 10 символов."),
				terms: Yup.boolean()
						.required("Необходимо согласиться с правилами сервиса.")
						.oneOf([true], "Необходимо согласиться с правилами сервиса.")
			})}
			onSubmit = {values => console.log(JSON.stringify(values, null, 2))}
		>
			<Form className="form">
				<h2>Отправить</h2>
				<MyTextInput 
					label="Ваше имя"
					id="name"
					name="name"
					type="text"
				/>
				<label htmlFor="email">Ваша почта</label>
				<Field
					id="email"
					name="email"
					type="email"
				/>
				<ErrorMessage className="error" name="email" component="div" />
				<label htmlFor="amount">Количество</label>
				<Field
					id="amount"
					name="amount"
					type="number"
				/>
				<ErrorMessage className="error" name="amount" component="div" />
				<label htmlFor="currency">Валюта</label>
				<Field
					id="currency"
					name="currency"
					as="select"
				>
						<option value="">Выберите валюту</option>
						<option value="USD">USD</option>
						<option value="UAH">UAH</option>
						<option value="RUB">RUB</option>
				</Field>
				<ErrorMessage className="error" name="currency" component="div" />
				<label htmlFor="text">Ваше сообщение</label>
				<Field 
					id="text"
					name="text"
					as="textarea"
				/>
				<ErrorMessage className="error" name="text" component="div" />
				<label className="checkbox">
					<Field 
						name="terms" 
						type="checkbox"
					/>
					Соглашаетесь с политикой конфиденциальности?
				</label>
				<ErrorMessage className="error" name="terms" >
					{/* Альтернативный вариант вывода ошибки */}
					{msg => <div className="error">{msg}</div>}
				</ErrorMessage>

				<MyCheckbox name="terms">
					Соглашаетесь с политикой конфиденциальности?
				</MyCheckbox>

				<button type="submit">Отправить</button>
			</Form>
		</Formik>
	)
}

export default AppForm;