import Image from "next/image";

const DownloadOOButton = () => {
  return (
    <div className="bg-black rounded-full text-white flex justify-start items-center p-1 pr-5 gap-2 cursor-pointer">
        <Image 
            src="/assets/icons/oo-small-logo.png" 
            alt="Logo"
            width={40}
            height={40}
        />
        <p className="font-semibold leading-4 text-sm">
            Download
            <br/>
            Outland Odyssey
        </p>
    </div>
  )
}

export default DownloadOOButton