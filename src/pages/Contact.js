import { BreadCrumbMenu } from "../components/BreadCrumb";

export const Contact = () => {
  return (
    <>
      <BreadCrumbMenu name="Contact Us" />
      <section className="contact-area sec-mar">
        <div className="container">
          <div className="row">
            <div className="col col-xl-6">
              <div className="title black">
                <span>Get In Touch</span>
                <h2>contact us if you have more questions.</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="office-info">
                <div className="icon">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <h4>Location</h4>
                <p>
                  168/170, Ave 01,Old York Drive Rich Mirpur, Dhaka, Bangladesh
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="office-info">
                <div className="icon">
                  <i className="bi bi-telephone"></i>
                </div>
                <h4>Phone</h4>
                <a href="tel:0123456789102">+012-3456-789102</a>
                <a href="tel:013456789102">+012-3456-789102</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="office-info">
                <div className="icon">
                  <i className="bi bi-envelope"></i>
                </div>
                <h4>Email</h4>
                <a href="https://demo-egenslab.b-cdn.net/cdn-cgi/l/email-protection#deb7b0b8b19ebba6bfb3aeb2bbf0bdb1b3">
                  <span
                    className="__cf_email__"
                    data-cfemail="741d1a121b34110c15190418115a171b19"
                  >
                    [email&#160;protected]
                  </span>
                </a>
                <a href="https://demo-egenslab.b-cdn.net/cdn-cgi/l/email-protection#3c4f494c4c534e487c59445d514c5059125f5351">
                  <span
                    className="__cf_email__"
                    data-cfemail="22515752524d505662475a434f524e470c414d4f"
                  >
                    [email&#160;protected]
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-information">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-xl-6">
                <div className="contact-form">
                  <h3>Have Any Questions</h3>
                  <form
                    id="contact-form"
                    action="https://demo-egenslab.b-cdn.net/html/finibus/demo/mail.php"
                    method="POST"
                  >
                    <div className="row">
                      <div className="col-12">
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div className="col-xl-6">
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="col-xl-6">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="col-12">
                        <textarea
                          name="message"
                          cols="30"
                          rows="10"
                          placeholder="Your message"
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <button type="submit">Send Message</button>
                      </div>
                      <p className="form-message"></p>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 col-xl-6">
                <div className="google-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.3701967527613!2d90.39056151540181!3d23.734174695311943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8c1f25e613d%3A0xaad562eec578f8ff!2sArts%20Faculty%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1644381552436!5m2!1sen!2sbd"
                    style={{
                      border: "0",
                    }}
                    allowFullscreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
