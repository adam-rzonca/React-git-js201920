import React from "react";
import { useEffect, useRef, useState } from "react";

const ContactPage = () => {
  const inputRef = useRef(null);
  const [email, setEmail] = useState("");

  // Ustawienie focusa przy montowaniu komponentu
  useEffect(() => {
    inputRef.current.focus();
  }, []); // [] - oznacza, że useEffect wykona sie raz, po zamontowaniu komponentu

  const validateEmail = text => {
    return /\S+@\S+\.\S+/.test(text);
  };

  const handleButtonClick = () => {
    if (validateEmail(email)) {
      alert("Dziękujemy, skontaktujemy się z Toba pod adresem: " + email);
      setEmail("");
    } else {
      alert("Podaj prawidłowy adres email");
    }
  };

  return (
    <div>
      <h3>Contact Page</h3>
      <div>
        <h4>Lets talk!</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia
          quam id justo hendrerit mollis. Sed feugiat erat ac tortor vehicula,
          et gravida ante tincidunt. Quisque iaculis urna a libero consequat
          rutrum.
        </p>
        <label>Email</label>
        <input
          value={email || ""}
          ref={inputRef}
          type="text"
          onChange={e => setEmail(e.target.value)}
        />
        <button onClick={handleButtonClick}>SEND</button>
      </div>
    </div>
  );
};

export default ContactPage;
