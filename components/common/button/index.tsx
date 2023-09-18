import { MdOpenInNew } from "react-icons/md";

interface ButtonProps {
    children: React.ReactNode,
    hasOpenInNewIcon?:boolean,
}

const Button = ({children,hasOpenInNewIcon}:ButtonProps) => {
  return (
    <div className='button_gradient text-white rounded-3xl flex-center gap-2 cursor-pointer w-auto px-5 py-3 font-semibold text-sm'>
       {children}
       { hasOpenInNewIcon && <MdOpenInNew/> }
    </div>
  )
}

export default Button;