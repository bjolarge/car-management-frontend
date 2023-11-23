"use client"
import Head from "next/head";
import axios from "axios";
import { useState } from "react";
import SVG from "react-inlinesvg";

export default function QrcodeforVehicleIdentification() {
  const [input, setInput] = useState(null);
  const [response, setResponse] = useState(null);

  const getQrcode = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/qrcode/", {
    //   const res = await axios.get("http://localhost:3001/qrcode", {
        params: { input },
      });

      setResponse(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const downloadQrcode = () => {
    const url = window.URL.createObjectURL(new Blob([response]));
    const urlObject = document.createElement("a");
    urlObject.href = url;
    urlObject.setAttribute("download", "file.svg");
    document.body.appendChild(urlObject);
    urlObject.click();
  };

  return (
    <div className="flex flex-col relative bg-grey font-mono items-center min-h-screen border-t-2 border-active">
      <Head>
        <title>QR Code Generator for Vehicle Identification</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-6xl font-bold text-primary mt-20">
        VDT CarPark QR Code <span className="text-active">Generator</span>
      </h1>
      <h2 className="text-active text-2xl mt-6">
        Enter the plate number e.g [IKD-231-09] of the car you packed with us.
      </h2>
      <input
        type="text"
        placeholder=" Enter the plate number e.g IKD-231-09 to generate the QR Code"
        className="mt-10 text-sm w-1/2 p-4 rounded rounded-b text-bold"
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button
        className="mt-6 p-4 hover:opacity-90 rounded text-primary font-bold inline-flex bg-green-500 hover:bg-red-500"
        onClick={() => getQrcode()}
      >
        Generate QR Code
      </button>
      {response && (
        <div className="mt-10 bg-active">
          <SVG src={response} />
          <button
            className="w-full text-primary text-base p-1"
            onClick={() => downloadQrcode()}
          >
            Download
          </button>
        </div>
      )}
      <div className="absolute bottom-4">
        <p className="text-primary text-xs">
          Made by Joseph -{"Joebaba"}
        </p>
      </div>
    </div>
  );
}