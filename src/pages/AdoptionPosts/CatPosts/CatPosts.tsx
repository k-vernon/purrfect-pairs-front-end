// npm modules
import { useState } from 'react'



// components
import AdoptionPostCard from '../../../components/AdoptionPost/AdoptionPostCard'

//types
import { AdoptionPost, User } from '../../../types/models'

// stylesheets
import styles from './CatPosts.module.css'

// types
interface AdoptionPostsProps {
  posts: AdoptionPost[];
  user: User | null;

} 

const AdoptionPosts = (props: AdoptionPostsProps): JSX.Element => {
  const { posts, user } = props
  posts.map((post: AdoptionPost) =>
    console.log("Posts", post)
    )
  return (
    <main className={styles.container}>

      <h1>Cat Adoption Posts</h1> 
      {posts.map((post: AdoptionPost) =>
        
        <AdoptionPostCard user={user} post={post}/>
      
      )}
    </main>
  )
}

export default AdoptionPosts