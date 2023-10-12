const Card = ({ img, children }) => {
  return (
    <div className="w-[90%] max-w-md">
      <img src={img} alt="MMA Fighters" className="w-full rounded-md" />

      <div className="flex flex-col gap-5 p-2">{children}</div>
    </div>
  );
};

export default Card;
