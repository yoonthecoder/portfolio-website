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
					title="Turtle App - Join Flow"
					text="Visit the website ↗"
					tags={['Frontend']}
					description={
						<div>
							<ul className="list-disc pl-5">
								<li>
									Built a multi-step signup flow for the Turtle App Join process
									using <strong>Next.js</strong>, <strong>Tailwind CSS</strong>,
									and <strong>React Hook Form</strong>.
								</li>
								<li>
									Implemented <strong>state management</strong> for smooth step
									transitions, ensuring a seamless user experience.
								</li>
								<li>
									Integrated <strong>advanced form validation</strong> using{' '}
									<strong>Zod</strong> to enhance accuracy and prevent
									submission errors.
								</li>
								<li>
									Designed with a focus on user engagement, improving onboarding
									efficiency for designers joining the Turtle Network.
								</li>
								<li>
									Streamlined the registration journey, contributing to
									increased conversion rates and a more intuitive user
									experience.
								</li>
							</ul>
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
							<ul className="list-disc pl-5">
								<li>
									<strong>Led frontend development</strong> of ScoreBox, a
									credit scoring dApp that won{' '}
									<strong>2 Best Use awards</strong> at ETH San Francisco.
								</li>
								<li>
									Built the core application using <strong>Next.js</strong> and{' '}
									<strong>TypeScript</strong> for a robust and scalable
									architecture.
								</li>
								<li>
									Designed a clean, responsive UI with{' '}
									<strong>TailwindCSS</strong> and <strong>Ant Design</strong>.
								</li>
								<li>
									Integrated <strong>MetaMask</strong> and{' '}
									<strong>NEAR Wallet</strong> for address fetching via{' '}
									<strong>ethers.js</strong> and the{' '}
									<strong>NEAR RPC API</strong>.
								</li>
								<li>
									Delivered an award-winning dApp showcasing innovative
									blockchain integration.
								</li>
							</ul>
						</div>
					}
					tools="Next.js, Tailwind CSS, Web3.js, ethers, NEAR RPC API, PostgreSQL"
					src={scoreBox}
					href="https://ethglobal.com/showcase/scorebox-ex0px"
				/>
				<ProjectCard
					title="IcePik"
					text="Visit the website ↗"
					tags={['Frontend', 'UI Design', 'Branding']}
					description={
						<div>
							<ul className="list-disc pl-5">
								<li>
									Developed reusable and testable UI components using{' '}
									<strong>Next.js</strong>, <strong>TypeScript</strong>, and{' '}
									<strong>Tailwind CSS</strong>, enhancing development
									efficiency and maintaining high code quality.
								</li>
								<li>
									Implemented user flows and interactive prototypes using{' '}
									<strong>Figma</strong>, ensuring a seamless and intuitive{' '}
									<strong>user experience</strong> throughout the application.
								</li>
								<li>
									Contributed to the <strong>brand identity</strong>{' '}
									development, aligning the design system with the
									platform&apos;s core values and target audience.
								</li>
								<li>
									Collaborated with the team to optimize the{' '}
									<strong>front-end architecture</strong>, improving
									maintainability and scalability.
								</li>
								<li>
									Ensured compatibility and performance across devices with{' '}
									<strong>responsive design</strong> practices and{' '}
									<strong>cross-browser testing</strong>.
								</li>
								<li>
									Integrated components with the backend, facilitating{' '}
									<strong>real-time trading functionality</strong> for{' '}
									<strong>FSC-certified products</strong>.
								</li>
							</ul>
						</div>
					}
					tools="Next.js, React, TypeScript, PostgreSQL, Prisma, Cypress, Apollo, GraphQL, Figma"
					src={icepik}
					href="https://www.ice-pik.com/"
				/>
				<ProjectCard
					title="Hofa Skyline Website"
					text="Visit the website ↗"
					tags={['Web Development', 'Branding', 'Web Design']}
					description={
						<div>
							<ul className="list-disc pl-5">
								<li>
									Led the creation of a{' '}
									<strong>responsive and engaging website</strong> using{' '}
									<strong>Webflow</strong>, expertly integrating the
									company&apos;s <strong>brand identity</strong> throughout the
									design.
								</li>
								<li>
									Integrated a <strong>CMS</strong> to enable effortless{' '}
									<strong>content management</strong>, allowing the company to
									update the site with the latest projects and news easily.
								</li>
								<li>
									Delivered a strategic combination of <strong>design</strong>{' '}
									and <strong>functionality</strong>, enhancing Hofa
									Skyline&apos;s digital footprint and aligning seamlessly with
									their business objectives.
								</li>
							</ul>
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
							<ul className="list-disc pl-5">
								<li>
									Led the revitalization of the agency&apos;s{' '}
									<strong>marketing website</strong>, implementing a new design
									using <strong>Webflow</strong> and integrating a{' '}
									<strong>CMS</strong> for timely and efficient content updates.
								</li>
								<li>
									Ensured the website remained up-to-date with the agency&apos;s{' '}
									<strong>latest services</strong>, enhancing its relevance and
									appeal.
								</li>
								<li>
									Integrated <strong>Google Analytics</strong> to gather
									actionable insights, shaping a{' '}
									<strong>data-driven optimization strategy</strong> that
									improved user engagement and conversion rates.
								</li>
								<li>
									Aligned the website with the agency&apos;s{' '}
									<strong>marketing goals</strong>, combining effective content
									management and analytics to drive results.
								</li>
							</ul>
						</div>
					}
					tools="Webflow, CMS, Google Analytics"
					src={turtleWebsite}
					href="https://www.turtle.design"
				/>
			</div>
		</>
	);
};

export default WorkSection;
