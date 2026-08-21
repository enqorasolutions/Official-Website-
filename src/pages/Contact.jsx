import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Send,
} from "lucide-react";

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch(
  "https://formspree.io/f/xrpzrpgy",
  {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  }
);

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <main className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="container contact-hero-content">
          <span className="section-tag">CONTACT US</span>

          <h1>
            Let's Start Something
            <span> Amazing Together.</span>
          </h1>

          <p>
            Have a project, idea, or business challenge? We'd love to hear
            from you and explore how Enqora Solutions can help.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section section">
        <div className="container contact-grid">

          {/* CONTACT INFORMATION */}
          <div className="contact-info">
            <span className="section-tag">GET IN TOUCH</span>

            <h2>
              Let's Talk About
              <span> Your Project.</span>
            </h2>

            <p>
              Whether you need a website, software, mobile application,
              AI solution, or technology consultation, our team is ready
              to help.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-icon">
                  <Mail size={22} />
                </div>

                <div>
                  <span>Email Us</span>
                  <a href="mailto:enqorasolutionshr@gmail.com">
                    enqorasolutionshr@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon">
                  <Phone size={22} />
                </div>

                <div>
                  <span>Call Us</span>
                  <a href="tel:+916266147354">
                    +91 62661 47354
                  </a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon">
                  <MapPin size={22} />
                </div>

                <div>
                  <span>Location</span>
                  <p>India</p>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="contact-form-wrapper">
            <h3>Send Us A Message</h3>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>

                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Last Name</label>

                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Email Address</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label>Service You're Interested In</label>

                <select name="service" defaultValue="" required>
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="Software Development">
                    Software Development
                  </option>
                  <option value="Website Development">
                    Website Development
                  </option>
                  <option value="App Development">
                    App Development
                  </option>
                  <option value="AI & ML Development">
                    AI & ML Development
                  </option>
                  <option value="IT Consulting">
                    IT Consulting
                  </option>
                  <option value="Maintenance & Support">
                    Maintenance & Support
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Tell Us About Your Project</label>

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us a little about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>

              {status === "success" && (
                <p className="form-success">
                  ✓ Thank you! Your message has been sent successfully.
                  We'll get back to you soon.
                </p>
              )}

              {status === "error" && (
                <p className="form-error">
                  Something went wrong. Please try again or contact us
                  directly by email.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="contact-bottom">
        <div className="container contact-bottom-content">
          <div>
            <h2>Ready To Build The Future?</h2>
            <p>
              Let's transform your idea into a powerful digital solution.
            </p>
          </div>

          <div className="contact-arrow">
            <ArrowRight size={28} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;