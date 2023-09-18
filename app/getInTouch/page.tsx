import Image from 'next/image';
import Footer from "@components/footer"
import NewsLetter from "@components/newsletter"


const assetPath = '/assets/images/get-in-touch/';

const contactList = [
  {
    icon:'E-mail',
    link:'',
  },
  {
    icon:'Twitter',
    link:'',
  },
  {
    icon:'Telegram',
    link:'',
  },
  {
    icon:'Discord',
    link:'',
  },
  {
    icon:'Facebook',
    link:'',
  },
  {
    icon:'Instagram',
    link:'',
  },
  {
    icon:'Youtube',
    link:''
  },
  {
    icon:'Tiktok',
    link:''
  },
  {
    icon:'LinkedIn',
    link:''
  },
  {
    icon:'Medium',
    link:''
  }
]


const countryList = [
  {
    icon:'Africa'
  },
  {
    icon:'Arabic'
  },
  {
    icon:'China'
  },
  {
    icon:'France'
  },
  {
    icon:'Indian'
  },
  {
    icon:'Indonesia'
  },
  {
    icon:'Korea'
  },
  {
    icon:'Persian'
  },
  {
    icon:'Philippines'
  },
  {
    icon:'Russian'
  },
  {
    icon:'Spanish'
  },
  {
    icon:'Sri-Lanka'
  },
  {
    icon:'Thailand'
  },
  {
    icon:'Turkey'
  },
  {
    icon:'Vietnam'
  },
]

const GetInTouch = () => {
  return (
    <div className="bg-getInTouch bg-center bg-cover min-h-screen">
       <div className="w-full absolute z-0">
          <Image src='/assets/images/bg/home/latest-news-top-bg.webp' alt="News Gradient BG" width={1920} height={500}/>
        </div>
        <div className='relative w-full'>
          <div className='w-full max-w-5xl pt-44 m-auto'>
              <h1 className='text-6xl relative text-white font-semibold mb-10'>Get in <span className="font-black">Touch</span></h1>
              <h2 className='text-ps-green text-3xl font-black'>Contact Us</h2>
              <div className='pt-10'>
                <div className='grid grid-cols-4 gap-y-5 '>
                  {
                    contactList.map((item,index) => (
                      <div  key={index} className='border-b border-b-white w-full py-3 flex items-center gap-5'>
                        <Image src={`${assetPath + item.icon + (item.icon === 'Instagram' ? '.png':'.svg')}`} alt={`${item.icon} icon`}  width={50} height={50}/>
                        <p className='text-white font-semibold'>{item.icon}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
              <h2 className='text-ps-green text-3xl font-black pt-20'>Local Communities</h2>
              <div className='py-10'>
                <div className='grid grid-cols-4 gap-y-5'>
                    {
                      countryList.map((item,index) => (
                        <div  key={index} className='border-b border-b-white w-full py-3 flex items-center gap-5'>
                          <Image  src={`${assetPath + item.icon + '.svg'}`} alt={`${item.icon} icon`}  width={50} height={50}/>
                          <p className='text-white font-semibold'>{item.icon}</p>
                        </div>
                      ))
                    }
                </div>
              </div>
              <div className='flex-center mt-10'>
                <NewsLetter/>
              </div>
          </div>
        </div>
       <Footer></Footer>
    </div>
  )
}

export default GetInTouch