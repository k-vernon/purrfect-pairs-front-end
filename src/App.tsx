// npm modules 
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import AdoptionPosts from './pages/AdoptionPosts/AdoptionPosts'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as adoptionPostService from './services/adoptionPostService'

// stylesheets
import './App.css'

// types
import { AdoptionPost, User } from './types/models'

function App(): JSX.Element {
  const navigate = useNavigate()
  
  const [user, setUser] = useState<User | null>(authService.getUser())
  const [adoptionPosts, setAdoptionPosts] = useState<AdoptionPost[]>([])

  useEffect((): void => {
    const fetchAdoptionPosts = async (): Promise<void> => {
      try {
        const adoptionPostData: AdoptionPost[] = await adoptionPostService.getAllAdoptionPosts()
        setAdoptionPosts(adoptionPostData)
      } catch (error) {
        console.log(error);     
      }
    }
    fetchAdoptionPosts()
  }, [])


  const handleLogout = (): void => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = (): void => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/adoption-posts"
          element={
            <AdoptionPosts user={user} posts={adoptionPosts} />
          }
        />
      </Routes>
    </>
  )
}

export default App
