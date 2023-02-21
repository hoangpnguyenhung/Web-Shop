import React, { useEffect, useState } from "react";
import Slider from "../components/slider/Slider";
import Grid from "../components/grid/Grid";

import productData from "../api/fake-api/products";

import ProductCard from "../components/productCard/ProductCard";
import {
  Section,
  SectionBody,
  SectionTitle,
} from "../components/section/Section";
import Loading from "../components/loading/Loading";
import Helmet from "../components/helmet/Helmet";

const Home = (props) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    return clearTimeout();
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <Helmet title="Trang chủ">
      <div>
        <Slider auto={true} timeOut={5000} />

        <Section>
          <SectionTitle>
            <h2>Top những sản phẩm bán chạy nhất</h2>
          </SectionTitle>
          <SectionBody>
            <Grid col={4} md={3} sm={1} gap="30px">
              {productData.getProducts(4).map((item, index) => (
                <ProductCard
                  key={index}
                  title={item.title}
                  price={item.price}
                  img1={item.image01}
                  img2={item.image02}
                  slug={item.slug}
                />
              ))}
            </Grid>
          </SectionBody>
        </Section>

        <Section>
          <SectionTitle>
            <h2>Top những sản phẩm bán chạy trong tuần</h2>
          </SectionTitle>
          <SectionBody>
            <Grid col={4} md={3} sm={1} gap="30px">
              {productData.getProducts(4).map((item, index) => (
                <ProductCard
                  key={index}
                  title={item.title}
                  price={item.price}
                  img1={item.image01}
                  img2={item.image02}
                />
              ))}
            </Grid>
          </SectionBody>
        </Section>
        <Section>
          <SectionTitle>
            <h2>Top những sản phẩm mới</h2>
          </SectionTitle>
          <SectionBody>
            <Grid col={4} md={3} sm={1} gap="30px">
              {productData.getProducts(8).map((item, index) => (
                <ProductCard
                  key={index}
                  title={item.title}
                  price={item.price}
                  img1={item.image01}
                  img2={item.image02}
                />
              ))}
            </Grid>
          </SectionBody>
        </Section>
      </div>
    </Helmet>
  );
};

export default Home;
