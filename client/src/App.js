import './App.css';
import { useState } from 'react'

function App() {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const user = { firstName, lastName, email, password, confirmPassword }

  const submitHandler = (e) => {
    e.preventDefault();
    setFirstName("")
    setLastName("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
  }

  return (
    <div className="App">
      {user.firstName == "" ? <h1>Welcome!</h1> : <h1>Welcome, {user.firstName}!</h1>}
      <form onSubmit={submitHandler}>
        <div className='form-group'>
          <label htmlFor='firstName'>First Name: </label>
          <input type='text' value={user.firstName} onChange={(e) => { setFirstName(e.target.value) }} />
        </div>
        <div className='form-group'>
          <label htmlFor='lastName'>Last Name: </label>
          <input type='text' value={user.lastName} onChange={(e) => { setLastName(e.target.value) }} />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email Address: </label>
          <input type='text' value={user.email} onChange={(e) => { setEmail(e.target.value) }} />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password: </label>
          <input type='text' value={user.password} onChange={(e) => { setPassword(e.target.value) }} />
        </div>
        <div className='form-group'>
          <label htmlFor='confirmPassword'>Confirm Password: </label>
          <input type='text' value={user.confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />
        </div>
        <input type='submit' value="Create" />
      </form>
      <ul>
        <li>First Name: {user.firstName}</li>
        <li>Last Name: {user.lastName}</li>
        <li>Email Address: {user.email}</li>
        <li>Password: {user.password}</li>
        <li>Confirm Password: {user.confirmPassword}</li>
      </ul>
    </div >
  );
}

export default App;
