import { useState, useEffect } from "react"

// types
import { AdoptionPost, User } from "../../types/models"
import { CreatePostFormData } from "../../types/forms";

//components
import UpdatePostForm from "../../components/UpdateForm/UpdateForm"

interface CreatePostProps {
  user: User | null;
}


const UpdatePost = (props: CreatePostProps): JSX.Element => {
  const { user } = props

  return (
    <>
      <UpdatePostForm user={user} />
    </>
  )
}

export default UpdatePost