// npm modules
import { useState } from 'react'

// components
import AdoptionPostCard from '../../components/AdoptionPost/AdoptionPostCard'
import DogPostCard from '../../components/AdoptionPost/DogPostCard/DogPostCard'
import CatPostCard from '../../components/AdoptionPost/CatPostCard/CatPostCard'

// types
import { AdoptionPost, User } from '../../types/models'

// stylesheets
// import styles from './AdoptionPosts.module.css'

interface AdoptionPostsProps {
  posts: AdoptionPost[];
  user: User | null;
}

const AdoptionPosts = (props: AdoptionPostsProps): JSX.Element => {
  const { posts, user } = props
  const [showAll, setShowAll] = useState(true)
  const [showDogs, setShowDogs] = useState(false)
  const [showCats, setShowCats] = useState(false)

  const handleShowAll = () => {
    setShowAll(true)
    setShowDogs(false)
    setShowCats(false)
  }

  const handleShowDogs = () => {
    setShowAll(false)
    setShowDogs(true)
    setShowCats(false)
  }

  const handleShowCats = () => {
    setShowAll(false)
    setShowDogs(false)
    setShowCats(true)
  }

  const sortPosts = [...posts].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

  return (
    <main>
      <h1>Adoption Posts</h1>
      <div >
        <button onClick={handleShowAll}>All</button>
        <button onClick={handleShowDogs}>Dogs</button>
        <button onClick={handleShowCats}>Cats</button>
      </div>
      {showAll && sortPosts.map((post: AdoptionPost) => <AdoptionPostCard key={post.id} user={user} post={post} />)}
      {showDogs && sortPosts.filter(post => post.species === "Dog").map((post: AdoptionPost) => <DogPostCard key={post.id} user={user} post={post} />)}
      {showCats && sortPosts.filter(post => post.species === "Cat").map((post: AdoptionPost) => <CatPostCard key={post.id} user={user} post={post} />)}
    </main>
  )
}

export default AdoptionPosts