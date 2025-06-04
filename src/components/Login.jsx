import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const { signInUser, signInWithGoogle } = useContext(AuthContext);

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    //user sign in
    signInUser(email, password)
      .then(result => {
        console.log(result.user);
        //for clean page after login
        e.target.reset();
        navigate('/orders');
      })
      .catch(error => {
        console.log("Error", error.message);
      })
  }
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        console.log(result);
        navigate('/');
      })
      .catch(error => {
        console.log('error is', error);
      })
  }
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />
              <div><a className="link link-hover">Forgot password?</a></div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
          <p className="text-center my-2 p-3 font-semibold">New On this site? Register Plss...!<Link to='/register'>
            <br />
            <button className="text-white mt-2 font-bold btn btn-error">Register</button></Link></p>
          <p className="text-center my-2 p-3 font-semibold">
            <button onClick={handleGoogleSignIn} className="btn-ghost">Google</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;