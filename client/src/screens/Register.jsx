import { useState } from 'react'

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })
  const { username, email, password } = formData;
  const {handleRegister} = props

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleRegister(formData);
    }}>
      <h3>Register</h3>
      <label>
        Username:
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type='text'
          name='email'
          value={email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
