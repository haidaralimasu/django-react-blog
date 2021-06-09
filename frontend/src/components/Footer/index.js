import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaTwitter,

} from 'react-icons/fa';
import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

function Footer() {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper>
  
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            
            KodingHandle
          </SocialLogo>
          <WebsiteRights>KodingHandle © 2021 All Rights Reserved</WebsiteRights>
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
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;