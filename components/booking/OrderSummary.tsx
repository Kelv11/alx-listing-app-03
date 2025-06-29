import React from "react";

interface BookingDetails {
  propertyName: string;
  price: number;
  bookingFee: number;
  totalNights: number;
  startDate: string;
  imageUrl?: string;
  rating?: number;
  reviewCount?: number;
}

interface OrderSummaryProps {
  bookingDetails: BookingDetails;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ bookingDetails }) => {
  const {
    propertyName,
    price,
    bookingFee,
    totalNights,
    startDate,
    imageUrl = "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    rating = 4.76,
    reviewCount = 345,
  } = bookingDetails;

  const subtotal = price * totalNights;
  const grandTotal = subtotal + bookingFee;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg sticky top-6">
      <h2 className="text-xl font-semibold mb-6">Review Order Details</h2>

      {/* Property Information */}
      <div className="flex items-start space-x-4 mb-6">
        <div className="flex-shrink-0">
          <img
            src={imageUrl}
            alt={propertyName}
            className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-md"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80";
            }}
          />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
            {propertyName}
          </h3>

          <div className="flex items-center space-x-1 mb-2">
            <svg
              className="w-4 h-4 text-yellow-400 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium text-gray-900">{rating}</span>
            <span className="text-sm text-gray-500">
              ({reviewCount} reviews)
            </span>
          </div>

          <p className="text-sm text-gray-600">
            {startDate} • {totalNights} {totalNights === 1 ? "Night" : "Nights"}
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-200 mb-6" />

      {/* Price Breakdown */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-gray-700">
            ${price} × {totalNights} {totalNights === 1 ? "night" : "nights"}
          </span>
          <span className="text-gray-900 font-medium">
            ${subtotal.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-700">Booking Fee</span>
          <span className="text-gray-900 font-medium">${bookingFee}</span>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-200 mb-4" />

      {/* Grand Total */}
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold text-gray-900">Grand Total</span>
        <span className="text-lg font-semibold text-gray-900">
          ${grandTotal.toLocaleString()}
        </span>
      </div>

      {/* Additional Information */}
      <div className="mt-6 p-4 bg-gray-50 rounded-md">
        <p className="text-xs text-gray-600">
          You will not be charged until your reservation is confirmed by the
          host.
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;
