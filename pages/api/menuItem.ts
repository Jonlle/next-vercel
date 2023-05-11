import { NextApiRequest, NextApiResponse } from "next";
import { type } from "os";
import { Interface } from "readline";

type Data = {
  text: string;
  href: string;
};

type Res = Array<Data>;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Res>
) {
  res.status(200).json([
    {
      text: "Home",
      href: "/",
    },
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Contact",
      href: "/contact",
    },
    {
      text: "Pricing",
      href: "/pricing",
    },
  ]);
}
