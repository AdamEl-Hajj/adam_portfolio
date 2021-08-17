import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';


const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      <BlogCard>
        <Img src ='/images/climbonup.png'/>
        <TitleContent>
          <HeaderThree title>Climb on Up</HeaderThree>
          <Hr />
        </TitleContent>
        <CardInfo>Climb on Up is a 3D mountain climbing game that university collegues and I created for our final year project. This project was initially intended to operate in VR however the cirumstances during the start of the pandemic made it hard to acquire the equipment to do so.</CardInfo>
        <div>
          <br />
          <TitleContent>Stack</TitleContent>
          <TagList>
            <Tag>C#</Tag>
            <Tag>Blender</Tag>
          </TagList>
        </div>
        <UtilityList>
          <ExternalLinks href='https://www.youtube.com/watch?v=uEvSdOE41lI'>Youtube</ExternalLinks>
        </UtilityList>
      </BlogCard>
      {/* SECOND PROJECT */}
      <BlogCard>
        <Img src ='/images/final logo.png'/>
        <TitleContent>
          <HeaderThree title>CheersBot</HeaderThree>
          <Hr />
        </TitleContent>
        <CardInfo>A Discord bot with a number of useful automated tasks called upon by bot commands within the Discord Server. Tasks include: welcoming new members, time checking relative to the location of the users, a poll system etc.</CardInfo>
        <div>
          <br />
          <TitleContent>Stack</TitleContent>
          <TagList>
            <Tag>Python</Tag>
          </TagList>
        </div>
        <UtilityList>
          <ExternalLinks href='https://github.com/AdamEl-Hajj/cheersbot'>Code</ExternalLinks>
        </UtilityList>
      </BlogCard>
      {/* THIRD PROJECT */}
      <BlogCard>
        <Img src ='/images/portfolio.png'/>
        <TitleContent>
          <HeaderThree title>Portfolio Website</HeaderThree>
          <Hr />
        </TitleContent>
        <CardInfo>My personal Portfolio website. Initially started with a template and editted to my own liking. It's the website you're on right now :)</CardInfo>
        <div>
          <br />
          <TitleContent>Stack</TitleContent>
          <TagList>
            <Tag>React</Tag>
            <Tag>Node</Tag>
          </TagList>
        </div>
        <UtilityList>
          <ExternalLinks href='https://github.com/AdamEl-Hajj/adam_portfolio'>Code</ExternalLinks>
        </UtilityList>
      </BlogCard>
      {/* FOURTH PROJECT */}
      <BlogCard>
        <Img src ='/images/imp2.png'/>
        <TitleContent>
          <HeaderThree title>IMP</HeaderThree>
          <Hr />
        </TitleContent>
        <CardInfo>IMP is an image processing tool where a user can manipulate an imported image with different filters and blurs. CMPS 230 (Digital Media Programming) Project.</CardInfo>
        <div>
          <br />
          <TitleContent>Stack</TitleContent>
          <TagList>
            <Tag>Processing</Tag>
          </TagList>
        </div>
        <UtilityList>
          <ExternalLinks href='https://github.com/AdamEl-Hajj/imp230'>Code</ExternalLinks>
        </UtilityList>
      </BlogCard>
    </GridContainer>
    <SectionDivider />
  </Section>
);

export default Projects;


// Automated project
{/* <GridContainer>
      {projects.map(({id, description, image, tags, title, source, visit}) => (
        <BlogCard key={id}>
          <Img src={image}/>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <br />
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>YouTube</ExternalLinks>
            <ExternalLinks href={source}>Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer> */}