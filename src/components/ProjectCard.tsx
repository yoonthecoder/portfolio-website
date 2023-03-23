import Image from "next/image";
import useMatchMedia from "../hooks/useMatchMedia";
import Button from "./Button";
import { BUTTON_STYLES } from "./Button";

const breakpoints = [
  "(max-width: 768px)",
  "(min-width: 769px) and (max-width: 1199px)",
  "(min-width: 1200px)",
];
interface IProjectCard {
  title: string;
  text: string;
  tags: Array<String>;
  description: string;
  tools: string;
  src: string;
  href: string;
}
export default function ProjectCard({
  title,
  text,
  tags,
  description,
  tools,
  src,
  href,
}: IProjectCard) {
  const [isMobile] = useMatchMedia(breakpoints);
  return (
    <div className="bg-white flex rounded-2xl p-1 border border-lightgray p-8 rounded-xl my-5">
      <div className="flex flex-col gap-3">
        <h2 className="font-medium text-2xl tracking-tighter text-black">
          {title}
        </h2>
        <div className="flex">
          {tags.map((tag: any) => (
            <div
              key={tag}
              className="border tracking-tighter text-sm font-light rounded-3xl px-3 mr-1"
              style={{ color: "#ABABAB", borderColor: "#DEDEDE" }}
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row flex-col justify-center items-center gap-5">
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            {" "}
            <Image
              style={{ borderRadius: "0.4rem" }}
              src={src}
              width={isMobile ? 600 : 400}
              height={400}
              alt="image"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-5 px-2 md:px-5">
            <div className="flex flex-col gap-2 leading-tight tracking-tight">
              <div className="text-yellow">Description</div>
              <div className="text-gray">{description}</div>
            </div>
            <div className="flex flex-col gap-2 tracking-tight">
              <div className="text-yellow">Tools</div>
              <div className="text-gray">{tools}</div>
            </div>
            <div className="flex justify-end py-5">
              <Button
                text={text}
                style={BUTTON_STYLES.DEFAULT}
                buttonOnClick={() => window.open(href, "_target")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
