import { LuSearch } from 'react-icons/lu'
import { CgMenuRightAlt } from 'react-icons/cg'


const NavBar: React.FC<NavBarProps> = ({Links}) => {
  return (
    <nav
    className="w-full h-16  sm:w-[90%] fixed top-2 backdrop-blur-sm bg-white/60  flex justify-between items-center px-4"
    >
        <p
        className="text-xl font-medium text-gray-800 font-Merriweather"
        >
        Furni.shop
        </p>

        <ul
        className="flex justify-between items-center space-x-14"
        >
        {Links.map((link) => (
            <li
            key={link.name}
            className="text-gray-600 cursor-pointer  font-medium"
            >
            {link.name}
            </li>
        ))}
        </ul>
        <div className="right-side gap-9 flex justify-center items-center ">
            <LuSearch className="text-2xl text-gray-600 cursor-pointer" />
            <CgMenuRightAlt className="text-xl text-gray-600 cursor-pointer" />

        </div>
    </nav>
  )
}

export default NavBar