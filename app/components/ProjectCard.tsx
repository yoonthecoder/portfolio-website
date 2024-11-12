import Image from 'next/image';
import { useRouter } from 'next/router';
import useMatchMedia from '../hooks/useMatchMedia';

const breakpoints = [
	'(max-width: 768px)',
	'(min-width: 769px) and (max-width: 1199px)',
	'(min-width: 1200px)',
];
// interface IProjectCard {
// 	title: string;
// 	text: string;
// 	tags: Array<String>;
// 	description: JSX.Element;
// 	tools: string;
// 	src: string;
// 	href?: string;
// }
export default function ProjectCard({ id, title, tags, src }) {
	const [isMobile] = useMatchMedia(breakpoints);
	const router = useRouter();

	return (
		<div
			className="bg-white border border-lightgray flex flex-col gap-4 p-5 col-start-1 col-end-6 rounded-lg cursor-pointer relative h-80 overflow-hidden"
			onClick={() => {
				router.push(`/projects/${id}`);
			}}
		>
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
			<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full max-w-none p-5">
				<Image
					width={400}
					height={400}
					src={src}
					alt="img"
					className="rounded-md"
				/>
			</div>
		</div>
	);
}
