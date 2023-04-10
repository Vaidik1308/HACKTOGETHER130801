import React, { useState } from "react";
import { useEffect } from "react";
// import { NavBar } from "../components/NavBar";
// import "./Register.css";
import {FcGoogle} from 'react-icons/fc'
import {AiFillGithub} from 'react-icons/ai'


const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [profilePicture, setProfilePicture] = useState();

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords must match";
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
      // console.log(formData);

      //sending formdata as a request to backend server
      const data = new FormData();
      data.append("profilePicture", e.target.ProfilePicture.files[0]);
      data.append("name", formData["name"]);
      data.append("email", formData["email"]);
      data.append("password", formData["password"]);

      const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        credentials: "include",
        body: data,
      });

      if (response.status === 200) {
        alert("Registered");
        const user = await response.json();
        sessionStorage.setItem("user", JSON.stringify(user));
        window.location.href = "/";
      } else {
        const error = await response.json();
        alert(error.error);
      }
    }
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        console.log({
          data: e.target.result,
          name: event.target.files[0].name,
        });
        setProfilePicture({
          data: e.target.result,
          name: event.target.files[0].name,
        });
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  };

  useEffect(() => {
    console.log(profilePicture);
  }, [profilePicture]);

  return (
    <div className="container1 w-full h-auto  mb-8">

     <div className="registrationContainer w-full ">
        <form className="RegisterForm w-full flex flex-col justify-center items-center gap-4" onSubmit={handleSubmit}>
          <div className="form-group  h-fit flex flex-col justify-center items-center w-full ">
            <h1 className="form-heading text-[2.6rem] h-[9vh]">Register</h1>
            {/* <div className="logo">
              <img src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=612x612&w=0&h=NGxdexflb9EyQchqjQP0m6wYucJBYLfu46KCLNMHZYM=" alt="" />

            </div>
              <div class="selectLogo"><span class="">Select profile picture</span></div> */}

            <div className="profileImg flex flex-col justify-center items-center w-full">
              <label className="lblUpload flex flex-col justify-center items-center" for="inputImg">
                <img
                  alt="profile_photo"  
                  src={profilePicture ? profilePicture.data : "https://th.bing.com/th/id/OIP.SqTcfufj92gVRBT45d045wAAAA?pid=ImgDet&w=400&h=400&rs=1"}
                  className="imgProfile w-[30%] rounded-[50%] my-2"
                ></img>
                <span className="text-[1.1rem] mb-2" id="selectedImage">
                  {profilePicture
                    ? profilePicture.name
                    : "Select a profile picture"}
                </span>
              </label>
              <input
                onChange={handleImageChange}
                name="ProfilePicture"
                id="inputImg"
                className="inputImg text-center  w-[15%] outline-none  p-2"
                type={"file"}
              ></input>
            </div>

            <label className="inputLabel text-left w-[29%] text-[1.4rem]" htmlFor="name">Name</label>
            <input
              required
              type="text"
              className="form-control w-[28%] h-[5vh] rounded-[5px] outline-none text-black p-2"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <span className="inputError">{errors.name}</span>
          </div>
          <div className="form-group w-full flex flex-col justify-center items-center gap-1">
            <label className="inputLabel text-left w-[29%] text-[1.4rem]" htmlFor="email">Email</label>
            <input
              required
              type="email"
              className="form-control w-[28%] h-[5vh] rounded-[5px] outline-none text-black p-2"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <span className="inputError">{errors.email}</span>
          </div>
          <div className="form-group w-full flex flex-col justify-center items-center gap-1">
            <label className="inputLabel text-left w-[29%] text-[1.4rem]" htmlFor="password">Password</label>
            <input
              required
              type="password"
              className="form-control w-[28%] h-[5vh] rounded-[5px] outline-none text-black p-2"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <span className="inputError">{errors.password}</span>
          </div>

          <div className="form-group w-full flex flex-col justify-center items-center gap-1">
            <label className="inputLabel text-left w-[29%] text-[1.4rem]" htmlFor="confirmPassword">Confirm Password</label>
            <input
              required
              type="password"
              className="form-control w-[28%] h-[5vh] rounded-[5px] outline-none text-black p-2"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            <span className="inputError">{errors.confirmPassword}</span>
          </div>
            <button className="registerButton flex justify-center items-center text-white gap-2 text-[1.2rem] bg-[#2B29AB] w-[15%] rounded-lg p-1 " type="submit">
            Register
            </button>
          <p className="mt-0 text-[1.2rem]">Or</p>


        </form>
          <div className="flex w-[100%] justify-center gap-5  mt-1 font-[500] font-Inter">
            <button className="registerButton flex justify-center items-center gap-2 text-[1.2rem] bg-white w-[15%] rounded-lg p-1 text-black">
            <span><FcGoogle/></span>  Sign In with Google
            </button>
            <button className="registerButton flex justify-center items-center gap-2 text-[1.2rem] bg-white w-[15%] rounded-lg  text-black p-1" >
            <span><AiFillGithub/></span>  Sign In with Google
            </button>
          </div>
          <small className="mb-1 flex justify-center mt-2">
            {" "}
            <a className="form-control_anchor text-[1.2rem] " href="/login">
              Already have an account? <span className="text-[#2B29AB]">Login</span> 
            </a>
          </small>
      </div>
    </div>
  );
};

export default RegisterForm;
