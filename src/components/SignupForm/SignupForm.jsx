import "./SignupForm.css";
import Logo from "../Logo/Logo";

function SignupForm() {
  return (
    <section className="login-section">
      <Logo />
      <form className="login-form" action="">
        <h2 className="login-form-header">Sign Up</h2>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="login-btn btn">Sign Up</button>
        <div className="sign-up-container">
          <p>Already have an account</p>
          <button>Log In</button>
        </div>
      </form>
    </section>
  );
}

export default SignupForm;
