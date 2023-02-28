import { Link } from 'react-router-dom'


//types
import { AdoptionPost, User } from '../../types/models'

//stylesheets
import styles from './AdoptionPostCard.module.css'

interface AdoptionPostCardProps {
  post: AdoptionPost;
  user: User | null;

}

const AdoptionPostCard = (props: AdoptionPostCardProps): JSX.Element => {
  const { post, user } = props
  return (
    <>
      <div>
 
          <>
            <Link to={`/adoption-post/${post.id}`} state={{post}}>
              <img src={post.photo}/>
              <h2>{post.name}</h2>
            </Link>
          </>
      </div>
    </>
  )
}

export default AdoptionPostCard