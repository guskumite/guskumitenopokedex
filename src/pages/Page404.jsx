import { useState, useEffect } from "react";
import axios from "axios";

const Page404 = () => {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(
          "https://v2.jokeapi.dev/joke/Any?lang=en&blacklistFlags=religious,political,racist,sexist,explicit&format=txt"
        )
        .then((response) => {
          setResponse(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[url('/pokedex.png')] bg-fixed w-[95vw] md: w-[80vw] h-[200vh] justify-items">
      <p className="h-[10vh] w-[90vw] bg-opacity-70 md: w-[60vw]"></p>
      <h1 className="ml-10 text-4xl bg-[lightcyan] h-[18vh] w-[90vw] md: w-[60vw] bg-opacity-70 text-center">
        The error 404 web
      </h1>
      <p className="ml-10 text-3xl w-[90vw] md: w-[60vw] bg-[lightblue] h-[15vh] bg-opacity-70 text-center">
        why I got this page?
      </p>
      <p
        className="ml-10 text-2xl w-[90vw] md: w-[60vw] bg-[lightsalmon] leading-8 h-[4vh] text-center items-center
      bg-opacity-70"
      ></p>
      <h2
        className="py-2 ml-10 text-xl w-[90vw] md: w-[60vw] bg-[lightsalmon] leading-8 text-center items-center
      bg-opacity-90"
      >
        Don't worry, it seems that you typed a wrong URL, in any case I found a
        joke to make your day:{" "}
        {response && (
          <p className="text-2xl w-[90vw] md: w-[60vw] bg-[lightsalmon] bg-opacity-70">
            {response}
          </p>
        )}
      </h2>
    </div>
  );
};

export default Page404;
