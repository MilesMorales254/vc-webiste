'use client'

//import React from 'react'
import React, { useState } from 'react'
import Navbar from '../_components/navbar'
import Footer from '../_components/footer'
import Section from '../_components/Section'
import ContactForm from '../_components/ContactForm'

const companies = [
  { 
    name: 'Village Creative', 
    logo: '/Images/vc-White.png', 
    description: "The Village Creative is a collective of independent creative communication practitioners and producers.", 
    website: '#', 
    backgroundClass: 'bg-village-creative',  // Add unique class here
    isContactUs: true // Add this property
  },
  { 
    name: 'Fat Rain Films', 
    logo: '/Images/fatrainfilms-3-300x300.png', 
    description: "Fat Rain Films offers world class film and television production services and since its inception in 2014 has created some of Kenya's most loved commercials.",
    website: 'http://www.fatrainfilms.com/',
    backgroundClass: 'bg-fat-rain-films',  // Add unique class here
    isContactUs: false // Add this property
  },
  // Add other companies here...
]

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="flex-grow">
        {companies.map((company, index) => (
          <Section key={index} company={company} />
        ))}
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage
