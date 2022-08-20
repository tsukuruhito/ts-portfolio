import { motion, VariantLabels } from "framer-motion";

const Skills = () => {
  const techSkills = [
    { id: 1, skill: "HTML", score: 80 },
    { id: 2, skill: "CSS", score: 80 },
    { id: 3, skill: "JS", score: 70 },
    { id: 4, skill: "TS", score: 50 },
    { id: 5, skill: "React", score: 60 },
    { id: 6, skill: "Next", score: 50 },
    { id: 7, skill: "Git", score: 60 },
  ];
  const designSkills = [
    { id: 1, skill: "Design", score: 30 },
    { id: 2, skill: "Ps", score: 60 },
    { id: 3, skill: "Ai", score: 60 },
    { id: 4, skill: "Ae", score: 50 },
    { id: 5, skill: "Pr", score: 40 },
    { id: 6, skill: "XD", score: 70 },
  ];

  return (
    <div
      className="
      text-zinc-600 dark:text-white 
      flex flex-col md:flex-row gap-4 my-8 items-center md:items-stretch
    "
    >
      <div className="metricsBox bg-stone-400/30 before:border-stone-400 before:-top-2 before:-left-2">
        <div className="w-full mb-8">
          <h2 className="font-futura text-2xl mb-2">Technical Skills</h2>
          <div className="font-rodin text-sm">
            <p>Webページや簡単なWebアプリケーションをつくることができます。</p>
            <p>
              最近はReact/Next.jsやTypeSctiptを中心として制作を行っています。
            </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-3 gap-2">
          {techSkills.map((tech) => {
            return (
              <div
                key={tech.id}
                className="inline-block text-center text-zinc-500 dark:text-white"
              >
                <motion.div
                  className="radial-progress m-2 radial-variant text-sm xs:text-base"
                  initial={{ "--value": 0 } as unknown as VariantLabels}
                  whileInView={
                    { "--value": tech.score } as unknown as VariantLabels
                  }
                  transition={{ duration: 1, ease: "easeInOut" }}
                  viewport={{ once: true }}
                >
                  {tech.skill}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="metricsBox bg-zinc-400/30 before:border-zinc-400 before:-bottom-2 before:-right-2">
        <div className="w-full text-left mb-8 text-lg">
          <h2 className="font-futura text-2xl mb-2">Design Skills</h2>
          <div className="font-rodin text-sm">
            <p>習得に向けて日夜励んでいます。</p>
            <p>
              PhotoshopやIllustrator、XDで作られたカンプからの書き出しや、写真の軽微な加工などは日々の業務でも行っているので可能です。
            </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-3 gap-2">
          {designSkills.map((des) => {
            return (
              <div
                key={des.id}
                className="inline-block text-center text-zinc-500 dark:text-white"
              >
                <motion.div
                  className="radial-progress m-2 radial-variant text-sm xs:text-base"
                  initial={{ "--value": 0 } as unknown as VariantLabels}
                  whileInView={
                    { "--value": des.score } as unknown as VariantLabels
                  }
                  transition={{ duration: 1, ease: "easeInOut" }}
                  viewport={{ once: true }}
                >
                  {des.skill}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
