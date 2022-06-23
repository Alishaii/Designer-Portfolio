import React from "react";
import { Link, NavbarButton, NavbarContainner } from "./styles";

export const Navbar = () => {
  const links = [
    {
      id: 1,
      text: "main",
      link: "#main",
    },
    {
      id: 2,
      text: "projects",
      link: "#projects",
    },
    {
      id: 1,
      text: "contact",
      link: "#contact",
    },
  ];

  return (
    <NavbarContainner>
      {links.map((link) => (
        <Link href={link.link}>
          <NavbarButton key={link.id} narrow>
            {link.text}
          </NavbarButton>
        </Link>
      ))}
    </NavbarContainner>
  );
};
