// services
import * as tokenService from './tokenService'

// types
import { AdoptionPost } from '../types/models'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/posts`

async function getAllAdoptionPosts(): Promise<AdoptionPost[]> {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json() as AdoptionPost[]
  } catch (error) {
    throw error
  }
}

async function getAdoptionPostById(id: number): Promise<AdoptionPost> {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: { Authorization: `Bearer ${tokenService.getToken()}` },
    })
    return await res.json() as AdoptionPost
  } catch (error) {
    throw error;
  }
}

async function createAdoptionPost(adoptionPost: AdoptionPost): Promise<AdoptionPost> {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${tokenService.getToken()}`,
      },
      body: JSON.stringify(adoptionPost),
    })
    console.log("Create Service:", adoptionPost)
    return await res.json() as AdoptionPost
  } catch (error) {
    throw error;
  }
}

async function updateAdoptionPostById(
  id: number,
  adoptionPost: AdoptionPost
): Promise<AdoptionPost> {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${tokenService.getToken()}`,
      },
      body: JSON.stringify(adoptionPost),
    })
    return await res.json() as AdoptionPost
  } catch (error) {
    throw error;
  }
}

async function deleteAdoptionPostById(id: number): Promise<AdoptionPost> {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${tokenService.getToken()}` },
    })
    return await res.json() as AdoptionPost
  } catch (error) {
    throw error;
  }
}



export { 
  getAllAdoptionPosts,
  getAdoptionPostById,
  createAdoptionPost,
  updateAdoptionPostById,
  deleteAdoptionPostById
}