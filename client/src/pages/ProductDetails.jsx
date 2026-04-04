import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const ProductDetails = () => {
  const { products = [], navigate, currency, addToCart } = useAppContext();
  const { id } = useParams();

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [thumbnail, setThumbnail] = useState(null);

  // 🔥 FIX: match correct id (_id vs id — adjust if needed)
  const product = products.find((item) => item._id === id || item.id === id);

  // 🔥 Prevent crash when product is undefined
  useEffect(() => {
    if (products.length > 0 && product) {
      let productsCopy = products.filter(
        (item) => item.category === product.category
      );
      setRelatedProducts(productsCopy.slice(0, 5));
    }
  }, [products, product]);

  useEffect(() => {
    if (product?.image?.length > 0) {
      setThumbnail(product.image[0]);
    }
  }, [product]);

  // 🔥 VERY IMPORTANT (prevents white screen)
  if (!product) return <p className="mt-10 text-center">Loading...</p>;

  return (
    <div className="mt-12">
      {/* Breadcrumb */}
      <p>
        <Link to="/">Home</Link> /
        <Link to="/products"> Products</Link> /
        <Link to={`/products/${product.category?.toLowerCase()}`}>
          {" "}
          {product.category}
        </Link>{" "}
        /
        <span className="text-indigo-500"> {product.name}</span>
      </p>

      <div className="flex flex-col md:flex-row gap-16 mt-4">
        {/* Images */}
        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            {product.image?.map((image, index) => (
              <div
                key={index}
                onClick={() => setThumbnail(image)}
                className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer"
              >
                <img src={image} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>

          <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
            <img
              src={thumbnail}
              alt="Selected product"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Details */}
        <div className="text-sm w-full md:w-1/2">
          <h1 className="text-3xl font-medium">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-0.5 mt-1">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <img
                  key={i}
                  src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                  alt=""
                  className="md:w-4 w-3.5"
                />
              ))}
            <p className="text-base ml-2">(4)</p>
          </div>

          {/* Price */}
          <div className="mt-6">
            <p className="text-gray-500/70 line-through">
              MRP: {currency} {product.price}
            </p>
            <p className="text-2xl font-medium">
              MRP: {currency}
              {product.offerPrice}
            </p>
            <span className="text-gray-500/70">
              (inclusive of all taxes)
            </span>
          </div>

          {/* Description */}
          <p className="text-base font-medium mt-6">About Product</p>
          <ul className="list-disc ml-4 text-gray-500/70">
            {product.description?.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex items-center mt-10 gap-4 text-base">
            <button
              onClick={() => addToCart(product._id || product.id)}
              className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition"
            >
              Add to Cart
            </button>

            <button
              onClick={() => {
                addToCart(product._id || product.id);
                navigate("/cart");
              }}
              className="w-full py-3.5 cursor-pointer font-medium bg-indigo-500 text-white hover:bg-indigo-600 transition"
            >
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;