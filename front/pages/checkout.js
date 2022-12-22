import React, { useEffect, useState } from "react"
//import { usePopup } from "../components/checkout"
//import useScript from "react-script-hook/lib/use-script"
import Script from "next/script"
import PopupSample from "../components/yoco/PopupSample"
import axios from "axios"
import { BASE_URL } from "../actions/type"

// Public Key: pk_test_ed3c54a6gOol69qa7f45
// Secret Key:  sk_test_960bfde0VBrLlpK098e4ffeb53e1

export default function Checkout() {
  // useScript({
  //   src: "https://js.yoco.com/sdk/v1/yoco-sdk-web.js",
  //   onload: () => {
  //     const yoco = new YocoSDK({
  //       publicKey: "pk_test_ed3c54a6gOol69qa7f45",
  //     })
  //     //console.log(yoco.showPop())
  //     var checkoutButton = document.querySelector("#pay-button")
  //     checkoutButton.addEventListener("click", () => {
  //       yoco.showPop({
  //         amountInCents: 2799,
  //         currency: "ZAR",
  //         name: "Your Store",
  //         description: "Awesome description",
  //         displayMethod: "MANUAL",
  //         callback: (chargeToken) => {
  //           alert(
  //             `Card tokenization completed, your server must now process the payment`
  //           )
  //         },
  //       })
  //     })
  //   },
  // })

  const onload = () => {
    const yoco = new YocoSDK({
      publicKey: "pk_test_ed3c54a6gOol69qa7f45",
    })
    console.log(yoco)
    var checkoutButton = document.querySelector("#pay-button")
    console.log(checkoutButton)
    checkoutButton.addEventListener("click", function () {
      yoco.showPop({
        amountInCents: 2799,
        currency: "ZAR",
        name: "Your Store",
        description: "Awesome description",
        displayMethod: "MANUAL",
        callback: (chargeToken) => {
          let params = {
            chargeToken,
          }
          const res = axios.post(`${BASE_URL}/payment/`, params)
          console.log(res)
          alert(
            `Card tokenization completed, your server must now process the payment`
          )
        },
      })
    })
  }

  return (
    <>
      <PopupSample />
    </>
  )
}
