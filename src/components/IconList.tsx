import Image from 'next/image';

const icons = {
    front: [
        { src: '/icons/front/html.svg', alt: 'HTML5', width: 64, height: 64 },
        { src: '/icons/front/css.svg', alt: 'CSS3', width: 64, height: 64 },
        {
            src: '/icons/front/tailwindcss.svg',
            alt: 'Tailwind CSS',
        },
        {
            src: '/icons/front/javascript.svg',
            alt: 'JavaScript',
        },
        {
            src: '/icons/front/typescript.svg',
            alt: 'TypeScript',
        },
        {
            src: '/icons/front/nextjs.svg',
            alt: 'Next.js',
        },
        {
            src: '/icons/front/threejs.svg',
            alt: 'Three.js',
        },
        {
            src: '/icons/front/svelte.svg',
            alt: 'Svelte',
        },
        {
            src: '/icons/front/astro.svg',
            alt: 'Astro',
        },
    ],
    other: [
        {
            src: '/icons/other/nodejs.svg',
            alt: 'Node.js',
        },
        {
            src: '/icons/other/php.svg',
            alt: 'PHP',
        },
        {
            src: '/icons/other/wordpress.svg',
            alt: 'WordPress',
        },
        {
            src: '/icons/other/electron.svg',
            alt: 'Electron',
        },
        {
            src: '/icons/other/cloudflare.svg',
            alt: 'Cloudflare',
        },
        {
            src: '/icons/other/apollo.svg',
            alt: 'Apollo',
        },
        {
            src: '/icons/other/graphql.svg',
            alt: 'GraphQL',
        },
        {
            src: '/icons/other/postgresql.svg',
            alt: 'Firebase',
        },
        {
            src: '/icons/other/prisma.svg',
            alt: 'Prisma',
        },
    ],
    design: [
        {
            src: '/icons/design/photoshop.svg',
            alt: 'Photoshop',
        },
        {
            src: '/icons/design/illustrator.svg',
            alt: 'Illustrator',
        },
        {
            src: '/icons/design/aftereffects.svg',
            alt: 'After Effects',
        },
        {
            src: '/icons/design/premierepro.svg',
            alt: 'Premiere Pro',
        },
        {
            src: '/icons/design/animate.svg',
            alt: 'Animate',
        },
        {
            src: '/icons/design/xd.svg',
            alt: 'Adobe XD',
        },
        {
            src: '/icons/design/canva.svg',
            alt: 'Canva',
        },
        {
            src: '/icons/design/figma.svg',
            alt: 'Figma',
        },
        {
            src: '/icons/design/blender.svg',
            alt: 'Blender',
        },
    ],
};

const IconList = ({
    type,
    className,
}: {
    type: 'front' | 'other' | 'design';
    className?: string;
}) => {
    const size = 32;
    return (
        <div className={`icon-list ${className}`}>
            <div className="icon-center">
                <Image
                    src={icons[type][0].src}
                    alt={icons[type][0].alt}
                    width={size}
                    height={size}
                    className="w-8 h-8"
                />
            </div>
            <div className="icon-circle">
                {icons[type].slice(1).map((icon, index) => (
                    <div
                        key={icon.alt}
                        className="icon-item"
                        style={{
                            transform: `rotate(${
                                index * 45
                            }deg) translate(4em) rotate(-${index * 45}deg)`,
                        }}
                    >
                        <Image
                            src={icon.src}
                            alt={icon.alt}
                            width={size}
                            height={size}
                            className="w-8 h-8"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IconList;
