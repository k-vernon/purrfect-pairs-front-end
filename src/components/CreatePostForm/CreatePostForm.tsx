import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router';

// types
import { CreatePostFormData, EditPostFormData, PhotoFormData } from '../../types/forms'
import { User } from '../../types/models'

//styles 
import styles from './CreatePostForm.module.css'

interface CreatePostFormProps {
  user: User | null;
  handleAddPost: (editPostFormData: EditPostFormData, photoData: PhotoFormData) => void
}

const CreatePostForm = (props: CreatePostFormProps): JSX.Element => {
  
  const { user, handleAddPost } = props
  const navigate = useNavigate()

  const [formData, setFormData] = useState<EditPostFormData>({
    species: 'Cat',
    name: '',
    breed: '',
    location: '',
    age: 0,
    gender: '',
    coatColor: '',
    adoptionFee: 0,
    about: '',
  })

  const [photoData, setPhotoData] = useState<PhotoFormData>({
    photo: null
  })

  const handleChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleChangePhoto = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files) {
      setPhotoData({ photo: evt.target.files.item(0) })
    }
  }
    
  const handleSpeciesChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, species: evt.target.value })
  }
    
  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>): Promise<void> => {
    evt.preventDefault()
    await props.handleAddPost(formData, photoData)
    navigate('/adoption-posts')
  }
  console.log('Form Data', formData)

  return (
    <div>
      <h1>New Adoption Post</h1>
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
            required
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
            required
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
            required
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
            required
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
            required
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

export default CreatePostForm