//import React from "react"

export const InlineForm = ({ children, onSubmit, ...rest }) => {
  return (
    <form
      id="payment-form"
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit()
      }}
      {...rest}
    >
      <div className="one-liner">
        <div id="card-frame" className="card-frame"></div>
      </div>
      {children}
    </form>
  )
}
