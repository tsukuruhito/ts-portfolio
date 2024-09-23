import Image from 'next/image';
export default function Links() {
    return (
        <div className="mt-4">
            <p>関連リンク</p>
            <ul className="grid gap-4 mt-2">
                <li>
                    <a
                        href="https://x.com/ts_create_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl inline-flex items-center gap-2"
                    >
                        <svg
                            viewBox="0 0 1200 1227"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8"
                        >
                            <title>X</title>
                            <path
                                d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                                className="fill-current"
                            />
                        </svg>
                        <p>@ts_create_</p>
                    </a>
                </li>
                <li>
                    <a
                        href="https://tsukuruhito.booth.pm/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-md inline-flex items-center gap-2"
                    >
                        <Image
                            src="/service/booth.svg"
                            width={40}
                            height={40}
                            alt="Booth"
                            className="w-8 h-8"
                        />
                        <p>
                            つくの素材工房
                            <span className="text-sm">
                                （配信者用の素材ショップ）
                            </span>
                        </p>
                    </a>
                </li>
                <li>
                    <a
                        href="https://coconala.com/users/3408701"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl inline-flex items-center gap-2"
                    >
                        <Image
                            src="/service/coconala.jpg"
                            width={40}
                            height={40}
                            alt="Coconala"
                            className="w-8 h-8"
                        />
                        <p>
                            Coconala
                            <span className="text-sm">（制作依頼受付用）</span>
                        </p>
                    </a>
                </li>
            </ul>
        </div>
    );
}
