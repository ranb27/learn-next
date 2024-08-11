"use client";

import React from "react";
import ReactApexChart from "react-apexcharts";
import { useTheme } from "next-themes";

export default function Chart({ data }) {
  console.log("data", data);
  const { theme } = useTheme();

  // Check if data.stats exists and has elements before accessing its elements
  const hpStat =
    data.stats && data.stats[0] && data.stats[0].base_stat
      ? data.stats[0].base_stat
      : 0;

  const atkStat =
    data.stats && data.stats[1] && data.stats[1].base_stat
      ? data.stats[1].base_stat
      : 0;

  const defStat =
    data.stats && data.stats[2] && data.stats[2].base_stat
      ? data.stats[2].base_stat
      : 0;

  const spAtkStat =
    data.stats && data.stats[3] && data.stats[3].base_stat
      ? data.stats[3].base_stat
      : 0;

  const spDefStat =
    data.stats && data.stats[4] && data.stats[4].base_stat
      ? data.stats[4].base_stat
      : 0;

  const spdStat =
    data.stats && data.stats[5] && data.stats[5].base_stat
      ? data.stats[5].base_stat
      : 0;

  const series = [
    {
      name: "Stats",
      data: [hpStat, atkStat, defStat, spAtkStat, spDefStat, spdStat],
    },
    {
      name: "Physical",
      data: [data.weight, data.height, data.base_experience],
    },
  ];

  const options = {
    chart: {
      foreColor: theme === "dark" ? "#fff" : "#333",
      height: 600,
      type: "radar",
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1,
      },
    },

    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.1,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: ["HP", "Attack", "Defense", "Sp. Atk", "Sp. Def", "Speed"],
    },
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="radar"
          height={600}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}
