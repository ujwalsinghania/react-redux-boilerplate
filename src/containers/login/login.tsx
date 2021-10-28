import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../api/userApi";
import FpLoader from "../../components/common/fullpageLoader";
import { SITE_URLS } from "../../config";
import { setMe } from "../../redux/reducers/userReducer";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { mutate, isLoading } = useMutation(loginUser, {
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      dispatch(setMe(data.user));
      history.push(SITE_URLS.DASHBOARD);
      //alert(message);
    },
    onError: () => {
      //alert("there was an error");
    },
  });

  const onSubmit = () => {
    mutate({ identifier: "co1@yopmail.com", password: "12345678" });
  };

  if (isLoading) {
    return <FpLoader />;
  }

  return (
    <div className="container p-5">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
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
