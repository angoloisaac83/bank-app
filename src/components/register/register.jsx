import React from 'react';
import {Link} from 'react-router-dom'
function Register() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:w-1/2 bg-green-500 flex flex-col justify-center items-center text-white p-10">
        <h1 className="text-4xl font-bold mb-4">Get Verrified</h1>
        <p className="text-lg text-center">Every day, Payyed makes thousands of customers happy.</p>
      </div>
      <div className="md:w-1/2 flex flex-col justify-center items-center bg-gray-100 p-10">
        <div className="w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-4">Register</h2>
          <br />
          <form className="space-y-4">
            <div>
              <label className="block mb-1" htmlFor="password">Full Name</label>
              <input className="w-full p-2 border border-gray-300 rounded" type="text" id="password" placeholder="Enter Password" />
            </div>
            <div>
              <label className="block mb-1" htmlFor="email">Email Address</label>
              <input className="w-full p-2 border border-gray-300 rounded" type="email" id="email" placeholder="Enter Your Email" />
            </div>
            <div>
              <label className="block mb-1" htmlFor="password">Password</label>
              <input className="w-full p-2 border border-gray-300 rounded" type="password" id="password" placeholder="Enter Password" />
            </div>  
            <button className="w-full bg-green-500 text-white p-2 rounded">Register</button>
          </form>
          <p className="mt-4 text-center">Already have an account? <Link to='/login' className="text-green-500">Sign In</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Register;
