import { useAnimation } from "framer-motion"
import {
  line1Variants,
  line2Variants,
  line3Variants,
  navVariants,
} from "../../animations/nav"

export const handleBurger = (
  line1Controls,
  line2Controls,
  line3Controls,
  toggle,
  setToggle
) => {
  setToggle(!toggle)
  if (!toggle) {
    line1Controls.start(line1Variants.open)
    line2Controls.start(line2Variants.open)
    line3Controls.start(line3Variants.open)
  } else {
    line1Controls.start(line1Variants.closed)
    line2Controls.start(line2Variants.closed)
    line3Controls.start(line3Variants.closed)
  }
}

//transperant nab
export const handleNav = (lastScrollY, navControls, setLastScrollY) => {
  if (window.scrollY > lastScrollY) {
    navControls.start(navVariants.transparent)
  } else {
    navControls.start(navVariants.none)
  }

  // remember current page location to use in the next move
  setLastScrollY(window.scrollY)
}

//icons
export function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      fill="none"
      viewBox="0 0 17 17"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 16l-2.98-3.153a6.992 6.992 0 10-11.732-6.84 6.992 6.992 0 008.864 8.633"
      ></path>
    </svg>
  )
}
export function CartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="17"
      fill="none"
      viewBox="0 0 14 17"
    >
      <path
        stroke="#000"
        d="M11 16H1V3.679h12v10.178M4.5 3.143V2.07v0C4.5 1.48 4.98 1 5.571 1H8v0a1 1 0 011 1v1.143"
      ></path>
    </svg>
  )
}
