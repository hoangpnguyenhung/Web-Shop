import React, { useEffect, useRef, useState } from "react";
import Loading from "../../components/loading/Loading";
import Grid from "../../components/grid/Grid";
import ProductCard from "../../components/productCard/ProductCard";
import productData from "../../api/fake-api/products";
import Category from "../../components/category/Category";
import "./products.scss";
import Helmet from "../../components/helmet/Helmet";
import Button from "../../components/button/Button";
import { IoIosClose } from "react-icons/io";

const Products = (props) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(productData.getAllProducts());
  const toggleRef = useRef(null);

  const showFilter = () => {
    toggleRef.current.classList.add("active");
  };
  const closeFilter = () => {
    toggleRef.current.classList.remove("active");
  };

  const getProductFilter = (productList) => {
    setProducts(productList);
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    return clearTimeout();
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <Helmet title="Sản phẩm">
      <div className="products">
        <div className="products__show__filter" onClick={showFilter}>
          <Button color="blue" size="sm" animate="">
            bộ lọc
          </Button>
        </div>
        <div className="products__filter" ref={toggleRef}>
          <div className="products__filter__close" onClick={closeFilter}>
            <IoIosClose />
          </div>
          <Category getProductFilter={getProductFilter} />
        </div>
        <div className="products__content">
          <Grid col={3} md={2} sm={1} gap="30px">
            {products.map((item, index) => (
              <ProductCard
                key={index}
                img1={item.image01}
                img2={item.image02}
                title={item.title}
                price={item.price}
                slug={item.slug}
              />
            ))}
          </Grid>
        </div>
      </div>
    </Helmet>
  );
};

Products.propTypes = {};

export default Products;
