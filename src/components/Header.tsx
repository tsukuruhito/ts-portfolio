'use client';
import Link from 'next/link';
import Theme from './Theme';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Header = () => {
    const [showHeader, setShowHeader] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (window.location.pathname !== '/') {
            setShowHeader(true);
        } else {
            const handleScroll = () => {
                if (window.scrollY > 0) {
                    setShowHeader(true);
                } else {
                    setShowHeader(false);
                }
            };
            setShowHeader(false);
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    const handleScroll = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        e.preventDefault();
        const id = (e.currentTarget as HTMLElement)?.getAttribute('href');
        if (!id) return;
        const target = document.querySelector(id);

        if (!target) {
            router.push(`/${id}`);
            return;
        }

        const header = document.querySelector('header');
        const headerHeight = header ? header.clientHeight : 0;
        const gap = 50;
        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            headerHeight -
            gap;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
        });
    };

    return (
        <header
            className={`
                fixed top-2 left-1/2 -translate-x-1/2 z-50
                w-[95%]  max-w-screen-xl min-h-[5rem] px-8 py-2 rounded-full box-border
                tracking-wider uppercase 
                flex justify-between items-center flex-col bg-white/80 drop-shadow-md
                md:min-h-[4rem] md:flex-row 
                dark:bg-stone-800/80 dark:border-gray-600
                transition-all duration-300 ease-in-out
                ${
                    showHeader
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'
                }
            `}
        >
            <h1 className="cursor-pointer">
                <Link href="/" className="flex items-center gap-2">
                    <span className="w-12">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 550 550"
                            className="stroke-[#4d4d4d] dark:stroke-white fill-transparent"
                        >
                            <title>TS-PORT</title>
                            <polygon
                                points="436.46 114.61 301.24 114.61 233.62 231.72 301.24 348.82 436.46 348.82 504.07 231.72 436.46 114.61"
                                style={{
                                    strokeLinecap: 'round',
                                    strokeMiterlimit: 10,
                                    strokeWidth: '37px',
                                }}
                            />
                            <polygon
                                points="103.88 266.97 65.25 266.97 45.93 300.43 65.25 333.89 103.88 333.89 123.2 300.43 103.88 266.97"
                                style={{
                                    strokeLinecap: 'round',
                                    strokeMiterlimit: 10,
                                    strokeWidth: '16px',
                                }}
                            />
                            <polygon
                                points="158.36 323.52 126.07 379.46 158.36 435.39 222.95 435.39 255.24 379.46 222.95 323.52 158.36 323.52"
                                style={{
                                    strokeLinecap: 'round',
                                    strokeMiterlimit: 10,
                                    strokeWidth: '29px',
                                }}
                            />
                        </svg>
                    </span>
                    <span className="text-xl text-[#4d4d4d] font-semibold dark:text-white tracking-tighter">
                        ts-port
                    </span>
                </Link>
            </h1>
            <ul className="text-sm md:text-lg flex items-center tracking-wide">
                <li className="cursor-pointer">
                    <Link
                        href="/portfolio"
                        className="inline-block p-2 defaultLink dark:text-white"
                        onClick={(e) => handleScroll(e)}
                    >
                        portfolio
                    </Link>
                </li>
                <li className="cursor-pointer">
                    <Link
                        href="#skills"
                        className="inline-block p-2 defaultLink dark:text-white"
                        onClick={(e) => handleScroll(e)}
                    >
                        skills
                    </Link>
                </li>
                <li>
                    <Theme />
                </li>
            </ul>
        </header>
    );
};

export default Header;
