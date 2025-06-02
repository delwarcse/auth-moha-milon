import { Link } from "react-router";

const Register = () => {
      const handleRegistration = e =>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        const name=e.target.name.value;
        console.log(name,email,password);
    }
    return (
        <div className="hero bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-3xl font-bold">New Registration</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegistration} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
         
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </form>
      <p className="text-center my-2 p-3 font-semibold">Already Have an Account? Login Now...!<Link to='/login'>
      <br />
      <button className="text-white mt-2 font-bold btn btn-success">Login</button>
      </Link></p>
    </div>
  </div>
</div>
    );
};

export default Register;