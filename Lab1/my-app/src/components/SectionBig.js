import React from "react";
import Header from "./Header";
import MutedParagraph from "./MutedParagraph";
import Button from "./Button";

function SectionBig() {
  return (
    <section className="jumbotron text-center">
      <div className="container">
        <Header title="Section Title" />
        <MutedParagraph
          text="Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don't simply skip over it entirely."
        />
        <p>
          <Button label="Show more" />
        </p>
      </div>
    </section>
  );
}

export default SectionBig;
