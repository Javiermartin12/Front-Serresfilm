import { Box } from "@mui/material";
import { motion } from "framer-motion";

const logoVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
  hover: {
    scale: 1.1,
    rotate: 2,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const Logo = () => {
  return (
    <Box
      component={motion.img}
      src="https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741106016/My%20Brand/WhatsApp_Image_2025-02-18_at_16.20.49-removebg-preview_quwlfq.png"
      alt="Serresfilm - Invernaderos"
      aria-label="Logo de Serresfilm"
      loading="lazy"
      variants={logoVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      sx={{
        cursor: "pointer",
        overflow: "hidden",
        mt: { xs: "3%", sm: "1%", md: "0.5%" },
        ml: { md: "3%", lg: "2%" },
        width: { xs: "20%", sm: "20%", md: "20%", lg: "20%", xl: "18%" },
        height: "auto",
      }}
    />
  );
};

export default Logo;
