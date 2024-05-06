import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon, useMediaQuery } from '@mui/material';
import { Home as HomeIcon, Info as InfoIcon, Work as WorkIcon, Build as BuildIcon, ContactMail as ContactMailIcon, Menu as MenuIcon } from '@mui/icons-material';
import Contato from "./screens/Contato";
import Habilidades from "./screens/Habilidades";
import NotFoundScreen from "./screens/NotFoundScreen";
import Projetos from "./screens/Projetos";
import Sobre from "./screens/Sobre";
import Home from "./screens/Home";
import GradientBackground from "./screens/GradientBackground";

export default function App() {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Router>
      <GradientBackground>
        <div>
          <AppBar position="relative" sx={{ backgroundColor:"#102C57"}}>
            <Toolbar>
            <Typography 
              variant="h6" 
              component={Link} 
              to="/" 
              style={{ 
                color: 'white',
                textDecoration: 'none',
                paddingLeft: 20
              }}
              sx={{ 
                flexGrow: 1 
              }}
            >
              Meu Portifolio
            </Typography>
              {isMobile ? (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={toggleDrawer}
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
              ) : (
                <>
                  {/* <Button color="inherit" component={Link} to="/" startIcon={<HomeIcon />}>Home</Button> */}
                  <Button color="inherit" style={{ padding:20 }} component={Link} to="/sobre" startIcon={<InfoIcon />}>Sobre</Button>
                  <Button color="inherit" style={{ padding:20 }} component={Link} to="/projetos" startIcon={<WorkIcon />}>Projetos</Button>
                  <Button color="inherit" style={{ padding:20 }} component={Link} to="/habilidades" startIcon={<BuildIcon />}>Habilidades</Button>
                  <Button color="inherit" style={{ padding:20 }} component={Link} to="/contatos" startIcon={<ContactMailIcon />}>Contato</Button>
                </>
              )}
            </Toolbar>
          </AppBar>

          {isMobile && (
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
              <List>
                <ListItem button component={Link} to="/" onClick={toggleDrawer}>
                  <ListItemIcon><HomeIcon /></ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component={Link} to="/sobre" onClick={toggleDrawer}>
                  <ListItemIcon><InfoIcon /></ListItemIcon>
                  <ListItemText primary="Sobre" />
                </ListItem>
                <ListItem button component={Link} to="/projetos" onClick={toggleDrawer}>
                  <ListItemIcon><WorkIcon /></ListItemIcon>
                  <ListItemText primary="Projetos" />
                </ListItem>
                <ListItem button component={Link} to="/habilidades" onClick={toggleDrawer}>
                  <ListItemIcon><BuildIcon /></ListItemIcon>
                  <ListItemText primary="Habilidades" />
                </ListItem>
                <ListItem button component={Link} to="/contatos" onClick={toggleDrawer}>
                  <ListItemIcon><ContactMailIcon /></ListItemIcon>
                  <ListItemText primary="Contato" />
                </ListItem>
              </List>
            </Drawer>
          )}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/habilidades" element={<Habilidades />} />
            <Route path="/contatos" element={<Contato />} />
            <Route path="*" element={<NotFoundScreen />} />
          </Routes>
        </div>
      </GradientBackground>
    </Router>
  );
}
