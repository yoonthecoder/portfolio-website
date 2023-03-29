import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);
	if (!mounted) return null;
	return (
		<button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
			{theme === 'light' ? (
				<div className="py-2 px-3 bg-white rounded-3xl flex gap-2 items-center hover:bg-black/20">
					<MoonIcon className="text-black h-5 w-5" />
					Dark
				</div>
			) : (
				<div className="py-2 px-3 bg-navbar-darkgray rounded-3xl flex gap-2 items-center hover:bg-white/20">
					<SunIcon className="text-lightgray h-5 w-5" />
					Light
				</div>
			)}
		</button>
	);
};

export default ThemeToggle;