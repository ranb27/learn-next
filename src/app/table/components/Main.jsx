"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@nextui-org/react";

//! Components
import DataTable from "./DataTable";
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
      .get(`https://pokeapi.co/api/v2/pokemon/`)
      .then((response) => {
        console.log(response.data);
        setPokeData(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log("pokeData", pokeData);

  return (
    <div className=" text-foreground">
      {/* <AutoFilter
        options={pokeOptions}
        selected={pokeSelected}
        setOptions={setPokeOptions}
        setSelected={setPokeSelected}
      /> */}

      <DataTable data={pokeData} />
    </div>
  );
}

export default Main;
