import useMatchMedia from '../hooks/useMatchMedia';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const breakpoints = [
	'(max-width: 768px)',
	'(min-width: 769px) and (max-width: 1199px)',
	'(min-width: 1200px)',
];

export default function NavBar() {
	const [isMobile, isTablet, isDesktop] = useMatchMedia(breakpoints);
	return (
		<div className="relative">{isMobile ? <MobileNav /> : <DesktopNav />}</div>
	);
}
