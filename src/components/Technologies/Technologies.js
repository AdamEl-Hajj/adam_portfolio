import React from 'react';
import { DiFirebase, DiNodejs, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionTitle>Technologies</SectionTitle>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
        <ListTitle>Front-end</ListTitle>
        <ListParagraph>
          React <br />
          HTML <br />
          CSS
        </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejs size="3rem"/>
        <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Node <br />
          SQL <br />
          MongoDB <br />
          PHP <br />
        </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="3rem"/>
        <ListContainer>
        <ListTitle>Languages & Tools</ListTitle>
        <ListParagraph>
          Java <br />
          Python <br />
          C# <br />
          Git <br />
        </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider />
  </Section>
);

export default Technologies;
