import { useState } from 'react';

// types
import { CreatePostFormData } from '../../types/forms'
import { AdoptionPost, User } from '../../types/models'

//styles 
import styles from './CreatePostForm.module.css'

interface CreatePostFormProps {
  user: User | null;
  handleAddPost: (formData: CreatePostFormData) => void
}

const CreatePostForm = (props: CreatePostFormProps): JSX.Element => {
  const { user, handleAddPost } = props

  const [formData, setFormData] = useState<CreatePostFormData>({
    photo: '',
    species: 'Cat',
    name: '',
    breed: '',
    location: '',
    age: 0,
    gender: '',
    coatColor: '',
    adoptionFee: 0,
    about: '',
  });

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    handleAddPost(formData);
    evt.preventDefault();
  };

  const handleChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSpeciesChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, species: evt.target.value });
  };
  

  return (
    <div>
      <h1>New Adoption Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="photo">Photo:</label>
          <input
            type="file"
            name="photo"
            id="photo"
            value={formData.photo}
            onChange={handleChange}
          />
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