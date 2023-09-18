import Button from '@components/common/button';
import React from 'react'

const NewsLetter = () => {
  return (
    <div className='flex-center py-5 backdrop-blur-lg bg-black bg-opacity-25 shadow-lg rounded-[30px] gap-5 w-full max-w-3xl'>
        <div>
          <p className='text-ps-green text-sm'>Ready to embark on your Web3 gaming journey?</p>
          <h3 className='text-ps-green text-2xl font-extrabold'>Join The Newsletter</h3>
        </div>
        <div className="relative">
          <input
            type="text"
            className="w-full pr-4 py-2 border-b focus:outline-none bg-transparent text-white"
            placeholder="Your email address"
          />
        </div>
        <div>
          <Button>
            Subscribe
          </Button>
        </div>
    </div>
  )
}

export default NewsLetter;