// npm modules
import { useState } from 'react'



// components
import AdoptionPostCard from '../../components/AdoptionPost/AdoptionPostCard'

//types
import { AdoptionPost, User } from '../../types/models'

// stylesheets
import styles from './AdoptionPosts.module.css'

// types
interface AdoptionPostsProps {
  posts: AdoptionPost[];
  user: User | null;

} 

const AdoptionPosts = (props: AdoptionPostsProps): JSX.Element => {
  const { posts, user } = props

  return (
    <main className={styles.container}>

      <h1>Adoption Posts</h1>
      <AdoptionPostCard {...props} />
    </main>
  )
}

export default AdoptionPosts