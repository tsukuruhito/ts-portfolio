'use client';
import Link from 'next/link';
import Theme from './Theme';

type Props = {
    isMenu: boolean;
};
const Header = (props: Props) => {
    const { isMenu } = props;
    return (
        <header
            className={`
                fixed top-2 left-1/2 -translate-x-1/2 z-50
                w-full max-w-[1200px] min-h-[8rem] px-8 py-2 rounded-full
                font-futura tracking-wider uppercase
                flex justify-between items-center flex-col bg-white drop-shadow-md
                md:min-h-[5rem] md:flex-row
                dark:bg-stone-800/80 dark:border-gray-600
            `}
        >
            <h1 className="cursor-pointer">
                <Link href="/" className="flex items-center gap-2">
                    <span className="w-12">
                        <svg id="a" data-name="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 550" className='stroke-[#4d4d4d] dark:stroke-white'>
                            <polygon points="436.46 114.61 301.24 114.61 233.62 231.72 301.24 348.82 436.46 348.82 504.07 231.72 436.46 114.61" style={{fill: 'none', strokeMiterlimit: 10, strokeWidth: '37px'}}/>
                            <polygon points="103.88 266.97 65.25 266.97 45.93 300.43 65.25 333.89 103.88 333.89 123.2 300.43 103.88 266.97" style={{fill: 'none', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '16px'}}/>
                            <polygon points="158.36 323.52 126.07 379.46 158.36 435.39 222.95 435.39 255.24 379.46 222.95 323.52 158.36 323.52" style={{fill: 'none', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '29px'}}/>
                        </svg>
                    </span>
                    <span className="text-2xl text-[#4d4d4d] font-semibold dark:text-white">
                        ts port
                    </span>
                </Link>
            </h1>
            <ul className="text-sm md:text-lg flex items-center tracking-wide">
                {isMenu && (
                    <>
                        <li className="cursor-pointer">
                            <Link
                                href="/"
                                className="inline-block mx-1 p-2 defaultLink dark:text-white"
                            >
                                top
                            </Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link
                                href="/works"
                                className="inline-block mx-1 p-2 defaultLink dark:text-white"
                            >
                                works
                            </Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link
                                href="/skills"
                                className="inline-block mx-1 p-2 defaultLink dark:text-white"
                            >
                                skills
                            </Link>
                        </li>
                    </>
                )}
                <li>
                    <Theme />
                </li>
            </ul>
        </header>
    );
};

export default Header;
