import HeroSection from "../components/HeroSection"
import HeroImg from "../assets/images/products-bg-img.png"
import BodyWrapper from "../components/BodyWrapper"
import ProductItem from "../components/ProductItem"
import QuestionForm from "../components/QuestionForm"


const Product = () => {
  return (
    <div>
       <HeroSection
        imageSrc={HeroImg}
        altText="product-bg-img"
        title="PRODUCTS"
      />
      <BodyWrapper>
        <ProductItem   />
      </BodyWrapper>
      <QuestionForm/>
    </div>
  )
}

export default Product