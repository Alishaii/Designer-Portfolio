import React from "react";
import { Link, NavbarButton, NavbarContainner } from "./styles";

interface ComponentLink {
  id: number;
  text: string;
  link: string;
}
interface NavbarProps {
  links: ComponentLink[];
}

export const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <NavbarContainner>
      {links.map((link) => (
        <Link key={link.id} href={link.link}>
          <NavbarButton key={link.id} narrow>
            {link.text}
          </NavbarButton>
        </Link>
      ))}
    </NavbarContainner>
  );
};
