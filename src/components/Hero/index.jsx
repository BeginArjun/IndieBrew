import HeroImg from '../../assets/Feed-Mockup.png'
import UserImg from '../../assets/User-Avatars.svg'
const User=()=>{
    return(
        <img src={UserImg} alt="users"/>
    )
}

export default function Hero(){
    return(
        <div className='grid grid-rows-2 place-content-center lg:flex lg:flex-row-reverse px-11 py-7 gap-4 lg:items-center bg-transparent'>
            <div className='lg:w-[40%] w-[60%] mx-auto'>
            <img src={HeroImg} alt="Mockup" className=''/>
            </div>
            <div className='font-DMSans lg:w-1/2 w-full text-left flex flex-col gap-4'>
                <p className='font-bold text-3xl md:text-4xl lg:text-5xl'>Your weekly personal feed digest</p>
                <p className='text-[#5a5444] leading-6'>With IndieBrew, get personal feeds from resources all around the web,
                 including Reddit, HackerNews, IndieHackers, and much more.
                 </p>

                 <div>
                 <a href="/sign-up" className='rounded-md p-4 text-white bg-[#664efc]'>
                        <span className='font-bold'>Get Started</span> - It's free
                </a>
                </div>

                <div>
                    <User/>
                </div>
                <p>
                Join <span className='cursor-pointer text-[#664efc]'>32,642 </span> IndieBrewers in curating their personal digest.
                </p>
            </div>
        </div>
    )
}