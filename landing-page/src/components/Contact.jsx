import { useState } from "react"

const Contact = () => {
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setError] = useState({});
  const [success, setSuccess] = useState(false)
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormInfo({...formInfo, [name]: value});
    setSuccess(false);
  };  

  const validate = () => {
    const newErrors = {};
    if (!formInfo.name) newErrors.name = "Name is required";
    if (!formInfo.email){
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formInfo.email)){
      newErrors.email = "Invalid Email"
    }
    if (!formInfo.message) newErrors.message = "Message cannot be empty";
    setError(newErrors);
   return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      if(validate()){
        console.log("Form Submitted:", formInfo);
        setFormInfo({name: "", email: "", message: ""});
        setSuccess(true);
      }
    }
  return (
    <div>
      <div>
        <div className="text-center md:text-center lg:text-left my-3">
          <h1 className='font-bold text-3xl md:text-5xl text-[#f6f6f6]'>Let's Create<br /> Something <span className='text-amber-500'>Amazing</span></h1>
        </div>
        <form action="" onSubmit={handleSubmit} className='bg-[#2c2d2e] p-5 flex flex-col gap-2 rounded-xl'>
          <div>
            <label className='text-white'>Name</label> <br />
            <input value={formInfo.name} name="name" onChange={handleChange} type="text" placeholder='Your Name' className='bg-[#494a4b] mt-2 w-full p-3 rounded-sm text-white outline-1 outline-amber-500'/>
            {errors.name && <p className="text-red-700">{errors.name}</p>}
          </div>
          <div>
            <label className='text-white'>Email</label> <br />
            <input type="email" placeholder='Your Email' name="email" value={formInfo.email} onChange={handleChange} className='bg-[#494a4b] mt-2 w-full p-3 rounded-sm text-white outline-1 outline-amber-500'/>
              {errors.email && <p className="text-red-700">{errors.email}</p>}
          </div>
          <div>
            <label className='text-white'>Message</label> <br />
            <textarea name="message" onChange={handleChange} value={formInfo.message} id="message" cols="68" rows="5" placeholder='You Message' className='bg-[#494a4b] mt-2 p-3 text-white rounded-sm outline-1 outline-amber-500 w-full'></textarea>
              {errors.message && <p className="text-red-700">{errors.message}</p>}
          </div>
          <button type="submit" className='w-full bg-amber-500 p-3 text-white rounded-sm cursor-pointer'>Send</button>
          {success && (
            <p className="text-green-500 mt-3 text-center font-semibold">Message sent successfully</p>
          )}
        </form>
      </div>
    </div>
  )
}

export default Contact