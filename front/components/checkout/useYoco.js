import { useEffect, useState } from "react"

const addScript = (onLoad) => {
  const script = document.createElement("script")
  script.src = "https://js.yoco.com/sdk/v1/yoco-sdk-web.js"
  script.async = async
  script.onload = onLoad
  document.body.appendChild(script)
}

export function useYoco(publicKey, id) {
  const [yocoSDK, setYocoSDK] = useState()

  const initSdk = () => {
    setYocoSDK(new window.yocoSDK({ publicKey, id }))
  }

  useEffect(() => {
    console.log(yocoSDK)
    if (!window.yocoSDK) {
      addScript(() => initSdk())
    } else {
      initSdk()
    }
  }, [])
  return yocoSDK
}
