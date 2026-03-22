import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  // Using FormSubmit.co - this works instantly with your email!
  const formActionUrl = "https://formsubmit.co/saiprasadpaloju@gmail.com";

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title script-font">
          Contact Me
        </h2>

        <div className="contact-container shadow-hover">
          <div className="contact-info glass">
            <h3>Let's Connect</h3>
            <p className="contact-desc">
              Whether you have a question, a project opportunity, or just want to say hi,
              feel free to reach out. I'll try my best to get back to you!
            </p>

            <div className="info-item">
              <div className="info-icon"><Mail size={24} /></div>
              <div>
                <h4>Email</h4>
                <p>saiprasadpaloju@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><MapPin size={24} /></div>
              <div>
                <h4>Location</h4>
                <p>Telangana, India</p>
              </div>
            </div>
          </div>

          <form
            className="contact-form glass"
            action={formActionUrl}
            method="POST"
            target="_blank"
          >
            {/* FormSubmit.co Configuration */}
            <input type="hidden" name="_subject" value="New Portfolio Message!" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Sai Prasad"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="sp@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                placeholder="Hello Sai Prasad..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
