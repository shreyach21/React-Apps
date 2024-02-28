import React from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import ProfileImage from "../images/portfolio/profileImage.jpeg"
const Home = () => {
    return (
        <div name="home" className="h-screen w-full px-5 bg-gradient-to-b from-black via-black to-gray-800">
            <div className="max-w-screen-lg mx-auto h-full flex flex-col justify-center items-center md:flex-row">
                <div className="flex flex-col h-full justify-center">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Frontend Developer</h2>
                    <p className="text-gray-500 py-5 max-w-md flex flex-col justify-center">I have a one-year experience od designing and developing amazing UI for webpages using html,talwind css, Node and React JS</p>
                    <div>
                        <button className="group text-white w-fit bg-gradient-to-r from-cyan-500 to-blue-500 py-3 px-6 my-2 flex items-center rounded-md cursor-pointer capitalize">
                            portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <IoIosArrowForward size={17} className="ml-1"/>
                            </span>
                        </button>
                    </div>
                </div>
                <div>
                    <img src={ProfileImage} className="rounded-2xl mx-auto w-2/3 md:w-3/5"/>
                </div>
            </div>
        </div>
    );
}
export default Home;