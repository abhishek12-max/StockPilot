import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar"
import Aifeatures from "../components/sections/Aifeatures";
import Hero from "../components/sections/Hero";
function Home() {
    return ( 
        <div className="min-h-screen bg-slate-950">
            <Navbar/>
             <Hero/>
             <Aifeatures/>
             <Footer/>
        </div>
     );
}

export default Home;