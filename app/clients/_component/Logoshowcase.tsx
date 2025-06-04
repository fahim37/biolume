export default function Logoshowcase() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#070A0D99]">
      {/* Video Background */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover ">
        <source src="/asset/banner4.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />
      </video>

      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-6xl">
          {/* Logo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {/* Row 1 */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 flex items-center justify-center aspect-[3/2] hover:bg-white transition-all duration-300 hover:scale-105">
              <div className="text-black font-bold text-lg sm:text-xl lg:text-2xl">ALDAR</div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 flex items-center justify-center aspect-[3/2] hover:bg-white transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full" />
                </div>
                <div className="text-black font-semibold text-sm sm:text-base lg:text-lg">
                  ALEC
                  <br />
                  <span className="text-xs sm:text-sm text-gray-600">HOLDINGS</span>
                </div>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 flex items-center justify-center aspect-[3/2] hover:bg-white transition-all duration-300 hover:scale-105">
              <div className="text-blue-600 font-bold text-lg sm:text-xl lg:text-2xl">ALEMCO</div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 flex items-center justify-center aspect-[3/2] hover:bg-white transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="flex flex-col gap-0.5">
                  <div className="w-1 h-4 sm:w-1.5 sm:h-6 bg-black" />
                  <div className="w-1 h-4 sm:w-1.5 sm:h-6 bg-black" />
                  <div className="w-1 h-4 sm:w-1.5 sm:h-6 bg-black" />
                </div>
                <div className="text-black font-semibold text-sm sm:text-base lg:text-lg">MIRAL</div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 flex items-center justify-center aspect-[3/2] hover:bg-white transition-all duration-300 hover:scale-105">
              <div className="bg-purple-900 text-white px-3 py-1 sm:px-4 sm:py-2 rounded text-sm sm:text-base lg:text-lg font-semibold">
                EllisDon
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 flex items-center justify-center aspect-[3/2] hover:bg-white transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2">
                <div className="w-6 h-4 sm:w-8 sm:h-6 bg-black rounded-sm" />
                <div className="text-black font-medium text-sm sm:text-base lg:text-lg">Marjan</div>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 flex items-center justify-center aspect-[3/2] hover:bg-white transition-all duration-300 hover:scale-105">
              <div className="text-black font-light text-lg sm:text-xl lg:text-2xl italic">elynn</div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 flex items-center justify-center aspect-[3/2] hover:bg-white transition-all duration-300 hover:scale-105">
              <div className="text-black font-bold text-lg sm:text-xl lg:text-2xl">innovo</div>
            </div>

            {/* Row 3 */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 flex items-center justify-center aspect-[3/2] hover:bg-white transition-all duration-300 hover:scale-105">
              <div className="text-black font-bold text-lg sm:text-xl lg:text-2xl">mace</div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 flex items-center justify-center aspect-[3/2] hover:bg-white transition-all duration-300 hover:scale-105">
              <div className="text-center">
                <div className="text-blue-600 font-bold text-sm sm:text-base lg:text-lg">Shapoorji Pallonji</div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">ENGINEERING & CONSTRUCTION</div>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 flex items-center justify-center aspect-[3/2] hover:bg-white transition-all duration-300 hover:scale-105">
              <div className="text-blue-600 font-bold text-lg sm:text-xl lg:text-2xl">BESIX</div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 flex items-center justify-center aspect-[3/2] hover:bg-white transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-1">
                <div className="text-green-600 font-bold text-lg sm:text-xl lg:text-2xl italic">ASGC</div>
                <div className="w-2 h-6 sm:w-3 sm:h-8 bg-green-600 transform skew-x-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
