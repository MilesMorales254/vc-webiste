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
    description: "The Village Creative Ltd is a multi-user ecosystem made up of independent creative and communications practitioners. Our one of a kind curated space encourages interaction and collaboration between different disciplines and fosters innovative solutions.", 
    website: '#', 
    backgroundClass: 'bg-village-creative',  // Add unique class here
    logoSize: 450,  // Set specific logo size for this company
    isContactUs: true // Add this property
  },

  { 
    name: 'B-Wing', 
    logo: '/Images/b-wing-logo.png', 
    description: "A collective of Nairobi’s most innovative concept generators.", 
    website: '', 
    backgroundClass: 'bg-b-wing',  // Add unique class here
    logoSize: 500,  // Set specific logo size for this company
    isContactUs: false // Add this property
  },

 /* { 
    name: 'Shamba', 
    logo: '/Images/.png', 
    description: " ", 
    website: '', 
    backgroundClass: '',  // Add unique class here
    logoSize: 300,  // Set specific logo size for this company
    isContactUs: false // Add this property
  },*/

  { 
    name: 'SociaLite', 
    logo: '/Images/Socialite.png', 
    description: "Socialight Media Limited provides Digital-led Communication Solutions that bridge OUR clients to their Target Audiences.", 
    website: 'http://www.socialmedia.co.ke/', 
    backgroundClass: 'bg-socialite',  // Add unique class here
    logoSize: 400,  // Set specific logo size for this company
    isContactUs: false // Add this property
  },

  { 
    name: 'True Tribe', 
    logo: '/Images/True-Tribe-Network.png', 
    description: "The content agency that ignites content creation, produces the content and manages the sharing of this content across media in a manner that preserves the real touch for consumers to believe in the respective brands!", 
    website: '', 
    backgroundClass: 'bg-truetribe',  // Add unique class here
    logoSize: 450,  // Set specific logo size for this company
    isContactUs: false // Add this property
  },

 /* { 
    name: '3Verse', 
    logo: '/Images/.png', 
    description: " ", 
    website: '', 
    backgroundClass: 'bg-3verse',  // Add unique class here
    logoSize: 300,  // Set specific logo size for this company
    isContactUs: false // Add this property
  },*/

  /* { 
    name: 'The Block', 
    logo: '/Images/BLOCK logo.png', 
    description: "We’re a creative agency driven to challenge the status quo with globally competitive, future-proof solutions. Playful yet committed to quality, we ensure everything is crafted with care. Just keep it tasteful and swing it by us for an official nod.",
    website: '',
    backgroundClass: 'bg-the-block',  // Add unique class here
    logoSize: 300,  // Set specific logo size for this company
    isContactUs: false // Add this property
  },*/

  { 
    name: 'African Post Office', 
    logo: '/Images/APO-LOGO.png', 
    description: "APO is a film and television post production company founded by Francesca Ashiruka offering a full array of digital post production services.",
    website: 'https://africapostoffice.com/',
    backgroundClass: 'bg-apo',  // Add unique class here
    logoSize: 400,  // Set specific logo size for this company
    isContactUs: false // Add this property
  },

  { 
    name: 'Ajuma', 
    logo: '/Images/Ajuma Logo.png', 
    description: "AJUMA Ltd. is a leading casting and modeling agency owned and operated by international supermodel Ajuma Nasenyana.",
    website: '',
    backgroundClass: 'bg-ajuma',  // Add unique class here
    logoSize: 650,  // Set specific logo size for this company
    isContactUs: false // Add this property
  },  

  { 
    name: 'Black-eye Photography', 
    logo: '/Images/blackeye-logo-WHITE-1.png', 
    description: "Black eye photography is a ground-breaking production company with the aim of building solid foundations in the production industry for Kenyas most prolific photographers.",
    website: '',
    backgroundClass: 'bg-black-eye-photography',  // Add unique class here
    logoSize: 450,  // Set specific logo size for this company
    isContactUs: false // Add this property
  },

 /* { 
    name: 'Daraja', 
    logo: '/Images/.png', 
    description: " ", 
    website: '', 
    backgroundClass: 'bg-daraja',  // Add unique class here
    logoSize: 300,  // Set specific logo size for this company
    isContactUs: false // Add this property
  },*/

  { 
    name: 'Folklore', 
    logo: '/Images/folklore-white-brown.png', 
    description: "Folklore is a vibrant, Kenyan owned, award winning, multimedia communications and production company based in Nairobi. We aim to give our clients the highest quality production experience from concept to delivery. Founded on the vision of becoming a leading firm in the media consulting and content creation industry. We offer dynamic and creative crew support, production logistical support and post-production services/equipment for hire..",
    website: 'http://www.folklore.co.ke/',
    backgroundClass: 'bg-folklore',  // Add unique class here
    logoSize: 600,  // Set specific logo size for this company
    isContactUs: false // Add this property
  },

  { 
    name: 'Fat Rain Films', 
    logo: '/Images/fatrainfilms-3-300x300.png', 
    description: "Fat Rain Films offers world class film and television production services and since its inception in 2014 has created some of Kenya's most loved commercials.",
    website: 'http://www.fatrainfilms.com/',
    backgroundClass: 'bg-fat-rain-films',  // Add unique class here
    logoSize: 300,  // Set specific logo size for this company
    isContactUs: false // Add this property
  },

  { 
    name: 'Nomad', 
    logo: '/Images/nomad africa logo white.png', 
    description: "Nomad Africa, the travel agency behind Nomad Magazine, is all about crafting unique journeys and sparking a love for travel through engaging stories.Led by a team of intrepid female explorers, Nomad Africa specializes in creating off-the-beaten-path itineraries that leave a lasting impression.",
    website: 'https://nomad.africa/',
    backgroundClass: 'bg-nomad',  // Add unique class here
    logoSize: 450,  // Set specific logo size for this company
    isContactUs: false // Add this property
  },  

  { 
    name: 'Mookh', 
    logo: '/Images/MOOKH-logo.png', 
    description: "MOOKH is a social-ecommerce platform that allows sellers to quickly and easily set up online stores with installed payment integration.",
    website: 'https://mookh.com/',
    backgroundClass: 'bg-mookh',  // Add unique class here
    logoSize: 450,  // Set specific logo size for this company
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
