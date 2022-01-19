import { FooterStyled } from "../../styles/Footer.styled";
import { IoMdMail, IoLogoLinkedin, IoLogoGithub } from "react-icons/io";

const Footer = () => {
  return (
    <FooterStyled>
      <h6>Contact Me: </h6>
      <a href="mailto: gencbedriyenur@gmail.com">
        <IoMdMail size={25} />
      </a>
      <a href="https://www.linkedin.com/in/nurgnc/">
        <IoLogoLinkedin size={25} />
      </a>
      <a href="https://github.com/nurgnc">
        <IoLogoGithub size={25} />
      </a>
    </FooterStyled>
  );
};

export default Footer;
