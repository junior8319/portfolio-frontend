import { Link } from "react-router-dom";
import { FooterContainer, FooterContent } from "../styled/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const iconsStyle = {
    color: '#e1dbdb',
    fontSize: '2rem',
    margin: '2px 10px',
    borderRadius: '20px',
  };

    return (
      <FooterContainer >
        <FooterContent>
          <Link
            to="https://github.com/junior8319"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={ faGithub }
              style={ iconsStyle }
            />
            Github
          </Link>
          <Link
            to="https://www.linkedin.com/in/antonio-fullstack-dev"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={ faLinkedin }
              style={ iconsStyle }
            />
            LinkedIn
          </Link>
          <Link
            to="https://wa.me/5512996254431"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={ faWhatsapp }
              style={ iconsStyle }
            />
            WhatsApp
          </Link>

          <Link
            to="https://www.instagram.com/antoniocarlosster"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={ faInstagram }
              style={ iconsStyle }
            />
            Instagram
          </Link>
        </FooterContent>
      </FooterContainer>
    );
};

export default Footer;
