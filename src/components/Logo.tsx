import Box from "@mui/material/Box/Box";
import { motion } from "framer-motion";

const Logo = () => (
  <Box
    component={motion.img}
    src="/SerresfilmLogo.png"
    alt="Serresfilm-Invernaderos"
    whileHover={{ scale: 1.1 }}
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 2 }}
    sx={{
      cursor: "pointer",
      overflow: "hidden",
      marginTop: { xs: "3%", sm: "1%", md: "0.5%" },
      marginLeft: { md: "3%", lg: "2%" },
      width: { xs: "30%", sm: "33%", md: "30%", lg: "9%", xl: "10%" },
      height: "70%",
    }}
  />
);
export default Logo;
