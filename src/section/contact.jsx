import React, { useState } from 'react';
import { Phone, Mail, Send, User, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      title: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Failed to send message. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-[150vh] bg-black flex items-center justify-center p-4" id="contact">
      <div className="w-full max-w-6xl bg-gray-900 rounded-3xl shadow-2xl border border-gray-700 overflow-hidden">
        <div className="grid md:grid-cols-2 min-h-[600px]">
          
          {/* Contact Info */}
          <div className="bg-black p-8 md:p-12 text-white relative overflow-hidden">
            {/* background shapes */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-800 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gray-800 rounded-full translate-y-12 -translate-x-12"></div>
            <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-gray-700 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4 text-white">CONNECT<br />WITH US</h2>
              <p className="text-xl mb-8 text-gray-300">
                Let's be social besties and give your brand the main character makeover it deserves
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gray-800 border border-gray-600 rounded-full flex items-center justify-center group-hover:bg-gray-700 group-hover:border-gray-500 transition-all">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Ananya Prabhat</p>
                    <p className="text-gray-400">Founder, Whiz Media</p>
                    <p className="text-gray-500 text-sm">+91 82750 51480</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gray-800 border border-gray-600 rounded-full flex items-center justify-center group-hover:bg-gray-700 group-hover:border-gray-500 transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">whizmedia06@gmail.com</p>
                    <p className="text-gray-400">Get in touch</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <div className="w-16 h-1 bg-white rounded-full mb-4"></div>
                <p className="text-gray-400 text-sm">
                  Ready to transform your brand's digital presence? We're here to make it happen!
                </p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-8 md:p-12 bg-gray-900">
            <div className="h-full flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-2">Send us a message</h3>
              <p className="text-gray-400 mb-8">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-white border-2 border-gray-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <Send className="w-8 h-8 text-black" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-400">Thank you for reaching out. We'll get back to you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative group">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-white transition-colors" />
                      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full pl-12 pr-4 py-4 bg-black border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all hover:border-gray-400" />
                    </div>
                    <div className="relative group">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-white transition-colors" />
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="w-full pl-12 pr-4 py-4 bg-black border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all hover:border-gray-400" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative group">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-white transition-colors" />
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone" className="w-full pl-12 pr-4 py-4 bg-black border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all hover:border-gray-400" />
                    </div>
                    <div className="relative group">
                      <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-white transition-colors" />
                      <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required className="w-full pl-12 pr-4 py-4 bg-black border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all hover:border-gray-400" />
                    </div>
                  </div>

                  <div className="relative group">
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows="5" required className="w-full p-4 bg-black border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all resize-none hover:border-gray-400" />
                  </div>

                  <button type="submit" disabled={isSubmitting} className="w-full bg-white text-black font-semibold py-4 px-8 rounded-xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2 border border-gray-300">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-gray-400 border-t-black rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
