import './App.css';
import { useState, useEffect } from 'react'
import Layout from './layouts/Layout';
import { Switch, Route, useHistory } from 'react-router-dom';
import Login from './screens/Login';
import {loginUser, registerUser, verifyUser} from './services/auth'
import Register from './screens/Register';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  //let history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = awaitverifyUser();
      setCurrentUser(userData)
    }
  })

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    //history.push("/")
  };

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData)
    setCurrentUser(userData);
    //history.push('/')
  };

  return (
    <div className="App">
      <Layout currentUser={currentUser}>
        <Switch>
          <Route path='/login'>
            <Login handleLogin={handleLogin}/>
          </Route>
          <Route path='/register'>
            <Register handleRegister={handleRegister}/>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
