import {
  Code2,
  Globe,
  Smartphone,
  BrainCircuit,
  Settings,
  Users,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    number: "01",
    title: "Software Development",
    description:
      "Custom software solutions designed around your business requirements.",
  },

  {
    icon: Globe,
    number: "02",
    title: "Website Development",
    description:
      "Modern, responsive and high-performance websites that grow your online presence.",
  },

  {
    icon: Smartphone,
    number: "03",
    title: "App Development",
    description:
      "Powerful mobile applications designed for exceptional user experiences.",
  },

  {
    icon: BrainCircuit,
    number: "04",
    title: "AI & ML Development",
    description:
      "Intelligent solutions using artificial intelligence and machine learning.",
  },

  {
    icon: Settings,
    number: "05",
    title: "Maintenance & Support",
    description:
      "Reliable technical support and ongoing maintenance for your digital products.",
  },

  {
    icon: Users,
    number: "06",
    title: "IT Consulting",
    description:
      "Strategic technology consulting to help businesses make better decisions.",
  },
];

function Services() {
  return (
    <section className="services section" id="services">

      <div className="container">

        {/* HEADING */}
        <div className="services-heading">

          <div>
            <span className="section-tag">
              WHAT WE DO
            </span>

            <h2>
              Technology
              <span> Without Limits.</span>
            </h2>
          </div>

          <p>
            From concept to deployment, we provide end-to-end
            technology solutions designed to help your business
            move forward.
          </p>

        </div>


        {/* SERVICE GRID */}
        <div className="services-grid">

          {services.map((service) => {

            const Icon = service.icon;

            return (
              <div
                className="service-card"
                key={service.number}
              >

                <div className="service-card-top">

                  <span className="service-number">
                    {service.number}
                  </span>

                  <div className="service-icon">
                    <Icon size={25} />
                  </div>

                </div>


                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>


                <a href="/services" className="service-link">
                  Learn More
                  <ArrowUpRight size={17} />
                </a>

              </div>
            );

          })}

        </div>


        <div className="services-bottom">

          <a href="/services" className="text-link">
            View All Services
            <span>→</span>
          </a>

        </div>

      </div>

    </section>
  );
}

export default Services;