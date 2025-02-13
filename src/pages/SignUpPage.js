import { SignUp } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Register</h1>
      <SignUp
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        afterSignUp={() => navigate('/home')} 
      />
    </div>
  );
}

export default SignUpPage;


// import React from 'react';
// import { SignUp } from '@clerk/clerk-react';

// const SignUpPage = () => {
//   return (
//     <div>
//       <h1>Sign Up</h1>
//       <a href="/sign-up">Sign up</a>
//       <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
//     </div>
//   );
// };

// export default SignUpPage;
