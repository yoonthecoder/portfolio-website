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
          tags={["Frontend", "Fintech", "Web3"]}
          description="ScoreBox is a credit scoring dApp built on NEAR Protocol and Polygon. I ued NextJS + Typescript for the core web app alongside the TailwindCSS + Ant Design for all styling. We integrated with both MetaMask (ethers library) & NEAR wallets for address fetching. We spun up a PostgreSQL database in Heroku for local data storage. Heroku made this super easy."
          tools="Next JS, Tailwind CSS, Web3.js, ethers, NEAR RPC API"
          src={scoreBox}
          href="/"
        />
        <ProjectCard
          title="BalloonBox Website"
          tags={["Frontend", "Webflow", "Branding"]}
          description="ScoreBox is a credit scoring dApp built on NEAR Protocol and Polygon. I ued NextJS + Typescript for the core web app alongside the TailwindCSS + Ant Design for all styling. We integrated with both MetaMask (ethers library) & NEAR wallets for address fetching. We spun up a PostgreSQL database in Heroku for local data storage. Heroku made this super easy."
          tools="Next JS, Tailwind CSS, Web3.js, ethers, NEAR JS RPC"
          src={balloonBox}
          href="/"
        />
        <ProjectCard
          title="IcePik"
          tags={["Frontend", "UX/UI Design", "Branding"]}
          description="ScoreBox is a credit scoring dApp built on NEAR Protocol and Polygon. I ued NextJS + Typescript for the core web app alongside the TailwindCSS + Ant Design for all styling. We integrated with both MetaMask (ethers library) & NEAR wallets for address fetching. We spun up a PostgreSQL database in Heroku for local data storage. Heroku made this super easy."
          tools="Next JS, Tailwind CSS, web3.js, ethers, NEAR JS RPC"
          src={icepik}
          href="/"
        />
      </div>
    </>
  );
};

export default WorkSection;
