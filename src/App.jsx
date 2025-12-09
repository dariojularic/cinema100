import "./App.css";
import { Suspense, lazy } from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import SignupForm from "./components/SignupForm/SignupForm";
import reactLogo from "./assets/react.svg";

// Works also with SSR as expected
const Card = lazy(() => import("./Card"));

function App() {
  return (
    <div>
      <LoginForm/>
      <SignupForm/>
    </div>
  );
}

export default App;
