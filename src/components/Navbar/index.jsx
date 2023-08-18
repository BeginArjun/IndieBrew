import Logo from '../../assets/Logo.svg'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    IconButton,
  } from '@chakra-ui/react'
import {FaBars} from 'react-icons/fa'

const LINKS=[
    {name:"Pricing",to:"#"},
    {name:"Support",to:"#"}
]

const MOBILE_NAV=()=>{
    return(
        <Menu>
            <MenuButton as={IconButton} icon={<FaBars className='text-2xl'/>}
            backgroundColor='transparent' _hover={{bgColor:'transparent'}}
            />
            <MenuList className='w-screen h-screen flex flex-col justify-start items-center'>
                {
                    LINKS.map((link,idx)=>{
                        return(
                            <MenuItem key={idx} className='flex flex-col items-center'>
                                <a href={link.to} className='text-center'>
                                    {link.name}
                                </a>
                            </MenuItem>
                        )
                    })
                }
            </MenuList>
        </Menu>
    )
}

export default function Navbar(){
    return(
        <header className='w-screen p-11 font-DMSans bg-transparent'>
            <nav className='flex justify-between items-center'>
                <a href="/">
                    <img src={Logo} alt="logo"/>
                </a>
                <ul className='hidden md:flex justify-between items-center gap-8'>
                    {
                        LINKS.map((link,idx)=>{
                            return(
                                <li key={idx}>
                                    <a href={link.to}>{link.name}</a>
                                </li>
                            )
                        })
                    }
                    <li>
                        <a href="/sign-up" className='rounded-md p-4 text-white bg-[#664efc]'>
                            <span className='font-bold'>Get Started</span> - It's free
                        </a>
                    </li>
                </ul>
                <div className='md:hidden'>
                    <MOBILE_NAV/>
                </div>
            </nav>
        </header>
    )
}