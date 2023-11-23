"use client"
import { useState } from "react";

const Questionaire = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const feedback = { name, email, feedback };

    fetch('http://localhost:3001/feedback', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(feedback)
    }).then(() => {
      console.log('new feedback added');
    })
  }

  return (
    <div className="create">
      <h2 className="font-bold items-center">We would like to know how to serve you better. Kindly fill out this questionaire</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input 
        className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text" 
          required 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email:</label>
        <input 
        className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text" 
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Feedback:</label>
        <input
        className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
          type="text" 
          required 
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        {/* <label>Email:</label>
        <textarea
          required
          value={email}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select> */}
        <button type="submit" className=" text-white rounded-full bg-blue-500 hover:bg-blue-700 flex flex-col items-center">Add Feedback</button>
      </form>
    </div>
  );
}
 
export default Questionaire;