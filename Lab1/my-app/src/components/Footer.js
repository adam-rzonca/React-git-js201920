import React from "react";
import FooterParagraph from "./FooterParagraph";

function Footer() {
  return (
    <footer className="jumbotron">
      <div className="container">
        <FooterParagraph>
          Album example is &copy; Bootstrap, but please download and customize
          it for yourself!
        </FooterParagraph>
        <FooterParagraph>
          New to Bootstrap?
          <a href="https://getbootstrap.com/">Visit the homepage</a>
        </FooterParagraph>
      </div>
    </footer>
  );
}

export default Footer;
