import React from "react";

const FlightTicketPage = () => {
  return (
    <div className="card text-center">
      <div className="card-header" className="p-3 mb-2 bg-info text-white">
        <h1>HELSINKI TO BANGALORE</h1>
      </div>

      <div className="card-body">
        <div className="d-flex justify-content-between w-100 p-3 mb-2 bg-primary text-white">
          <div className="w-100">
            <div className="d-flex justify-content-between w-100 p-3 mb-2 bg-primary text-white">
              <label>Suirya E</label>
              <label>M</label>
              <label>24</label>
              <labe> AYF302</labe>
            </div>
            <div className="d-flex justify-content-between w-100 p-3 mb-2 bg-primary text-white">
              <label>Vijju </label>
              <label>F</label>
              <label>23</label>
              <label>RF302</label>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between w-100">
          <button type="button" class="btn btn-lg btn-primary" disabled>
            Confirmed
          </button>
          <button type="button" class="btn btn-lg btn-primary" disabled>
            $322
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightTicketPage;
