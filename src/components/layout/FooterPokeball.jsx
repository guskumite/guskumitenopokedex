const FooterPokeball = ({ name }) => {
  const userExit = () => {
    localStorage.removeItem("trainer");
    window.alert(
      "さよなら (Sayonara)" + (name ? name : "") + (name ? "-さん -san!" : "")
    );
  };

  return (
    <main>
      <section className="w-[18rem]">
        <div className="h-16 bg-red-600 w-full"></div>
        <div className="h-14 bg-black relative w-full">
          <div
            className="h-16 aspect-square bg-white rounded-full absolute left-1/2
            -translate-x-1/2 -top-8 border-[8px] border-black hover:bg-red hover:left-3/4"
          >
            <div
              className="h-10 aspect-square bg-[#333] rounded-full border-[5px] border-black
              mt-[4px] ml-[4px] hover:bg-white"
            ></div>
          </div>
          <div
            onClick={userExit}
            className="h-20 text-md flex items-center aspect-square bg-white rounded-full absolute left-1/4
            -translate-x-1/2 -top-8 border-[8px] border-black hover:bg-red hover:text-lg"
          >
            Logout
          </div>
        </div>
      </section>
    </main>
  );
};

export default FooterPokeball;
