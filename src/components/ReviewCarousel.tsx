import { Box, IconButton } from "@mui/material";
import React, { useRef } from "react";
import ReviewCard from "./ReviewCard";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

function ReviewCarousel() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 252.5; // Ajusta la cantidad de desplazamiento
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: { xs: "90%", sm: "90%", md: "60%", lg: "60%", xl: "60%" }, // ✅ Ocupa el 50% de la pantalla
        height: { xs: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" }, // ✅ Altura fija
        margin: "0 auto", // ✅ Lo centra horizontalmente
        display: "flex",

        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Botón Izquierda */}
      <IconButton
        onClick={() => scroll("left")}
        sx={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          backgroundColor: "white",
          boxShadow: 2,
        }}
      >
        <ArrowBack />
      </IconButton>

      {/* Carrusel */}
      <Box
        ref={carouselRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          width: { xs: "70%", sm: "70%", md: "79%", lg: "70%", xl: "70%" }, // ✅ Ocupa el 50% de la pantalla
          height: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "100%",
            xl: "100%",
          },
          margin: { xs: 2, sm: 2, md: 2, lg: 2, xl: 2 },
          gap: { xs: "20%", sm: "7.5%", md: "7.8%", lg: "7%", xl: "8%" },
          paddingLeft: { xs: 2, sm: 4.5, md: 4, lg: 5, xl: 4 },
          p: 1,
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none", // Soporte para Firefox
        }}
      >
        {/* ReviewCard */}
        <ReviewCard
          avatarUrl="https://randomuser.me/api/portraits/men/1.jpg"
          name="John Doe"
          rating={4.5}
          comment="Great place to grow my plants, I love it!"
          sx={{
            flex: "0 0 210px",
          }}
        />

        {/* ReviewCard */}
        <ReviewCard
          avatarUrl="https://randomuser.me/api/portraits/men/1.jpg"
          name="John Doe"
          rating={4.5}
          comment="Great place to grow my plants, I love it!"
          sx={{ flex: "0 0 210px" }}
        />

        {/* ReviewCard */}
        <ReviewCard
          avatarUrl="https://randomuser.me/api/portraits/men/1.jpg"
          name="John Doe"
          rating={4.5}
          comment="Great place to grow my plants, I love it!"
          sx={{ flex: "0 0 210px" }}
        />
        <ReviewCard
          avatarUrl="https://randomuser.me/api/portraits/men/1.jpg"
          name="John Doe"
          rating={4.5}
          comment="Great place to grow my plants, I love it!"
          sx={{ flex: "0 0 210px" }}
        />
        <ReviewCard
          avatarUrl="https://randomuser.me/api/portraits/men/1.jpg"
          name="John Doe"
          rating={4.5}
          comment="Great place to grow my plants, I love it!"
          sx={{ flex: "0 0 210px" }}
        />
        <ReviewCard
          avatarUrl="https://randomuser.me/api/portraits/men/1.jpg"
          name="John Doe"
          rating={4.5}
          comment="Great place to grow my plants, I love it!"
          sx={{ flex: "0 0 210px" }}
        />
        <ReviewCard
          avatarUrl="https://randomuser.me/api/portraits/men/1.jpg"
          name="John Doe"
          rating={4.5}
          comment="Great place to grow my plants, I love it!"
          sx={{ flex: "0 0 210px" }}
        />
        <ReviewCard
          avatarUrl="https://randomuser.me/api/portraits/men/1.jpg"
          name="John Doe"
          rating={4.5}
          comment="Great place to grow my plants, I love it!"
          sx={{ flex: "0 0 210px" }}
        />
      </Box>

      {/* Botón Derecha */}
      <IconButton
        onClick={() => scroll("right")}
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          backgroundColor: "white",
          boxShadow: 2,
        }}
      >
        <ArrowForward />
      </IconButton>
    </Box>
  );
}

export default ReviewCarousel;
