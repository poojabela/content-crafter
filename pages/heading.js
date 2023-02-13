import { useState } from 'react';
import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import Router from "next/router";

const Heading = () => {

  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
      if (user === null) {
          Router.push('/')
      }
  })

  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false)
  const [copy, setCopy] = useState('copy');

  const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const prompt = formData.get("prompt");
      setLoading(true)
      const response = await fetch('/api/ai',
        {
          method: 'POST',
          body: JSON.stringify({
            "input": prompt,
            "type": "heading"
          }),
        }
      );
      setLoading(false)
      const data = await response.json();
      setResult(data.error ?? data.output);
    }

    const handleCopy = (result) => {
      navigator.clipboard.writeText(result);
      setCopy("Copied!");
    };
  
  return ( 
      <div className="h-[70vh] flex flex-col items-center px-3 pt-20">
        <form onSubmit={handleSubmit} className="bg-white flex w-[min(600px,_100%)] rounded p-1">
          <input name="prompt" 
          placeholder="eg. healthy eating habits blog"
          className="grow p-2 text-black focus:outline-none"
          />   
        <button  type='submit' className="bg-[linear-gradient(-33deg,_#FFA07A_5%,_#FFB6C1)] p-2 rounded disabled:cursor-not-allowed" disabled={loading === true}>Generate</button>
        </form>
        {result &&
        <p className="mt-6 w-[min(600px,_100%)] text-sm bg-[rgba(246,89,89,0.2)] border-[rgba(255,255,255,0.2)] border-2 p-2 rounded-md">{result}</p>
        }
        {result && 
        <button onClick={() => handleCopy(result)} className="mt-5 bg-[rgba(245,87,219,0.2)] border-[rgba(255,255,255,0.2)] border-2 p-2 rounded-md] rounded">{copy}</button>
        }
      </div>
    );
}
   
export default Heading;