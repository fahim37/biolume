
import Hero from '@/components/web/Hero'
import React from 'react'
import Brand_About from './Brand_About'
import LogoShowcase from './LogoShowcase'

const page = () => {
  return (
    <div>
      <Hero vedieoLink="/asset/banner5.mp4" title="BRAND PARTNERS" description=""/>
      <Brand_About/>
      <LogoShowcase/>
    </div>
  )
}

export default page
