'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';

const DesktopNav = () => {
	const router = useRouter();
	if (!router) return null;
	const logo = '/images/main-logo.svg';
	const isHome = router.asPath === '/';

	return (
		<header className="w-full text-black fixed py-5 z-30 text-sm px-10">
			<div className="max-w-7xl mx-auto w-full flex justify-between items-center">
				<Link href="/">
					<Image src={logo} width={30} height={30} alt="main-logo" />
				</Link>
				<div className="flex bg-white/90 dark:bg-navbar-dark dark:border-black gap-6 justify-center border border-lightgray shadow-sm py-3 px-8 rounded-full">
					<div
						className="hover:text-yellow hover:dark:text-yellow cursor-pointer dark:text-lightgray"
						onClick={() => router.push('/')}
					>
						Home
					</div>
					<div
						className="hover:text-yellow hover:dark:text-yellow cursor-pointer dark:text-lightgray"
						onClick={() => router.push('/about')}
					>
						About
					</div>
					<div
						className="hover:text-yellow hover:dark:text-yellow cursor-pointer dark:text-lightgray"
						onClick={() => router.push('/projects')}
					>
						Projects
					</div>
				</div>
				<ThemeToggle />
			</div>
		</header>
	);
};

export default DesktopNav;
