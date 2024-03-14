import React from "react"
import arrayDestruct from "../images/portfolio/arrayDestruct.jpg"
import installNode from "../images/portfolio/installNode.jpg"
import navbar from "../images/portfolio/navbar.jpg"
import reactParallax from "../images/portfolio/reactParallax.jpg"
import reactSmooth from "../images/portfolio/reactSmooth.jpg"
import reactWeather from "../images/portfolio/reactWeather.jpg"
const Portfolio=()=>{
    return(
        <div name="portfolio" className="text-white bg-gradient-to-b from-black to-gray-800 w-full md:h-screen">
            <div className="flex flex-col max-w-screen-lg justify-center mx-auto p-4 w-full h-full">
                <div className="pb-8">
                    <p className="font-bold border-b-4 border-gray-500 text-4xl inline">Portfolio</p>
                    <p className="py-6">Check out some of my works right here</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-12 sm:px-0">
                    <div className="shadow-md rounded-lg shadow-gray-600">
                        <img src={arrayDestruct} alt="" className="rounded-md duration-300 hover:scale-105"></img>
                        <div>
                            <button>Demo</button>
                            <button>Code</button>
                        </div>
                    </div>
                    <div>
                        <img src={arrayDestruct} alt="" ></img>
                        <div>
                            <button>Demo</button>
                            <button>Code</button>
                        </div>
                    </div>
                    <div >
                        <img src={arrayDestruct} alt=""></img>
                        <div>
                            <button>Demo</button>
                            <button>Code</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;