import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';


//services
import * as adoptionPostService from '../../services/adoptionPostService'

//types
import { AdoptionPost, User } from '../../types/models'

//stylesheets
import styles from './AdoptionPostCard.module.css'



const DetailsCard = (): JSX.Element => {
  const location = useLocation()
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
  
  
  return (
    <>
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