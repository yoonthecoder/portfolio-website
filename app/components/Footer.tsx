'use client';
import Image from 'next/image';
import useMatchMedia from '../hooks/useMatchMedia';
const breakpoints = [
	'(max-width: 768px)',
	'(min-width: 769px) and (max-width: 1199px)',
	'(min-width: 1200px)',
];

const Footer = () => {
	const instagram = 'images/instagram.svg';
	const github = 'images/github.svg';
	const linkedin = 'images/linkedin.svg';

	const [isMobile] = useMatchMedia(breakpoints);
	const currentTime = new Date();
	const year = currentTime.getFullYear();
	return (
		<footer className="flex-col w-full text-yellow font-light flex gap-3 items-center justify-center py-5 px-10 text-xs bg-background-gray dark:bg-background-dark">
			<div>© {year} Yoon Kim | All rights reserved.</div>
			{isMobile && (
				<div className="flex gap-5">
					<a
						href="https://www.linkedin.com/in/imyoonkim/"
						target="_blank"
						rel="noreferrer"
						className="hover:opacity-80"
					>
						<Image src={linkedin} width={20} height={20} alt="linkedin" />
					</a>
					<a
						href="https://github.com/yoonthecoder"
						target="_blank"
						rel="noreferrer"
						className="hover:opacity-80"
					>
						<Image src={github} width={20} height={20} alt="linkedin" />
					</a>
					<a
						href="https://www.instagram.com/yoonthecoder/"
						target="_blank"
						rel="noreferrer"
						className="hover:opacity-80"
					>
						<Image src={instagram} width={20} height={20} alt="linkedin" />
					</a>
				</div>
			)}
		</footer>
	);
};

export default Footer;
