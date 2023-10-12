const Card = ({ img, children }) => {
  return (
    <div className="w-[90%] max-w-md">
      <div className="w-full overflow-hidden max-h-48 rounded-md">
        <img src={img} alt="MMA Fighters" className="w-full" />
      </div>

      <div className="flex flex-col gap-5 p-2">{children}</div>
    </div>
  );
};

export default Card;
