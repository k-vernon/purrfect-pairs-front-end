/* ---------==== custom forms ====--------- */

export interface CreatePostFormData {
  id: number;
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


/* ---------===== auth forms =====--------- */

export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData {
  name: string;
  email: string;
  password: string;
  passwordConf: string;
}

export interface ChangePasswordFormData {
  oldPassword: string;
  newPassword: string;
  newPasswordConf: string;
}

export interface PhotoFormData {
  photo: File | null;
}
