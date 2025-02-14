import { Box, IconButton } from "@mui/material";
import React, { useRef } from "react";
import ReviewCard from "./ReviewCard";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

function ReviewCarousel() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 185; // Ajusta la cantidad de desplazamiento
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
        width: "50%", // ✅ Ocupa el 50% de la pantalla
        height: { xs: "34%", sm: "23%", md: "19.3%", lg: "60vh", xl: "23%" }, // ✅ Altura fija
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
          gap: 2,
          p: 2,
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
        />

        {/* ReviewCard */}
        <ReviewCard
          avatarUrl="/Greenhouse/Avatar-2.jpg"
          name="Jane Doe"
          rating={5}
          comment="The best place to grow my plants, I love it!"
        />

        {/* ReviewCard */}
        <ReviewCard
          avatarUrl="/Greenhouse/Avatar-3.jpg"
          name="Alice Doe"
          rating={4}
          comment="I love this place, it's the best!"
        />
        <ReviewCard
          avatarUrl="/Greenhouse/Avatar-3.jpg"
          name="Alice Doe"
          rating={4}
          comment="I love this place, it's the best!"
        />
        <ReviewCard
          avatarUrl="/Greenhouse/Avatar-3.jpg"
          name="Alice Doe"
          rating={4}
          comment="I love this place, it's the best!"
        />
        <ReviewCard
          avatarUrl="/Greenhouse/Avatar-3.jpg"
          name="Alice Doe"
          rating={4}
          comment="I love this place, it's the best!"
        />
        <ReviewCard
          avatarUrl="/Greenhouse/Avatar-3.jpg"
          name="Alice Doe"
          rating={4}
          comment="I love this place, it's the best!"
        />
        <ReviewCard
          avatarUrl="/Greenhouse/Avatar-3.jpg"
          name="Alice Doe"
          rating={4}
          comment="I love this place, it's the best!"
        />
        <ReviewCard
          avatarUrl="/Greenhouse/Avatar-3.jpg"
          name="Alice Doe"
          rating={4}
          comment="I love this place, it's the best!"
        />
        <ReviewCard
          avatarUrl="/Greenhouse/Avatar-3.jpg"
          name="Alice Doe"
          rating={4}
          comment="I love this place, it's the best!"
        />
        <ReviewCard
          avatarUrl="/Greenhouse/Avatar-3.jpg"
          name="Alice Doe"
          rating={4}
          comment="I love this place, it's the best!"
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
