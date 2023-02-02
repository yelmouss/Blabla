import Typed from "react-typed";
import React from "react";
import { TechData } from "../../data/Tech";
// import openai from "openai";
function Home({ dark, updateDark }) {
  return (
    <>
      <main className={`flex-shrink-0 ${dark ? "" : "home"}`}>
        <div className="container text-center ">
          <div
            className={`row p-2 text-center ${
              dark ? "text-dark" : "text-light"
            }`}
          >
            <div className="col-lg-12 h-100  p-3  text-center">
              <div className="row">
                <div className="col-lg-12 p-5">
                  <h1 className={`fw-bolder fs-2`}>
                    <Typed
                      strings={["I'am Yass"]}
                      typeSpeed={50}
                      showCursor={false}
                    />
                    <br />
                  </h1>
                  <img
                    src="./img/Geek.png"
                    alt="Geek"
                    width="100"
                    height="100"
                    className="d-inline-block align-top bg-light rounded rounded-circle p-2 rotating"
                  />
                  <h2 className={`fw-bolder fs-1`}>
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
                </div>

              
              </div>

              <hr />

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
              <h1 className={`fw-bolder fs-2`}>
                <Typed
                  showCursor={false}
                  strings={["Welcome, Bienvenue, مرحبا  😎"]}
                  typeSpeed={40}
                />
              </h1>
              <br />

              <div className="row">
                <div className="col-12">
                  <h2 className="fs-4">
                    <Typed
                      strings={[
                        "Through this website, I share with you the demonstrations and projects on which I work",
                      ]}
                      typeSpeed={80}
                      showCursor={false}
                    />
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="container col-lg-6">
            <h2 className="text-dark text-center bg-light p-2 border border-dark rounded">
              <Typed
                strings={["I master this technologies🖥"]}
                typeSpeed={80}
                showCursor={false}
              />
            </h2>
          </div>
          <div className="container d-flex justify-content-center mb-5">
            <div className="mainHexa">
              <div className="containerHexa">
                {TechData.map((item, i) => (
                  <div key={i}>
                    <img
                      className="rounded-circle  bg-light p-2"
                      width={110}
                      height={120}
                      alt="ProjectImage"
                      src={item.image}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
