import { Link } from 'react-router-dom'


//types
import { AdoptionPost, User } from '../../../types/models'

//stylesheets
import styles from './DogPostCard.module.css'

interface AdoptionPostCardProps {
  post: AdoptionPost;
  user: User | null;

}

const DogPostCard = (props: AdoptionPostCardProps): JSX.Element => {
  const { post, user } = props
  return (
    <>
      {post.species === 'Dog' ? (
        <div>
          <Link to={`/adoption-post/${post.id}`} state={{ post }}>
            <img src={post.photo}/>
            <h2>{post.name}</h2>
          </Link>
        </div>
      ) : (
        <div>
          <p>No dogs yet.</p>
        </div>
      )}
    </>
  )
}

export default DogPostCard