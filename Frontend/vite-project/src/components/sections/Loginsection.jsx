import{Eye} from "lucide-react"
import { Link,} from "react-router-dom";
import { useState } from "react";
function Loginsection() {


    const [formdata,setFormdata]=useState({
        email:"",
        password:""
    });

    const [errors,setErrors]=useState({
        email:"",
        password:""
    })

    function handlechange(e){
         setFormdata({
            ...formdata,
            [e.target.name]:e.target.value
         })
         setErrors({
            ...errors,
            [e.target.name]:""
         })
    }

   
   
    function handleSubmit(e){
         e.preventDefault();
         const newErrors = {
        email: "",
       password: "",
       };
       
       if (!formdata.email.trim()) {
           newErrors.email = "Email is required";
       }else if(!formdata.email.includes("@")||!formdata.email.includes(".")){
            newErrors.email="please enter a valid  email"
       }

       if (!formdata.password) {
           newErrors.password = "Password is required";
       }
        setErrors(newErrors);
        if(newErrors.email||newErrors.password){
             return;
        }
        
    }
   

    return ( 
       <section className="flex-1 flex items-center">

    <div className="max-w-7xl mx-auto w-full ">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

            <div className="hidden lg:flex justify-center items-center mt-5">

                <div className="border border-slate-700 rounded-xl h-96 w-full  flex items-center justify-center">
              Illustration
                </div>

            </div>
            {/* right side  */}
            <div className="flex justify-center mt-24">

               <div className="max-w-md w-full">

                <h1 className="text-4xl font-bold text-white">Welcome Back</h1>

                <p className="text-slate-400 mt-3">
                Sign in to continue your trading journey.
                </p>
               
               <form className="mt-8" onSubmit={handleSubmit}>
                
                 <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                    <input type="email" name="email" value={formdata.email} placeholder="Enter Your Email" className="w-full rounded-xl border border-slate-700 bg-slate-900 text-white px-4 py-3 outline-none focus:border-purple-500"  onChange={handlechange}/> 
                         {
              errors.email && (
            <p className="text-red-500 text-sm mt-2">
            {errors.email}
        </p>
         )
         }
                 </div>
                 
                 {/* wrapper for password */}
                 <div className="mt-6">
                  <label  className="block text-sm font-medium text-slate-300 mb-2">Password</label>
                  <div className="relative">
                  <input type="password" name="password" value={formdata.password} placeholder="Enter Your Password" className="w-full rounded-xl border border-slate-700 bg-slate-900 text-white px-4 py-3 outline-none focus:border-purple-500" onChange={handlechange} />
                    {
    errors.password && (
        <p className="text-red-500 text-sm mt-2">
            {errors.password}
        </p>
    )
}
                   <Eye className="absolute right-4 top-1/3"/>
                  </div>
                 </div>
                {/* ye forget passowrd ke liye wraper bnaaya */}

                    <div className="mt-4 flex justify-end mb-5">
                         <Link to= "/forgetpassword" className="text-purple-400 hover:text-purple-300 transition-colors">
                            Forget Password
                         </Link>
                   </div>
                   {/* signIN button */}
                     <div>
                        <button className="rounded-full   py-3 border border-slate-700 text-white w-full mb-10 bg-purple-600 hover:bg-purple-500 transition-colors">
                            Sign In
                        </button>
                     </div>

                     <div className="mt-6 text-center mb-6">
                          <p className="text-slate-400">
                            Don't have an account?{" "}
                            <Link to="/signup" className="text-purple-400 hover:text-purple-300 transition-colors">
                                Sign Up  
                            </Link>
                          </p>
                     </div>

               </form>
                 
            </div>
            </div>
           

        </div>

    </div>

</section>
     );
}

export default Loginsection;