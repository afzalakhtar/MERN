import Footer from "../Components/footer/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
	const [values, setValues] = useState({
		name: '',
		email: '',
		password: '',
		phone: ''
	})
	const [validations, setValidations] = useState({
		name: '',
		email: '',
		password: '',
		phone: ''
	})
	const navigate = useNavigate();

	const validateAll = () => {
		const { name, email, password, phone } = values
		const validations = { name: '', email: '', password: '', phone: '' }
		
		let isValid = true

		if (!name) {
			validations.name = 'Name is required'
			isValid = false
		}

		if (!email) {
			validations.email = 'Email is required'
			isValid = false
		}

		if (email && !/\S+@\S+\.\S+/.test(email)) {
			validations.email = 'Email format must be as example@mail.com'
			isValid = false
		}

		if (!password) {
			validations.password = 'Password is required'
			isValid = false
		}
		

		if (!phone) {
			validations.phone = 'Phone is required'
			isValid = false
		}

		if (phone && !/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(phone)) {
			validations.phone = 'Phone number must be Numeric'
			isValid = false
		}
		
		if (!isValid) {
			setValidations(validations)
		}

		return isValid
	}

	const validateOne = (e) => {
		const { name } = e.target
		const value = values[name]
		let message = ''

		if (!value) {
			message = `Enter your ${name}`
		}

		if (value && name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
			message = 'Email format must be as example@mail.com'
		}

		if (value && name === 'phone' && !/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(phone)) {
			message = 'Phone number must be Numeric'
		}

		setValidations({ ...validations, [name]: message })
	}
	const handleChange = (e) => {
		const { name, value } = e.target
		setValues({ ...values, [name]: value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		const isValid = validateAll()

		if (!isValid) {
			return false
		} else {
			navigate('/Login')
		}

		// alert(JSON.stringify(values))
	}

	const { name, email, password, phone } = values

	const {
		name: nameVal,
		email: emailVal,
		password: passwordVal,
		phone: phoneVal
	} = validations

	return (
		<div className="container mx-auto">
			<div className='login_page'>
				<form onSubmit={handleSubmit} className="form">
					<div className="form-control">
						<label htmlFor="name">Full Name</label>
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Full Name"
							value={name}
							onChange={handleChange} onBlur={validateOne}
							className="p-2 border rounded"
						/>
						<small>{nameVal}</small>
					</div>					
					<div className="form-control">
						<label htmlFor="phone">Phone</label>
						<input
							type="tel"
							name="phone"
							id="phone"
							placeholder="Phone"
							value={phone}
							onChange={handleChange} onBlur={validateOne}
							classphone="p-2 border rounded"
						/>
						<small>{phoneVal}</small>
					</div>
					<div className="form-control">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Email"
							value={email}
							onChange={handleChange} onBlur={validateOne}
							className="p-2 border rounded"
						/>
						<small>{emailVal}</small>
					</div>
					<div className="form-control">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Password"
							value={password}
							onChange={handleChange} onBlur={validateOne}
							className="p-2 border rounded"
						/>
						<small>{passwordVal}</small>
					</div>
					<button type="submit" className="btn">
						Sign Up
					</button>
				</form>
			</div>
			<Footer />
		</div>
	);
}
