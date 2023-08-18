
const Brand=()=>{
    return(
        <div className="flex flex-col gap-4 w-1/2">
            <h1 className="font-bold text-3xl">IndieBrew</h1>
            <p className="text-[#5a5444] leading-6">
                With IndieBrew, get personal feeds from resources
                all around the web, including Reddit, HackerNews, 
                and much more.
            </p>
            <p className="text-[#5a5444] leading-6">Made with 🖤 in the UK</p>
        </div>
    )
}

const FOOTER_LINKS=[
    {family:"Sitemap",links:["Homepage","Pricing"]},
    {family:"Resources",links:["Support","Contact","FAQ"]},
    {family:"Company",links:["About","Customers","Blog"]},
    {family:"Resources",links:["HackerNews","Reddit","Twitter"]},
]

const LinkSection=({family,links})=>{
    return(
        <div className="h-[5rem]">
            <h3 className="font-bold text-xl">{family}</h3>
            <ul>
                {
                    links.map((link,idx)=>{
                        return(
                            <li key={idx}>
                                <a href="#">{link}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const Links=()=>{
    return(
        <div className="grid grid-cols-2 w-1/3 place-items-center gap-y-8">
            {
                FOOTER_LINKS.map((ftlink,idx)=><LinkSection key={idx} {...ftlink}/>)
            }
        </div>
    )
}

export default function Footer(){
    return(
        <footer className="font-DMSans px-11 py-16 w-full flex flex-col md:flex-row justify-between bg-[#FBF8F3]">
            <Brand/>
            <Links/>
        </footer>
    )
}