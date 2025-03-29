import { Box, SxProps, Theme } from "@mui/material";
import Link from "next/link";

interface LogoProps {
  sx?: SxProps<Theme>;
}

const Logo: React.FC<LogoProps> = () => {
  return (
    <Link href="/">
      <Box
        sx={{
          cursor: "pointer",
          overflow: "hidden",
          mt: { xs: "3%", sm: "1%", md: "0.5%" },
          ml: { md: "3%", lg: "2%" },
          width: { xs: "20%", xl: "18%" },
          height: "auto",
        }}
      >
        <Box
          component="img"
          src="https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741106016/My%20Brand/WhatsApp_Image_2025-02-18_at_16.20.49-removebg-preview_quwlfq.png"
          alt="Logo de Serresfilm, empresa especializada en invernaderos."
          aria-label="Logo de Serresfilm"
          loading="lazy"
          sx={{
            width: "100%",
            height: "auto",
          }}
        />
      </Box>
    </Link>
  );
};

export default Logo;
