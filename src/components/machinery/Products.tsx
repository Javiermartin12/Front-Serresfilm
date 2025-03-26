"use client";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import React, { useState, useMemo } from "react";

const categories = [
  { id: "carros", name: "Carros" },
  { id: "maquinaria", name: "Maquinaria" },
  { id: "armarios", name: "Armarios" },
  { id: "accesorios", name: "Accesorios" },
  { id: "volquetes", name: "Volquetes" },
  { id: "baños", name: "Baños" },
  { id: "todos", name: "Todos" },
];

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
}

const products: Record<string, Product[]> = {
  carros: [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dd5zkfvbo/image/upload/t_My Logo/v1741105833/carroestandar_lesal9.jpg",
      title: "Carro 1",
      description: "Descripción del carro 1",
      category: "Carros",
    },
  ],
  maquinaria: [
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dd5zkfvbo/image/upload/t_My Logo/v1741105833/carroestandar_lesal9.jpg",
      title: "Maquinaria 2",
      description: "Descripción de la maquinaria 2",
      category: "Maquinaria",
    },
  ],
  todos: [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dd5zkfvbo/image/upload/t_My Logo/v1741105833/carroestandar_lesal9.jpg",
      title: "Carro 1",
      description: "Descripción del carro 1",
      category: "Carros",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dd5zkfvbo/image/upload/t_My Logo/v1741105833/carroestandar_lesal9.jpg",
      title: "Maquinaria 2",
      description: "Descripción de la maquinaria 2",
      category: "Maquinaria",
    },
  ],
};

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");

  // Memoizar la lista de productos filtrados para mejorar el rendimiento
  const filteredProducts = useMemo(
    () => products[selectedCategory] ?? [],
    [selectedCategory]
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 2,
      }}
    >
      {/* Título */}
      <Typography variant="h4" color="primary" textAlign="center" mb={3}>
        Productos
      </Typography>

      {/* Filtro de categoría */}
      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel id="category-select-label">Categoría</InputLabel>
        <Select
          labelId="category-select-label"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          label="Categoría"
        >
          {categories.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Mostrar productos filtrados */}
      {filteredProducts.length === 0 ? (
        <Typography variant="h6" color="textSecondary" textAlign="center">
          No hay productos en esta categoría.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card>
                <CardMedia
                  component="img"
                  sx={{ objectFit: "cover" }}
                  image={product.image}
                  alt={`Imagen de ${product.title}`}
                />
                <CardContent>
                  <Typography variant="h6">{product.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Ver más
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Products;
