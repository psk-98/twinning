export const panelVariants = {
  closed: {
    x: "-100vw",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 50,
      restDelta: 2,
    },
  },
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      restDelta: 2,
    },
  },
}
export const appearVariants = {
  appear: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.3,
      ease: "easeOut",
    },
  },
  dis: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
}
export const filterOptionsVariants = {
  open: {
    display: "flex",
    opacity: 1,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  closed: {
    display: "none",
    opacity: 0,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

export const activeVariants = {
  active: {
    background: "#000",
    color: "#f5f5f5",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  not: {
    background: "none",
    color: "#000",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
}
