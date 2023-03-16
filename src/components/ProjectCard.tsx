import Image from "next/image";

export default function ProjectCard({
  title,
  tags,
  description,
  tools,
  src,
  href,
}) {
  return (
    <div className="bg-white flex-col rounded-2xl p-1 border border-lightgray p-8 rounded-xl my-5">
      <div className="flex flex-col gap-3">
        <h2 className="font-medium text-2xl tracking-tighter text-black">
          {title}
        </h2>
        <div className="flex">
          <div className="flex flex-col gap-4 w-1/2">
            {" "}
            <div className="flex">
              {tags.map((tag: string) => (
                <div
                  key={tag}
                  className="border tracking-tighter text-sm font-light rounded-3xl px-3 mr-1"
                  style={{ color: "#ABABAB", borderColor: "#DEDEDE" }}
                >
                  {tag}
                </div>
              ))}
            </div>
            <Image
              style={{ borderRadius: "0.4rem" }}
              src={src}
              width={400}
              height={400}
              alt="image"
            />
          </div>
          <div className="w-1/2 flex flex-col gap-4 px-5">
            <div className="flex flex-col gap-2 leading-tight tracking-tight">
              <div className="text-yellow">Description</div>
              <div className="text-gray">
                ScoreBox is a credit scoring dApp built on NEAR Protocol and
                Polygon. I used NextJS + Typescript for the core web app
                alongside the tailwindCSS + Ant Design for all styling. We
                integrated with both MetaMask (ethers library) & NEAR wallets
                for address fetching. We spun up a PostgreSQL database in Heroku
                for local data storage. Heroku made this super easy.{" "}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-yellow">Tools</div>
              <div className="text-gray">
                Next.js, tailwindCSS, Ant Design, MetaMask
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
