/* eslint-disable jsx-a11y/anchor-is-valid */
import Typed from "react-typed";
import { useEffect, useRef, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import { HiEnvelope } from "react-icons/hi2";
import { AiOutlineCoffee } from "react-icons/ai";
import { TechData } from "../../data/Tech";
import Font from "react-font";
import emailjs from "emailjs-com";
import { ProjectsData } from "../../data/Projects";
import CountUp from "react-countup";

function Home({ dark, updateDark }) {
  const [title, setTitle] = useState();

  useEffect(() => {
    setTitle("Yelmouss - Home");
    document.title = title;
  }, [title]);

  const Swal = require("sweetalert2");
  const form = useRef();
  const handleClickScroll = () => {
    const element = document.getElementById("section-1");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_26ftg7j",
        "template_4ki5dqj",
        form.current,
        "0hE005DQ821xY6TWM"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Message sent",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            title: "Error!",
            text: error.text,
            icon: "error",
            confirmButtonText: "Cool",
          });
        }
      );
    if (form.current) {
      form.current.reset(); // réinitialiser les champs du formulaire
    }
  };

  window.addEventListener('scroll', function() {
    var parallaxImage = document.querySelector('.rotating');
    var scrollPosition = window.pageYOffset;

    parallaxImage.style.transform = 'translateY(' + scrollPosition * 0.9 + 'px)';
});

var rotatingElement = document.querySelector('.rotating');
rotatingElement.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
  return (
    <>
      <main
        className={`d-flex flex-column flex-shrink-0 home pb-5 pt-5 mt-5 ${
          dark ? "" : " bg-dark text-light"
        }`}
      >
        <div className="container text-center   ">
          <div
            className={`row p-2 text-center blob ${
              dark ? "text-dark" : "text-light"
            }`}
          >
            <div className="col-lg-12 h-100  p-3  text-center">
              <div className="row ">
                <div className="col-lg-12">
                  <h1 className={`fw-bolder fs-1`}>
                    <Font family="Ubuntu">
                      <Typed
                        strings={["I'am Yass"]}
                        typeSpeed={50}
                        showCursor={false}
                      />
                    </Font>
                  </h1>
                  <img
                    src="./img/Geek.png"
                    alt="Geek"
                    width="100"
                    height="100"
                    className="d-inline-block align-top bg-light rounded rounded-circle p-2 rotating"
                  />
                  <Font family="Ubuntu">
                    <h2 className={`fw-bolder fs-1 mt-5`}>
                      <Typed
                        showCursor={false}
                        strings={[
                          " Web developer 💻",
                          " Web Designer 🖌",
                          "FullStack Web Developer 💻",
                        ]}
                        typeSpeed={60}
                        backSpeed={70}
                      />
                    </h2>
                  </Font>
                </div>
              </div>

              <h1 className={` fs-5 fw-bolder text-center`}>
                <Typed
                  strings={["From Morocco 🇲🇦"]}
                  typeSpeed={50}
                  showCursor={false}
                />
                <br />
              </h1>
            </div>
            <div className="container col-10 col-lg-6">
              <Font family="Ubuntu">
                <h1 className={`fw-bolder fs-1 `}>
                  <Typed
                    showCursor={false}
                    strings={["I enjoy building and designing for the web 😎"]}
                    typeSpeed={40}
                  />
                </h1>
              </Font>
              <br />
              <button
                href="#"
                className="button button--hoo mt-5 text-center container col-sm-12 col-lg-7"
                onClick={handleClickScroll}
                style={{ height: "50px" }}
              >
                <div className="button__wrapper">
                  <span className="button__text"> Touch </span>
                </div>
                <div className="characterBox">
                  <div className="character wakeup">
                    <div className="character__face"></div>
                    <div className="charactor__face2"></div>
                    <div className="charactor__body"></div>
                  </div>
                  <div className="character wakeup">
                    <div className="character__face"></div>
                    <div className="charactor__face2"></div>
                    <div className="charactor__body"></div>
                  </div>
                  <div className="character">
                    <div className="character__face"></div>
                    <div className="charactor__face2"></div>
                    <div className="charactor__body"></div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div className="container col-12 text-center bg-light text-dark bg-opacity-50 rounded">
            <div className="row mt-5 pt-5">
              <div className="col-lg-6 ">
                <h2 className="mt-2 text-start ">
                  "I got the experience <br /> Here is my toolbelt for success."
                </h2>
              </div>
              <div className="col-lg-6">
                <hr className="text-info" />
                <div className="container d-flex align-items-star ">
                  <div className="row">
                    {TechData.map((item, i) => (
                      <div key={i} className="col-1 m-2 ">
                        <img
                          className="rounded  bg-light p-1 mb-1 rotating "
                          width={50}
                          height={50}
                          alt="ProjectImage"
                          src={item.image}
                        />
                        {/* <Font family="Ubuntu">
                          {" "}
                          <p>{item.title}</p>
                        </Font> */}
                      </div>
                    ))}
                  </div>
                </div>
                <br />
                <h2 className="mt-2 text-start">
                  "I Spent more than{" "}
                  <CountUp end={60000} duration={20} className="text-success" /> Hours of code
                </h2>
              </div>
            </div>
          </div>
          {/* 1651575785997834459 */}
          <div className="row mt-5 pt-5" id="section-1">
            <div className="col-lg-6  text-start mb-5">
              <h2 className="text-start"> Here are a few of my projects.</h2>
              <hr />
              <Carousel className="p-5 border border-light ">
                {ProjectsData.slice(0, 3).map((item, i) => (
                  <Carousel.Item key={i}>
                    <div className="row mb-5">
                      <div className="col-6">
                        <img
                          className="d-block w-75"
                          src={item.image}
                          alt="First slide"
                        />
                      </div>
                      <div className="col-6">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
              <hr />
              <h6 className="text-start mt-2">SUPPORT MY WORK</h6>
              <a
                href="https://www.buymeacoffee.com/yelmouss"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${dark ? "btn-light" : " btn-dark"}`}
              >
                <AiOutlineCoffee className="text-info" /> Buy Me a Coffe{" "}
              </a>
            </div>

            <div className="col-lg-6">
              <h2 className="text-start">Interested in Working Together?</h2>
              <hr className="text-info" />
              <Form
                ref={form}
                onSubmit={sendEmail}
                className="text-start p-2 container col-10"
              >
                {/* <!-- name --> */}
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="name"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your name"
                    required
                  />
                </div>

                {/* <!-- email --> */}
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="Your email"
                    required
                  />
                </div>

                {/* <!-- subject --> */}
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    id="subject"
                    placeholder="enter email subject"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    id="message"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <hr />
                <div className="text-end">
                  <button
                    type="submit"
                    className={`btn ${dark ? "btn-light" : " btn-dark"}`}
                  >
                    <HiEnvelope className="text-info" /> Get in Touch
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
