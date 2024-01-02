import * as Yup from "yup";

export const LoginSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .matches(/\d/, "Password must contain at least one number")
      .required("Please enter a password"),
  });