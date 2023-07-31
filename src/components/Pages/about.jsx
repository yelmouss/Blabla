// import Typed from "react-typed";
import React, { useEffect, useState } from "react";
import Typed from "react-typed";
import Font from "react-font";
function About({ dark, updateDark }) {

  const [title, setTitle] = useState();

  useEffect(() => {
    setTitle("Yelmouss - About")
    document.title = title;
  }, [title]);
  return (
    <>
      <main className={`flex-shrink-0 home  pt-5 mt-5  ${dark ? "" : ""}`}>
        <div className="text-light container-fluid">
          <section
            id="about"
            className={`about container-fluid    ${dark ? "text-dark" : "text-light"
              }`}
          >
            <div className="container-fluid ">
              <div className="row">
                <div
                  className="container-fluid col-lg-10 content bg-transparent mt-2"
                  data-aos="fade-left"
                >
                  <div className="row">
                    <div className="col ">
                      <div className="text-left  p-2 ">
                       
                          <img
                            src="img/yass.png"
                            className="blob  img-fluid h-25 p-0 col-4 col-lg-5 rounded mb-2 float-end"
                            alt="Yelmouss"
                          />
                       


                        <Font family="Ubuntu" className={"card"}>
                          <h1
                            className={`fst-italic bg-light text-dark p-3 bg-opacity-50  mb-5 ${dark ? "text-dark" : "text-light"
                              }`}
                          >
                            <Typed
                              strings={["ABOUT Me"]}
                              typeSpeed={80}
                              showCursor={false}
                            />
                            <br />
                            <Typed
                              strings={["Yassine ELMOUSS"]}
                              typeSpeed={80}
                              showCursor={false}
                            />
                          </h1>
                          <hr />
                          <h1>FULLSTACK Web Developer</h1>
                        </Font>
                      </div>

                      <p className="fst-italic card">
                        Passionate about new technologies and Software Dev
                      </p>
                      <div className="row  bg-light text-dark p-3 bg-opacity-50 ">
                        <div className="col-lg-6 ">
                          <ul>
                            <li>
                              <i
                                className="fas fa-chevron-right"
                                aria-hidden="true"
                              ></i>
                              <strong>Birthday:</strong>
                              <span>24 October 1994</span>
                            </li>
                            <li>
                              <i
                                className="fas fa-chevron-right"
                                aria-hidden="true"
                              ></i>
                              <strong>Website:</strong>
                              <span>
                                <a href="./"> Here </a>
                              </span>
                            </li>
                            <li>
                              <i
                                className="fas fa-chevron-right"
                                aria-hidden="true"
                              ></i>
                              <strong>Phone:</strong>
                              <span>+212 612 865 681</span>
                            </li>
                            <li>
                              <i
                                className="fas fa-chevron-right"
                                aria-hidden="true"
                              ></i>
                              <strong>City:</strong>
                              <span>Rabat, Morrocco</span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6">
                          <ul>
                            <li>
                              <i
                                className="fas fa-chevron-right"
                                aria-hidden="true"
                              ></i>
                              <strong>Age:</strong> <span>28</span>
                            </li>
                            <li>
                              <i
                                className="fas fa-chevron-right"
                                aria-hidden="true"
                              ></i>
                              <strong>Degree:</strong> <span>Bacheloor</span>
                            </li>
                            <li>
                              <i
                                className="fas fa-chevron-right"
                                aria-hidden="true"
                              ></i>
                              <strong>Email:</strong>
                              <span>yelmouss.devt@gmail.com</span>
                            </li>
                            <li>
                              <i
                                className="fas fa-chevron-right"
                                aria-hidden="true"
                              ></i>
                              <strong>Freelance:</strong> <span>Available</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <hr />
                      <p className="fs-3 fst-italic">
                        Certified in both F/E and B/E technologies. I developed
                        applications and programs that made the work amazing
                      </p>
                    </div>
                    <div className="col-11 col-lg-6 bg-light text-dark p-3 bg-opacity-50 ">
                      <section className="py-5">
                        <ul className="timeline-with-icons">
                          <li className="timeline-item mb-5">
                            <span className="timeline-icon">
                              <i
                                className="fas fa-rocket text-danger  fs-2 fa-sm fa-fw"
                                aria-hidden="true"
                              ></i>
                            </span>
                            <h5 className="fw-bold">Software Developer</h5>
                            <p>2013-present</p>
                            <p>
                              The Work involved in developing a website for the
                              Internet or an intranet. Web development can range
                              from the development of a simple plain text static
                              page to complex web applications, e-businesses and
                              social networking services
                            </p>
                          </li>
                          <li className="timeline-item mb-5">
                            <span className="timeline-icon">
                              <i
                                className="fas fa-hand-holding-usd text-warning fs-2 fa-fw"
                                aria-hidden="true"
                              ></i>
                            </span>
                            <h5 className="fw-bold">
                              Bachelor in economics &amp; business management
                            </h5>
                            <p className="mb-2 fw-bold">2011 - 2014</p>
                            <p>
                              Science City Economics concepts and their
                              applications to business and finance.
                            </p>
                          </li>
                        </ul>
                      </section>

                      <div className="hori-timeline" dir="ltr">
                        <ul className="list-inline events">
                          <li className="list-inline-item event-list">
                            <div className="px-4">
                              <div className="event-date bg-light text-dark fs-bold">
                                2015
                              </div>
                              <h5 className="font-size-16">
                                Real Time Analyst
                              </h5>
                            </div>
                          </li>
                          <li className="list-inline-item event-list">
                            <div className="px-4">
                              <div className="event-date bg-light text-dark fs-bold">
                                2017
                              </div>
                              <h5 className="font-size-16">
                                Analyst intraday Performer
                              </h5>
                            </div>
                          </li>
                          <li className="list-inline-item event-list">
                            <div className="px-4">
                              <div className="event-date bg-light text-dark fs-bold">
                                2020
                              </div>
                              <h5 className="font-size-16">
                                WorkForce Manager
                              </h5>
                            </div>
                          </li>

                          <li className="list-inline-item event-list">
                            <div className="px-4">
                              <div className="event-date bg-light text-dark fs-bold">
                                2023
                              </div>
                              <h5 className="font-size-16">
                                Instructor computer Science
                              </h5>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default About;
