import {
  Button,
  Checkbox,
  Input,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import pizzaImage from "../image/pizza.png";

const handleRegisterRequest = async (email, idNumber, password, setLoading, navigate) => {
  setLoading(true);
  try {
    const response = await fetch("http://localhost:8080/student/insertStudent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        idNumber,
        password,
      }),
    });

    setLoading(false);

    if (response.status === 200) {
      console.log("Registration Successful!");
      navigate("/home");
    } else {
      throw new Error(`Registration failed with status code ${response.status}`);
    }
  } catch (error) {
    setLoading(false);
    console.error("Error during registration:", error);
    alert("Registration failed. Please check your inputs and try again.");
  }
};

export function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateIdNumber = (idNumber) => {
    const idNumberRegex = /^\d{2}-\d{4}-\d{3}$/;
    return idNumberRegex.test(idNumber);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z]).+$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
    if (!email || !validateEmail(email)) {
      newErrors.email = "Invalid email format";
    }
    if (!idNumber || !validateIdNumber(idNumber)) {
      newErrors.idNumber = "Invalid ID number format";
    }
    if (!password || !validatePassword(password)) {
      newErrors.password = "Password must contain at least 1 uppercase letter";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      handleRegisterRequest(email, idNumber, password, setLoading, navigate);
    }
  };

  return (
    <section className="m-8 flex">
      <div className="w-2/5 h-full hidden lg:block">
        <img
          src={pizzaImage}
          className="h-full w-full object-cover rounded-3xl"
          alt="Pizza"
        />
      </div>
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Join Us Today</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">
            Enter your ID Number and password to register.
          </Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2" onSubmit={handleSubmit}>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Email
            </Typography>
            <Input
              size="lg"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              error={!!errors.email}
            />
            {errors.email && <Typography variant="small" color="red">{errors.email}</Typography>}
          </div>
          
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              ID Number
            </Typography>
            <Input
              size="lg"
              placeholder="ID number"
              value={idNumber}
              onChange={(e) => setIdNumber(e.target.value)}
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              error={!!errors.idNumber}
            />
            {errors.idNumber && <Typography variant="small" color="red">{errors.idNumber}</Typography>}
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              error={!!errors.password}
            />
            {errors.password && <Typography variant="small" color="red">{errors.password}</Typography>}
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center justify-start font-medium"
              >
                I agree to the&nbsp;
                <a
                  href="#"
                  className="font-normal text-black transition-colors hover:text-gray-900 underline"
                >
                  Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button
            type="submit"
            className="mt-6 bg-[#F97108]"
            fullWidth
            disabled={loading}
          >
            {loading ? <Spinner size="sm" /> : "Register Now"}
          </Button>

          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
            Already have an account?
            <Link to="/signin" className="text-gray-900 ml-1">Sign in</Link>
          </Typography>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
