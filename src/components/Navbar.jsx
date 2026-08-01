import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faArrowTrendUp, faBoxArchive, faGears, faGraduationCap, faNewspaper, faAddressBook, faFile,faHome } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-scroll'

const items = [

    { id: 1, name: "About", icon: faUser, link: "About" },
    { id: 2, name: "Experience", icon: faArrowTrendUp, link: "Experience" },
    { id: 3, name: "Projects", icon: faBoxArchive, link: "Projects" },
    { id: 4, name: "Skills", icon: faGears, link: "Skills" },
    { id: 5, name: "Education", icon: faGraduationCap, link: "Education" },
    { id: 6, name: "Research Papers", icon: faNewspaper, link: "Research Papers" },
    { id: 7, name: "Contact", icon: faAddressBook, link: "Contact" },
    { id: 8, name: "Resume", icon: faFile, link: "Resume" }
];


const Navbar = () => {
    return (
        <aside className='h-dvh w-48 flex flex-col sticky top-0'>
            <div className='h-40 border-b border-gray-400 relative bg-gray-50'>
                <div className='w-38 h-38 bg-mist-400 absolute rounded-full left-0 right-0 top-0 bottom-0 m-auto'>
                    <img src='/profile.png' className='rounded-full w-36 h-36 left-0 right-0 top-0 bottom-0 m-auto absolute'></img>

                </div>
            </div>
            <div className='flex-1 '>

                <ul className='text-[#198c81]'>
                    {items.map((item) => (
                        <li key={item.id} >
                            <Link to={item.link} smooth={true} spy={true} activeClass='bg-blue-100 ' className='flex gap-3.5 p-1 items-center hover:bg-blue-100 hover:w-full cursor-pointer active:bg-blue-100'>
                                <div className='text-[25px] pl-4'>
                                    <FontAwesomeIcon icon={item.icon} />

                                </div>
                                <div className='font-light text-[17px]'>
                                    {item.name}

                                </div>

                            </Link>





                        </li>
                    ))}
                </ul>




            </div>


        </aside>
    )
}

export default Navbar