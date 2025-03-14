import { Box, IconButton } from "@mui/material";
import React, { useRef, useState, useEffect } from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import ReviewCard from "../ReviewCard";

const reviews = [
  {
    avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "John Doe",
    rating: 4.5,
    comment: "Great place to grow my plants, I love it!",
  },
  {
    avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "John Doe",
    rating: 4.5,
    comment: "Great place to grow my plants, I love it!",
  },
  {
    avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "John Doe",
    rating: 4.5,
    comment: "Great place to grow my plants, I love it!",
  },
  {
    avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "John Doe",
    rating: 4.5,
    comment: "Great place to grow my plants, I love it!",
  },
  {
    avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "John Doe",
    rating: 4.5,
    comment: "Great place to grow my plants, I love it!",
  },
  {
    avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "John Doe",
    rating: 4.5,
    comment: "Great place to grow my plants, I love it!",
  },
  {
    avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Jane Smith",
    rating: 5,
    comment: "Amazing experience! Highly recommended.",
  },
  {
    avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Mark Wilson",
    rating: 4.2,
    comment: "Nice service and quality products.",
  },
  {
    avatarUrl: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Emily Davis",
    rating: 4.8,
    comment: "Best place to buy plants and gardening tools!",
  },
  {
    avatarUrl: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Robert Brown",
    rating: 4.7,
    comment: "Excellent service and quick delivery.",
  },
];

function ReviewCarousel() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Función para manejar el desplazamiento
  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth / 2;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Actualizar el estado de los botones al hacer scroll
  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  // Detectar el inicio del touch en móvil
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  // Manejar el desplazamiento táctil
  const handleTouchMove = (e: React.TouchEvent) => {
    if (carouselRef.current) {
      const deltaX = e.touches[0].clientX - startX;
      carouselRef.current.scrollLeft = scrollLeft - deltaX;
    }
  };

  // Agregar un listener para actualizar los botones cuando el usuario hace scroll manualmente
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
      handleScroll(); // Ejecutar al inicio para ocultar botones si es necesario
    }
    return () => {
      if (carousel) carousel.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: "90vw",
        margin: "0 auto",
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
          left: -10,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          backgroundColor: "white",
          boxShadow: 2,
          opacity: canScrollLeft ? 1 : 0.5,
        }}
        disabled={!canScrollLeft}
        aria-label="Scroll left"
      >
        <ArrowBack />
      </IconButton>

      {/* Carrusel */}
      <Box
        ref={carouselRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
          gap: 3,
          p: 1,
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            avatarUrl={review.avatarUrl}
            name={review.name}
            rating={review.rating}
            comment={review.comment}
            sx={{ flex: "0 0 auto", scrollSnapAlign: "center", width: "250px" }}
          />
        ))}
      </Box>

      {/* Botón Derecha */}
      <IconButton
        onClick={() => scroll("right")}
        sx={{
          position: "absolute",
          right: -10,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          backgroundColor: "white",
          boxShadow: 2,
          opacity: canScrollRight ? 1 : 0.5,
        }}
        disabled={!canScrollRight}
        aria-label="Scroll right"
      >
        <ArrowForward />
      </IconButton>
    </Box>
  );
}

export default ReviewCarousel;
