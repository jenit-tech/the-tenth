import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import Image from 'next/image'; // Importing Next.js Image

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

const Box = () => {
  const textRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [1, 0.8, 0], [1, 1, 0]);

  return (
    <div className="w-[550px] h-[376px] absolute top-[152px] left-[768px] pt-[54px] pb-[54px] overflow-y-auto overscroll-contain scroll-smooth no-scrollbar">
      <div className="flex flex-col gap-[20px]">
        {/* Section 1 */}
        <motion.div
          className="w-[550px] min-h-[282px] rounded-[12px] p-[20px] bg-[#FAFAFA] shadow-[0_0_4px_0_#00000040]"
          ref={textRef}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          custom={1}
          style={{ opacity }}
        >
          <h3 className="font-manrope font-bold text-[24px] leading-[140%] tracking-[1%] text-[#3A3A3A] mb-6 uppercase">
            Simple, Efficient, Precise
          </h3>
          <p className="font-manrope font-normal text-[16px] leading-[140%] tracking-[1%] text-[#3A3A3A]">
            Our approach is simple but powerful. <br />
            We combine your existing data with public information and advanced analytics to reveal patterns others miss. <br />
            No unnecessary complexity, just clear insights that help you reach customers faster and more efficiently. <br />
            The result? <br />
            Strategies that work better and cost less. <br />
            We&apos;re self-funded, independent and focused on one thing: delivering results you can measure.
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          className="w-[550px] min-h-[282px] rounded-[12px] p-[20px] bg-[#FAFAFA] shadow-[0_0_4px_0_rgba(0,0,0,0.25)]"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          custom={2}
        >
          <h3 className="font-manrope font-bold text-[24px] leading-[140%] tracking-[1%] text-[#3A3A3A]">
            WE PRACTICE WHAT WE TEACH
          </h3>
          <p className="font-manrope font-normal text-[16px] leading-[140%] tracking-[1%] text-[#3A3A3A] mt-4">
            We don&apos;t just consult. We teach.
            <br />
            Your team learns to find insights that last, <br />
            no coding required. Anyone can do it. <br /><br />
            Most of all, they will gain by learning not only from trainers, but real world practitioners.
          </p>
          <div className="mt-4 border-b border-[#3A3A3A] w-[172px]">
            <p className="mt-1 font-manrope font-normal text-[16px] leading-[140%] tracking-[1%] text-[#3A3A3A]">
              See what you can learn
            </p>
          </div>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          className="w-[653px] h-[1306.28px] gap-[10px] rounded-[12px] p-[20px] bg-[#FAFAFA] shadow-[0px_0px_4px_0px_#00000040]"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          custom={3}
        >
          <h3 className="w-[613px] h-[34px] font-manrope font-bold text-[24px] leading-[140%] tracking-[0.01em] text-[#3A3A3A]">
            ACROSS REGIONS, ACROSS INDUSTRIES
          </h3>
          <p className="w-[613px] h-[44px] font-manrope font-normal text-[16px] leading-[140%] tracking-[0.01em] text-[#3A3A3A]">
            Established in 2015 in Singapore, we have worked with clients across continents and industries, mining insights hiding in plain sight.
          </p>

          {/* Logo Grid */}
        {/* Logo Grid */}
<div className="flex flex-col w-[596px] h-[1168.28px] gap-[20px] pt-10">
  {[
    ['/20.png', '/3.png', '/1.png', '/31.png'],
    ['/11.png', '/6.png', '/8.png', '/17.png'],
    ['/7.png', '/2.png', '/0.png', '/18.png'],
    ['/19.png', '/4.png', '/10.png', '/28.png'],
    ['/expedia.png', '/9.png', '/15.png', '/wagely.png'],
    ['/12.png', '/23.png', '/24.png', '/13.png'],
    ['/29.png', '/32.png', '/euyan.png', '/30.png'],
    ['/14.png', '/25.png', '/27.png', '/21.png'],
  ].map((row, rowIndex) => (
    <div key={rowIndex} className="flex items-center w-[596px] h-[119px] gap-[40px]">
      {row.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={`Logo ${rowIndex + 1}-${i + 1}`}
          width={119}
          height={119}
          className="object-contain"
        />
      ))}
    </div>
  ))}

  {/* Last row */}
  <div className="flex items-center justify-end w-[596px] h-[78px] gap-[40px] pb-8">
    <Image src="/5.png" alt="Logo last-1" width={119} height={71} />
    <Image src="/16.png" alt="Logo last-2" width={119} height={78} />
  </div>
</div>

        </motion.div>
      </div>
    </div>
  )
}

export default Box
