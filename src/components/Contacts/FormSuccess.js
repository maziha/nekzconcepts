import React from "react";
import "./Form.css";
import Icon5 from "../../images/icon5.svg";

const FormSuccess = () => {
  return (
    <div className="form-content-right">
      <h1 className="form-success">We have received your request!</h1>
      <img className="form-img-2" src={Icon5} alt="nekz concepts" />
    </div>
  );
};

export default FormSuccess;
