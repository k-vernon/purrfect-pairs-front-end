import { useState, useEffect } from "react"

// types
import { AdoptionPost, User } from "../../types/models"
import { CreatePostFormData, PhotoFormData } from "../../types/forms";

//components
import CreatePostForm from "../../components/CreatePostForm/CreatePostForm"

interface CreatePostProps {
  user: User | null;
  handleAddPost: (form: CreatePostFormData, photoData: PhotoFormData) => void;
}


const CreatePost = (props: CreatePostProps): JSX.Element => {
  const { user, handleAddPost } = props

  return (
    <>
      <CreatePostForm user={user} handleAddPost={handleAddPost}/>
    </>
  )
}

export default CreatePost