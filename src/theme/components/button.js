const baseStyle = {
  fontWeight: "normal",
};


const variants = {
  rounded_solid: {
    background: "gray.900",
    color: "white",
    borderRadius: "full",
    _hover: { background: "gray.600" },
    _focus: { bg: "gray.700" },
    _active: { bg: "gray.800" },
  },
  outline: {
    color: "positive",
    bg: "transparent",
    border: "1px solid",
    borderRadius: "full",
    borderColor: { color: "#EAECF0" },
    _hover: {
      bg: "transparent",
      color: "gray.600",
      borderColor: { color: "gray.100" },
    },
    _focus: {
      bg: "transparent",
      color: "positive_hover",
      borderColor: { color: "positive_hover" },
    },
    _active: {
      bg: "transparent",
      color: "positive_hover",
      borderColor: { color: "positive_hover" },
    },
  },
  link: {
    color: "gray.900",
    bg: "transparent",
    fontSize: "md",
    h: "auto",
    _hover: { color: "positive_hover", textDecoration: "none" },
    _focus: { color: "positive_hover", textDecoration: "none" },
    _active: { color: "positive_hover", textDecoration: "none" },
  },
};

export default {
  baseStyle,
  variants,
};
