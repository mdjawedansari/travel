import "./SignupFormStyles.css";

function SignupForm() {

  return (
    <div className="form-container">
      <h1>Create an Account</h1>
      <form noValidate>
        <input required placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Password" />
        <a href="/">Sign Up</a>
      </form>
    </div>
  )
}

export default SignupForm;