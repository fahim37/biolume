import Hero from '@/components/web/Hero'
import Services from '@/components/web/Services'
import React from 'react'
import Service_solution from './_component/Service_solution'

const page = () => {
  return (
    <div>
      <Hero vedieoLink="/asset/banner2.mp4" title="OUR SERVICES & SOLUTIONS" description=""/>
      <Services/>
      <Service_solution/>
    </div>
  )
}

export default page
