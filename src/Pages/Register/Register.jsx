import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [registerError, setRegisterError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoUrl = form.get("photoUrl");
    const email = form.get("email");
    const password = form.get("password");
    console.log(password);
    setSuccess("");
    setRegisterError("");

    if (password.length < 6) {
      toast.error("Password should be at least 6 characters or longer");
      return;
    }else if(!/[A-Z]/.test(password)){
        toast.error("Password should have at least one Upper case characters.");
        return;
    }else if(!/(?=.*[!@#$%^&*])/.test(password)){
        toast.error("Password should have at least one special characters.");
        return;
    }


    // Create user
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setSuccess("user created successfully");
        toast.success("User Created Successfully/");
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
        toast.error(error.message);
      });
  };

  return (
    <div className="hero min-h-screen py-10 bg-[url('https://i.ibb.co/RvR2WFk/login-reg-cover.png')] bg-no-repeat bg-cover">
      <div className="hero-content ">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#4609C3]">
          <form onSubmit={handleRegister} className="card-body ">
            <h1 className="text-3xl text-white font-chakraPetch font-semibold">
              Welcome To Galactic
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered bg-[#370898]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photoUrl"
                className="input input-bordered bg-[#370898]"
              />
            </div>
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
                placeholder="password"
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
                Register
              </button>
            </div>
            <div className="divider">OR</div>
            <div className="text-center">
              <button className="btn btn-circle text-xl">
                <FcGoogle></FcGoogle>
              </button>
            </div>

            <p className="mt-4 text-center">
              Already have an account?
              <Link className="text-[#00FADF]" to={"/login"}>
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
