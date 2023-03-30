import Title from './Title';
import ProjectCard from './ProjectCard';

const WorkSection = () => {
	const scoreBox = '/images/scorebox.png';
	const balloonBox = '/images/balloonbox.gif';
	const icepik = '/images/icepik.png';

	return (
		<>
			<Title title="Featured Work" />
			<div className="gap-2">
				<ProjectCard
					title="ScoreBox 🥇🥈"
					text="Learn more ↗"
					tags={['Frontend', 'Fintech', 'Web3']}
					description={
						<div>
							I led the frontend development of ScoreBox, a credit scoring dApp
							that won 2 best use awards at ETH San Francisco. I built the dApp
							using Next.js + Typescript for the core web app and integrated it
							with TailwindCSS + Ant Design for styling. The dApp also features
							MetaMask & NEAR wallet integration for address fetching, using
							ethers and NEAR RPC API.
						</div>
					}
					tools="Next.js, Tailwind CSS, Web3.js, ethers, NEAR RPC API, PostgreSQL"
					src={scoreBox}
					href="https://ethglobal.com/showcase/scorebox-ex0px"
				/>{' '}
				<ProjectCard
					title="IcePik"
					text="Visit the website ↗"
					tags={['Frontend', 'UI Design', 'Branding']}
					description={
						<div>
							IcePik is a user-friendly trading platform where people can buy
							and sell FSC certified products. On this proejct, I was
							responsible for buildling reusable and testable UI components
							using Next.js, TypeScript, and Tailwind CSS, which helped
							streamline development and ensure code quality. I also worked on
							developing the brand identity and designing the user flows using
							Figma, ensuring a consistent and intuitive user experience
							throughout the app.
						</div>
					}
					tools="Next.js,
              React, TypeScript, PostgreSQL, Prisma, Cypress, Apollo, GraphQL,
              Figma"
					src={icepik}
					href="https://www.ice-pik.com/"
				/>
				<ProjectCard
					title="BalloonBox Website"
					text="Visit the website ↗"
					tags={['Frontend', 'Web Design', 'Branding']}
					description={
						<div>
							During my internship at BalloonBox, I redesigned and rebuilt the
							company&apos;s website that better represents our brand and
							enhances the user experience. I also ensured that the website was
							responsive, accessible, and optimized for search engines and
							integrated with Google Analytics to track the website&apos;s
							performance and improve our marketing strategy.{' '}
						</div>
					}
					tools="Webflow, Figma, Google Analytics"
					src={balloonBox}
					href="https://www.balloonbox.io/"
				/>
			</div>
		</>
	);
};

export default WorkSection;
