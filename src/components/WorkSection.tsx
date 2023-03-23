import Title from "./Title";
import ProjectCard from "./ProjectCard";

const WorkSection = () => {
  const scoreBox = "/images/scorebox.png";
  const balloonBox = "/images/balloonbox.gif";
  const icepik = "/images/icepik.png";

  return (
    <>
      <Title title="Featured Work" />
      <div className="gap-2">
        <ProjectCard
          title="ScoreBox 🥇🥈"
          text="Learn more ↗"
          tags={["Frontend", "Fintech", "Web3"]}
          description="ScoreBox is a credit scoring dApp that was built at the ETH San Francisco Hackathon with the team and we won 2 best use awards. I led the frontend of the project and built the dApp using Next.js + Typescript for the core web app alongside the TailwindCSS + Ant Design for all styling and integrated with both MetaMask & NEAR wallet for address fetching using ethers."
          tools="Next.js, Tailwind CSS, Web3.js, ethers, NEAR RPC API, PostgreSQL"
          src={scoreBox}
          href="https://ethglobal.com/showcase/scorebox-ex0px"
        />{" "}
        <ProjectCard
          title="IcePik"
          text="Visit the website ↗"
          tags={["Frontend", "UX/UI Design", "Branding"]}
          description="IcePik is a trading platform where people can buy and sell FSC certified products. The app was built using React, Next.js, PostgreSQL, GraphQL and Node. On this project, I worked on branding, designing the user flows using Figma and building the UI components using Next.js,TypeScript and Tailwind CSS."
          tools="Next.js, React, TypeScript, PostgreSQL, Prisma, Cypress, Apollo, GraphQL, Figma"
          src={icepik}
          href="https://www.ice-pik.com/"
        />
        <ProjectCard
          title="BalloonBox Website"
          text="Visit the website ↗"
          tags={["Frontend", "Web Design", "Branding"]}
          description="During my internship at BalloonBox, I redesigned and rebuilt the company's website that better represents our brand and enhances the user experience. I also ensured that the website was responsive, accessible, and optimized for search engines and integrated with Google Analytics to track the website's performance and improve our marketing strategy. "
          tools="Webflow, Figma, Google Analytics"
          src={balloonBox}
          href="https://www.balloonbox.io/"
        />
      </div>
    </>
  );
};

export default WorkSection;
