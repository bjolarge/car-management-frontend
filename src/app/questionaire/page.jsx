"use client"
import React, {useState} from 'react';
 import Image from 'next/image'
import {Tooltip} from "@nextui-org/react"

 {/* {/* // export const metadata = { 
//   title: 'xactwear contactpage',
//   description: 'Here we meet your needs xactly!',
// } */}

function Questionaire(props)
{
  const [formvalue, setFormvalue]= useState({name:'',email:'', message:'' });

  const handleInput =(e)=>{
    const { name, value}= e.target;
    setFormvalue({...formvalue, [name]:value});
    //console.log(formvalue);
  }
  const handleFormsubmit= async (e)=>{
    e.preventDefault();
    
   await fetch('http://localhost:3001/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
		  name:formvalue.name,
        email: formvalue.email,
        message: formvalue.message
      })
    });
   console.log("success");

  }
    return(
        <>
            <div className='mt-[10px] pt-10'>
            <h1 className='text-[60px] text-center'>Let's keep in touch with you</h1>
          <div className='flex gap-100px center'>
        <div className='flex-1 h-125 relative'>
           <Image src="/contact.png" alt='xact contact' fill={true} className='object-contain'/>
        </div>
            <form onSubmit={ handleFormsubmit} className='flex-1 flex flex-col	g-20px'>            
                <div className="col-md-3">  
                <label className="form-label text-white">Name</label>  
                <Tooltip>          
                <input  type="text" name='name' value={formvalue.name} onChange={ handleInput}  className='form-control'  placeholder='Name...' />
                </Tooltip> 
              </div>

              <div className="col-md-3">  
                <label className="form-label text-white">Email</label>  
                <Tooltip>           
                <input type="text" name='email' value={formvalue.email } onChange={ handleInput}  className='form-control'  placeholder='Email...' />
                </Tooltip> 
              </div>

              <div className="col-md-3">  
                <label className="form-label text-white">message</label> 
                <Tooltip>  
                    <textarea type="text" name='message' value={formvalue.message} onChange={ handleInput}  className='form-control'  placeholder='Message...' ></textarea>          
                <input type="text" name='message' value={formvalue.message} onChange={ handleInput}  className='form-control'  placeholder='Message...' />
                </Tooltip> 
              </div>
              <div className="col-md-2">  
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2'>Submit</button>
              </div>


               </form>

          </div>
        </div>
        </>
    );
}

export default Questionaire;