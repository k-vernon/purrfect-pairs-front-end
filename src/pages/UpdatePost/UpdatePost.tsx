import { useState, useEffect } from "react"

// types
import { AdoptionPost, User } from "../../types/models"
import { CreatePostFormData, EditPostFormData, PhotoFormData } from "../../types/forms";

//components
import UpdatePostForm from "../../components/UpdateForm/UpdateForm"

interface CreatePostProps {
  user: User | null;
  handleUpdatePost: (formData: EditPostFormData, photoFormData: PhotoFormData) => void;
}


const UpdatePost = (props: CreatePostProps): JSX.Element => {
  const { user, handleUpdatePost } = props

  return (
    <>
      <UpdatePostForm user={user} handleUpdatePost={handleUpdatePost} />
    </>
  )
}

export default UpdatePost