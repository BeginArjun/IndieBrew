import SignUpForm from "./components/Form"
import Logo from './assets/Logo.svg'
import BackArrow from './assets/Back-Arrow.svg'

const Back=()=>{
    return(
            <a href="/" className="flex items-center justify-between gap-4 text-lg font-bold">
            <img src={BackArrow} alt="back" className="p-3 backdrop:blur-sm opacity bg-white"/>
            Back to homepage</a>
    )
}


const Nav=()=>{
    return(
        <header className='w-screen p-11 font-DMSans bg-transparent'>
            <nav className='flex justify-between items-center'>
                <a href="/">
                    <img src={Logo} alt="logo"/>
                </a>
                <Back/>
            </nav>
        </header>
    )
}

const Information=()=>{
    return(
        <div>
            <h1 className="text-3xl font-extrabold p-1">Create your personalized feed.</h1>
            <div className="h-4"></div>
            <ul className="flex flex-col gap-8 w-1/2">
                <li>
                    <span className="font-bold">🎈 Over 20 resources. </span>
                    With resources ranging from Reddit to IndieHackers, we've got all
                    your needs covered.
                </li>
                <li>
                    <span className="font-bold">🗞 Delivered weekly. </span>
                    Every week at exactly Tuesday 12:00 P.M. EST -- expect a value-packed 
                    digest right in your email.
                </li>
                <li>
                    <span className="font-bold">💡 Unlimited Ideas. </span>
                    With all the ideas you'll be reading about, what's stopping 
                    you from creating a sustainable startup?
                </li>
            </ul>
        </div>
    )
}

export default function SignUP(){
    return(
        <div className="bg-gradient-to-br from-[#fcfcf9]  to-[#ebcbf7] font-DMSans">
        <Nav/>
        <div className="flex flex-col lg:flex-row px-11 items-center">
            <Information/>
            <SignUpForm/>
        </div>
        </div>
    )
}