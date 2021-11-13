import { faChevronDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import React, { useState } from "react";
import ItemCard, { ItemCardProps } from "../components/ItemCard";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";

interface Filters {
  maxPrice: number;
  minPrice: number;
  search: string;
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/items`);
  const data: ItemCardProps[] = await res.json();

  return {
    props: { cardItems: data }, // will be passed to the page component as props
  };
}

function Home({
  cardItems,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [filters, setFilters] = useState<Filters>({
    maxPrice: 10000,
    minPrice: 1,
    search: "",
  });

  function itemsWithFilters(): ItemCardProps[] {
    return cardItems.filter(
      (cardItem) =>
        cardItem.price > filters.minPrice &&
        cardItem.price < filters.maxPrice &&
        (!filters.search ||
          cardItem.name.indexOf(filters.search.toLowerCase()) > -1)
    );
  }

  return (
    <Layout>
      <Head>
        <title>Marketplace</title>
        <meta name="description" content="Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex">
        <div>
          <p className="text-gray-400 text-sm">
            Westie Babies &gt; Marketplace
          </p>
          <h1 className="font-bold text-4xl mt-2">Marketplace</h1>
        </div>
        <div className="flex space-x-3 flex-1 justify-end mt-10">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon
                icon={faSearch}
                style={{ width: 20, height: 20 }}
              />
            </div>
            <input
              className="py-4 px-4 bg-itemCard placeholder-gray-300 text-white appearance-none w-full block pl-12 focus:outline-none text-sm"
              placeholder="Search Item"
              data-ms-editor="true"
              value={filters.search}
              onChange={(event) =>
                setFilters({ ...filters, search: event.target.value })
              }
            />
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ width: 20, height: 20 }}
              />
            </div>
            <input
              className="py-4 px-4 bg-itemCard placeholder-gray-300 text-white appearance-none w-full block pl-12 focus:outline-none text-sm"
              placeholder="Sort by on-sale date"
              data-ms-editor="true"
            />
          </div>
        </div>
      </div>
      <div className="flex mt-8">
        <div className="w-1/5 mr-16">
          <p className="text-lg">Filters</p>
          <div className="flex flex-col space-y-3 mt-8">
            <p className="uppercase text-gray-300 text-xs">€ price</p>
            <div className="grid grid-cols-2 space-x-3">
              <input
                className="bg-itemCard text-center py-1"
                type="number"
                value={filters.minPrice}
                onChange={(event) =>
                  setFilters({
                    ...filters,
                    minPrice: Number(event.target.value),
                  })
                }
              />
              <input
                className="bg-itemCard text-center py-1"
                type="number"
                value={filters.maxPrice}
                onChange={(event) =>
                  setFilters({
                    ...filters,
                    maxPrice: Number(event.target.value),
                  })
                }
              />
            </div>

            <p className="uppercase text-gray-300 text-xs">Item number</p>

            <div className="grid grid-cols-2 space-x-3">
              <input
                className="bg-itemCard text-center py-1"
                type="number"
                value="1"
              />
              <input
                className="bg-itemCard text-center py-1"
                type="number"
                value="10000"
              />
            </div>
            <p className="uppercase text-gray-300 text-xs ">Awards</p>
            <div className="flex flex-col">
              <label>
                <input type="checkbox" className="mr-3" />
                NFT
              </label>
              <label>
                <input type="checkbox" className="mr-3" />
                Governance token
              </label>
              <label>
                <input type="checkbox" className="mr-3" />
                Planted trees
              </label>
              <label>
                <input type="checkbox" className="mr-3" />
                Staking
              </label>
              <label>
                <input type="checkbox" className="mr-3" />
                Harmonix
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="grid grid-cols-3 gap-x-10 gap-y-4">
            {itemsWithFilters().map((cardItem) => (
              <ItemCard {...cardItem} />
            ))}
          </div>
          <Pagination />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
