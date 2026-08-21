import { ArrowRight, Code2, BarChart3, PieChart } from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow glow-1"></div>
      <div className="hero-glow glow-2"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <span className="eyebrow">
            WE BUILD DIGITAL FUTURES
          </span>

          <h1>
            Transforming Ideas
            <br />
            Into <span>Digital Solutions</span>
          </h1>

          <p>
            We help businesses innovate, grow, and succeed with
            cutting-edge technology and expert development services.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Get Started
              <ArrowRight size={18} />
            </a>

            <a href="#services" className="btn btn-outline">
              Our Services
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-card card-code">
            <Code2 size={28} />
          </div>

          <div className="floating-card card-chart">
            <PieChart size={30} />
            <div className="chart-lines">
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="floating-card card-stats">
            <BarChart3 size={27} />
          </div>

          <div className="laptop">
            <div className="laptop-screen">
              <div className="screen-top">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="code-window">
                <span className="code-pink">const</span>{" "}
                <span>Enqora</span> = {"{"}
                <br />
                <span className="indent">
                  innovation: <b>true</b>,
                </span>
                <br />
                <span className="indent">
                  solutions: <b>"digital"</b>
                </span>
                <br />
                {"}"}
              </div>

              <Code2 className="big-code-icon" size={75} />
            </div>

            <div className="laptop-base"></div>
          </div>

          <div className="phone">
            <div className="phone-notch"></div>
            <div className="phone-content">
              <div className="phone-icon"></div>
              <div className="phone-line"></div>
              <div className="phone-line small"></div>
              <div className="phone-box"></div>
            </div>
          </div>

          <div className="gear">⚙</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;