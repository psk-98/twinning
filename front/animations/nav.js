//animate burger lines
export const line1Variants = {
  open: {
    rotateZ: -405,
    translateX: -8,
    translateY: 6,
    transition: {
      type: "spring",
      stiffness: 50,
      restDelta: 2,
    },
  },
  closed: {
    rotateZ: 0,
    translateX: 0,
    translateY: 0,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}
export const line2Variants = {
  open: {
    opacity: 0,
  },
  closed: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
}
export const line3Variants = {
  open: {
    rotateZ: 405,
    translateX: -8,
    translateY: -6,
    width: "100%",
    transition: {
      type: "spring",
      stiffness: 50,
      restDelta: 2,
    },
  },
  closed: {
    rotateZ: 0,
    translateX: 0,
    translateY: 0,
    width: "80%",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}
//transperant nav
export const navVariants = {
  transparent: {
    backgroundColor: "transparent",
    transition: {
      ease: "easeOut",
      duration: 2,
    },
  },
  none: {
    backgroundColor: "#f5f5f5",
    transition: {
      ease: "easeOut",
      background: {
        duration: 2,
      },
    },
  },
}
export const sidebarVariants = {
  open: {
    height: "100%",
    width: "100vw",
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      restDelta: 2,
      delayChildren: 0.2,
    },
  },
  closed: {
    height: 0,
    width: 0,
    x: -100,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

//sidebar list and links
export const ulVariants = {
  open: {
    //display: 'block',
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    display: "none",
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
}
export const navLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    x: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}
