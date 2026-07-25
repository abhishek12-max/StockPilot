import Aifeatures from "../components/layout/Aifeatures";
import Hero from "../components/layout/Hero";
import Livemarket from "../components/layout/Livemarket";
import Navbar from "../components/layout/Navbar"
function Home() {
    return ( 
        <div className="min-h-screen bg-slate-950">
            <Navbar/>
            <Hero/>
            <Livemarket/>
            <Aifeatures/>
        </div>
     );
}

export default Home;