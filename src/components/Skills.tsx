import { motion } from "framer-motion";

const Skills = () => {
  const techSkills = [
    { id: 1, skill: "HTML", score: 90 },
    { id: 2, skill: "CSS", score: 90 },
    { id: 3, skill: "JS", score: 80 },
    { id: 4, skill: "TS", score: 60 },
    { id: 5, skill: "React", score: 70 },
    { id: 6, skill: "Next", score: 60 },
    { id: 7, skill: "Git", score: 80 },
  ];
  const designSkills = [
    { id: 1, skill: "Design", score: 30 },
    { id: 2, skill: "Motion", score: 30 },
    { id: 3, skill: "Photo", score: 40 },
    { id: 4, skill: "Ps", score: 60 },
    { id: 5, skill: "Ai", score: 40 },
    { id: 6, skill: "Ae", score: 50 },
    { id: 7, skill: "Pr", score: 40 },
    { id: 8, skill: "XD", score: 70 },
  ];

  return (
    <>
      <div className="mt-8 text-lg">
        <div className="w-full mb-8">
          <h2 className="text-2xl mb-2">Technical Skills</h2>
          <p>I can create web pages and simple web applications.</p>
          <p>I&apos;m learning React&#x0028;Next.js&#x0029;and TypeScript.</p>
          <p>
            I often use &quot;Jotai&quot; for state management in these
            productions.
          </p>
        </div>
        <div className="w-full grid grid-cols-3 md:flex md:flex-wrap md:justify-between md:w-full">
          {techSkills.map((tech) => {
            return (
              <div key={tech.id} className="inline-block text-center">
                <motion.div
                  className="radial-progress m-2"
                  initial={{ "--value": 0 } as any}
                  whileInView={{ "--value": tech.score } as any}
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
      <div className="mt-16 e">
        <div className="w-full text-left mb-8 text-lg">
          <h2 className="text-2xl mb-2">Design Skills</h2>
          <p>
            I&apos;m learning design and using design tools for web production.
          </p>
          <p>
            I can only design like this now, but I&apos;ll create great works in
            the future.
          </p>
          <p>
            I also like taking pictures, and the images used on this page were
            taken by myself.
          </p>
        </div>
        <div className="w-full grid grid-cols-3  md:flex md:justify-between md:flex-wrap">
          {designSkills.map((des) => {
            return (
              <div key={des.id} className="inline-block text-center">
                <motion.div
                  className="radial-progress m-2"
                  initial={{ "--value": 0 } as any}
                  whileInView={{ "--value": des.score } as any}
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
    </>
  );
};

export default Skills;
