"use client"
import React from 'react'
import Box from './Box';


const HeroSection = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center bg-gradient-to-bl from-blue-200 via-white to-purple-200">

     
      
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Section */}
                    <div className="w-full max-w-[699px]">
                        <div className="w-full space-y-6">
                            <h2 className="font-main font-extrabold text-[40px] leading-[100%] tracking-[1%] text-[#3F3E42]">
                                Transform Your Business with Expert Consulting & Training
                            </h2>

                            <p className="font-main font-medium text-[24px] leading-[140%] tracking-[1%] text-[#3F3E42B2]">
                                We turn what your audience say, do and how they behave into your competitive edge with precision, speed and simplicity.
                            </p>

                            <div className="space-y-4">
                                <h3 className="font-main font-medium text-[16px] leading-[140%] tracking-[1%] text-[#2E2C32B2]">
                                    Let us know your Email ID. We'll get back to you ASAP
                                </h3>

                                <form className="flex flex-col sm:flex-row gap-[20px]">
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full sm:w-[492px] h-[42px] px-[20px] py-[10px] rounded-[18px] border-b border-[#D1D5DB] bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] 
                                            placeholder:text-[#2E2C32]/30 placeholder:font-medium placeholder:text-[16px] placeholder:leading-[140%] placeholder:tracking-wide font-rubik"
                                    />
                                    <button
                                        type="submit"
                                        className="w-[187px] h-[44px] px-[20px] py-[10px] rounded-[12px] bg-[#9B87F5] hover:bg-violet-600"
                                    >
                                        <span className="w-[147px] h-[24px] font-rubik font-medium text-[12px] leading-[24px] text-[#FAFAFA] text-center">
                                            Start Transforming
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-full max-w-[550px]">
                      <Box/>
                    </div>
                    

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
