import React from 'react'
import Sub_banner from './_component/Sub_banner'
import Client_About from './_component/Client_About'
import Logoshowcase from './_component/Logoshowcase'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <Sub_banner vedieoLink="/asset/banner4.mp4" title="OUR CLIENTS" description=""/>
      <Client_About/>
      <Logoshowcase/>
      <div className='py-5 bg-white'>
        <Image src="/asset/cllient_bottom.png" alt="clients" width={10000} height={10000} className='w-full h-full'/>
      </div>
    </div>
  )
}

export default page
