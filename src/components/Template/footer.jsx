import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Container } from "react-bootstrap";
const position = [33.991980191627185, -6.874611381541911];

function Footer({ dark, updateDark }) {
  return (
    <>
      <footer
        className={`footer mt-auto fw-bold mb-0  ${
          dark ? "text-dark" : "bg-dark text-light"
        }`}
      >
        <hr />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 mx-auto  mt-5">
            <Container>
                <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </Container>
            </div>
        
            <div className="col-md-4 col-lg-4 mx-auto mt-3 bg-light text-dark p-3 bg-opacity-25 rounded ">
              <h6 className="text-uppercase font-weight-bold p-2 rounded">
               Infos Contact
              </h6>
              <hr />
              <div className="text-start">
                <p>
                  <i className="fas fa-envelope mr-3"></i> yelmouss@yelmouss.com
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i>{" "}
                  yelmouss.devt@gmail.com
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
        <hr />
        <div className=" text-center fw-bold">
          © {new Date().getFullYear()} Copyright :{" "}
          <a
            className="text-warning"
            target={"_blank"}
            href="https://yelmouss.com/"
            rel="noreferrer"
          >
            yelmouss.com
          </a>
          <p>Made by Yassine Elmouss. All rights reserved.</p>
          <p>
            MADE WITH{" "}
            <img src="./img/react-original.svg" width={30} alt="react" /> &{" "}
            <img src="./img/bootstrap_4-icon.png" width={30} alt="react" />{" "}
          </p>
        </div>     
      </footer>
      <a
          href="https://wa.me/212612865681"
          className="float"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-whatsapp my-float"></i>
        </a>
    </>
  );
}

export default Footer;
