import React from "react";
import { SignIn } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import "../styles/SignInPage.css"; // Import the CSS file
import {SignInButton} from "@clerk/clerk-react";

function SignInPage() {
  const navigate = useNavigate();

  return (
    <div className="signin-container ">
        <div className="signin-form">
          <div className="signin-button-wrapper">
            <SignInButton className="custom-signin-button" />
          </div>
          <SignIn
            path="/sign-in"
            routing="path"
            signUpUrl="/sign-up"
            afterSignIn={() => navigate("/home")}
          />
        </div>
     </div>
  );
}

export default SignInPage;
