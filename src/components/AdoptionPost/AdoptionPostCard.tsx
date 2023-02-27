import { Link } from 'react-router-dom'


//types
import { AdoptionPost, User } from '../../types/models'

//stylesheets
import styles from './AdoptionPostCard.module.css'

interface AdoptionPostCardProps {
  posts: AdoptionPost[];
  user: User | null;

}

const AdoptionPostCard = (props: AdoptionPostCardProps): JSX.Element => {
  const { posts, user } = props
  return (
    <>
      <div>
        {posts.map((animal: AdoptionPost): JSX.Element => (
          <>
            <Link to='/'>
              <img src={animal.photo}/>
              <h2>{animal.name}</h2>
            </Link>
          </>
        ))}
      </div>
    </>
  )
}

export default AdoptionPostCard