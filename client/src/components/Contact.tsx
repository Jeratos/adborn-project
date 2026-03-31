import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        workemail: "",
        phone: "",
        task: "",
    });
    
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const res = await fetch("http://localhost:3000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        console.log(data);
        
    }

  return (
    <>
    <main className='mx-20'>
        <section className='mt-2'>
            <div className='flex flex-col items-center leading-20'>
                <h1 className='text-[5vw] font-semibold'>Let’s Build a Creative</h1>
                <h1 className='text-[5vw] font-semibold'>Website Today!</h1>
            </div>
            <div className='flex justify-center items-center mt-10'>

            <button className='border-2 border-[#16BCFF] text-[#16BCFF] px-5 py-2 rounded-4xl text-2xl font-semibold'>Get now</button>
            </div>
            
        </section>
        
        <section className="mt-20">
            <div>
                <h2 className='text-2xl font-semibold'>
                    Are You Ready to Elevate Your Marketing to the Next Level?
                </h2>
                <p className='text-xl'>
                    Schedule a Demo and Discovery Call to See How We Can Help.
                </p>
            </div>
            <div className='flex justify-between '>

            <div className='px-10 text-lg mt-5'>
                <p>How Adborn SolutionsWorks</p>
                <p>Drive Scalable Marketing That’s Faster, Smarter, and More Affordable.</p>
                <p>Why We’re Different: 15x Faster Results Than Agencies, Freelancers, or In-House Teams.</p>
                <p>Find the Subscription That Maximizes Your Value.</p>
            </div>
            <div className='relative -top-15 bg-[#DBD9F4] text-gray-700 w-[535px] h-[586px] rounded-[35px]'>
                <div className='flex p-10 flex-col justify-center items-center'>

                <h2 className='text-2xl font-semibold text-black'>BOOK A CALL WITH US</h2>
                <p>(please wait 5 seconds for the calendar to load after clicking the button)</p>
                </div>
                <form className='flex flex-col gap-5 mx-15' onSubmit={handleSubmit} >
                    <input type="text" value={formData.firstname} onChange={handleChange} name='firstname' placeholder='First Name' className='border-b-2  px-5 py-2 text-2xl font-semibold' /> 
                    <input type="text" value={formData.lastname} onChange={handleChange} name='lastname' placeholder='Last Name' className='border-b  -2  px-5 py-2 text-2xl font-semibold' />
                    <input type="email" value={formData.workemail} onChange={handleChange} name='workemail' placeholder='Work Email' className='border-b-2  px-5 py-2 text-2xl font-semibold' />
                    <input type="text" value={formData.phone} onChange={handleChange} name='phone' placeholder='+19 (xxxx-xxxx)' className='border-b-2  px-5 py-2 text-2xl font-semibold' />
                    <input type="text" value={formData.task} onChange={handleChange} name='task' placeholder='what task are you looking to solve' className='border-b-2  px-5 py-2 text-2xl font-semibold' />
                    <button type='submit' className='border-2 border-[#16BCFF] text-[#16BCFF] px-5 py-2 rounded-4xl text-2xl hover:bg-[#16BCFF] hover:text-white transition-all duration-300 font-semibold'>Submit</button>
                </form>
            </div>
            </div>
        </section>
    </main>

    </>
  )
}
