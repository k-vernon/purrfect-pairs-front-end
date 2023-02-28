import { Link } from 'react-router-dom'


//types
import { AdoptionPost, User } from '../../../types/models'

//stylesheets
import styles from './CatPostCard.module.css'

interface AdoptionPostCardProps {
  post: AdoptionPost;
  user: User | null;

}

const CatPostCard = (props: AdoptionPostCardProps): JSX.Element => {
  const { post, user } = props
  return (
    <>
      {post.species === 'Cat' ? (
        <div>
          <Link to={`/adoption-post/${post.id}`} state={{ post }}>
            <img src={post.photo}/>
            <h2>{post.name}</h2>
          </Link>
        </div>
      ) : (
        <div>
          <p>No cats yet.</p>
        </div>
      )}
    </>
  )
}

export default CatPostCard