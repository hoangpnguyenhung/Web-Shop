import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { filterColor, filterData, filterSize } from "../../constants";
import Checkbox from "../checkbox/Checkbox";
import productData from "../../api/fake-api/products";
import "./category.scss";
import Button from "../button/Button";

const Category = (props) => {
  const initialFilter = {
    category: [],
    color: [],
    size: [],
  };
  const productList = productData.getAllProducts();
  const [filter, setFilter] = useState(initialFilter);

  const clearFilter = () => setFilter(initialFilter);

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "category": {
          setFilter({
            ...filter,
            category: [...filter.category, item.categorySlug],
          });
          break;
        }
        case "color": {
          setFilter({ ...filter, color: [...filter.color, item.color] });
          break;
        }
        case "size": {
          setFilter({ ...filter, size: [...filter.size, item.size] });
          break;
        }

        default:
          break;
      }
    }
  };

  const updateProducts = useCallback(() => {
    let temp = productList;
    if (filter.category.length > 0) {
      temp = temp.filter((item) => filter.category.includes(item.categorySlug));
    }
    if (filter.color.length > 0) {
      temp = temp.filter((item) => {
        const check = item.colors.find((color) => filter.color.includes(color));
        return check !== undefined;
      });
    }
    if (filter.size.length > 0) {
      temp = temp.filter((item) => {
        const check = item.size.find((size) => filter.size.includes(size));
        return check !== undefined;
      });
    }
    props.getProductFilter(temp);
  }, [filter, productList]);

  useEffect(() => {
    updateProducts();
  }, [updateProducts]);
  return (
    <div className="category__filter">
      <div className="category__filter__content">
        <div className="category__filter__content__widget">
          <h2 className="category__filter__content__widget__title">
            danh mục sản phẩm
          </h2>
          {filterData.map((item, index) => (
            <div
              className="category__filter__content__widget__item"
              key={index}
            >
              <Checkbox
                label={item.display}
                onChange={(input) =>
                  filterSelect("category", input.checked, item)
                }
                checked={filter.category.includes(item.categorySlug)}
              />
            </div>
          ))}
        </div>
        <div className="category__filter__content__widget">
          <h2 className="category__filter__content__widget__title">Size </h2>
          {filterSize.map((item, index) => (
            <div
              className="category__filter__content__widget__item"
              key={index}
            >
              <Checkbox
                label={item.display}
                onChange={(input) => filterSelect("size", input.checked, item)}
                checked={filter.size.includes(item.size)}
              />
            </div>
          ))}
        </div>
        <div className="category__filter__content__widget">
          <h2 className="category__filter__content__widget__title">màu sắc</h2>
          {filterColor.map((item, index) => (
            <div
              className="category__filter__content__widget__item"
              key={index}
            >
              <Checkbox
                label={item.display}
                onChange={(input) => filterSelect("color", input.checked, item)}
                checked={filter.color.includes(item.color)}
              />
            </div>
          ))}
        </div>
        <div className="category__filter__content__delete">
          <Button size="sm" color="blue" animate={" "} onClick={clearFilter}>
            Xoá bộ lọc
          </Button>
        </div>
      </div>
    </div>
  );
};

Category.propTypes = {
  getProductFilter: PropTypes.func,
};

export default Category;
