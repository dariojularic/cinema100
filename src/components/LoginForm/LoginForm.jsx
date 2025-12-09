import "./LoginForm.css";
import Logo from "../Logo/Logo";

function LoginForm() {
  return (
    <section className="login-section">
      <Logo />
      <form className="login-form" action="">
        <h2 className="login-form-header">Log In</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="login-btn btn">Log In</button>
        <div className="sign-up-container">
          <p>Don't have an account ?</p>
          <button>Sign up</button>
        </div>
        <div className="login-guest-container">
          <p>Or,</p>
          <button>Log in as guest</button>
        </div>
      </form>
    </section>
  );
}

export default LoginForm;
