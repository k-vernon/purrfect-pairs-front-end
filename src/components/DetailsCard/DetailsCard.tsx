import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';


//services
import * as adoptionPostService from '../../services/adoptionPostService'

//types
import { AdoptionPost, User } from '../../types/models'

//stylesheets
import styles from './AdoptionPostCard.module.css'

interface DetailCardProps {
  user: User | null;
  handleDeletePost: (id: number) => void;
}


const DetailsCard = (props: DetailCardProps): JSX.Element => {
  const location = useLocation()
  const { user, handleDeletePost } = props
  const navigate = useNavigate()
  const { post } = location.state
  console.log("this is post!", post)
  const [adoptionPost, setAdoptionPost] = useState<AdoptionPost>()

  useEffect(() => {
    const fetchAdoptionPost = async () => {
      const data = await adoptionPostService.getAdoptionPostById(post.id);
      setAdoptionPost(data);
    };
    fetchAdoptionPost();
  }, [post.id]);



  // const handleDeletePost = async (id: number) => {
  //   try {
  //     await adoptionPostService.deleteAdoptionPostById(id)
  //     navigate('/adoption-posts')
  //     console.log(id)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }


  let ageText: string = "";
  if (post.age <= 1 ) {
    if (post.species === "Cat") {
      ageText = "Kitten";
    } else {
      ageText = "Puppy";
    }
  } else if (post.age > 10) {
    ageText = "Senior";
  } else {
    ageText = "Adult";
  }
  
  console.log('User:', user)
  
  return (
    <>
    {post.author === user?.id && (
      <>
        <div>
          <Link to={`/adoption-posts/${post.id}/edit`} state={post}>
            <button >Edit</button>
          </Link>
          <button onClick={() => handleDeletePost(post.id)}>Delete</button>
        </div>
      </>
    )}
      <div>
        <img src={post.photo}/>
        <h2>{post.name}</h2>
        <h3>{post.location}</h3>
        <p>{ageText}.{post.gender}.{post.breed}.{post.coatColor}</p>
      </div>
      <div>
        <h2>Meet {post.name}</h2>
        <div>{post.about}</div>
        <p>Adoption Fee: ${post.adoptionFee}</p>
      </div>
    </>
  )
}

export default DetailsCard