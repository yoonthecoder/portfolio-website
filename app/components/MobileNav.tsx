'use client';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const MobileNav = () => {
	const logo = '/images/main-logo.svg';
	const [isOpen, setIsOpen] = useState(false);
	const handleMenuClick = () => {
		setIsOpen(!isOpen);
	};
	const handleRoute = (route: string) => {
		router.push(route);
		setIsOpen(false);
	};

	const router = useRouter();

	return (
		<div className="mobile-menu flex justify-between items-center py-4 px-8">
			<Link href="/">
				<Image src={logo} width={30} height={30} alt="main-logo" />
			</Link>
			<button className="menu-button" onClick={handleMenuClick}>
				{isOpen ? (
					<XMarkIcon className="w-8 h-8 text-yellow" />
				) : (
					<Bars3Icon className="w-8 h-8 text-yellow" />
				)}
			</button>
			<nav
				className={`menu-nav ${
					isOpen ? 'open' : ''
				} w-full flex text-center items-center z-10 bg-background-gray dark:bg-background-dark`}
			>
				<ul className="w-full ">
					<li
						className="flex items-center justify-center bg-background-gray dark:bg-background-dark hover:bg-white h-14 dark:hover:bg-navbar-darkgray cursor-pointer"
						onClick={() => handleRoute('/')}
					>
						<a>Home</a>
					</li>
					<li
						className="flex items-center justify-center bg-background-gray dark:bg-background-dark dark:hover:bg-navbar-darkgray hover:bg-white h-14 cursor-pointer"
						onClick={() => handleRoute('/about')}
					>
						<a>About</a>
					</li>
					<li
						className="flex items-center justify-center bg-background-gray dark:bg-background-dark dark:hover:bg-navbar-darkgray hover:bg-white h-14 cursor-pointer"
						onClick={() => handleRoute('/projects')}
					>
						<a>Projects</a>
					</li>
					<li className="flex items-center justify-center bg-background-gray dark:bg-background-dark py-2">
						<ThemeToggle />
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default MobileNav;
