import React, { useState, useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";

const AllProducts = () => {
  // Safe defaults to prevent undefined errors
  const { products = [], searchQuery = "" } = useAppContext();

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (searchQuery?.trim().length > 0) {
      const filtered = products.filter((product) =>
        product?.name
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [products, searchQuery]);

  return (
    <div className="mt-16 flex flex-col">
      {/* Heading */}
      <div className="flex flex-col items-end w-max">
        <p className="text-2xl font-medium uppercase">All Products</p>
        <div className="w-16 h-0.5 bg-primary rounded-full"></div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
        {filteredProducts
          ?.filter((product) => product?.inStock)
          ?.map((product) => (
            <ProductCard
              key={product._id || product.id}
              product={product}
            />
          ))}
      </div>

      {/* Optional empty state */}
      {filteredProducts.length === 0 && (
        <p className="text-gray-500 mt-10 text-center">
          No products found
        </p>
      )}
    </div>
  );
};

export default AllProducts;