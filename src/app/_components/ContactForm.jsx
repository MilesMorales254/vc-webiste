'use client'

import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState(''); // To distinguish between success and error messages
  const [emailError, setEmailError] = useState(''); // To store email validation error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
    // Email validation check on each change
    if (e.target.name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(e.target.value)) {
        setEmailError('Please enter a valid email address.');
      } else {
        setEmailError('');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('Please fill in all fields.');
      setStatusType('error');
      return;
    }
    
    // Prevent submission if email format is invalid
    if (emailError) {
      setStatusMessage('Please correct the errors before submitting.');
      setStatusType('error');
      return;
    }

    // EmailJS service information
    const serviceID = 'service_vgvsdvm';  // Replace with your Service ID
    const templateID = 'template_rq8xx9g'; // Replace with your Template ID
    const userID = 'UMuQO3XmlC5muvlzm';   // Replace with your Public Key from EmailJS

    // Send email using EmailJS
    emailjs.send(serviceID, templateID, formData, userID)
      .then(() => {
        setStatusMessage('Your message has been sent successfully!');
        setStatusType('success');
        setFormData({ name: '', email: '', message: '' }); // Clear form after submission
      })
      .catch((error) => {
        setStatusMessage('Failed to send message. Please try again later.');
        setStatusType('error');
        console.error('EmailJS Error:', error);
      });
  };

  // Automatically clear toast message after a few seconds
  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => setStatusMessage(''), 5000); // Clear after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center relative bg-cover bg-fixed">
      <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg max-w-3xl w-full text-white">
        <h2 className="text-4xl font-bold mb-8 text-center">CONTACT US</h2>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
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
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>
          
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
          
          <div className="col-span-1 md:col-span-2 text-center">
            <button type="submit" className="px-8 py-3 border border-white text-white bg-transparent rounded hover:bg-white hover:text-black transition-colors duration-300">
              SEND
            </button>
          </div>
        </form>
        
        {/* Toast Notification */}
        {statusMessage && (
          <div className={`fixed top-4 right-4 px-4 py-3 rounded shadow-lg text-white ${statusType === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
            {statusMessage}
          </div>
        )}

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
