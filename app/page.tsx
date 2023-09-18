import Button from "@components/common/button";
import Featured from "@components/featured";
import Footer from "@components/footer";
import LatestNews from "@components/latest-news";
import NewsLetter from "@components/newsletter";
import ProjectSeedLogo from "@components/three/projectseed-logo";
import Image from "next/image";


const ProductCard = () => (
  <div className="h-full w-[405px] bg-black bg-opacity-50 rounded-3xl shadow-lg relative">
    <Image src="/assets/images/home/game-fi.png" alt="Product Image" width={400} height={275}/>
    <div className="px-5">
      <h2 className="text-ps-green font-bold text-xl">Title</h2>
      <br/>
      <p className="text-sm text-white font-light leading-6 text-left">
        Immerse in captivating Web3 games. Experience a smooth transition from Web2 to Web3. 
        Earn as you play with our Play-and-Earn Rewards, fostering growth and investment.
      </p>
      <div className="w-1/2 py-5">
        <Button hasOpenInNewIcon> Learn More </Button>
      </div>
    </div>
  </div> 
)


const NewsCard = () => (
  <div className="rounded-2xl w-72 h-72 bg-black bg-opacity-50">
    <Image src="/assets/images/home/game-fi.png" alt="Product Image" width={400} height={275}/>
  </div>
)




export default function Home() {
  return (
    <>
      <div className="bg-home-banner bg-cover bg-right w-full min-h-screen">
        <div className="px-16 w-full relative">
          <div className="flex justify-center gap-10 items-start flex-col h-screen w-[45%] m-0">
            <Image
              className="ml-12" 
              src="/assets/images/home/seed-banner-logo.png" 
              alt="Project SEED logo banner" 
              width={195} 
              height={195}
            />
            <div>
              <h1 className="text-ps-green text-[45px] font-black drop-shadow-lg">Grow The Future of Gaming</h1>
              <h2 className="text-left text-sm text-white font-semibold leading-7 w-full pr-16">
                Discover a new era of Web3 gaming with Project SEED, 
                an all-encompassing ecosystem that seamlessly blends innovative gameplay and 
                cutting-edge blockchain technology. 
                Dive into a diverse portfolio of captivating games, 
                each offering unique opportunities for players and investors alike.
                </h2>
              </div>
          </div>
          <div className="absolute flex-center top-14 right-44">
            <Image
              className="z-10 relative" 
              src="/assets/images/home/globe.webp" 
              alt="Globe image" 
              width={600} 
              height={500}
            />
            <Image 
              className="absolute -bottom-20"
              src="/assets/images/home/mobile.webp" 
              alt="Mobile image" 
              width={500} 
              height={500}
            />
          </div>
        </div>
      </div>
      <Featured/>
      <div className="bg-home-product bg-cover bg-top w-full">
        <div className="filter backdrop-blur-md p-16 w-full min-h-screen">
          <div className="flex-center mb-10">
            <h2 className="text-ps-green font-semibold text-3xl w-3/5 text-center drop-shadow-lg">
              Revolutionizing Web3 gaming with engaging gameplay and a sustainable GameFi ecosystem.
            </h2>
          </div>
          <div className="flex-center">
            <Image src='/assets/images/home/home-product.webp' alt="Home product Image" width={1060} height={418}/>
          </div>
          <div className="flex flex-between -mt-20">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>
      </div>
      <div className="bg-home-news bg-cover bg-center min-h-screen h-full relative">
        <div className="w-full absolute z-0">
          <Image src='/assets/images/bg/home/latest-news-top-bg.webp' alt="News Gradient BG" width={1920} height={500}/>
        </div>
        <div className="relative px-16 z-10">
          <div className="flex-between py-10">
              <h2 className="text-4xl text-white font-black">Latest News</h2>
              <div className="w-32">
                <Button hasOpenInNewIcon> 
                  See all
                </Button>
              </div>  
          </div>
          <div className="flex-between gap-5">
            <LatestNews/>
          </div>
          <div className="flex-between relative h-96">
            <div className="w-full">
              <NewsLetter/>
            </div>
            <div className="absolute right-0 h-96 w-[600px]">
              <ProjectSeedLogo/>
            </div>
          </div>
        </div>
        <div className="z-10 relative w-full">
          <Footer/>
        </div>
      </div>
    </>
  )
}
 