import { Alert, Button, Checkbox, Dialog, DialogBody, DialogFooter, DialogHeader, Input, Spinner, Typography } from "@material-tailwind/react";
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import burgerImage from "../image/burger.png";

export function SignIn() {
  const navigate = useNavigate();
  const [idNumber, setIdNumber] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(idNumber, password);
    if (!idNumber || !password) {
      alert("Please enter both ID number and password.");
      return;
    }

   
    if (password === "test123") {
      console.log("Login Successful!");
      navigate('/home'); 
    } else {
      setError("Login failed. Please check your ID number and password.");
    }
  };

  const handleOpen = () => setOpen(!open);

  return (
    <div>
      <section className="m-8 flex gap-4">
        <div className="w-full lg:w-3/5 mt-24">
          <div className="text-center">
            <Typography variant="h2" className="font-bold mb-4">Log in</Typography>
            <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">
              Enter your ID number and password
            </Typography>
          </div>
          <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2" onSubmit={handleSubmit}>
            {error && (
              <Alert color="red" className="mb-4">
                {error}
              </Alert>
            )}
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                ID Number
              </Typography>
              <Input
                size="lg"
                placeholder="ID number"
                id="idNumber"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                Password
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
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
                    onClick={handleOpen}
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
              {loading ? <Spinner size="sm" /> : "Log in"}
            </Button>

            <Typography variant="paragraph" className="text-center text-black font-medium mt-4">
              Not registered?
            </Typography>

            <Link to="/signup" className="text-white">
              <Button className="mt-6 bg-[#F97108]" fullWidth>
                Register Now
              </Button>
            </Link>
          </form>
        </div>
        <div className="w-2/5 h-full hidden lg:block">
          <img
            src={burgerImage}
            className="h-full w-full object-cover rounded-3xl"
            alt="Burger"
          />
        </div>
      </section>

      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Terms and Conditions</DialogHeader>
        <DialogBody divider>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">
            Click the check box if you agree to the terms and conditions
          </Typography>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default SignIn;