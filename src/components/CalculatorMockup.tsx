export default function CalculatorMockup() {
  return (
    <div className="relative flex justify-center lg:justify-end">
      <div className="relative">
        {/* Phone Frame */}
        <div className="w-80 h-[500px] bg-gray-900 rounded-3xl p-2 shadow-2xl">
          <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
            {/* Status Bar */}
            <div className="bg-vital-blue h-8 flex items-center justify-between px-4 text-white text-sm">
              <span>9:41</span>
              <div className="flex space-x-1">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
            </div>

            {/* App Content */}
            <div className="p-4 space-y-4 h-full overflow-y-auto">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-vital-dark-gray">
                  Live Calculator
                </h3>
                <p className="text-sm text-vital-gray">
                  Estimate your swap costs
                </p>
              </div>

              {/* Calculator Interface */}
              <div className="space-y-4">
                {/* Amount Input */}
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <div className="w-6 h-6 bg-vital-blue rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">$</span>
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="Amount input"
                    className="w-full pl-12 pr-4 py-2 border-2 border-dashed border-vital-gray rounded-full text-center text-sm font-semibold focus:outline-none focus:border-vital-blue"
                  />
                </div>

                {/* Currency Dropdown */}
                <div className="relative">
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <svg
                      className="w-5 h-5 text-vital-gray"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Currency Dro..."
                    className="w-full pr-12 pl-4 py-2 border border-gray-300 rounded-lg text-sm font-semibold focus:outline-none focus:border-vital-blue"
                  />
                </div>

                {/* Calculator Buttons */}
                <div className="grid grid-cols-4 gap-2">
                  {["C", "±", "%", "÷"].map((btn, index) => (
                    <button
                      key={index}
                      className="w-12 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-sm font-semibold text-vital-dark-gray hover:bg-gray-200 transition-colors"
                    >
                      {btn}
                    </button>
                  ))}
                  {["7", "8", "9", "×"].map((btn, index) => (
                    <button
                      key={index}
                      className="w-12 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-sm font-semibold text-vital-dark-gray hover:bg-gray-200 transition-colors"
                    >
                      {btn}
                    </button>
                  ))}
                  {["4", "5", "6", "−"].map((btn, index) => (
                    <button
                      key={index}
                      className="w-12 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-sm font-semibold text-vital-dark-gray hover:bg-gray-200 transition-colors"
                    >
                      {btn}
                    </button>
                  ))}
                  {["1", "2", "3", "+"].map((btn, index) => (
                    <button
                      key={index}
                      className="w-12 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-sm font-semibold text-vital-dark-gray hover:bg-gray-200 transition-colors"
                    >
                      {btn}
                    </button>
                  ))}
                  {["0", ".", "=", "="].map((btn, index) => (
                    <button
                      key={index}
                      className={`w-12 h-10 rounded-lg flex items-center justify-center text-sm font-semibold transition-colors ${
                        btn === "=" && index === 3
                          ? "bg-vital-blue text-white hover:bg-blue-800"
                          : "bg-gray-100 text-vital-dark-gray hover:bg-gray-200"
                      }`}
                    >
                      {btn}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
