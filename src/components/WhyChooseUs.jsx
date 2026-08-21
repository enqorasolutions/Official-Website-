import { CheckCircle2, ArrowRight, Users } from "lucide-react";

function WhyChooseUs() {
  const features = [
    "Experienced & Skilled Team",
    "Client-Centric Approach",
    "On-Time Delivery",
    "Quality & Security Focused",
    "Scalable & Future-Ready Solutions",
  ];

  return (
    <section className="why-choose section" id="why-us">
      <div className="container why-container">

        {/* Left Content */}
        <div className="why-content">
          <span className="section-tag">WHY CHOOSE US</span>

          <h2>
            We Build Solutions
            <br />
            That Build Your Business
          </h2>

          <p>
            At Enqora Solutions, we combine innovation, technology,
            and expertise to deliver measurable results.
          </p>

          <div className="features-list">
            {features.map((feature, index) => (
              <div className="feature-item" key={index}>
                <CheckCircle2 size={17} />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn btn-primary">
            More About Us
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Right Visual */}
        <div className="why-visual">
          <div className="team-image">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
              alt="Enqora Solutions Team"
            />
          </div>

          <div className="happy-clients-card">
            <div className="clients-icon">
              <Users size={30} />
            </div>

            <div>
              <h3>50+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;