import Socials from '../../assets/Social-Media-Icons.png'
import Mockup from '../../assets/Phone-Mockup.png'
import { HiArrowNarrowRight } from "react-icons/hi";
const Curated=()=>{
    return(
        <div className='flex flex-col lg:flex-row-reverse gap-4 lg:justify-between'>
            <img src={Socials} alt="socials" className='lg:w-1/3'/>
            <div className='font-DMSans lg:w-1/2 flex flex-col gap-4'>
                <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl'>Curate your feed from dozens of resources.</h1>
                <p className='text-[#5a5444] leading-6'>
                    We cover all major platforms where one could
                    want to curate their feed from
                    Reddit, ProductHunt, IndieHackers, 
                    and so much more.
                </p>
                <span className='text-[#664efc] font-bold inline-flex items-center gap-4 cursor-pointer'>See full list of resources <HiArrowNarrowRight/> </span>
            </div>
        </div>
    )
}

const Access=()=>{
    return(
        <div className='flex flex-col lg:flex-row items-center justify-between'>
            <img src={Mockup} alt="mockup" className='lg:w-1/3'/>
            <div className='font-DMSans flex flex-col gap-4 h-fit lg:w-1/2'>
                <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl'>Access your feed from the comfort of your phone</h1>
                <p>With native apps for both iOS and Android, accessing your curated content have never been easier</p>
                <span className='text-[#664efc] font-bold inline-flex items-center gap-4 cursor-pointer'>See full list of resources <HiArrowNarrowRight/> </span>
            </div>
        </div>
    )
}

export default function About(){
    return(
        <div className="w-full p-11 flex flex-col gap-8">
            <Curated/>
            <Access/>
        </div>
    )
}