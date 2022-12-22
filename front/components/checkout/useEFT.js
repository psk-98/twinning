import { useEffect, useState } from "react"
import { useYoco } from "./useYoco"

export const useEFT = (publicKey) => {
  const yocoSDK = useYoco(publicKey)
  const [isYocoReady, setisYocoReady] = useState(false)

  function showEFT(params) {
    if (!yocoSDK) {
      throw new Error("YocoSDK not ready.")
    }
    return yocoSDK.submit({
      ...params,
      paymentType: "EFT",
    })
  }

  useEffect(() => {
    if (!yocoSDK) {
      setisYocoReady(false)
    }
    setisYocoReady(true)
  }, [yocoSDK])

  return [showEFT, isYocoReady]
}
