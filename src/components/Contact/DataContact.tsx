import { Box, Link, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ChatIcon from "@mui/icons-material/Chat";
import React from "react";

const dataContact = [
  {
    icon: EmailIcon,
    title: "Email",
    description: "Nuestro Email de contacto",
    address: "jmmserres@gmail.com",
    link: "mailto:jmmserres@gmail.com",
  },
  {
    icon: PhoneIcon,
    title: "Teléfono",
    description: "Nuestro teléfono de contacto",
    address: "+34 633 615 900 - +34 950 123 456",
    link: "tel:+34633615900",
  },
  {
    icon: ChatIcon,
    title: "WhatsApp",
    description: "Chatea con nosotros",
    address: "WhatsApp",
    link: "https://wa.me/34633615900",
  },
  {
    icon: LocationOnIcon,
    title: "Ubicación",
    description: "Nos puedes encontrar aquí",
    address: "Plgn Ind De La Redonda, Calle XII, Nave 41",
    link: "https://www.google.com/maps/place/C.+XII,+41,+04710+El+Ejido,+Almer%C3%ADa/@36.7864947,-2.7505608,453m/data=!3m1!1e3!4m17!1m10!4m9!1m3!2m2!1d-2.7470288!2d36.78673!1m3!2m2!1d-2.7471425!2d36.7866256!3e0!3m5!1s0xd70684ee93a8f71:0x7b4a12c2baafed23!8m2!3d36.7867406!4d-2.7470076!16s%2Fg%2F11c5npjkqp?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D",
  },
];

const DataContact = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
      }}
    >
      {dataContact.map((data, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            minHeight: 350,
            padding: 3,
            pt: 10,
            gap: 1,
            flexGrow: 1,
          }}
        >
          <data.icon sx={{ fontSize: 50 }} />
          <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
            {data.title}
          </Typography>
          <Typography sx={{ fontSize: 15 }}>{data.description}</Typography>

          {data.title === "Teléfono" ? (
            <>
              <Link
                href={data.link}
                component="a"
                sx={{
                  fontSize: 15,
                  textDecoration: "none",
                }}
              >
                +34 633 615 900
              </Link>
              <Link
                href="tel:+34649961062"
                sx={{ fontSize: 15, textDecoration: "none" }}
              >
                +34 649 961 062
              </Link>
            </>
          ) : (
            <Link
              href={data.link}
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                fontSize: 15,
                textDecoration: "none",
              }}
            >
              {data.address}
            </Link>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default DataContact;
