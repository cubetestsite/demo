import React from "react";
import BNNTPowder from "../assets/images/bnnt-powder-img.png"
import DispersionsImg from "../assets/images/dispersionImg.jpg"
import ResinBlendImg from "../assets/images/resinBlendImg.png"
import MedicalImg from "../assets/images/medicalImg.png"
import ThermalImg from "../assets/images/thermal.jpg"
import ElectronicsImg from "../assets/images/ElectronicsImg.png"


type Product = {
  title: string;
  image: string;
  link: string;
};

const products: Product[] = [
  {
    title: "BNNT",
    image: BNNTPowder,
    link: "#",
  },
  {
    title: "Dispersions",
    image: DispersionsImg,
    link: "#",
  },
  {
    title: "Resin Blends",
    image: ResinBlendImg,
    link: "#",
  },
  {
    title: "Medical",
    image: MedicalImg,
    link: "#",
  },
  {
    title: "Thermal",
    image: ThermalImg,
    link: "#",
  },
  {
    title: "Electronics",
    image: ElectronicsImg,
    link: "#",
  },
];

const ProductItem: React.FC = () => {
  return (
    <div className="row my-5 py-3">
      {products.map((product, index) => (
        <div
          key={index}
          className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4 "
        >
          <a
            href={product.link}
            className="product-card d-flex flex-column align-items-center justify-content-center text-decoration-none"
            title={product.title}
          >
            <img src={product.image} alt={`${product.title}-img`} />
            <span className="d-block text-white font-regular font-12">
              {product.title}
            </span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProductItem;
