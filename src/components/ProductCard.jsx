import React from "react";

const ProductCard = ({ product }) => {
  const discountedPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <span key={i} className="text-yellow-400">
            ★
          </span>,
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-300">
            ★
          </span>,
        );
      }
    }
    return stars;
  };

  return (
    <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
      {/* Rasmlar va Badge qismi */}
      <div className="relative aspect-square w-full bg-gray-50 flex items-center justify-center overflow-hidden">
        <img
          src={product.thumbnail || product.images[0]}
          alt={product.title}
          className="h-full w-full object-contain p-4 transition-transform duration-300 hover:scale-105"
        />

        {/* Chegirma foizi */}
        {product.discountPercentage > 0 && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
            -{product.discountPercentage.toFixed(0)}%
          </span>
        )}

        {/* Brand nishoni */}
        <span className="absolute top-3 right-3 bg-gray-900/70 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">
          {product.brand}
        </span>
      </div>

      {/* Ma'lumotlar qismi */}
      <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
        <div>
          {/* Kategoriya va Status */}
          <div className="flex justify-between items-center text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">
            <span>{product.category}</span>
            <span
              className={
                product.stock > 0
                  ? "text-green-600 font-semibold"
                  : "text-red-500"
              }
            >
              {product.availabilityStatus} ({product.stock})
            </span>
          </div>

          {/* Sarlavha */}
          <h2 className="text-lg font-bold text-gray-800 line-clamp-1 hover:text-blue-600 cursor-pointer">
            {product.title}
          </h2>

          {/* Tavsif */}
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Reyting va Sharhlar soni */}
        <div className="flex items-center space-x-2">
          <div className="flex text-sm">{renderStars(product.rating)}</div>
          <span className="text-xs text-gray-500 font-medium">
            {product.rating} ({product.reviews?.length || 0} sharh)
          </span>
        </div>

        {/* Qo'shimcha ma'lumotlar (Yetkazish va Kafolat) */}
        <div className="text-xs text-gray-500 bg-gray-50 p-2.5 rounded-lg space-y-1 border border-gray-100">
          <p>
            🚚{" "}
            <span className="font-medium text-gray-700">
              {product.shippingInformation}
            </span>
          </p>
          <p>
            🛡️{" "}
            <span className="font-medium text-gray-700">
              {product.warrantyInformation}
            </span>
          </p>
        </div>

        {/* Narx va Xarid tugmasi */}
        <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-extrabold text-gray-900">
                ${discountedPrice}
              </span>
              {product.discountPercentage > 0 && (
                <span className="text-sm text-gray-400 line-through">
                  ${product.price}
                </span>
              )}
            </div>
            <p className="text-[10px] text-gray-400">
              Min. buyurtma: {product.minimumOrderQuantity} ta
            </p>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold text-sm px-4 py-2.5 rounded-xl shadow-md transition-all duration-200">
            Savatga
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
