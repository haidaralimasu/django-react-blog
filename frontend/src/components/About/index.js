import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button2 } from '../../globalStyles';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from './AboutElements';
import haidar from '../../images/haidar.jpeg'
import {
  SocialMedia,
  SocialIcons,
  SocialIconLink,
  SocialMediaWrap
} from '../Footer/FooterElements'
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaEnvelope

} from 'react-icons/fa';

function AboutP({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start
}) {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>

          <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={haidar} alt="img" />
              </ImgWrapper>
            </InfoColumn>

            <InfoColumn>
              <TextWrapper>
                <TopLine >Haidar Ali</TopLine>
                <Subtitle >haidaralimasu123@gmail.com</Subtitle>
                <Heading lightText={lightText}>About Koding Handle</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>I am Haidar Ali, here in koding handle my priority is to write blogs that are helpful to you in real world. Here i will post tutorials, techniques and code of my projects.</Subtitle>
                

 <SocialMedia>
            <SocialIcons>
            <SocialIconLink href='https://www.facebook.com/haidarali.masu.5648/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='https://www.instagram.com/is_that_haidar/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={
                'https://github.com/Haidar1528'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Github'
            >
              <FaGithub />
            </SocialIconLink>
            <SocialIconLink href='https://twitter.com/Haidar95742254' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="mailto: haidaralimasu123@gmail.com" target='_blank' aria-label='Twitter'>
              <FaEnvelope />
            </SocialIconLink>
          </SocialIcons>
      
      </SocialMedia>



              </TextWrapper>
            </InfoColumn>
            
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default AboutP;