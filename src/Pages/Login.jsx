import React, { useState } from "react";
// import "./Login.css";
// import { NavBar } from "../components/NavBar";
// import CurrentUserContext from "../context/LoggedInUser/CurrentUserContext";

const LoginForm = () => {
  // const currentUser = useContext(CurrentUserContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // useEffect(()=>{
  //   alert(JSON.stringify(errors));
  // },[errors]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValidated = validate();
    if (isValidated) {
      console.log(formData);
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formData),
      });
      if (response.status === 200) {
        alert("Logged in");
        const user = await response.json();
        console.log(user);
        sessionStorage.setItem("user", JSON.stringify(user));
        // currentUser.setState(user);
        window.location.href = "/";
      } else {
        const error = await response.json();
        alert(error.error);
      }
    }
  };

  // useEffect(()=>{console.warn(currentUser)},[currentUser.state]);

  return (
    <div className="container1 w-full overflow-x-auto">
      {/* <NavBar shadowNavbar={true} /> */}

      <div className="registrationContainer w-full h-[85vh]">
        <form className="RegisterForm flex flex-col justify-center items-center h-[85vh] font-Inter" onSubmit={handleSubmit}>
            <h1 className="text-[4rem]">Welcome back</h1>
            <h1 className="form-heading text-[1.6rem]">welcome back please enter your details</h1>
            <div className="form-group flex flex-col w-[56%] mt-16 justify-center items-center">
                <label className="text-[1.6rem] w-[55%] pb-[6px] font-[300] relative right-[11px]" htmlFor="email">Email</label>
                <input
                    type="email"
                    className="form-control w-[55%] h-[6vh]"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <span className="inputError">{errors.email}</span>
            </div>
            <div className="form-group flex flex-col w-[56%] mt-16 justify-center items-center">
                <label className="text-[1.6rem] pb-[6px] font-[300] text-[1.6rem] w-[55%] pb-[6px] font-[300] relative right-[11px]" htmlFor="password">Password</label>
                <input
                type="password"
                className="form-control w-[55%] h-[6vh]"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                />
                <span className="inputError">{errors.password}</span>
            </div>
            <button className="text-[#2B29AB] text-right w-[26%] mt-1">Forget password?</button>
            <button className="registerButton loginButton bg-[#2B29AB] h-[4.5vh] font-Inter font-[600] text-white rounded-[15px] w-[26%] mt-8 " type="submit">
                Login
            </button>

            <small className="w-full text-center text-[1.1rem] mt-2">
                {" "}
                <a className="form-control_anchor w-full" href="/register">Don't have an account?<span className="text-[#2B29AB] ml-2">Sign Up</span> </a>
            </small>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
