import React,{ useContext } from 'react'
import { useQuery } from 'react-query'
import { EmailContext, PasswordContext } from './../App'

export default function testing() {
  // setting the state of the user
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const email = useContext(EmailContext)
  const password = useContext(PasswordContext)
  const { data, status } = useQuery(['credentials', email, password], async () => {
    const response = await axios.get(`http://localhost:3000/userData/getcredentials/${email}/${password}`)
    return response.data
  }, {
    cacheTime: 60 * 60 * 1000
  })

  if (status === 'loading' || status === 'idle') {
    return <p>Loading...</p>
  }

  if (status === 'error') {
    return <p>Error: {error.message}</p>
  }

  if (data) {
    setIsLoggedIn(true)
  } else {
    setIsLoggedIn(false)
  }

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {isLoggedIn ? <Link to="/profile">Profile</Link> : null}
      <button onClick={() => setIsLoggedIn(false)}>Logout</button>
    </nav>
  )
}

