"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Image } from "@nextui-org/react";

//! Components
import Chart from "./Chart";
import AutoFilter from "./AutoFilter";

function Main() {
  //! Filter
  //* Options
  const [pokeOptions, setPokeOptions] = useState([]);
  const [pokeSelected, setPokeSelected] = useState(null);

  //! Data Table
  const [pokeData, setPokeData] = useState([]);

  //! Get data from API
  //* Options
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        const data = response.data.results;

        const pokeName = data.map((poke) => poke.name);

        console.log(pokeName);
        setPokeOptions(pokeName);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //* Table
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeSelected}`)
      .then((response) => {
        console.log(response.data);
        setPokeData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [pokeSelected]);

  console.log("pokeData", pokeData);

  return (
    <div className="grid gap-8">
      <AutoFilter
        options={pokeOptions}
        selected={pokeSelected}
        setOptions={setPokeOptions}
        setSelected={setPokeSelected}
      />
      <div className="grid grid-cols-2">
        <div className="grid">
          <Image
            src={
              pokeData.sprites?.front_default
                ? pokeData.sprites?.front_default
                : null
            }
            alt="Pokemon"
            width={600}
            height={600}
          />
          <p className="font-bold text-foreground text-5xl text-center">
            {pokeData && pokeData.name ? pokeData.name.toUpperCase() : ""}
          </p>
        </div>
        <div className={`${pokeSelected ? "block" : "hidden"}`}>
          <Chart data={pokeData} />
        </div>
      </div>
    </div>
  );
}

export default Main;
