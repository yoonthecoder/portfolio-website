import Image from 'next/image';
import Link from 'next/link';

export default function SideBar() {
	const logo = 'images/main-logo.svg';
	const instagram = 'images/instagram.svg';
	const github = 'images/github.svg';
	const linkedin = 'images/linkedin.svg';

	return (
		<>
			<aside
				className="fixed h-screen mt-1 px-10 p-20"
				style={{ minWidth: '250px' }}
			>
				{' '}
				<div className="flex flex-col justify-between h-full border-r border-yellow">
					<Link href="/">
						<Image src={logo} width={50} height={40} alt="main-logo" />
					</Link>
					<div className="flex flex-col gap-2">
						<div className="flex flex-col text-lightblack tracking-tight dark:text-lightgray">
							Connect with me
						</div>
						<div className="flex gap-5">
							<a
								href="https://www.linkedin.com/in/imyoonkim/"
								target="_blank"
								rel="noreferrer"
								className="hover:opacity-80"
							>
								<Image src={linkedin} width={25} height={25} alt="linkedin" />
							</a>
							<a
								href="https://github.com/yoonthecoder"
								target="_blank"
								rel="noreferrer"
								className="hover:opacity-80"
							>
								<Image src={github} width={25} height={25} alt="linkedin" />
							</a>
							<a
								href="https://www.instagram.com/yoonthecoder/"
								target="_blank"
								rel="noreferrer"
								className="hover:opacity-80"
							>
								<Image src={instagram} width={25} height={25} alt="linkedin" />
							</a>
						</div>
					</div>
				</div>
			</aside>
		</>
	);
}
