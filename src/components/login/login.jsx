import React from 'react';
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:w-1/2 bg-green-500 flex flex-col justify-center items-center text-white p-10">
        <h1 className="text-4xl font-bold mb-4">Welcome back!</h1>
        <p className="text-lg text-center">We are glad to see you again! Instant deposits, withdrawals & payouts trusted by millions worldwide.</p>
      </div>
      <div className="md:w-1/2 flex flex-col justify-center items-center bg-gray-100 p-10">
        <div className="w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-4">Log In</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1" htmlFor="email">Email Address</label>
              <input className="w-full p-2 border border-gray-300 rounded" type="email" id="email" placeholder="Enter Your Email" />
            </div>
            <div>
              <label className="block mb-1" htmlFor="password">Password</label>
              <input className="w-full p-2 border border-gray-300 rounded" type="password" id="password" placeholder="Enter Password" />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Remember Me</span>
              </label>
              <a href="#" className="text-green-500">Forgot Password?</a>
            </div>
            <button className="w-full bg-green-500 text-white p-2 rounded">Login</button>
          </form>
          <p className="mt-4 text-center">Don't have an account? <Link to='/register' className="text-green-500">Register</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
