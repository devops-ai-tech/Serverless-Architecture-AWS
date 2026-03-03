import { useState } from 'react'

export default function ConsolePage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (username.trim() === '' || password.trim() === '') {
      setError('Please enter both username and password')
      return
    }
    // For this demo we accept any non-empty credentials.
    setError('')
    setLoggedIn(true)
  }

  function handleLogout() {
    setUsername('')
    setPassword('')
    setLoggedIn(false)
    setError('')
  }

  return (
    <div className="console-container">
      <div className="console-box">
        <h2 className="console-title">Console Login</h2>

        {loggedIn ? (
          <div className="console-output">
            <p>Welcome, <strong>{username}</strong> — you are logged in.</p>
            <button className="btn" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="console-form">
            <label>
              Username
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                autoComplete="username"
              />
            </label>

            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                autoComplete="current-password"
              />
            </label>

            {error && <div className="console-error">{error}</div>}

            <div className="console-actions">
              <button type="submit" className="btn primary">Login</button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
