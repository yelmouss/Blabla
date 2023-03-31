import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


const position = [33.991980191627185, -6.874611381541911];

function Footer({ dark, updateDark }) {

  return (
    <>
      <footer
        className={`footer mt-auto fw-bold py-3 ${
          dark
            ? "text-dark p-2"
            : "bg-dark text-light  p-2 "
        }`}
      >
        
        <div className="container-fluid">
            
    
          <div className="row">
            
            <div className="col-md-6 col-lg-6 col-xl-6 mx-auto">
              <h6 className="text-uppercase mb-4 fw-bold fst-italic">
                {"<"} Yelmouss in the Map{"/>"}
              </h6>
              <MapContainer
                center={[33.991980191627185, -6.874611381541911]}
                zoom={8}
                scrollWheelZoom={false}
                className="rounded"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://yelmouss.com">Yelmouss</a>'
                />
                <Marker position={position}>
                  <Popup>
                    YELMOUSS. <br /> Location.
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
            <hr className="w-100 clearfix d-md-none" />
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 text-center ">
              <h6 className="text-uppercase mb-4 font-weight-bold p-2 rounded">
                {"<"} Infos Contact {"/>"}
              </h6>
              <hr />
              <div className="text-start">
              
              <p>
                <i className="fas fa-envelope mr-3"></i> yelmouss@yelmouss.com
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i> yelmouss.devt@gmail.com
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> + 212 612 865 681
              </p>
              <p>
                <i className="fas fa-home mr-3"></i> Rabat, Agdal 10095, MA
              </p>
              </div>
            
            </div>
          </div>
        </div>

        <div className="card-footer text-center fw-bold">
          © 2020 Copyright :{" "}
          <a
            className="text-warning"
            target={"_blank"}
            href="https://yelmouss.com/"
            rel="noreferrer"
          >
            yelmouss.com
          </a>
        </div>
        <a
          href="https://wa.me/212612865681"
          className="float"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-whatsapp my-float"></i>
        </a>

      </footer>
    </>
  );
}

export default Footer;
