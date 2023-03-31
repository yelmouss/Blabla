import Typed from "react-typed";
import { React } from "react";
import { ProjectsData } from "../../data/Projects";
import Font from "react-font";
function Projet({ dark, updateDark }) {
  return (
    <> 
      <main className={`flex-shrink-0  home ${dark ? "" : ""}`}>
        <section className="container text-center p-2">
          <div
            className={`row p-5 text-center ${
              dark ? "text-dark" : "text-light"
            }`}
          >
             <Font family="Fasthand"> <h1 className={`fst-italic mb-5 ${dark ? "text-dark" : "text-light"}`}>
              <Typed strings={["My Portfolio"]} typeSpeed={80} showCursor={false} />
            </h1></Font>
           
            <hr />
            <div className="container-fluid">
              <div className="row d-flex justify-content-center">
                {ProjectsData.map((item, i) => (
                  <div className="card mb-3 col-lg-3 bg-transparent m-2 bordered border-light shaked" key={i}>
                    <img
                      src={item.image}
                      className="card-img-top h-50 objectfit bg-light"
                      alt={item.title}
                    />
                    <div
                      className={`card-body bg-transparent ${
                        dark ? "text-dark" : "text-light"
                      }`}
                    >
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description}</p>
                    </div>
                    <div className="card-footer bg-dark mb-2">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-solid fa-eye text-light fs-4"></i>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Projet;
