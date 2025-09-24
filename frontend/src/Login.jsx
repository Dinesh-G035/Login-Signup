import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const na = useNavigate();

  const handleSubmit=async (event)=>{
		event.preventDefault();
		if(!email||!password||(!isLogin && !name)){
			alert("required to fill");
            return;
		}
		try{
			const response=await fetch(isLogin?"http://localhost:8800/login":"http://localhost:8800/signup",{
				method:"POST",
				headers:{"Content-Type":"application/json"},
				body:JSON.stringify(isLogin?{email,password}:{name,email,password}),
			});
			const data=await response.json();
			if(data.suucess){
				alert("logined");
				settimeOut(()=>{
					navigate("/home")
				},100);
			}
			else{
                console.log("error");
                
			}
		}
		catch(error){
			alert(error);
		}
    }

  return (
    <div className="outer1">
      <h3>{isLogin ? "Login" : "Signup"}</h3>
      <form className="outer2" onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
          </>
        )}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button>{isLogin ? "Login" : "Signup"}</button>
      </form>
      <p style={{ marginTop: "10px" }}>
        {isLogin ? (
          <>
            Don't have an account?{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => setIsLogin(false)}
            >
              Signup
            </span>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => setIsLogin(true)}
            >
              Login
            </span>
          </>
        )}
      </p>
    </div>
  );
};

export default LoginSignup;
