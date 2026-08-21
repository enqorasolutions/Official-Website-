import {
  Code2,
  Globe,
  Smartphone,
  BrainCircuit,
  Users,
  Wrench,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

function ServicesPage() {
  const services = [
    {
      icon: <Code2 size={32} />,
      title: "Software Development",
      description:
        "Custom software solutions built to streamline your business and support long-term growth.",
      features: [
        "Custom Software",
        "Web Applications",
        "Business Systems",
      ],
    },
    {
      icon: <Globe size={32} />,
      title: "Website Development",
      description:
        "Modern, responsive, and high-performing websites designed to create a strong digital presence.",
      features: [
        "Business Websites",
        "E-Commerce Websites",
        "Web Applications",
      ],
    },
    {
      icon: <Smartphone size={32} />,
      title: "App Development",
      description:
        "User-friendly and powerful mobile applications built for modern businesses and customers.",
      features: [
        "Android Apps",
        "iOS Apps",
        "Cross-Platform Apps",
      ],
    },
    {
      icon: <BrainCircuit size={32} />,
      title: "AI & ML Development",
      description:
        "Intelligent solutions using artificial intelligence and machine learning to automate and innovate.",
      features: [
        "AI Solutions",
        "Machine Learning",
        "Business Automation",
      ],
    },
    {
      icon: <Users size={32} />,
      title: "IT Consulting",
      description:
        "Strategic technology guidance to help you make smarter decisions and grow your business.",
      features: [
        "Technology Strategy",
        "Digital Transformation",
        "IT Planning",
      ],
    },
    {
      icon: <Wrench size={32} />,
      title: "Maintenance & Support",
      description:
        "Reliable maintenance and ongoing support to keep your digital products secure and performing well.",
      features: [
        "Bug Fixes",
        "Security Updates",
        "Performance Support",
      ],
    },
  ];

  return (
    <main className="services-page">
      {/* Hero */}
      <section className="services-page-hero">
        <div className="container services-page-hero-content">
          <span className="section-tag">OUR SERVICES</span>

          <h1>
            Technology That Powers
            <span> Your Growth.</span>
          </h1>

          <p>
            We build innovative digital solutions tailored to your business.
            From websites and software to AI-powered applications, Enqora
            Solutions helps turn your ideas into reality.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-list section">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">WHAT WE DO</span>
            <h2>Solutions Designed For Your Business</h2>

            <p>
              Explore our range of technology services built to help your
              business innovate, grow, and succeed.
            </p>
          </div>

          <div className="services-page-grid">
            {services.map((service, index) => (
              <div className="service-detail-card" key={index}>
                <div className="service-detail-icon">
                  {service.icon}
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="service-features">
                  {service.features.map((feature, i) => (
                    <div key={i} className="service-feature">
                      <CheckCircle2 size={17} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="service-link">
                  Get Started
                  <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-page-cta">
        <div className="container services-cta-content">
          <div>
            <span className="section-tag">LET'S WORK TOGETHER</span>

            <h2>
              Have An Idea?
              <span> Let's Build It.</span>
            </h2>

            <p>
              Tell us about your project and let's create something amazing
              together.
            </p>
          </div>

          <Link to="/contact" className="btn btn-dark">
            Start Your Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ServicesPage;