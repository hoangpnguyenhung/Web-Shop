import React from "react";
import PropTypes from "prop-types";
import Helmet from "../components/helmet/Helmet";
import {
  Section,
  SectionBody,
  SectionTitle,
} from "../components/section/Section";
import ProductView from "../components/productView/ProductView";
import productData from "../api/fake-api/products";
import ProductItem from "../components/productCard/ProductCard";
import Grid from "../components/grid/Grid";
import { useParams } from "react-router-dom";

const ProductDetail = (props) => {
  const { slug } = useParams();
  const listProduct = productData.getProducts(8);
  const product = productData.getProductBySlug(slug);
  return (
    <Helmet title="Product Deltail">
      <Section>
        <SectionBody>
          <ProductView product={product} />
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Khám phá thêm</SectionTitle>
        <SectionBody>
          <Grid col={4} md={2} sm={1} gap="20px">
            {listProduct.map((item, index) => (
              <ProductItem
                key={index}
                img1={item.image01}
                img2={item.image02}
                title={item.title}
                price={item.price}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

ProductDetail.propTypes = {};

export default ProductDetail;
