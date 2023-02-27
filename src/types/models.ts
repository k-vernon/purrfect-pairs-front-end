/* ---------===== custom props ====--------- */

export interface AdoptionPost {
  author: number;
  photo?: string;
  species: string;
  name: string,
  breed: string,
  location: string,
  age: number,
  gender: string;
  coatColor: string;
  adoptionFee: number;
  about?: string;
  createdAt: string;
  updatedAt: string;
}



/* ---------===== auth models =====--------- */


export interface Profile {
  name: string;
  photo?: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  name: string;
  email: string;
  profile: { id: number };
  id: number;
  createdAt: string;
  updatedAt: string;
}
