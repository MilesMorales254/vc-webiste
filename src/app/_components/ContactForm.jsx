'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your server
  };

  return (
    // Center the contact form with a transparent overlay background
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center relative bg-cover bg-fixed">
      <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg max-w-3xl w-full text-white">
        <h2 className="text-4xl font-bold mb-8 text-center">CONTACT US</h2>
        
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* Full Name Field */}
          <div className="col-span-1 md:col-span-1">
            <input
              type="text"
              name="name"
              placeholder="Full name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-white bg-transparent text-white placeholder-white rounded focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          
          {/* Email Field */}
          <div className="col-span-1 md:col-span-1">
            <input
              type="email"
              name="email"
              placeholder="E-mail address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-white bg-transparent text-white placeholder-white rounded focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          
          {/* Message Field (spans full width) */}
          <div className="col-span-1 md:col-span-2">
            <textarea
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-3 border border-white bg-transparent text-white placeholder-white rounded focus:outline-none focus:ring-2 focus:ring-white"
            ></textarea>
          </div>
          
          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2 text-center">
            <button type="submit" className="px-8 py-3 border border-white text-white bg-transparent rounded hover:bg-white hover:text-black transition-colors duration-300">
              CONTACT
            </button>
          </div>
        </form>
        
        {/* Additional Contact Information */}
        <div className="flex justify-between items-center text-sm">
          <div>
            <p>Mbabane Rd., Lavington<br />Nairobi, Kenya</p>
          </div>
          <div>
            <p>Phone:<br />+254 (0)731 777355</p>
          </div>
          <div>
            <p>Email:<br />admin@villagecreativegroup.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
