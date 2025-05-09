import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Typography, Container } from "@mui/material";
import React from "react";

const LegalNoticePage = () => {
  return (
    <>
      <body>
        <NavBar />
        <Container maxWidth="md" sx={{ my: 4, mt: 12 }}>
          <Typography variant="h4" gutterBottom>
            Aviso Legal
          </Typography>
          <Typography>
            En cumplimiento con el deber de información recogido en el artículo
            10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de
            la Información y del Comercio Electrónico, a continuación se
            reflejan los siguientes datos:
          </Typography>
          <Typography>
            <strong>Titular del sitio web:</strong> Serresfilm, SL
            <br />
            <strong>CIF/NIF:</strong> B04699658
            <br />
            <strong>Domicilio social:</strong> Polígono Industrial de la
            Redonda, Calle XII, Nave 41
            <br />
            <strong>Correo electrónico de contacto:</strong> jmmserres@gmail.com
            <br />
            <strong>Teléfono de contacto:</strong> +34 649 961 062
          </Typography>
          <Typography>
            <strong>Objeto del sitio web:</strong> El presente sitio web tiene
            como finalidad mostrar servicios, portafolio, blog, venta de
            productos, etc.
          </Typography>
          <Typography>
            <strong>Propiedad intelectual e industrial:</strong> Todos los
            contenidos del sitio web, incluyendo textos, imágenes, gráficos,
            logotipos, iconos, software, nombres comerciales, marcas o signos
            distintivos, son propiedad del titular del sitio o, en su caso, de
            terceros, estando protegidos por los derechos de propiedad
            intelectual e industrial.
          </Typography>
          <Typography>
            <strong>Responsabilidad:</strong> El titular no se hace responsable
            del mal uso que se realice de los contenidos del sitio web, siendo
            exclusiva responsabilidad del usuario que accede o navega por él. El
            titular se reserva el derecho de actualizar, modificar o eliminar la
            información contenida en el sitio web, así como su configuración o
            presentación, en cualquier momento sin previo aviso.
          </Typography>
          <Typography>
            <strong>Legislación aplicable:</strong> La relación entre el titular
            del sitio web y el usuario se regirá por la normativa española
            vigente y cualquier controversia se someterá a los Juzgados y
            Tribunales de El Ejido.
          </Typography>
          <Typography variant="body2" sx={{ mt: 4 }}>
            Última actualización: 2025
          </Typography>
        </Container>
        <Footer />
      </body>
    </>
  );
};

export default LegalNoticePage;
