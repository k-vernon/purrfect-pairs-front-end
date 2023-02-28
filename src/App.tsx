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
import CreatePost from './pages/CreatePost/CreatePost'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import DetailsCard from './components/DetailsCard/DetailsCard'

// services
import * as authService from './services/authService'
import * as adoptionPostService from './services/adoptionPostService'

// stylesheets
import './App.css'

// types
import { AdoptionPost, User } from './types/models'
import { CreatePostFormData } from './types/forms'



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

 
  const handleAddPost = async (formData: CreatePostFormData) => {
    try {
      const newAdoptionPost = await adoptionPostService.createAdoptionPost(formData);
      setAdoptionPosts([...adoptionPosts, newAdoptionPost]);
      console.log("formData", formData)
    } catch (error) {
      console.log("Handle Add Error:", error)
      console.error(error);
    }
  }


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
          path="/adoption-posts/new"
            element={
              <ProtectedRoute user={user}>
                <CreatePost user={user} handleAddPost={handleAddPost} />
              </ProtectedRoute>
            }
        />
        <Route
          path="/adoption-posts"
          element={
            <AdoptionPosts user={user} posts={adoptionPosts} />
          }
        />
        <Route
          path="/adoption-post/:id"
          element={
            <DetailsCard  />
          }
        />
      </Routes>
    </>
  )
}

export default App
