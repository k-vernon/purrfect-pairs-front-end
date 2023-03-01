/* ---------==== custom forms ====--------- */

export interface CreatePostFormData {
  species: string;
  name: string,
  breed: string,
  location: string,
  age: number,
  gender: string;
  coatColor: string;
  adoptionFee: number;
  about?: string;
}

export interface EditPostFormData {
  id?: number,
  species: string;
  name: string,
  breed: string,
  location: string,
  age: number,
  gender: string;
  coatColor: string;
  adoptionFee: number;
  about?: string;
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
  photo?: File | null;
}
