const HeaderPokedex = () => {
  return (
    <main>
      <section>
        <div className="h-16 bg-red-600">
          <img
            className="h-full aspect[3/2] hover:h-[14vh]"
            src="/images/pokedexlogo.png"
          />
        </div>
        <div className="h-14 bg-black relative">
          <div
            className="h-16 aspect-square bg-white rounded-full absolute left-3/4
          -translate-x-1/2 -top-8 border-[8px] border-black hover:bg-red hover:left-1/2"
          >
            <div
              className="h-10 aspect-square bg-[#333] rounded-full border-[5px] border-black
              mt-[4px] ml-[4px] hover:bg-white"
            ></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeaderPokedex;
