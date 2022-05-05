import { useHistory } from "react-router-dom";
import { getUser, loginUser } from "../../api/userApi";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormTextInput from "../../components/form-elements/textinput/formTextInput";
import { useAppDispatch } from "../../redux/store";
import { loginSchema } from "../../interfaces/formSchemas";

const Login = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  const onSubmit = (data: any) => {
    dispatch(loginUser({...data})).then(() => {
     dispatch(getUser()).then(() => {
        console.log('wow')
      }).catch(() => {})
    }).catch(() => {})
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
            name="identifier"
            render={({ field: { onChange, onBlur, value, name, ref } }) => (
              <FormTextInput
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                inputRef={ref}
                type="email"
                error={errors.identifier}
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
