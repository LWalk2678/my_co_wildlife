import { Link } from "react-router-dom"

export default function Layout({ currentUser, handleLogout, children }) {
  
  return (
    <div>
      <header>
        <h1>My Colorado Wildlife</h1>
        {currentUser ? (
          <div>
            <p>Welcome {currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to='/login'>Login/Register</Link>
        )}
        
        {currentUser && (
          <nav>
            <Link to='/animals'>View Animals</Link>
          </nav>
        )} 
        
      </header>
      {children}
    </div>
  )
}
