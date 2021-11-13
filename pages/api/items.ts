import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    {
      imgUrl: "#",
      name: "the golden rooster",
      price: 17,
      nbUnits: 50,
    },
    {
      imgUrl: "#",
      name: "leaftseat",
      price: 7,
      nbUnits: 50,
    },
    {
      imgUrl: "#",
      name: "oyster",
      price: 9.99,
      nbUnits: 50,
    },
    {
      imgUrl: "#",
      name: "batelion",
      price: 9.99,
      nbUnits: 50,
    },
    {
      imgUrl: "#",
      name: "cameneon",
      price: 1499.99,
      nbUnits: 50,
    },
    {
      imgUrl: "#",
      name: "silk moth",
      price: 14.99,
      nbUnits: 50,
    },
  ]);
}
