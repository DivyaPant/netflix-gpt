import React, { useRef, useState } from "react";
import Header from "./common/Header";
import { emailAndPasswordValidator } from "../utils/utils";

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const [error, setError] = useState(null);
  const handleLogin = ()=>{
    // Validation
    const validation = emailAndPasswordValidator(email.current.value, password.current.value);
    if(validation?.noError) {
      // API call to login
      console.log("Login Successful");
    } else {
      setError(validation);
    }
  }

  return (
    <div className="h-screen">
      <Header />
      <div className="absolute h-screen w-full -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="bg"
          className="h-full w-full"
        />
      </div>
      <div className="flex items-center justify-center h-full">
        <form onSubmit={(e)=> e.preventDefault()}
          className="flex justify-center flex-col 
      w-1/3 m-auto p-12 bg-black/[0.8]"
        >
          <h1 className="text-3xl font-semibold text-white mb-4">Sign In</h1>
          <section className="w-full my-2 relative z-0">
            <input
            ref={email}
              type="email"
              id="email"
              onChange={()=> setError()}
              placeholder=" "
              className="block w-full p-3 rounded-md bg-transparent text-white
              border border-[#808080b3] outline-none duration-200 peer"
            />
            <span
              className="absolute text-white left-0 mx-2
            duration-200 peer-placeholder-shown:scale-100 
            transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
            peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
            peer-focus:-translate-y-6 peer-placeholder-shown:-z-10 peer-focus:z-10"
            >
              Email
            </span>
            <span>
              {error && !error?.isEmailValid && <p className="text-red-500 text-xs">Invalid Email</p>}
            </span>
          </section>
          <section className="w-full my-2 relative z-0">
            <input
            ref={password}
            onChange={()=> setError()}
              type="password"
              id="password"
              placeholder=" "
              className="block w-full p-3 rounded-md bg-transparent text-white
              border border-[#808080b3] outline-none duration-200 peer"
            />
            <span
              className="absolute text-white left-0 mx-2
            duration-200 transform -translate-y-6 scale-75 top-3 origin-[0]
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:-z-10
            peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
            peer-focus:-translate-y-6 peer-focus:z-10"
            >
              Password
            </span>
            {error && !error?.isPasswordValid && <p className="text-red-500 text-xs">Invalid Password</p>}
          </section>
          <button className="bg-netflix-red text-white w-full rounded-md h-10 mt-4"
          onClick={handleLogin}
          >
            Sign In
          </button>
          <div className="text-white mt-16">
            New to Netflix?<b> Sign up now</b>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
