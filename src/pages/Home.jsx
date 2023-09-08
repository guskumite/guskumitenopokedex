import FooterPokeball from "../components/layout/FooterPokeball";
import { useDispatch } from "react-redux";
import { loginTrainer } from "../store/slices/trainer.slice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const trainerName = e.target.trainerName.value;
    dispatch(loginTrainer(trainerName));
    localStorage.setItem("trainer", trainerName);
    window.alert("Welcome " + trainerName);
    navigate("/pokedex");
  };

  const theName = localStorage.getItem("trainer");

  return (
    <main className="min-h-screen grid grid-rows-[1fr_auto] max-h-[90%]">
      <section>
        <article className="ml-4">
          <div>
            <p className="text-2xl text-center"> ぐsくみて の ぽけでx </p>
            <img src="/images/pokedexlogo.png" alt="image" />
          </div>
          <h2 className="text-4xl text-red-400">Hello trainer!</h2>
          <p className="text-xl">To start, give me your name</p>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="border-2 inline-block p-1 border-solid border-gray-400">
              <input
                className="bg-[lightblue] border-solid custom-placeholder text-2xl"
                autoComplete="off"
                required
                placeholder="Enter your name please ..."
                id="trainerName"
                type="text"
              />
              <button className="ml-4 bg-red-600 w-16 text-black text-2xl border-solid border-gray-400">
                Start!
              </button>
            </div>
          </form>
        </article>
      </section>
      <FooterPokeball name={theName} />
    </main>
  );
};

export default Home;
