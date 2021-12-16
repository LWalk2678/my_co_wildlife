import { Link } from "react-router-dom"

export default function Layout(props) {
  const { currentUser } = props;

  return (
    <div>
      <header>
        <h1>My Colorado Wildlife</h1>
        {currentUser ? (
          <div>something</div>
        ) : (
          <Link to='/login'>Login/Register</Link>
        )}
      </header>
      {props.children}
    </div>
  )
}
