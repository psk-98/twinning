import React from "react"
//import styled from 'styled-components'
import Spacer from "./ds/Spacer"

const SampleStore = ({ children, twoColumn = false }) => (
  <div style={{ padding: "20px" }}>
    <div className="store-header">
      <div className="store-logo">Y</div>
      <Spacer horizontal />
      <div>
        <div className="store-name">Twinning ZA</div>
        <div className="store-details">
          <Spacer horizontal />
        </div>
      </div>
    </div>
    <div className="store-content">
      {twoColumn ? (
        <div className="row">
          <div className="col col--6">
            <div className="product">
              <img alt="shirt" height="200" src="img/shirt.svg" />
            </div>
            <Spacer />
          </div>
          <div className="col col--6">
            <Spacer size="lg" />
            {children}
          </div>
        </div>
      ) : (
        <>
          <div className="product">
            <img alt="shirt" height="200" src="img/shirt.svg" />
          </div>
          <Spacer />
          {children}
        </>
      )}
    </div>
    <div className="childContainer"></div>
  </div>
)

export default SampleStore
