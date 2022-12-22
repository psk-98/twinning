export const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100",
    //width: "100%",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      staggerChildren: 0.3,
      duration: 0.8,
      delay: 0.5,
    },
  },
  exit: {
    opacity: 1,
    x: "-100vh",
    transition: {
      ease: "easeInOut",
      delay: 0.5,
    },
  },
}
