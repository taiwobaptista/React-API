import React, { useState } from 'react';
import "./card.css";

const Playlist = ({ countries: { state, _id, death, discharged, confirmedCases, casesOnAdmission } }) => {

  return (
    <>
      <div key={_id}>
        <div className="card-wrapper is-collapsed">
          <div className="card__inner_catalog_top">
            <section className="inner_right_section">
              <div className="image_topic_container">
                <div className="image_container">
                </div>
              </div>
            </section>
            <section className="inner_left_section">
              <div className="sub_title_header_mo_1">
                <h4 className="sub_title_header">state : {state}</h4>
                <span className="tag tag--new">confirmed Cases : {confirmedCases}</span>
              </div><h3 className="title_card">cases On Admission : {casesOnAdmission}</h3><h4 className="sub_title_header">{discharged}</h4>
              <div className="truncate-content">
                <span className="ng-star-inserted">death : {death}</span>
                </div>
                </section></div>
        </div>
      </div>
    </>
  )
}

export default Playlist;