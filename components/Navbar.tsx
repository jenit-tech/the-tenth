"use client";

import Link from "next/link";

const Navbar = () => {
    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <div className="flex-shrink-0">
                        <h1 className="font-main font-bold text-[28.57px] leading-[140%] tracking-[0.01em] align-middle  text-[#3A3A3A] px-4 py-2 rounded">
                            The Tenth Floor
                        </h1>


                    </div>

                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/" passHref>
                            <button className="w-[78px] h-[40px] pt-1 pr-4 pb-1 pl-4 rounded-[33px]">
                                <span className="font-main text-[#3A3A3A] w-[46px] h-[19px] font-semibold text-[16px] leading-[100%] tracking-[0%]">
                                    Home
                                </span>

                            </button>
                        </Link>

                        <Link href="/what-we-do" passHref>
                            <button className="w-[122px] h-[40px] pt-[4px] pr-[16px] pb-[4px] pl-[16px] rounded-[33px]">
                                <span className="font-main text-[#3A3A3A] w-[90px] h-[19px] font-semibold text-[16px] leading-[100%] tracking-[0%]">
                                    What We Do
                                </span>

                            </button>
                        </Link>

                        <Link href="/case-studies" passHref>
                            <button className="w-[135px] h-[40px] pt-[4px] pr-[16px] pb-[4px] pl-[16px] rounded-[33px]">
                                <span className="font-main text-[#3A3A3A] w-[103px] h-[19px] font-semibold text-[16px] leading-[100%] tracking-[0%]">
                                    Case Studies
                                </span>

                            </button>
                        </Link>

                        <Link href="/our-team" passHref>
                            <button className="w-[105px] h-[40px] pt-[4px] pr-[16px] pb-[4px] pl-[16px] rounded-[33px]">
                                <span className="font-main text-[#3A3A3A] w-[73px] h-[19px] font-semibold text-[16px] leading-[100%] tracking-[0%]">
                                    Our Team
                                </span>

                            </button>
                        </Link>

                        <Link href="/contact" passHref>
                            <button className="bg-[#9B87F5] hover:bg-violet-600 text-white font-medium w-[134px] h-[40px] gap-[8px] pt-[8px] pr-[24px] pb-[8px] pl-[24px] rounded-[8px]">
                                <span className="font-main text-white w-[86px] h-[24px] font-medium text-[16px] leading-[24px] tracking-[0%] text-center align-middle">
                                    Contact Us
                                </span>
                            </button>

                        </Link>
                    </nav>




                </div>
            </div>
        </header>
    );
};

export default Navbar;
