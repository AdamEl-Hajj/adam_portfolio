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
        My purpose goes in here.My purpose goes in here.My purpose goes in here.My purpose goes in here.My purpose goes in here.My purpose goes in here.My purpose goes in here.My purpose goes in here.My purpose goes in here.My purpose goes in here.
      </SectionText>
      <Button onClick={() => window.location ='https://google.com'}>Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;