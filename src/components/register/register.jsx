import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "users"), {
        email,
        password,
        name,
        createdAt: new Date()
      });
      console.log("Document written with ID: ", docRef.id);
      // Clear the form fields or redirect the user as needed
      setEmail('');
      setPassword('');
      setName('');
      setError('');
    } catch (e) {
      console.error("Error adding document: ", e);
      setError('Failed to sign up');
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:w-1/2 bg-green-500 flex flex-col justify-center items-center text-white p-10">
        <h1 className="text-4xl font-bold mb-4">Get Verified</h1>
        <p className="text-lg text-center">Every day, Payyed makes thousands of customers happy.</p>
      </div>
      <div className="md:w-1/2 flex flex-col justify-center items-center bg-gray-100 p-10">
        <div className="w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-4">Register</h2>
          {error && <p className="text-red-500">{error}</p>}
          <form className="space-y-4" onSubmit={handleSignup}>
            <div>
              <label className="block mb-1" htmlFor="name">Full Name</label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                id="name"
                placeholder="Enter Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1" htmlFor="email">Email Address</label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="email"
                id="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1" htmlFor="password">Password</label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="password"
                id="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">Register</button>
          </form>
          <p className="mt-4 text-center">Already have an account? <Link to='/login' className="text-green-500">Sign In</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Register;
