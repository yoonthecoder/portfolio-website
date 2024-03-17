import Title from './Title';
import ProjectCard from './ProjectCard';

const WorkSection = () => {
	const scoreBox = '/images/scorebox.png';
	const balloonBox = '/images/balloonbox.gif';
	const icepik = '/images/icepik.png';
	const turtleApp = '/images/turtle-app.png';
	const turtleWebsite = '/images/turtle-website.png';
	const hofa = '/images/hofa.png';

	return (
		<>
			<Title title="Featured Work" />
			<div className="gap-2">
				<ProjectCard
					title="Hofa Skyline Website"
					text="Visit the website ↗"
					tags={['Frontend', 'Web Development', 'Branding', 'Web Design']}
					description={
						<div>
							I led the creation of a responsive and engaging website with
							Webflow, expertly weaving their brand identity throughout the
							design. The project aimed to showcase their construction expertise
							through a visually striking online platform. By integrating a CMS,
							I ensured effortless content management, enabling the company to
							keep the site updated with the latest projects and news. This
							strategic combination of design and functionality not only
							enhanced Hofa Skyline&apos;s digital footprint but also aligned
							seamlessly with their business objectives, providing a perfect
							balance between visual appeal and user experience.
						</div>
					}
					tools="Webflow, CMS, Google Analytics"
					src={hofa}
					href="https://hofa-skyline.webflow.io/"
				/>
				<ProjectCard
					title="Turtle Design Website"
					text="Visit the website ↗"
					tags={['Frontend', 'Web Development']}
					description={
						<div>
							I led the revitalization of their marketing website, implementing
							a new design via Webflow and overseeing the CMS for timely content
							updates. This ensured the site remained up-to-date with the
							agency&apos;s latest services. Integrating Google Analytics was
							key, providing insights that shaped our data-driven optimization
							strategy, improving user engagement and conversion rates. My focus
							was on creating a visually striking, easy-to-navigate website that
							was not only content-rich but also strategically aligned with the
							agency&apos;s marketing goals through effective content management
							and analytics.
						</div>
					}
					tools="Webflow, CMS, Google Analytics"
					src={turtleWebsite}
					href="https://www.turtle.design"
				/>
				<ProjectCard
					title="Turtle App - Join Flow"
					text="Visit the website ↗"
					tags={['Frontend']}
					description={
						<div>
							I developed a multi-step signup experience for the Turtle App-Join
							Flow, utilizing Next.js, Tailwind CSS, and React Hook Form. This
							approach streamlined the entry process for designers into the
							Turtle Network, featuring smooth state management for flawless
							step transitions and rigorous form validation to ensure precision.
							Aimed at delivering a seamless registration journey, the design
							focused on user engagement and ease, effectively connecting
							designers with opportunities in the Turtle Network.
						</div>
					}
					tools="Next.js, Tailwind CSS, React Hook Form, State Management, Google Analytics"
					src={turtleApp}
					href="https://www.turtle.app/join"
				/>
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
				/>
			</div>
		</>
	);
};

export default WorkSection;
