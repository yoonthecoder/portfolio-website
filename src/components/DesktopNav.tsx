import { useRouter } from 'next/router';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';
const DesktopNav = () => {
	const router = useRouter();
	const logo = 'images/main-logo.svg';
	const isHome = router.asPath === '/';

	return (
		<header className="w-full text-black dark:bg-navbar-dark fixed py-5 z-30 text-sm">
			<div className="max-w-7xl mx-auto w-full flex justify-between items-center">
				<Link href="/">
					<Image src={logo} width={30} height={30} alt="main-logo" />
				</Link>
				<div className="flex gap-6 justify-center border border-lightgray shadow-sm py-3 px-8 rounded-full">
					<div
						className="hover:text-yellow cursor-pointer"
						onClick={() => router.push('/about')}
					>
						About
					</div>
				</div>
				<ThemeToggle />
			</div>
		</header>
	);
};

export default DesktopNav;
