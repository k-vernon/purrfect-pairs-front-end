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

export { getAllAdoptionPosts }