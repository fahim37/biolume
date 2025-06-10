import React from 'react'
import Sub_banner from '../clients/_component/Sub_banner'
import About_Section from './_component/About_Section'

const page = () => {
  return (
    <div>
          <Sub_banner vedieoLink="/asset/about_banner.mp4" title="About Us" description=""/>
          <About_Section/>
    </div>
  )
}

export default page