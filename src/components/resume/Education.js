import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2026</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BTech in Computer Science"
            subTitle="Avantika University (2022 - 2026)"
            result="7.90/10"
            des="A Bachelor of Technology (B.Tech) degree program provides in-depth theoretical knowledge and practical skills in engineering disciplines, preparing graduates for careers in various industries, research, and innovation.
            "
          />
          <ResumeCard
            title="Class 12"
            subTitle="Vidhyanjali International School (2021 - 2022)"
            result="88.4/100"
            des="Class 12 encompasses advanced studies and specialized subjects, marking a pivotal stage in students' academic progression and preparation for higher education or professional endeavors. It focuses on comprehensive learning and exam preparation, shaping students' future academic and career paths."
          />
          <ResumeCard
            title="Class 10"
            subTitle="Vidhyanjali International School (2019 - 2020)"
            result="86.4/100"
            des="Class 10 forms a foundational stage in students' education, covering fundamental subjects and preparing them for higher academic levels or vocational pathways, laying the groundwork for future academic and career pursuits. It typically involves a blend of theoretical learning, practical applications, and standardized examinations, fostering holistic development and critical thinking skills."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education