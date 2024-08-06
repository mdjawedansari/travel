import "./SignupFormStyles.css";

function SignupForm() {

  return (
    <div className="form-container">
      <h1>Create an Account</h1>
      <form >
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Password" />
        <a href="/">Login</a>
        

      </form>
    </div>
  )
}

export default SignupForm; 