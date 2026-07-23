import Hero from "../components/layout/Hero";
import Navbar from "../components/layout/Navbar"
function Home() {
    return ( 
        <div className="min-h-screen bg-slate-950">
            <Navbar/>
               <Hero/>
         
        </div>
     );
}

export default Home;