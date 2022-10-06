import React from 'react';
import styled from 'styled-components';

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const LinkContainer = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Link: React.FC<LinkProps> = ({ children, href }) => {
  return <LinkContainer href={href}>{children}</LinkContainer>;
};

export default Link;
