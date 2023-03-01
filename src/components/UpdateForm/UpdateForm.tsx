import { useState, useEffect } from 'react';
import { useLocation, Navigate, useNavigate } from 'react-router'

// types
import { CreatePostFormData, EditPostFormData, PhotoFormData } from '../../types/forms'
import { User } from '../../types/models'

//services
import * as adoptionPostService  from '../../services/adoptionPostService'

//styles 
import styles from './CreatePostForm.module.css'

interface UpdatePostFormProps {
  user: User | null;
  handleUpdatePost: (formData: EditPostFormData, photoFormData: PhotoFormData) => void;
}



const UpdatePostForm = (props: UpdatePostFormProps): JSX.Element => {
  let location = useLocation()
  let navigate = useNavigate()
  let state = location.state
  console.log(location.state)

  // const [formData, setFormData] = useState<CreatePostFormData>(state)

  const [formData, setFormData] = useState<CreatePostFormData>(state || {
    species: 'Cat',
    name: '',
    breed: '',
    location: '',
    age: 0,
    gender: 'Male',
    coatColor: '',
    adoptionFee: 0,
    about: ''
  })


  // const handleUpdatePost = async (formData: EditPostFormData, photoFormData: PhotoFormData) => {
  //   try {
  //     const updatedPost = await adoptionPostService.updateAdoptionPostById(formData)
  //     if (photoFormData.photo) {
  //       const photoData = new FormData()
  //       photoData.append('photo', photoFormData.photo)        
  //       await adoptionPostService.addAdoptionPostPhoto(photoData, updatedPost.id)
  //     }
  //     navigate('/adoption-posts')
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  const [photoData, setPhotoData] = useState<PhotoFormData>({
    photo: null
  })
  
  const handleChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
      setFormData({ ...formData, [evt.target.name]: evt.target.value })
      console.log(formData)
    }
    
    const handleChangePhoto = (evt: React.ChangeEvent<HTMLInputElement>) => {
      if (evt.target.files) {
        setPhotoData({ photo: evt.target.files.item(0) })
      }
    }
    
    const handleSpeciesChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
      setFormData({ ...formData, species: evt.target.value })
    }
    
    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
      evt.preventDefault()
      props.handleUpdatePost(formData, photoData)
    }
    
  console.log("Form Data:", formData)

  return (
    <div>
      <h1>Update Adoption Post</h1>
      <form onSubmit={handleSubmit}>
      <div>
          <label className='button' htmlFor="photo-upload">
            Upload Photo
          </label>
          <br/>
          <input
            type="file"
            className='custom-upload'
            id="photo-upload"
            name="photo"
            onChange={handleChangePhoto}
          />
          {photoData.photo ? <p> Photo Submitted</p> : <p id='photo-status'>No Photo</p>}
        </div>
        <div>
        <br />

        <label>
          Species:
          <select name="species" value={formData.species} onChange={handleSpeciesChange}>
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
          </select>
        </label>
        <br />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="breed">Breed:</label>
          <input
            type="text"
            name="breed"
            id="breed"
            value={formData.breed}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            name="location"
            id="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            name="age"
            id="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div>
        <label htmlFor="gender">Gender:</label>
        <input
          type="radio"
          id="male"
          name="gender"
          value="Male"
          checked={formData.gender === "Male"}
          onChange={handleChange}
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          id="female"
          name="gender"
          value="Female"
          checked={formData.gender === "Female"}
          onChange={handleChange}
        />
        <label htmlFor="female">Female</label>
        </div>
        <div>
          <label htmlFor="coatColor">Coat Color:</label>
          <input
            type="text"
            name="coatColor"
            id="coatColor"
            value={formData.coatColor}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="adoptionFee">Adoption Fee:</label>
          <input
            type="number"
            name="adoptionFee"
            id="adoptionFee"
            value={formData.adoptionFee}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="about">About:</label>
          <textarea 
            name="about" 
            id="" 
            value={formData.about} 
            cols={50} 
            rows={10}
            onChange={handleChange}
            >
          </textarea>
        </div>
        <button type='submit'>Submit Post</button>
      </form>
    </div>  
  )
}    

export default UpdatePostForm