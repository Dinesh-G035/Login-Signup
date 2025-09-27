import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [identifier,setIdentifier]=useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();

    if (!password || (isLogin && !identifier) || (!isLogin && (!name || !email))) {
      alert("Please fill in all required fields");
      return;
    }
    try {
      const response =await fetch(
        isLogin
          ? "http://localhost:8800/login"
           : "http://localhost:8800/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(
            isLogin ? {identifier,password} : { name, email, password }
          ),
        }
      );
      const data = await response.json();
      if (data.success) {
        alert("logined");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        console.log(`Invalid User or Password :${identifier}`);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="outer1">
      <h3 style={{ paddingTop: "40px" }}>{isLogin ? "Login" : "Signup"}</h3>
      <form className="outer2">
        {!isLogin && (
          <>
            <label htmlFor="name">Name:</label>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
            <br />
          </>
        )}
        {isLogin && (
          <>
            <label htmlFor="identifier">Name/Email:</label>
            <input
              type="text"
              onChange={(e) =>setIdentifier(e.target.value)
              }
            />
            <br />
          </>
        )}

        <label htmlFor="password">Password:</label>
        <input type="password"  onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button onClick={handleSubmit}>{isLogin ? "Login" : "Signup"}</button>
      </form>
      <p className="foot">
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
