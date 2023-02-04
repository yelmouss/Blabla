import Typed from "react-typed";
import { React } from "react";
import { ServiceData } from "../../data/Services";

function Service({ dark, updateDark }) {
  return (
    <>
      <main className={`flex-shrink-0 ${dark ? "" : "home"}`}>
        <section className="container text-center p-2">
          <div
            className={`row p-5 text-center ${
              dark ? "text-dark" : "text-light"
            }`}
          >
            <h1 className={`fst-italic mb-5 ${dark ? "text-dark" : "text-light"}`}>
              <Typed strings={["Services"]} typeSpeed={80} showCursor={false} />
            </h1>
            <hr />
            <div className="container">
              <div className="row d-flex justify-content-between">
                {ServiceData.map((item, i) => (
                  <>
        
                  
                  <div className="card  bg-transparent  col-lg-2 ">
                      <img src={item.img} className="card-img-top h-25" alt="CardImage" />
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text mb-4">{item.decsription}</p>
                      
                      </div>
                    </div></>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Service ;
