import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsPersonLinesFill } from "react-icons/bs"
const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn<FaLinkedin size={30} />
                </>
            ),
            href: "https://linkedin.com",
            style: "rounded-tr-md"
        },
        {
            id: 2,
            child: (
                <>
                    Github<FaGithub size={30} />
                </>
            ),
            href: "https://github.com/shreyach21",
        },
        {
            id: 3,
            child: (
                <>
                    Email<HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:usershreya523@gmail.com",
        },
        {
            id: 4,
            child: (
                <>
                    Resume<BsPersonLinesFill size={30} />
                </>
            ),
            href: "/project info.pdf",
            style: "rounded-br-md",
            download: true
        }
    ]
    return (
        <div className="flex flex-col fixed top-[35%] left-0">
            <ul>
                {
                    links.map((link) => (
                        <li key={link.id} className={"flex justify-between px-4 h-14 w-40 items-center bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300"+" "+link.style}>
                            <a  href={link.href} className="flex justify-between items-center w-full text-white" target="_blank" download={link.download} ref="norefferer">{link.child}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
export default SocialLinks;