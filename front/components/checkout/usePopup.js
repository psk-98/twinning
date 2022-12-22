import { useEffect, useState } from "react"

const addScript = (onLoad) => {
  const script = document.createElement("script")
  script.src = "https://js.yoco.com/sdk/v2/blackbird-web-sdk.js"
  script.async = true
  script.onload = onLoad
  document.head.appendChild(script)
}

export const useYoco = (publicKey, id) => {
  const [yocoSDK, setYocoSDK] = useState()
  const initSdk = () => {
    setYocoSDK(
      new window.BlackbirdSDK({
        publicKey,
        id,
      })
    )
  }

  useEffect(() => {
    if (!window.BlackbirdSDK) {
      addScript(() => initSdk())
    } else {
      initSdk()
    }
  }, [])
  return yocoSDK
}
