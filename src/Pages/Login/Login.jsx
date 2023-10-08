import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
const Login = () => {
  const { logIn, googleLogin } = useContext(AuthContext);
  const handleLogIn = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    logIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success("loged in successfully");
      })
      .catch((error) => {
        console.error(error.message);
        toast.error(error.message);
      });
  };
  // Social login
  const handleSocialLogin = (media) => {
    media()
      .then(() => toast.success("Successfully log in"))
      .catch((error) => toast.error(error.message));
  };
  return (
    <div className="hero min-h-screen py-10 bg-[url('https://i.ibb.co/RvR2WFk/login-reg-cover.png')] bg-no-repeat bg-cover">
      <div className="hero-content ">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#4609C3]">
          <form onSubmit={handleLogIn} className="card-body ">
            <h1 className="text-3xl text-white font-chakraPetch font-semibold">
              Welcome To Galactic
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered bg-[#370898]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="input input-bordered bg-[#370898]"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <button className="mt-5 btn bg-gradient-to-r from-[#F029A0] to-[#F0B000] text-white">
                Login
              </button>
            </div>
            <div className="divider">OR</div>
            <div
              onClick={() => handleSocialLogin(googleLogin)}
              // onClick={handleSocialLogin}
              className="text-center"
            >
              <button className="btn btn-circle text-xl">
                <FcGoogle></FcGoogle>
              </button>
            </div>
            <p className="mt-4 text-center">
              Don't have an account?{" "}
              <Link className="text-[#00FADF]" to={"/register"}>
                Sign Up Here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
