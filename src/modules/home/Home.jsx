import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Button,
  Typography,
  Avatar,
  Card,
  CardMedia,
  Paper,
  Box,
} from "@mui/material";

const Root = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.up("xs0")]: {
    width: "280px",
  },
  [theme.breakpoints.up("xs1")]: {
    width: "335px",
  },
  [theme.breakpoints.up("xs")]: {
    width: "380px",
  },
  [theme.breakpoints.up("sm")]: {
    width: "450px",
  },
  [theme.breakpoints.up("md")]: {
    width: "500px",
  },
}));

const Home = () => {
  const [open, setOpen] = useState(false);
  const openWhatssap = () => {
    const numeroTelefone = "";
    const mensagem = encodeURIComponent(
      "Olá! Gostaria de Fazer um Agendamento."
    );
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${mensagem}`;
    window.open(urlWhatsApp, "_blank");
  };

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            minHeight: "100vh",
            backgroundColor: "rgba(7, 3, 69, 0.8)",
            maxWidth: "600px",
            padding: "0px 10px 0px 10px",
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Root>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                margin="20px 0px 30px 0px"
              >
                <Card
                  sx={{
                    bgcolor: "rgba(255, 255, 255, 0.2)", // cor branca com 20% de transparência
                    backdropFilter: "blur(10px)", // desfoque de 10px
                    width: "100%",
                    height: "150px",
                    padding: "20px 5px 15px 5px",
                  }}
                >
                  {/* <CardMedia
                    sx={{ height: "95px", width: "100%", objectFit: "contain" }}
                    component="img"
                    image="assets/img/logo.jpg"
                    title="logo"
                  /> */}
                  <Typography>Jeanderson Santos</Typography>
                </Card>
                <Paper
                  elevation={3}
                  sx={{
                    borderRadius: "100%",
                    width: "200px",
                    height: "200px",
                    marginTop: "-50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    alt="Jeanderson Santos Dev"
                    src="assets/img/profile.png"
                    sx={{
                      width: "190px",
                      height: "190px",
                      objectFit: "contain",
                      objectPosition: "top",
                    }}
                  />
                </Paper>
              </Box>
              <Box display="flex" flexDirection="column" gap="15px">
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => {
                    openWhatssap();
                  }}
                >
                  Whatsapp
                </Button>
                <Button fullWidth variant="outlined">
                  Localização
                </Button>
              </Box>
            </Root>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Home;
