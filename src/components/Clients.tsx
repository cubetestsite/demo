import React from "react";
import ClientImg1 from "../assets/images/berkeley-logo.svg"
import ClientImg2 from "../assets/images/space-tango.svg"
import ClientImg3 from "../assets/images/space-tango.svg"
import ClientImg4 from "../assets/images/xo-logo.svg"
import ClientImg5 from "../assets/images/nasa-logo.svg"


interface Client {
  id: number;
  imgSrc: string;
  imgAlt: string;
}

const clientData: Client[] = [
  { id: 1, imgSrc: ClientImg1, imgAlt: "Client 1" },
  { id: 2, imgSrc: ClientImg2, imgAlt: "Client 2" },
  { id: 3, imgSrc: ClientImg3, imgAlt: "Client 3" },
  { id: 4, imgSrc: ClientImg4, imgAlt: "Client 4" },
  { id: 5, imgSrc: ClientImg5, imgAlt: "Client 5" },
];

const Clients: React.FC = () => {
  return (
    <div className="mb-5">
      <h3 className="orange-font font-bold font-32 text-center">Our Clients</h3>
      <div className="wrapper my-5">
        {clientData.map((client) => (
          <div className={`item item${client.id}`} key={client.id}>
            <img className="marquee-img" src={client.imgSrc} alt={client.imgAlt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
