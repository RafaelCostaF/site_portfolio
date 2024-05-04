import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Home as HomeIcon, Info as InfoIcon, Work as WorkIcon, Build as BuildIcon, ContactMail as ContactMailIcon } from '@mui/icons-material';
import Contato from "./screens/Contato";
import Habilidades from "./screens/Habilidades";
import NotFoundScreen from "./screens/NotFoundScreen";
import Projetos from "./screens/Projetos";
import Sobre from "./screens/Sobre";
import Home from "./screens/Home";

export default function App() {
  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Meu Portifolio
            </Typography>
            <Button color="inherit" component={Link} to="/" startIcon={<HomeIcon />}>Home</Button>
            <Button color="inherit" component={Link} to="/sobre" startIcon={<InfoIcon />}>Sobre</Button>
            <Button color="inherit" component={Link} to="/projetos" startIcon={<WorkIcon />}>Projetos</Button>
            <Button color="inherit" component={Link} to="/habilidades" startIcon={<BuildIcon />}>Habilidades</Button>
            <Button color="inherit" component={Link} to="/contatos" startIcon={<ContactMailIcon />}>Contato</Button>
          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/contatos" element={<Contato />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </div>
    </Router>
  );
}
