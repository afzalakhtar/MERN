import { Link, useNavigate } from "react-router-dom";

import { useState } from "react"
import Footer from "../Components/footer/Footer"

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const [validations, setValidations] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate();

  const validateAll = () => {
    const { email, password } = values
    const validations = { email: '', password: '' }
    let isValid = true

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
      message = `${name} is required`
    }
    
    if (value && name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      message = 'Email format must be as example@mail.com'
    }
    
    setValidations({...validations, [name]: message })
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({...values, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const isValid = validateAll()
    
    if (!isValid) {
      return false
    }else{
      navigate('/Products')
    }

    // alert(JSON.stringify(values))
  }
  
  const { email, password } = values

  const { 
    email: emailVal, 
    password: passwordVal 
  } = validations

  return (
    <div className="container mx-auto">
      <div className='login_page'>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Email" id="email" value={email}
              onChange={handleChange} onBlur={validateOne}
            />
            <small>{emailVal}</small>
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" value={password} id="password"
              onChange={handleChange} onBlur={validateOne}
            />
            <small>{passwordVal}</small>
          </div>

          <button className="btn" type="submit">Login</button>
          <div><Link to={'/Signup'} className="lnk">Don't have an Account</Link></div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Login