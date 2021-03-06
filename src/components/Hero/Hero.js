import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionText marginTop = "50px">
        Hi, my name is
      </SectionText>
      <SectionTitle main center>
        Adam El-Hajj
      </SectionTitle>
      <SectionText>
        I am an aspiring software developer based in Bahrain working towards becoming a Full Stack Developer. <br /> <br />
        Currently, I am working remotely as a Software Intern at 
        <a href="https://hexagonppm.com/"> Hexagon PPM</a>
        <br /> 
        <br />
      </SectionText>
      <br />
      <br />
      <Button onClick={() => window.location ='https://pdfhost.io/v/lwt5vsAQN_CV3_Adam_ElHajj'}>Resume</Button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </LeftSection>
  </Section>
);

export default Hero;