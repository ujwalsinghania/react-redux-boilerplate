import * as yup from "yup";
export const loginSchema = yup.object().shape({
  identifier: yup
    .string()
    .email("Please provide a valid email")
    .required("Email is required"),
  showPassword: yup.boolean(),
  password: yup.string().when("showPassword", {
    is: true,
    then: yup.string().required("Password is required"),
  }),
});
