'use client';
// import { useAtom } from 'jotai';
import Image from 'next/image';
import { type MouseEvent, useState } from 'react';
// import { detailAtom } from '../atom';
import type { CardType } from '../types';

type PropsType = {
    ary: CardType[];
};

export default function Card(props: PropsType) {
    const { ary } = props;
    const [target, setTarget] = useState('');
    // const [detail, setDetail] = useAtom(detailAtom);
    // const beforeTransition = (
    //     e: MouseEvent<HTMLAnchorElement>,
    //     link?: string
    // ) => {
    //     e.preventDefault();
    //     setDetail(true);
    //     if (link) {
    //         setTarget(link);
    //         if (detail && target === link) {
    //             window.location.href = link;
    //             setDetail(!detail);
    //         }
    //     }
    // };
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
            {/* {ary.map((i) => {
                return (
                    <a
                        href={i.link}
                        onClick={(e) => beforeTransition(e, i.link)}
                        key={i.id}
                        className="border-zinc-400 relative shadow-lg cursor-pointer overflow-hidden"
                    >
                        <div className="relative w-full h-auto">
                            <Image
                                src={i.image}
                                alt={i.title}
                                width={480}
                                height={270}
                                className="w-full h-auto"
                                loading="eager"
                            />
                        </div>
                        <div
                            className={`p-2 text-white text-base md:text-xl absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/70 to-transparent
              transition-all duration-500 ease-in-out font-rodin
              ${detail && target === i.link ? 'h-full' : 'h-1/3'}
              `}
                        >
                            <h4 className="font-bold">
                                {i.practice && (
                                    <div className="align-middle mr-2 text-xs inline-block border-white border-2 py-0.5 px-2">
                                        practice
                                    </div>
                                )}
                                <span className="align-middle">{i.title}</span>
                            </h4>
                            <div className="absolute bottom-2 right-2">
                                {detail && target === i.link ? 'visit' : 'more'}
                                <span className="border-2 border-t-0 ml-2 border-l-0 w-2 h-2 inline-block -rotate-45" />
                            </div>
                            <div
                                className={`mt-4 transition-all duration-500 ease-out font-normal ${
                                    detail && target === i.link
                                        ? 'visible opacity-100'
                                        : 'invisible opacity-0'
                                }`}
                            >
                                <p className="text-sm md:text-base">
                                    {i.description}
                                </p>
                                {i.auth && (
                                    <p className="mt-2 text-sm md:text-base">
                                        {i.auth}
                                    </p>
                                )}
                                <div className="mt-2">
                                    {i.stack && (
                                        <>
                                            <p className="text-xs before:content-['-'] after:content-['-']">
                                                使用言語、フレームワーク、ツール
                                            </p>
                                            <p className=" text-sm md:text-base">
                                                {i.stack}
                                            </p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </a>
                );
            })} */}
        </div>
    );
}
