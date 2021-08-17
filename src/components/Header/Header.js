import Link from 'next/link'; //link to different pages
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles'; //styled components

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex", alignItems: "center", color: 'white', marginBottom: '20px'}}>
          <img src="images/headshot2.png" width="75" height="75" href="/"/>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/AdamEl-Hajj">
        <AiFillGithub size="4rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/adamelhajj/">
        <AiFillLinkedin size="4rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
