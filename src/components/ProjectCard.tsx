import Image from 'next/image';
import useMatchMedia from '../hooks/useMatchMedia';
import Button from './Button';
import { BUTTON_STYLES } from './Button';

const breakpoints = [
	'(max-width: 768px)',
	'(min-width: 769px) and (max-width: 1199px)',
	'(min-width: 1200px)',
];
interface IProjectCard {
	title: string;
	text: string;
	tags: Array<String>;
	description: JSX.Element;
	tools: string;
	src: string;
	href: string;
}
export default function ProjectCard({
	title,
	text,
	tags,
	description,
	tools,
	src,
	href,
}: IProjectCard) {
	const [isMobile] = useMatchMedia(breakpoints);
	return (
		<div className="bg-white dark:bg-navbar-darkgray flex rounded-2xl p-1 border border-lightgray dark:border-0 p-8 rounded-xl my-5">
			<div className="flex flex-col gap-5">
				<div className="flex justify-between">
					<div className="flex flex-col gap-3">
						{' '}
						<h2 className="font-medium text-2xl tracking-tighter text-black dark:text-lightgray">
							{title}
						</h2>
						<div className="flex">
							{tags.map((tag: any) => (
								<div
									key={tag}
									className="border tracking-tighter text-xs sm:text-sm font-light rounded-3xl px-3 mr-1"
									style={{ color: '#ABABAB', borderColor: '#DEDEDE' }}
								>
									{tag}
								</div>
							))}
						</div>
					</div>

					<div onClick={() => window.open(href, '_target')}>
						<Image
							src="/images/external-link.svg"
							width={18}
							height={18}
							alt="link"
							className="hover:opacity-70 cursor-pointer"
						/>
					</div>
				</div>
				<div className="flex flex-col md:flex-row flex-col justify-center items-center gap-5">
					<div className="flex flex-col gap-4 w-full md:w-1/2">
						{' '}
						<Image
							style={{ borderRadius: '0.4rem' }}
							src={src}
							width={isMobile ? 600 : 400}
							height={400}
							alt="image"
						/>
					</div>

					<div className="w-full md:w-1/2 flex flex-col gap-5 px-2 md:px-5">
						<div className="flex flex-col gap-2 leading-tight tracking-tight">
							<div className="text-yellow">Description</div>
							<div className="text-gray dark:text-lightgray">{description}</div>
						</div>
						<div className="flex flex-col gap-2 tracking-tight">
							<div className="text-yellow">Tools</div>
							<div className="text-gray dark:text-lightgray">{tools}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
