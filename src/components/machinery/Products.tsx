"use client";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import React, { useState, useMemo } from "react";

const categories = [
  { id: "carros", name: "Carros" },
  { id: "maquinaria", name: "Maquinaria" },
  { id: "armarios", name: "Armarios" },
  { id: "accesorios", name: "Accesorios" },
  { id: "volquetes", name: "Volquetes" },
  { id: "baños", name: "Baños" },
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
        "https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741105833/carroestandar_lesal9.jpg",
      title: "Carro Recoleccion Estandar",
      description: "Carro para recoleccion de género y fruta",
      category: "Carros",
    },
    {
      id: 12,
      image:
        "https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741105832/carroancho_i2ut3i.jpg",
      title: "Carro Recoleccion Ancho",
      description: "Carro para recoleccion de género y fruta",
      category: "Carros",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741105834/carrosilla_kvy7wj.jpg",
      title: "Carro Silla",
      description: "Carro para realizar trabajos a baja altura.",
      category: "Carros",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741105833/carrobobinas_eo6jos.jpg",
      title: "Carro Bobinas",
      description: "Carro para desliar bobinas de plastico u otro material.",
      category: "Carros",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741105833/carrosandias_fzymkg.jpg",
      title: "Carro Obra",
      description: "Carro para recoleccion de sandias y melones",
      category: "Carros",
    },
    {
      id: 9,
      image:
        "https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741105832/carroandamio_igfye4.jpg",
      title: "Carro Andamio",
      description:
        "Carro para recoleccion de tomate, colocacion de perchas o trabajo en altura.",
      category: "Carros",
    },
    {
      id: 10,
      image:
        "https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741105832/4patassuministros_l0v6he.jpg",
      title: "Carro 4 Patas pequeño",
      description: "Carro para transportar ,materiales...etc.",
      category: "Carros",
    },
    {
      id: 11,
      image:
        "https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741105832/carro4patas_jwq6fd.jpg",
      title: "Carro 4 Patas grande",
      description: "Carro para transportar ,materiales...etc.",
      category: "Carros",
    },
  ],
  maquinaria: [
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741105833/carrodelagoma_iijrf3.jpg",
      title: "Carro de la goma",
      description: "Carro para recoger goma.",
      category: "Carros",
    },
  ],
  armarios: [
    {
      id: 7,
      image:
        "https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741105833/armariodospuertas_jkeqhy.jpg",
      title: "Armario dos puertas",
      description: "Armario para guardar herramientas y accesorios.",
      category: "Armarios",
    },
    {
      id: 8,
      image:
        "https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741105833/aramriotrespuertas_mu4cr7.jpg",
      title: "Armario tres puertas",
      description: "Armario para guardar herramientas y accesorios.",
      category: "Armarios",
    },
  ],
  accesorios: [],
  volquetes: [
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741105833/volquete_dfemvj.jpg",
      title: "Volquete",
      description: "Volquete para transporte de materiales",
      category: "Volquetes",
    },
  ],
  baños: [],
};

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const filteredProducts = useMemo(() => {
    return selectedCategory === "todos"
      ? Object.values(products).flat()
      : products[selectedCategory] || [];
  }, [selectedCategory]);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" color="primary" textAlign="center" mb={3}>
        Productos
      </Typography>

      <FormControl sx={{ mb: 3, width: 300 }}>
        <InputLabel>Categoría</InputLabel>
        <Select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          label="Categoría"
        >
          {categories.map((cat) => (
            <MenuItem key={cat.id} value={cat.id}>
              {cat.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {filteredProducts.length === 0 ? (
        <Typography variant="h6" color="text.secondary" textAlign="center">
          No hay productos en esta categoría.
        </Typography>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center",
          }}
        >
          {filteredProducts.map((p) => (
            <Card key={`${p.category}-${p.id}`} sx={{ width: 300 }}>
              <CardMedia
                component="img"
                height="300"
                image={p.image}
                alt={p.title}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6">{p.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {p.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Products;
