import React from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import useMatchMedia from '../hooks/useMatchMedia';
import Footer from './Footer';

const breakpoints = [
	'(max-width: 768px)',
	'(min-width: 769px) and (max-width: 1199px)',
	'(min-width: 1200px)',
];

export default function Layout({ children }: any) {
	const [isMobile, isTablet, isDesktop] = useMatchMedia(breakpoints);

	return (
		<div
			className={`font-sfpro h-screen bg-background-gray dark:bg-background-dark`}
		>
			<NavBar />
			<main className="flex bg-background-gray dark:bg-background-dark">
				{isDesktop && <SideBar />}
				<div
					className="flex px-5 md:px-10 py-20 w-full"
					style={{ marginLeft: `${isDesktop ? '250px' : '0px'}` }}
				>
					{children}
				</div>
			</main>
			<Footer />
		</div>
	);
}
