import React, { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('CPU88D_5K0brYJZ_q');
  }, []);
  const [inputState, setInputState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const inputs = document.querySelectorAll(".form__input");

    const handleFocus = (e) => {
      const parent = e.target.closest('.form');
      if (parent) {
        parent.classList.add("active");
      }
    };

    const handleFocusOut = (e) => {
      const parent = e.target.closest('.form');
      if (parent) {
        if (e.target.value === "") {
          parent.classList.remove("active");
        } else {
          parent.classList.add("active");
        }
      }
    };

    inputs.forEach((input) => {
      input.addEventListener("focus", handleFocus);
      input.addEventListener("focusout", handleFocusOut);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", handleFocus);
        input.removeEventListener("focusout", handleFocusOut);
      });
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const key = name === 'from_name' ? 'name' :
               name === 'from_email' ? 'email' : name;
    setInputState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = inputState;
    
    // Validate form
    if (!name || !email || !subject || !message) {
      alert('Please fill in all fields');
      return;
    }

    setSending(true);
    setError(null);
    setSuccess(false);

    try {
      await emailjs.send(
        'service_7ab1v6w',  // Service ID
        'template_z91xhhz', // Template ID
        {
          to_name: 'Maria Rosales',
          from_name: name,
          from_email: email,
          message: message,
          subject: subject,
        },
        'CPU88D_5K0brYJZ_q' // Public Key
      );

      setSuccess(true);
      setInputState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('Failed to send email:', err);
    } finally {
      setSending(false);
    }
};
  return (
    <>
      {/* <!-- ====================================== Section Contact ===================================== --> */}
      <section className="contact-section" id="contact">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Get In Touch.
          </h2>
          <div className="line"></div>
        </div>
        <p className="services-product-text fade_up">
          TAKE A COFFEE & CHAT WITH ME
        </p>
        <div className="main-box-contact">
          <div className="contact-box-main zoom_in">
            <div className="mobile-icon-main">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M6 6H42C43.1046 6 44 6.89544 44 8V40C44 41.1046 43.1046 42 42 42H6C4.89544 42 4 41.1046 4 40V8C4 6.89544 4.89544 6 6 6ZM24.1212 23.3658L11.2944 12.4754L8.70556 15.5246L24.1462 28.6342L39.3088 15.5123L36.6912 12.4877L24.1212 23.3658Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <p className="contact-email-text">EMAIL</p>
              <p className="contact-email">
                <a href="mailto:teresitaya@gmail.com">teresitaya@gmail.com</a>
              </p>
            </div>
          </div>
          <div className="contact-box-main zoom_in">
            <div className="mobile-icon-main">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M14 4H36C37.1046 4 38 4.89544 38 6V42C38 43.1046 37.1046 44 36 44H12C10.8954 44 10 43.1046 10 42V0H14V4ZM14 8V18H34V8H14Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <p className="contact-email-text">PHONE</p>
              <p className="contact-email">
                <a href="tel:+17868381499">+1 (786) 838 1499</a>
              </p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form">
            <label htmlFor="name" className="form__label">
              NAME
            </label>
            <input
              type="text"
              className="form__input"
              placeholder="Your name"
              name="from_name"
              required
              autoComplete="off"
              value={inputState.name}
              onChange={handleChange}
            />
          </div>
          <div className="form">
            <label htmlFor="email" className="form__label">
              EMAIL
            </label>
            <input
              type="email"
              className="form__input"
              placeholder="Your email"
              name="from_email"
              required
              autoComplete="off"
              value={inputState.email}
              onChange={handleChange}
            />
          </div>
          <div className="form subject-input-main">
            <label htmlFor="subject" className="form__label">
              SUBJECT
            </label>
            <input
              type="text"
              className="form__input"
              placeholder="Your subject"
              name="subject"
              required
              autoComplete="off"
              value={inputState.subject}
              onChange={handleChange}
            />
          </div>
          <div className="form">
            <label htmlFor="message" className="form__label">
              MESSAGE
            </label>
            <textarea
              className="form__input"
              placeholder="Write your text..."
              name="message"
              required
              autoComplete="off"
              value={inputState.message}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>
          <div className="wrapper blog-btn">
            <button 
              type="submit" 
              className="btn-hover" 
              disabled={sending}
            >
              {sending ? 'Sending...' : 'Submit Now'}
            </button>
          </div>
          {error && (
            <div style={{ color: 'red', marginTop: '1rem', textAlign: 'center' }}>
              {error}
            </div>
          )}
          {success && (
            <div style={{ color: 'green', marginTop: '1rem', textAlign: 'center' }}>
              Message sent successfully!
            </div>
          )}
        </form>
        <iframe
          className="map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57569.95558393722!2d-80.23583075566407!3d25.782045300000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b6c6e2939b0f%3A0x68e7d6c7ac91a10a!2sBrickell%2C%20Miami%2C%20FL!5e0!3m2!1sen!2sus!4v1712532517653!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="footer">
          © 2025 | All rights reserved by
          <span>
            <a href="https://teresitaya.com" target="_blank" rel="noopener noreferrer">teresitaya</a>
          </span>
        </div>
      </section>
      {/* <!-- ====================================== Section Contact End ===================================== --> */}
    </>
  );
};
export default Contact;
