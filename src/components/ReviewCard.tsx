type ReviewCard = {
  message: JSX.Element;
  name: string;
};

const ReviewCard = ({ message, name }: ReviewCard) => {
  return (
    <div
      className="bg-white text-black flex flex-col flex-shrink-0 justify-center gap-3 border border-lightgray rounded p-10"
      style={{ maxWidth: "400px" }}
    >
      <div>{message}</div>
      <div className="flex justify-end">{name}</div>
    </div>
  );
};

export default ReviewCard;
