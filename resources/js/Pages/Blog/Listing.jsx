import '@/../css/home.css';
import React from 'react'
import Navbar from './components/Navbar';


const Home = () => {
    return (
        <div className='body'>
          <Navbar searchbar={1}/>

            <div className="main">

                <div className="container">
                    <div className="logo-wrapper">
                        <h1 className='logo-txt'>Latest</h1>
                    </div>


                    <div className="card">

                        <img src="/images/img1.jpg" alt="Blog image" className="w-[880px] h-[400px] rounded-lg" />

                        <div className="txt">
                            <div className="title">
                                <h1>Cheerful Loving Couple Bakers Drinking Coffee</h1>
                            </div>
                            <div className="blog_info">
                                <p>It’s no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offering similar services — on the surface, at least.

                                    Producing creative, fresh projects is the key to standing out. Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. So, this article looks at how to make side projects work and why they’re worthwhile, drawing on lessons learned from our development of the ux ompanion app</p>
                            </div>
                            <div className="blog_btn">
                                <button>Read more...</button>
                            </div>
                        </div>
                        <hr />
                       
                    </div>

                    <div className="card">

                        <img src="/images/img1.jpg" alt="Blog image" className="w-[880px] h-[400px] rounded-lg" />

                        <div className="txt">
                            <div className="title">
                                <h1>Cheerful Loving Couple Bakers Drinking Coffee</h1>
                            </div>
                            <div className="blog_info">
                                <p>It’s no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offering similar services — on the surface, at least.

                                    Producing creative, fresh projects is the key to standing out. Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. So, this article looks at how to make side projects work and why they’re worthwhile, drawing on lessons learned from our development of the ux ompanion app</p>
                            </div>
                        </div>
                         <div className="blog_btn">
                                <button>Read more...</button>
                            </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Home
