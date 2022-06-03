import * as yup from "yup";
export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please provide a valid email")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});
