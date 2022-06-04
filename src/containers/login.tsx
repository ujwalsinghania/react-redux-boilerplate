import { getUser, loginUser } from "../api/userApi";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormTextInput from "../components/form-elements/textinput/formTextInput";
import { useAppDispatch } from "../redux/store";
import { loginSchema } from "../interfaces/formSchemas";
import toast from "react-hot-toast";
import { setMe } from "../redux/reducers/userReducer";

interface IForm {
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    },
  });

  const onSubmit = (data: IForm) => {
    dispatch(loginUser({ ...data }))
      .then(() => {
        dispatch(getUser())
          .then((res: any) => {
            toast.success("wow, you are logged in");
            dispatch(setMe(res.data.data));
          })
          .catch(() => {});
      })
      .catch(() => {});
  };

  return (
    <div className="container p-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value, name, ref } }) => (
              <FormTextInput
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                inputRef={ref}
                type="email"
                error={errors.email}
                placeholder="Enter your email"
              />
            )}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value, name, ref } }) => (
              <FormTextInput
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                inputRef={ref}
                type="password"
                error={errors.password}
                placeholder="Enter your password"
              />
            )}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
