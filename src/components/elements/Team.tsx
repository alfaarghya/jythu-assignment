"use client";
import React, { useEffect, useState } from "react";
import AnimatedTooltip from "../ui/AnimatedTooltip";

interface teamType {
  id: number;
  name: string;
  designation: string;
  image: string;
  link: string;
}

const Team = () => {
  const [data, setData] = useState<teamType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/team");
      const data = await response.json();
      return data;
    }
    fetchData().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mb-10 w-full">
      <h3 className="text-2xl mb-10">Meet Our Dynamic Team</h3>
      <div className="flex flex-row items-center justify-center mb-10 w-full">
        <AnimatedTooltip items={data} />
      </div>
    </div>
  );
};

export default Team;
