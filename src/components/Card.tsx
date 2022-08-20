import Image from "next/future/image";

type PropsType = {
  ary: {
    id: number;
    title: string;
    image: string;
    description: string;
    auth?: string;
    link?: string;
  }[];
};

const Card = (props: PropsType) => {
  const { ary } = props;
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 ">
      {ary.map((i) => {
        return (
          <div
            key={i.id}
            className="card border-2 border-zinc-200 max-w-md md:w-full mx-auto w-full"
          >
            <div className="relative w-full h-36 md:h-40">
              <Image
                src={i.image}
                alt={i.title}
                width={300}
                height={100}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="card-body p-2 bg-zinc-400/60 text-white">
              <h2 className="card-title">{i.title}</h2>
              <p className="text-sm">{i.description}</p>
              <p className="text-sm">{i.auth}</p>
              <div className="card-actions justify-end">
                {i.link && (
                  <a
                    className="p-2 text-white defaultLink"
                    href={i.link}
                    rel="noopener noreferrer"
                  >
                    access
                  </a>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Card;
