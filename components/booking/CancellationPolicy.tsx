import React from "react";

const CancellationPolicy: React.FC = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      {/* Cancellation Policy Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Cancellation policy
        </h2>

        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="text-gray-700 font-medium">
                Free cancellation before Aug 23
              </p>
              <p className="text-gray-600 text-sm">
                Cancel before check-in on Aug 24 for a partial refund.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="text-gray-700 font-medium">
                Partial refund available
              </p>
              <p className="text-gray-600 text-sm">
                Cancel after Aug 23 but before check-in for 50% refund.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="text-gray-700 font-medium">
                No refund after check-in
              </p>
              <p className="text-gray-600 text-sm">
                No refund available after check-in time on Aug 24.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-start space-x-2">
            <svg
              className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-sm text-blue-700">
              Review the complete cancellation policy for more details about
              refund conditions and timeline.
            </p>
          </div>
        </div>
      </div>

      {/* Ground Rules Section */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Ground Rules
        </h2>

        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <svg
              className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="text-gray-700 font-medium">
                Follow the house rules
              </p>
              <p className="text-gray-600 text-sm">
                Respect the property guidelines and any specific rules set by
                the host.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <svg
              className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="text-gray-700 font-medium">
                Treat your Hosts home like your own
              </p>
              <p className="text-gray-600 text-sm">
                Take care of the property and leave it in the same condition as
                you found it.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <svg
              className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="text-gray-700 font-medium">
                Communicate with your host
              </p>
              <p className="text-gray-600 text-sm">
                Keep open communication and inform the host of any issues
                promptly.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <svg
              className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="text-gray-700 font-medium">Respect quiet hours</p>
              <p className="text-gray-600 text-sm">
                Be mindful of noise levels, especially during evening and early
                morning hours.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            By proceeding with this booking, you agree to follow all house rules
            and policies. Failure to comply may result in additional charges or
            cancellation of your reservation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CancellationPolicy;
