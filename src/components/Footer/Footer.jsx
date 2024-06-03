import {
  FooterContainer,
  FooterInfoContainer,
  FooterInfo,
  Copyrights,
} from "./Footer.style";

function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterInfoContainer>
          <FooterInfo>Mobile: +407454545 </FooterInfo>
          <FooterInfo> Email: travelwithme@gmail.com </FooterInfo>
        </FooterInfoContainer>
        <Copyrights>@copyrights 2024</Copyrights>
      </FooterContainer>
    </>
  );
}

export default Footer;
