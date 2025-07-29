import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Button from "@/components/Button";

import { products } from "@/data/products";
import { motion, useInView } from "framer-motion";
import { burstIn, slideInBottom } from "@/utils/animations";

const ProductShowcaseSection = () => {
  // State to track current image index per product (keyed by product index)
  const [currentImageIndices, setCurrentImageIndices] = useState<
    Record<number, number>
  >({});
  // State to track quantity per product (keyed by product id)
  // const [quantities, setQuantities] = useState<Record<string, number>>({});

  useEffect(() => {
    const initialIndices: Record<number, number> = {};
    const initialQuantities: Record<string, number> = {};
    products.forEach((product, index) => {
      initialIndices[index] = 0;
      initialQuantities[product.id] = 1;
    });
    setCurrentImageIndices(initialIndices);
    // setQuantities(initialQuantities);
  }, []);

  const nextImage = (index: number) => {
    setCurrentImageIndices((prev) => ({
      ...prev,
      [index]: ((prev[index] || 0) + 1) % products[index].images.length,
    }));
  };

  const prevImage = (index: number) => {
    setCurrentImageIndices((prev) => ({
      ...prev,
      [index]:
        ((prev[index] || 0) - 1 + products[index].images.length) %
        products[index].images.length,
    }));
  };

  // const incrementQuantity = (id: string) => {
  //   setQuantities((prev) => ({
  //     ...prev,
  //     [id]: (prev[id] || 1) + 1,
  //   }));
  // };

  // const decrementQuantity = (id: string) => {
  //   setQuantities((prev) => ({
  //     ...prev,
  //     [id]: prev[id] && prev[id] > 1 ? prev[id] - 1 : 1,
  //   }));
  // };

  // const handleAddToCart = (product: (typeof products)[0]) => {
  //   toast({
  //     title: "Added to cart",
  //     description: `${quantities[product.id] || 1} × ${
  //       product.name
  //     } added to your cart`,
  //   });
  // };

  return (
    <section className="py-16 md:py-24" id="shop">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={slideInBottom}
            initial="initial"
            whileInView="animate"
            // viewport={viewportOptions}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-5xl font-display uppercase mb-8 text-center"
          >
            Shop Our Products
          </motion.h2>
          <motion.p
            variants={slideInBottom}
            initial="initial"
            whileInView="animate"
            // viewport={viewportOptions}
            transition={{ delay: 0.6 }}
            className="text-2xl font-normal max-w-5xl mx-auto text-[#3b6326]/80 text-center pb-7"
          >
            Fuel your day with unmatched performance and flavor.
          </motion.p>
          <div className="grid grid-cols-1 gap-12">
            {products.map((product, index) => {
              // Compute average rating from reviews
              const avgRating =
                product.reviews.length > 0
                  ? product.reviews.reduce(
                      (sum, review) => sum + review.rating,
                      0
                    ) / product.reviews.length
                  : 0;
              return (
                <motion.div
                  variants={slideInBottom}
                  initial="initial"
                  whileInView="animate"
                  // viewport={viewportOptions}
                  transition={{ delay: 1 + index * 0.1 }}
                  key={product.id}
                  className="flex flex-col md:flex-row md:rounded-[50px] rounded-3xl shadow-lg overflow-hidden"
                >
                  {/* Left: Image Slider with Thumbnails */}
                  <div
                    className={`md:w-1/2 relative overflow-hidden   bg-${product.color}`}
                  >
                    <div className="p-8 h-full flex items-center justify-center relative">
                      <img
                        src={product.images[currentImageIndices[index] || 0]}
                        alt={`${product.name} view ${
                          (currentImageIndices[index] || 0) + 1
                        }`}
                        className="w-full h-full object-contain mx-auto"
                      />

                      {/* Navigation Arrows */}
                      <button
                        onClick={() => prevImage(index)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-transparent hover:bg-white/50 text-gray-200 p-2 rounded-full shadow-md transition-all"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={() => nextImage(index)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent hover:bg-white/50 text-gray-200 p-2 rounded-full shadow-md transition-all"
                        aria-label="Next image"
                      >
                        <ChevronRight size={24} />
                      </button>

                      {/* Thumbnails Row */}
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 py-2 flex justify-center space-x-2">
                        {product.images.map((image, imgIndex) => (
                          <button
                            key={imgIndex}
                            onClick={() =>
                              setCurrentImageIndices((prev) => ({
                                ...prev,
                                [index]: imgIndex,
                              }))
                            }
                            className={`border-2 ${
                              (currentImageIndices[index] || 0) === imgIndex
                                ? "border-white"
                                : "border-transparent"
                            }`}
                          >
                            <img
                              src={image}
                              alt={`Thumbnail ${imgIndex + 1}`}
                              className="w-16 h-16 object-contain border rounded-md"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Product Details */}
                  <div
                    className={`md:w-1/2 p-8 flex flex-col justify-between bg-krio-blue/80`}
                  >
                    <h1 className="text-4xl font-bold tracking-tight leading-tight uppercase">
                      {product.name}
                    </h1>
                    <h2 className="text-2xl font-semibold tracking-tight text-black/80 mb-3">
                      Feel good energy + Focus + Hydration
                    </h2>
                    <div className="flex items-center mb-4">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={18}
                            className={
                              i < Math.round(avgRating)
                                ? "text-grey-800"
                                : "text-gray-500"
                            }
                          />
                        ))}
                      </div>
                      <span className="text-gray-600">
                        ({product.reviews.length} reviews)
                      </span>
                    </div>
                    <p className="text-black/90 mb-6 tracking-tight font-normal">
                      {product.longDescription}
                    </p>

                    <h2 className="text-black/90 tracking-tight font-normal text-3xl">
                      {" "}
                      Perfect For
                    </h2>
                    <ul className="list-disc list-inside mb-6 text-black/90 tracking-tight font-normal">
                      <li>Crash-free midday good energy boost </li>
                      <li>Mental focus at work or study</li>
                      <li>Pre-workout hydration</li>
                      <li>A refreshing, healthy alternative to sugary sodas</li>
                    </ul>
                    <h2 className="text-black/90 tracking-tight font-normal text-3xl">
                      How to enjoy
                    </h2>
                    <p className="text-black/90 mb-6 tracking-tight font-normal">
                      Serve chilled. Lightly shake before opening for best fizz.
                      Ideal for an active lifestyle, workdays, or your
                      post-exercise ritual.
                    </p>
                    <div className="flex items-center justify-between mb-6">
                      <p className="md:text-3xl text-2xl font-bold text-red-700">
                        ₹{product.price.toFixed(2)}
                      </p>
                      <p className=" text-gray-600 tracking-wider font-normal ">
                        {product.size}
                      </p>
                    </div>

                    <p className="text-gray-600 mb-6 tracking-wider font-normal">
                      {product.available}
                    </p>

                    {/* Quantity Selector */}
                    {/* <div className="mb-6">
                      <label className="block text-gray-800 mb-2">
                        Quantity
                      </label>
                      <div className="flex items-center">
                        <button
                          onClick={() => decrementQuantity(product.id)}
                          className="w-10 h-10 bg-black rounded-l-lg flex items-center justify-center text-white"
                        >
                          <Minus size={18} />
                        </button>
                        <input
                          type="number"
                          value={quantities[product.id] || 1}
                          onChange={(e) =>
                            setQuantities((prev) => ({
                              ...prev,
                              [product.id]: parseInt(e.target.value) || 1,
                            }))
                          }
                          className="w-16 h-10 text-center bg-black text-white border-0 focus:outline-none"
                        />
                        <button
                          onClick={() => incrementQuantity(product.id)}
                          className="w-10 h-10 bg-black rounded-r-lg flex items-center justify-center text-white"
                        >
                          <Plus size={18} />
                        </button>
                      </div>
                    </div> */}

                    {/* Buy Now Button */}
                    {/* <div className="mb-4">
                      <Button
                        variant="outline"
                        className={`w-full inline-flex items-center text-white justify-center gap-2 bg-${product.color} px-6 py-2 rounded-xl font-bold tracking-[3px] text-xl uppercase shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                        
                      >
                        <span>Buy Now</span>
                        <img
                          src="/lovable-uploads/amazon2.png"
                          alt="Amazon logo"
                          className="w-20 h-14 object-contain pt-1"
                        />
                      </Button>
                    </div> */}
                    <div className="mb-4">
                      <a
                        href={product.productLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full block"
                      >
                        <Button
                          variant="outline"
                          className={`w-full inline-flex items-center text-white justify-center gap-2 bg-${product.color} px-6 py-2 rounded-xl font-bold tracking-[3px] text-xl uppercase shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-0`}
                        >
                          <span>Buy Now</span>
                          <img
                            src="/lovable-uploads/amazon2.png"
                            alt="Amazon logo"
                            className="w-20 h-14 object-contain pt-1"
                          />
                        </Button>
                      </a>
                    </div>
                  </div>
                  {/* End Product Details */}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcaseSection;
