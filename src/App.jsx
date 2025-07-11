import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LC = "abcdefghijklmnopqrstuvwxyz";
const N = "0123456789";
const SY = "~!@#$$%^&*()_+";

const App = () => {
  let [passwordLen, setPasswordlen] = useState(5);
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [number, setNumber] = useState(false);
  let [Symbols, setSymbols] = useState(false);
  let [fpass, setFpass] = useState("");

  const copy = () => {
    navigator.clipboard.writeText(fpass);
    toast("Successfully Copied");
  };

  const notify = () => {
    toast("Please Select at least one Box");
  };

  let createPassword = () => {
    let finalPassword = "";
    let charSet = "";
    if (uppercase || lowercase || number || Symbols) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (number) charSet += N;
      if (Symbols) charSet += SY;

      for (let i = 0; i < passwordLen; i++) {
        finalPassword += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }

      setFpass(finalPassword);
    } else {
      notify();
    }
  };

  return (
    <>
      <div className='bg-[#1c1c1c] w-screen flex items-center justify-center min-h-screen text-white px-4'>
        <div className='w-[90%] sm:w-[70%] md:w-[60%] lg:w-[45%] xl:w-[35%] min-h-[50%] bg-transparent border-2 border-red-500 rounded-xl p-5'>
          <h1 className='text-3xl font-bold text-center'>Password Generator</h1>

          <div className='flex flex-col sm:flex-row mt-5 gap-5'>
            <input
              value={fpass}
              type="text"
              className='font-bold px-2 py-2 bg-transparent border-2 border-red-500 rounded w-full sm:w-[80%] outline-none'
              readOnly
            />
            <button onClick={copy} className='bg-red-500 px-5 font-medium active:scale-95 py-2 rounded'>
              Copy
            </button>
          </div>

          <div className='flex items-center justify-between px-2 mt-5'>
            <h1 className='text-xl font-semibold'>Password Length</h1>
            <input
              min={5}
              max={20}
              value={passwordLen}
              onChange={(e) => { setPasswordlen(e.target.value) }}
              className='w-20 h-10 rounded outline-none text-lg px-2 py-1 bg-transparent border-2 border-red-500'
              type="number"
            />
          </div>

          <div className='flex items-center justify-between px-2 mt-5'>
            <h1 className='text-xl font-semibold'>Include Uppercase Letters</h1>
            <input
              onClick={() => { setUppercase(!uppercase) }}
              className='w-5 h-5 rounded'
              type="checkbox"
            />
          </div>

          <div className='flex items-center justify-between px-2 mt-5'>
            <h1 className='text-xl font-semibold'>Include Lowercase Letters</h1>
            <input
              onClick={() => { setLowercase(!lowercase) }}
              className='w-5 h-5 rounded'
              type="checkbox"
            />
          </div>

          <div className='flex items-center justify-between px-2 mt-5'>
            <h1 className='text-xl font-semibold'>Include Numbers</h1>
            <input
              onClick={() => { setNumber(!number) }}
              className='w-5 h-5 rounded'
              type="checkbox"
            />
          </div>

          <div className='flex items-center justify-between px-2 mt-5'>
            <h1 className='text-xl font-semibold'>Include Symbols</h1>
            <input
              onClick={() => { setSymbols(!Symbols) }}
              className='w-5 h-5 rounded'
              type="checkbox"
            />
          </div>

          <button onClick={createPassword} className='bg-red-500 text-lg active:scale-95 w-full mt-5 py-2 rounded font-semibold'>
            Generate Password
          </button>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default App;
