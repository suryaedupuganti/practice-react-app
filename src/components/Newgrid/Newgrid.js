import React from "react";
import "./Newgrid.css";
import { numberLiteralTypeAnnotation } from "@babel/types";

const Newgrid = ({ Text, labels }) => {
    const columnWidth = 12 / labels.length;
  return (
    <div className="container w-50">
      <div className="row">
        <div className="row">
          <h3>{Text}</h3>
        </div>

        <div className="row">
          {labels.map(element => {
            return (
              <div className={`col-${columnWidth}`}>
                <div class="circle">
                  <div class="circle__inner">
                    <div class="circle__wrapper">
                      <div class="circle__content">{element}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Newgrid;
