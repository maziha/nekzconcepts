import React, { useState } from "react";
import "./Form.css";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import Icon4 from "../../images/icon4.svg";
// import Icon1 from "../../images/location.svg";
// import Icon2 from "../../images/email.svg";
// import Icon3 from "../../images/telephone.svg";
// import emailjs from "emailjs-com";
import {
  ContactsContainer,
  FormContentLeft,
  ContactsH1,
  FormWrapper,
  // DetailsWrapper,
  // Details,
  // DetailsIcon,
  // DetailsH2,
  // DetailsP,
  // DetailsH1,
} from "./ContactsElements";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <ContactsContainer id="contact">
      <ContactsH1>Contact Us</ContactsH1>
      <FormWrapper>
        {/* <span className="close-btn">×</span> */}
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
        <FormContentLeft>
          <img className="form-img" src={Icon4} alt="nekz concepts" />
        </FormContentLeft>
      </FormWrapper>
      {/* <DetailsH1>Get in Touch</DetailsH1> */}

      {/* <DetailsWrapper>
        <Details>
          <DetailsIcon src={Icon1} />
          <DetailsH2>Location</DetailsH2>
          <DetailsP>
            <a href="https://goo.gl/maps/ffTzizPL3KUgyN3n6">Go to Maps</a>
          </DetailsP>
        </Details>
        <Details>
          <DetailsIcon src={Icon2} />
          <DetailsH2>E-mail</DetailsH2>
          <DetailsP>
            <a href="mailto:nekzconcepts@gmail.com?subject=Quote%20Request&body=I%20would%20be%20grateful%20if%20you%20could%20send%20me%20a%20quote%20for%20the%20following_______.">
              Mail Us
            </a>
          </DetailsP>
        </Details>
        <Details>
          <DetailsIcon src={Icon3} />
          <DetailsH2>Call</DetailsH2>
          <DetailsP>
            <a href="tel:+918891880648">Shahul</a>
          </DetailsP>
          <DetailsP>
            <a href="tel:+919447225593">Jasil</a>
          </DetailsP>
        </Details>
      </DetailsWrapper> */}
    </ContactsContainer>
  );
};

export default Form;
