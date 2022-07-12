import Image from "next/image";
import Layout from "../src/components/Layout/Layout";

const works = () => {
  const tech = [
    {
      id: 1,
      title: "Stream clocks",
      description: "Clocks for live streaming. Built with React.",
      image: "/thumbnail_init.jpg",
      link: "https://stream-clock.vercel.app/",
    },
    {
      id: 2,
      title: "Shiro",
      description:
        "Fictitious landing page, built with Next.js and tailwindcss. this design is made by akane(@omsss22).",
      image: "/thumbnail_shiro.jpg",
      link: "https://shiro-one.vercel.app/",
      auth: "user:tsukuruhito pass:ts0711",
    },
    {
      id: 2,
      title: "comming soon",
      description: "comming soon",
      image: "/thumbnail_init.jpg",
      link: "",
    },
  ];

  const design = [
    {
      id: 1,
      title: "comming soon",
      description: "coming soon",
      image: "/thumbnail_init.jpg",
      link: "",
    },
  ];
  return (
    <Layout title="works" isHeader={true} isFooter={true}>
      <div
        className="
        bg-gradient-to-b from-[#305071] via-cyan-700 to-[#f3beb6] dark:from-[#0f111c] dark:via-[#233367] dark:to-[#2b476d] text-zinc-50 dark:text-zinc-300
        p-4  
      "
      >
        <div className="mb-8 font-mono">
          <h1 className="text-5xl font-bold">Works</h1>
          <p className="text-lg leading-6">
            This is works and practice products.
          </p>
          <p className="text-lg leading-6">
            Mainly use React , Next.js and TypeScript.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">LP and Web Application</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 ">
            {tech.map((tech) => {
              return (
                <div
                  key={tech.id}
                  className="card glass max-w-md md:w-full mx-auto w-full"
                >
                  <div className="relative w-full h-64 md:h-40">
                    <Image
                      src={tech.image}
                      alt={tech.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="card-body">
                    <h2 className="card-title">{tech.title}</h2>
                    <p>{tech.description}</p>
                    <p>{tech.auth}</p>
                    <div className="card-actions justify-end">
                      <a
                        className="btn btn-primary"
                        href={tech.link}
                        rel="noopener noreferrer"
                      >
                        access
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Design and Motion</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 ">
            {design.map((design) => {
              return (
                <div
                  key={design.id}
                  className="card glass max-w-md md:w-full mx-auto w-full"
                >
                  <div className="relative w-full h-64 md:h-40">
                    <Image
                      src={design.image}
                      alt={design.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="card-body">
                    <h2 className="card-title">{design.title}</h2>
                    <p>{design.description}</p>
                    <div className="card-actions justify-end">
                      <a
                        className="btn btn-primary"
                        href={design.link}
                        rel="noopener noreferrer"
                      >
                        access
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default works;
