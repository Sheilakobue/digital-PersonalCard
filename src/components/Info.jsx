import SheilaPhoto from "../images/Sheila.jpg";
import React from "react";


export default function Info() {
  return (
    <div className="info">
      <img className="info--photo" src={SheilaPhoto} alt="Sheila Kobue" />
      <h1 className="info--fullname">Mmaserole Sheila Kobue</h1>
      <h5 className="info--role">Junior Front End Developer</h5>
      <p className="info--website">
        <a
          className="info--websiteLink"
          href="https://stellar-croquembouche-086371.netlify.app/"
          target=""
          rel="noopener noreferrer"
        >
        Sheils.it
        </a>
      </p>
      <div className="info--buttons">
        <address>
          <a href="maserole.mojela@gmail.com">
            {" "}
            <button className="button button--email">
             
              Email
            </button>
          </a>
        </address>
        <a
          href="https://www.linkedin.com/in/sheila-kobue-82161973/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button button--linkedin">
          
            LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
}
