import Link from "next/link";
import Image from "next/image";
import { shortenAddress } from "@utils/shortenAddress";
import { MdContentCopy } from "react-icons/md";

const SocialMedia = () => (
    <>
        {
            ['twitter','telegram','discord','facebook','instagram','youtube','tiktok','linkedIn','medium'].map((item,index) => (
                <Image 
                    className="select-none"
                    key={index} 
                    src={`/assets/icons/${item}.svg`} 
                    alt={`${item} icon`} 
                    width={32} 
                    height={32} 
                    draggable="false"
                />
            ))
        }
    </>
)

const CopyRight = () => (
    <div className="flex gap-1 text-white text-sm">
        <p className="flex gap-1">
            <span>&copy;</span>
            Project SEED
            <span>{new Date().getFullYear()}</span>
        </p> 
        <span>|</span>
        <Link href='/'><p>Privacy Policy</p></Link>
        <span>|</span>
        <Link href='/'><p>Terms of Service</p></Link>
    </div>
)


const navLink = {
    "Company" : [
        {
            title:'Our Story'
        },
        {
            title:'Whitepaper'
        },
        {
            title:'Updates'
        },
        {
            title:'Career'
        },
        {
            title:'Contact Us'
        },
        {
            title:'Brand'
        }
    ],
    "Products": [
        {
            title:'GameFi'
        },
        {
            title:'NFT'
        },
        {
            title:'SEED: Launchpad'
        },
        {
            title:'SEED: Labs'
        },
        {
            title:'SEED: Terrareum'
        },
        {
            title:'App'
        }
    ],
    "Token" : [
        {
            title:'$SHILL'
        },
        {
            title:'SEED: Staking'
        },
        {
            title:'Swap'
        },
    ],
    "SEED-GROW" : [
        {
            title:'IP owner'
        },
        {
            title:'Developer'
        },
       
    ] 
}
    

const ContractAddress = [
    {
        name:'BNB Chain',
        address:'0xfb9C339b4BacE4Fe63ccc1dd9a3c3C531441D5fE',
        link:'https://bscscan.com/token/0xfb9C339b4BacE4Fe63ccc1dd9a3c3C531441D5fE',
        icon:'binance.svg'
    },
    {
        name:'SOLANA',
        address:'6cVgJUqo4nmvQpbgrDZwyfd6RwWw5bfnCamS3M9N1fd',
        link:'https://explorer.solana.com/address/6cVgJUqo4nmvQpbgrDZwyfd6RwWw5bfnCamS3M9N1fd',
        icon:'solana.svg'
    },
]


const FooterLinks = ({title,items} : any) => (
    <div className="flex-1">
        <h3 className="text-white font-light text-sm mb-2">{title}</h3>
        <ul>
            {
                items.map((item : any,index : number)  => (
                    <li key={index} className="text-white cursor-pointer font-semibold mb-1 text-sm">
                       {item.title}
                    </li>
                ))
            }
        </ul>
    </div>
)



const Footer = () => {
  return (
    <footer className="pt-20 pb-10 px-16 bg-transparent bottom-0">
        <div className="flex justify-between items-start w-full">
            <div className="flex-start">
                <Image 
                    src='/assets/images/project-seed-logo-vertical.png' 
                    alt="ProjectSEED Logo" 
                    width={169} 
                    height={123} 
                    draggable="false"
                />
            </div>
            <div className="flex w-[70%]">
                <FooterLinks title="Company" items={navLink['Company']}/>
                <FooterLinks title="Products" items={navLink['Products']}/>
                <FooterLinks title="Token" items={navLink['Token']}/>
                <FooterLinks title="SEED: GROW" items={navLink['SEED-GROW']}/>
                <div>
                    <h3 className="text-white font-light text-sm mb-2">SHILL Token Address</h3>
                    <ul>
                    {
                        ContractAddress.map((item,index) => (
                            <li key={index}  className="text-white text-sm  cursor-pointer font-semibold mb-1 flex justify-start items-center gap-1">
                                <Image src={`/assets/icons/${item.icon}`} alt={`${item.icon} icon`} width={25} height={25}/>
                                <a href={item.link} target="_blank" rel="no-referrer">
                                    {item.name} 
                                    &nbsp;
                                    {shortenAddress(item.address)}
                                </a>
                                <MdContentCopy color="white"/>
                            </li>
                        ))
                    }
                    </ul>
                </div>
            </div>
        </div>
        <p className="text-white text-sm mt-10">
            Contact Us &nbsp;
            <span className="font-bold">
                contact@projectseed.com
            </span>
        </p>
        <div className="flex-between mt-2">
            <div className="flex gap-2">
                <SocialMedia/>
            </div>
            <CopyRight/>
        </div>
    </footer>
  )
}

export default Footer;