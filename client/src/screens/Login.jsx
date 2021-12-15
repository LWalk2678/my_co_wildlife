import { useState } from 'react'

export default function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const { username, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  } 

  return (
    <div>
      <label>
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </div>
  )
}
