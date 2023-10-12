import NavBar from "../components/nav/navbar";

const Articles = () => {
  return (
    <>
      <NavBar />

      <div className="flex flex-col gap-5">
        <h1 className="font-black text-gray-800 text-3xl text-center">
          Articles
        </h1>
      </div>
    </>
  );
};

export default Articles;
