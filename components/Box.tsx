"use client"
import React from 'react'
import { motion } from 'framer-motion'

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
  return (
    <div className="w-[550px] h-[376px] absolute top-[152px] left-[768px] pt-[54px] pb-[54px] overflow-y-auto overscroll-contain scroll-smooth scrollbar-hide">
      <div className="flex flex-col gap-[20px]">
        {/* Card 1 */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="w-[550px] min-h-[282px] rounded-[12px] p-[20px] bg-[#FAFAFA] shadow-[0_0_4px_0_#00000040]"
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
            We're self-funded, independent and focused on one thing: delivering results you can measure.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="w-[550px] min-h-[282px] rounded-[12px] p-[20px] bg-[#FAFAFA] shadow-[0_0_4px_0_rgba(0,0,0,0.25)]"
        >
          <h3 className="font-manrope font-bold text-[24px] leading-[140%] tracking-[1%] text-[#3A3A3A]">
            WE PRACTICE WHAT WE TEACH
          </h3>
          <p className="font-manrope font-normal text-[16px] leading-[140%] tracking-[1%] text-[#3A3A3A] mt-4">
            We don't just consult. We teach. <br />
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

        {/* Logo Grid */}
        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="w-[653px] h-[1306.28px] gap-[10px] rounded-[12px] p-[20px] bg-[#FAFAFA] shadow-[0px_0px_4px_0px_#00000040]"
        >
          <h3 className="w-[613px] h-[34px] font-manrope font-bold text-[24px] leading-[140%] tracking-[0.01em] text-[#3A3A3A]">
            ACROSS REGIONS, ACROSS INDUSTRIES
          </h3>
          <p className="w-[613px] h-[44px] font-manrope font-normal text-[16px] leading-[140%] tracking-[0.01em] text-[#3A3A3A]">
            Established in 2015 in Singapore, we have worked with clients across continents and industries, mining insights hiding in plain sight.
          </p>

          {/* Logo Sections */}
          <div className="flex flex-col w-[596px] h-[1168.28px] gap-[20px] pt-10">
            {[
              ["20.png", "3.png", "1.png", "31.png"],
              ["11.png", "6.png", "8.png", "17.png"],
              ["7.png", "2.png", "0.png", "18.png"],
              ["19.png", "4.png", "10.png", "28.png"],
              ["expedia.png", "9.png", "15.png", "wagely.png"],
              ["12.png", "23.png", "24.png", "13.png"],
              ["29.png", "32.png", "euyan.png", "30.png"],
              ["14.png", "25.png", "27.png", "21.png"],
              ["5.png", "16.png"],
            ].map((group, idx) => (
              <motion.div
                key={idx}
                custom={idx + 4}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={`flex items-center w-[596px] gap-[40px] ${group.length < 4 ? 'justify-end' : ''}`}
              >
                {group.map((src, i) => (
                  <img key={i} src={`./${src}`} alt={`logo-${i}`} className="w-[119px] h-auto max-h-[119px]" />
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Box
