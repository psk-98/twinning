export const imgVariants = {
  appear: {
    opacity: 1,
    display: "block",
    transiton: {
      ease: "easeIn",
      duration: 0.5,
    },
  },
  dis: {
    opacity: 0,
    display: "none",
    transiton: {
      ease: "easeOut",
      duration: 0.8,
    },
  },
}

export const selectorVariants = {
  active: {
    background: "none",
    border: "#000 1px solid",
    color: "#000",
    transiton: {
      ease: "easeIn",
      duration: 0.5,
    },
  },
  not: {
    background: "#000",
    border: "none",
    color: "#f5f5f5",
    transiton: {
      ease: "easeOut",
      duration: 0.8,
    },
  },
}

export const headerVariants = {
  active: {
    borderBottom: "#000 1px solid",
    transiton: {
      delay: 0.2,
      ease: "easeIn",
    },
  },
  not: {
    border: "none",
    transiton: {
      ease: "easeOut",
      duration: 0.2,
    },
  },
}
