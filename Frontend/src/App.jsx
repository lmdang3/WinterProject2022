import React, { useContext, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Navbar from './components/Navbar';
import { LoginForm } from './components/Login';
// Main Pages
import Home from './pages/Home';
import AboutMe from './pages/About';
import GetRequestHooks from './pages/TopBooks';
import BookReviews from './pages/BookReviews';
import Docs from './pages/Docs';
import { RegisterForm } from './components/Register';
import Thank from './pages/ThankYouPage';
// import Test from './components/test';
import { QueryClient, QueryClientProvider } from 'react-query'
import { EmailContext, PasswordContext } from './context'


const client = new QueryClient()

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <QueryClientProvider client={client}>
      <EmailContext.Provider value={email}>
        <PasswordContext.Provider value={password}>
          <Router>
            <div className="pt-20">
              <Navbar />

              <Routes>
                {/* sets up the routes */}

                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/topbooks" element={<GetRequestHooks />} />
                <Route path="/bookreviews" element={<BookReviews />} />
                <Route path="/nav" element={<Navbar />} />
                <Route path="/docs" element={<Docs />} />

                {/* Take to the login */}
                <Route path="/login" element={<LoginForm />} />
                {/* Takes to create a new acct */}
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/thank" element={<Thank />} />
                {/* <Route path="test" element={<Test />} />
         */}

              </Routes>
            </div>
          </Router>
</PasswordContext.Provider>
</EmailContext.Provider>
</QueryClientProvider>
        )
}

        export default App
