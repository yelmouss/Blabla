import Typed from "react-typed";

import { TechData } from "../../data/Tech";
import Font from "react-font";
function Home({ dark, updateDark }) {
  return (
    <>
      <main
        className={`d-flex flex-column flex-shrink-0 home pb-5 ${
          dark ? "" : " bg-dark text-light"
        }`}
      >
        <div className="container text-center ">
          <div
            className={`row p-2 text-center ${
              dark ? "text-dark" : "text-light"
            }`}
          >
            <div className="col-lg-12 h-100  p-3  text-center">
              <div className="row">
                <div className="col-lg-12">
                  <h1 className={`fw-bolder fs-2`}>
                    <Font family="Fasthand">
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
                  <Font family="Fasthand">
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
              <Font family="Fasthand">
                <h1 className={`fw-bolder fs-1`}>
                  <Typed
                    showCursor={false}
                    strings={["I enjoy building and designing for the web 😎"]}
                    typeSpeed={40}
                  />
                </h1>
              </Font>
            </div>
          </div>
          <div className="container">
            <div className="row mt-5 pt-5">
              <div className="col-lg-6">
                <h2 className="mt-2 text-start">
                  "I got the experience <br /> Here is my toolbelt for success."
                </h2>
              </div>
              <div className="col-lg-6">
                <hr className="text-info" />
                <div className="container d-flex align-items-star">
                  <div className="row">
                  {TechData.map((item, i) => (
                    <div key={i} className="col-1 m-2">
                      <img
                        className="rounded  bg-light p-1 mb-1 rotating"
                        width={50}
                        height={50}
                        alt="ProjectImage"
                        src={item.image}
                      />
                       <Font family="Fasthand"> <p>{item.title}</p></Font>
                     
                      
                    </div>
                  ))}
                  </div>
              
                </div>
              </div>
            </div>
          </div>
          {/* 1651575785997834459 */}
          <div className="row mt-5 pt-5">
            <hr className="col-lg-6 text-info" />
            <div className="col-lg-6">
              <h2 className="text-end">Interested in Working Together?</h2>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
