import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="bg-[#E5F4F9]">
      {/* Vision and Mission Section */}
      <section className="container mx-auto px-4 py-8 md:py-16">
        <div className=" gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 md:space-y-12">
            {/* Our Vision */}
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] text-[#000000] font-semibold text-center">
                Our Vision
              </h2>
              <p className="text-[#000000] leading-[120%] text-sm sm:text-base md:text-lg lg:text-[24px] text-justify">
                To be the leading source of innovative, design-driven lighting
                solutions in the Middle East— bridging global excellence with
                regional creativity to illuminate spaces with purpose, beauty,
                soul, and precision.
              </p>
            </div>

            {/* Our Mission */}
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] text-[#000000] font-semibold text-center">
                Our Mission
              </h2>
              <p className="text-[#000000] leading-[120%] text-sm sm:text-base md:text-lg lg:text-[24px] text-justify">
                Our mission is to deliver lighting is more than
                illumination—it&apos;s experience, emotion, and identity. We
                deliver thoughtful, high-performing solutions that enable
                visionaries to craft spaces that resonate and endure.
              </p>
            </div>
          </div>

          {/* Right Video Background */}
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="bg-[#E5F4F9] py-8 md:py-16">
        <div className="container mx-auto px-4">
          {/* Combined Section Card */}
          <div className="p-4 md:p-6 shadow-[0_2px_10px_rgba(0,0,0,0.1)] rounded-lg bg-[#E5F4F9] text-center">
            {/* Section Header */}
            <div className="mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-semibold text-[#000000] mb-3 md:mb-4">
                WHY WORK WITH US
              </h2>
              <p className="text-gray-700 max-w-4xl mx-auto leading-[120%] font-normal text-sm sm:text-base md:text-lg lg:text-[24px]">
                Biolume brings deep knowledge, trusted supplier relationships,
                and strong consultant networks to every project. Our design-led,
                technically sound solutions are tailored to each build, backed
                by a responsive, client-centered approach.
              </p>
            </div>

            {/* Feature Content within the single card */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Experience & Expertise */}
              <div className="space-y-3 md:space-y-4">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 mx-auto rounded-lg flex items-center justify-center overflow-hidden">
                  <Image
                    src="/asset/about_card1.jpg"
                    alt="experience"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover rounded-[16px]"
                  />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[32px] font-semibold text-[#000000]">
                  Experience & Expertise
                </h3>
                <p className="text-[#000000] text-sm sm:text-base md:text-lg lg:text-xl leading-[150%] font-normal">
                  Biolume Brings Deep Understanding of Experience Deep
                  Understanding of Construction Timelines and Workflows Proven
                  Track Record Managing Complex Lighting Packages.
                </p>
              </div>

              {/* Reliability & Delivery */}
              <div className="space-y-3 md:space-y-4">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 mx-auto rounded-lg flex items-center justify-center overflow-hidden">
                  <Image
                    src="/asset/about_card2.jpg"
                    alt="reliability"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover rounded-[16px]"
                  />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[32px] font-semibold text-[#000000]">
                  Reliability & Delivery
                </h3>
                <p className="text-[#000000] text-sm sm:text-base md:text-lg lg:text-xl leading-[150%] font-normal">
                  Hands-On Project and Supplier Management No Gaps—We Stay with
                  You from Design to Delivery, Performance Big Picture Thinking,
                  Small Detail Precision.
                </p>
              </div>

              {/* Client-Focused */}
              <div className="space-y-3 md:space-y-4">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 mx-auto rounded-lg flex items-center justify-center overflow-hidden">
                  <Image
                    src="/asset/about_card3.jpg"
                    alt="client focused"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover rounded-[16px]"
                  />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[32px] font-semibold text-[#000000]">
                  Client-Focused
                </h3>
                <p className="text-[#000000] text-sm sm:text-base md:text-lg lg:text-xl leading-[150%] font-normal">
                  We Work as an Extension of Your Team Project Knowledge That
                  Supports Both Design and Performance Big Picture Thinking,
                  Small Detail Precision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
