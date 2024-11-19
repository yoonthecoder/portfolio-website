import Image from 'next/image';
import useMatchMedia from '../hooks/useMatchMedia';

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
	href?: string;
}
export default function ProjectCard({
	title,
	tags,
	description,
	tools,
	src,
	href,
}: IProjectCard) {
	const [isMobile] = useMatchMedia(breakpoints);
	return (
		<div className="bg-white dark:bg-navbar-darkgray flex rounded-2xl p-1 border border-lightgray dark:border-0 px-8 md:px-8 py-10 rounded-xl my-5">
			<div className="flex flex-col gap-5">
				<div className="flex justify-between">
					<div className="flex flex-col gap-3">
						<h2 className="font-medium' text-2xl tracking-tight text-black dark:text-lightgray">
							{title}
						</h2>
						<div className="flex">
							{tags.map((tag: any) => (
								<div
									key={tag}
									className="border tracking-tighter text-xs sm:text-sm rounded-3xl px-3 mr-1"
									style={{ color: '#ABABAB', borderColor: '#DEDEDE' }}
								>
									{tag}
								</div>
							))}
						</div>
					</div>

					{href && (
						<div onClick={() => window.open(href, '_target')}>
							<Image
								src="/images/external-link.svg"
								width={18}
								height={18}
								alt="link"
								className="hover:opacity-70 cursor-pointer"
							/>
						</div>
					)}
				</div>
				<div className="flex flex-col md:flex-row flex-col justify-center items-center gap-5">
					<div
						className={`flex flex-col gap-4 w-full md:w-1/2 hover:scale-105 duration-300 ${
							href && 'cursor-pointer'
						}`}
						onClick={() => window.open(href, '_target')}
					>
						<Image
							style={{ borderRadius: '0.4rem' }}
							src={src}
							width={isMobile ? 600 : 400}
							height={400}
							alt="image"
						/>
					</div>

					<div className="w-full md:w-1/2 flex flex-col gap-5 px-2 md:px-5">
						<div className="flex flex-col gap-2 leading-tight">
							<div className="text-yellow">Description</div>
							<div className="text-gray dark:text-lightgray font-light">
								{description}
							</div>
						</div>
						<div className="flex flex-col gap-2">
							<div className="text-yellow">Tools</div>
							<div className="text-gray dark:text-lightgray font-light">
								{tools}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
