import Title from "./Title";
import ReviewCard from "./ReviewCard";

const ReviewSection = () => {
  return (
    <>
      {" "}
      <Title
        title="Recommendations"
        description={"from the awesome people I’ve worked with!"}
      />
      <div className="flex gap-3 overflow-x-scroll py-3 items-start">
        <ReviewCard
          message={
            <div>
              Yoon started as an intern at Balloon Box, and grew in experience
              and maturity to quickly take on projects and take on
              responsibility &apos; ahead of her time.&apos; Yoon out-performs
              every time.{" "}
              <b className="font-semibold">
                She is incredibly tenacious, hard working and has a &quot;never
                say die&quot; attitude when tackling a challenge.
              </b>{" "}
              Yoon is an absolute delight in any team setting with an attitude
              to life that speaks volumes.
            </div>
          }
          name="-Michael Brink, Founder of BalloonBox"
        />
        <ReviewCard
          message={
            <div>
              Saying that &quot;Yoon&apos;s creativity is amazing&quot; is just
              an understatement. Her designs just keep getting better and
              better. There&apos;s always a wow factor in her work. She is very
              resilient and has a never-say-die attitude.{" "}
              <b className="font-semibold">
                Her UI/UX expertise, added with her programming skills,
                definitely shows on all of the projects that she&apos;s been
                part of. She&apos;s always looking for ways to progress and
                never letting herself get behind her peers.
              </b>
            </div>
          }
          name="-Jerick Iquin, Full-stack Developer"
        />
        <ReviewCard
          message={
            <div>
              Yoon is a talented designer and frontend developer.{" "}
              <b className="font-semibold">
                She has a unique skillset where she creates beautiful designs
                and is able to implement them harmoniously into a visual web
                application.
              </b>{" "}
              She has a calming aura and is amazing with people.
            </div>
          }
          name="-Ronnie Liu, Head of Operations"
        />
      </div>
    </>
  );
};

export default ReviewSection;
