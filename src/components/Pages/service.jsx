import Typed from "react-typed";
import { React } from "react";
import { ServiceData } from "../../data/Services";
import Font from "react-font";
function Service({ dark, updateDark }) {
  return (
    <>
      <main className={`flex-shrink-0 home ${dark ? "" : ""}`}>
        <section className="container text-center p-2">
          <div
            className={`row p-5 text-center ${
              dark ? "text-dark" : "text-light"
            }`}
          >
            <Font family="Fasthand">
              <h1
                className={`fst-italic mb-5 ${
                  dark ? "text-dark" : "text-light"
                }`}
              >
                <Typed
                  strings={["Services"]}
                  typeSpeed={80}
                  showCursor={false}
                />
              </h1>
            </Font>
            <hr />
            <div className="container">
              <div className="row d-flex justify-content-between">
                {ServiceData.map((item, i) => (
                  <>
                    <div className="card  bg-transparent  col-lg-3">
                      <img
                        src={item.img}
                        className="card-img-top h-50 objectfit"
                        alt="CardImage"
                      />
                      <div
                        className="card-body d-flex flex-column"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title={item.decsription}
                      >
                        <h5 className="card-title">{item.name}</h5>
                        <Font
                          family="Fasthand"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title={item.decsription}
                        >
                          <p
                            className="card-text mb-4 fs-5 text-truncate"
                            style={{ maxWidth: "" }}
                          >
                            {item.decsription}
                          </p>
                        </Font>
                        {/* <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title={item.decsription}
                        >
                          Tooltip with HTML
                        </button> */}
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Service;
