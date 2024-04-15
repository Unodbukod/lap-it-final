'use client'


import React, { useEffect, useState } from "react";
import Image from "next/image";
import Card from "../components/constants";

interface HomeContent {
  id: number;
  contentName: string;
  content: string;
}

const Home = () => {
    const [homeContents, setHomeContents] = useState<{
      [key: number]: string;
    }>({});

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "/api/landingpagecontent/landingpagehomecontent"
          );
          const data = await response.json();
          const homes: HomeContent[] = data.homeContent;
  
          // Create an object to store Home contents by ID
          const contents: { [key: number]: string } = {};
          for (const home of homes) {
            contents[home.id] = home.content;
          }
          setHomeContents(contents);
        } catch (error) {
          console.error("Error fetching Home content:", error);
        }
      };
  
      fetchData();
    }, []);

  const card = [
    { title: "100K+", description: "Total Customer" },
    { title: "100K+", description: "Real Time Customer" },
    { title: "100K+", description: "Customer Satisfaction" },
  ];

  return (
    <div className="select-none bg-blue-600">
      <div className="max-w-screen-xl mx-auto">
        <section className="padding-container flex flex-col gap-20 py-5 xl:flex-row">
          <div className="mt-7">
            <div className="pt-10">
              <h1 className="text-5xl font-extrabold text-white mb-4">
                {homeContents[1]}
              </h1>
              <h1 className="text-5xl font-extrabold text-white mb-4">
                {homeContents[2]}{" "}
                <span className="bg-white px-1 w-6 text-blue-600 rounded-md">
                {homeContents[3]}
                </span>
              </h1>
              <h1 className="text-5xl font-extrabold text-white">{homeContents[4]}</h1>
              <p className="text-white mt-7 text-md text-justify mx-auto max-w-lg">
                {homeContents[5]}
              </p>
            </div>
            <div>
              <button className="-ml-0 mt-9 border w-44 h-10 rounded-md border-white text-white font-semibold hover:bg-white hover:text-black">
                Get Started
              </button>
              <button className="ml-28 mt-9 border w-44 h-10 rounded-md border-white text-white font-semibold hover:bg-white hover:text-black">
                Book a demo
              </button>
            </div>
            <div className="mt-6 my-5-44 flex flex-row justify-between text-md">
              {card.map((car, index) => (
                <Card
                  key={index}
                  title={car.title}
                  description={car.description}
                />
              ))}
            </div>
          </div>
          <div className="w-1/2 relative mt-20">
            <div className="-mt-9 pl-24 mb-24">
              <Image
                src="/Vector.svg"
                alt="Image Description"
                width={530}
                height={400}
                className="opacity-10"
              />
            </div>
            <div className="absolute -top-1 -right-3">
              <Image
                src="/lap.svg"
                alt="Image Description"
                width={600}
                height={400}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
