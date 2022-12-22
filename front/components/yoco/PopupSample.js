//import React from "react"
import SampleStore from "./SampleStore"
import useScript from "react-script-hook"
import axios from "axios"
import { BASE_URL } from "../../actions/type"
import { useDispatch } from "react-redux"
import { placeOrder } from "../../actions/checkout"

export default function PopupSample() {
  const dispatch = useDispatch()
  useScript({
    src: "https://js.yoco.com/sdk/v1/yoco-sdk-web.js",
    onload: () => {
      // eslint-disable-next-line no-undef
      const yoco = new YocoSDK({
        publicKey: "pk_test_ed3c54a6gOol69qa7f45",
      })
      console.log("yoco")
      var checkoutButton = document.querySelector("#pay-button")
      checkoutButton.addEventListener("click", function () {
        yoco.showPopup({
          amountInCents: 2799,
          currency: "ZAR",
          name: "TwinningZA",
          description: "Awesome description",
          displayMethod: "MANUAL",
          callback: function (chargeToken) {
            console.log(chargeToken)

            dispatch(placeOrder(chargeToken.id))
            alert(
              `Card tokenization completed, your server must now process the payment`
            )
          },
        })
      })
    },
  })

  return (
    <SampleStore>
      <button id="pay-button" className="submit-button">
        Pay now
      </button>
    </SampleStore>
  )
}
