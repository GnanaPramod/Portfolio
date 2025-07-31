import React, { useState } from 'react';
import { Send, Github, Instagram, Linkedin, Mail, Code2, TerminalSquare } from 'lucide-react';
import emailjs from 'emailjs-com';
import myPhoto from './me.jpg'; // Ensure the image path is correct

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs.send(
      'service_z99qzbe',
      'template_sgxkn7o',
      templateParams,
      '5JcLNLPjvVLJs9n9O'
    )
    .then(
      () => {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      },
      (error) => {
        console.error('FAILED...', error);
      }
    );
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-start gap-16 mx-auto px-6 py-14 max-w-7xl">
        
        {/* Right Section - Form */}
        <div className="bg-white dark:bg-black rounded-xl shadow-2xl p-8 w-full md:max-w-lg order-1 md:order-none">
          <h1 className="text-3xl font-semibold text-center mb-6 text-black dark:text-white">Let's Work Together!</h1>
          <h4 className="text-lg font-medium text-center mb-8 text-slate-700 dark:text-slate-300">
            Have a project in mind or just want to connect? Send me a message and I'll get back to you soon.
          </h4>

          {isSubmitted ? (
            <div className="text-center text-green-600 font-semibold text-xl">
              Thank you! I will get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-black dark:text-white">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-black dark:border-white rounded-md bg-white dark:bg-black text-black dark:text-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-black dark:text-white">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-black dark:border-white rounded-md bg-white dark:bg-black text-black dark:text-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-black dark:text-white">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-black dark:border-white rounded-md bg-white dark:bg-black text-black dark:text-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-black dark:text-white">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-black dark:border-white rounded-md bg-white dark:bg-black text-black dark:text-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 active:scale-95 active:bg-amber-800 active:shadow-lg active:shadow-amber-500"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Left Section - Photo */}
        <div className="flex flex-col items-center w-full md:w-auto">
          <img
            src={myPhoto}
            alt="Your Photo"
            className="w-72 h-auto object-cover shadow-lg rounded-lg"
          />
          <h2 className="mt-6 text-3xl font-bold text-center text-black dark:text-white"> Maddili Gnana Pramod </h2>


          {/* Coding Profiles */}
          <div className="flex space-x-6 mt-6">
            <a href="https://leetcode.com/u/GnanaPramod/" target="_blank" rel="noopener noreferrer"
              className="p-3 bg-slate-100 dark:bg-slate-700 rounded-full hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors"
              aria-label="LeetCode Profile">
              <Code2 size={26} />
            </a>
            <a href="https://www.geeksforgeeks.org/user/gnanaprzhx5/" target="_blank" rel="noopener noreferrer"
              className="p-3 bg-slate-100 dark:bg-slate-700 rounded-full hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors"
              aria-label="GeeksforGeeks Profile">
              <TerminalSquare size={26} />
            </a>
            <a href="https://github.com/GnanaPramod" target="_blank" rel="noopener noreferrer"
              className="p-3 bg-slate-100 dark:bg-slate-700 rounded-full hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors"
              aria-label="GitHub Profile">
              <Github size={26} />
            </a>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="-mt-8 flex justify-center gap-8">
        <a href="https://www.instagram.com/pramod_maddili/" target="_blank" rel="noopener noreferrer"
          className="p-3 bg-slate-100 dark:bg-slate-700 rounded-full hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors"
          aria-label="Instagram Profile">
          <Instagram size={26} />
        </a>
        <a href="mailto:gnanapramodmaddili@gmail.com" className="p-3 bg-slate-100 dark:bg-slate-700 rounded-full hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors"
          aria-label="Send an Email">
          <Mail size={26} />
        </a>
        <a href="https://www.linkedin.com/in/gnanapramod/" target="_blank" rel="noopener noreferrer"
          className="p-3 bg-slate-100 dark:bg-slate-700 rounded-full hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors"
          aria-label="LinkedIn Profile">
          <Linkedin size={26} />
        </a>
      </div>
    </>
  );
};

export default ContactPage;
