import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const nav=useNavigate();

    const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password || (!isLogin && !name)) {
      alert("All fields are required");
      return;
    }

    try {
      if (isLogin) {
        // 🔹 LOGIN request
        const response = await fetch("http://localhost:8800/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (data.success) { 
          alert(`Logged in as ${email}`);
          setTimeout(() => na("/home"), 1000);
        } else {
          alert("Invalid email or password");
        }
      } else {
        // 🔹 SIGNUP request
        const response = await fetch("http://localhost:8800/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        });
        const data = await response.json();
        if (data.success) {
          alert("Signup successful ✅ Please login");
          setIsLogin(true);
        } else {
          alert("Signup failed ❌: " + data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
}
export default Signup;