import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  const doLogin = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("signupData"));
    // console.log(userData);
    if (!userData) {
      // alert("No user found. Please SignUp");
      toast.warn("No user found. Please SignUp");
      setErrors("No user found. Please SignUp");
      return;
    }

    const foundUser = userData?.find(
      (user) => user?.email === email && user?.password === password
    );
    // console.log(foundUser);

    if (foundUser) {
      toast.success("login successfull");
      // alert('login success')
      navigate("/");
      // console.log('login success');
    } else if (email !== userData.email && password !== userData.password) {
      // alert('Invalid email & password')
      toast.warning("invalid email & password");
      // console.log('login failed');
    }
  };

  return (
    <>
      <form
        onSubmit={doLogin}
        className="flex items-center justify-center min-h-screen bg-gray-100 m-5"
      >
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            Login
          </h2>

          <div className="mt-6">
            <div>
              <label className="block text-sm text-gray-600">
                Username & email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Type your username and email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm text-gray-600">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Type your password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <Link
                to="/forgot"
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-2 mt-6 text-white bg-gradient-to-r from-blue-400 to-pink-500 rounded-md hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              LOGIN
            </button>
          </div>

          <div className="mt-6 text-center text-gray-600">Or Sign Up Using</div>
          <div className="flex items-center justify-center mt-4 space-x-4">
            <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
              {/* <!-- Facebook icon --> */}
              <i className="fab fa-facebook-f"></i>
            </button>
            <button className="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center">
              {/* <!-- Twitter icon --> */}
              <i className="fab fa-twitter"></i>
            </button>
            <button className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center">
              {/* <!-- Google icon --> */}
              <i className="fab fa-google"></i>
            </button>
          </div>

          <div className="mt-6 text-center text-gray-600">
            <h3>Dont have an account? <span> <Link to="/signup" className="hover:underline text-blue-600">
              SignUp
            </Link></span></h3>
           
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
