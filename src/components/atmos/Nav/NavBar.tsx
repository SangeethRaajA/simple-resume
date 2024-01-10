import {
  AppBar,
  Box,
  Button,
  IconButton,
  Link,
  Menu,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { useState, MouseEvent } from "react";

const NavBar = () => {
  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);

  const openMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorNav(null);
  };

  return (
    <>
      <AppBar position= "absolute" color="warning">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <CatchingPokemonIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            Simple Resume
          </Typography>
          <Box margin={1} sx={{ display: { xs: "none", md: "flex" } }}>
            <Link href={"/"} color="inherit">
              <Button color="inherit">Home </Button>
            </Link>
            <Link href={"/create"} color="inherit">
              <Button color="inherit">Create Resume</Button>
            </Link>
            <Link href={"/list"} color="inherit">
              <Button color="inherit">List Resume</Button>
            </Link>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={openMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              open={Boolean(anchorNav)}
              onClose={closeMenu}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <MenuList color="inherit">
                <Link href={"/"} color="inherit" underline="none">
                  <MenuItem color="inherit">Home</MenuItem>
                </Link>
                <Link href={"/create"} color="inherit" underline="none">
                  <MenuItem color="inherit">Create Resume</MenuItem>
                </Link>
                <Link href={"/list"} color="inherit" underline="none">
                  <MenuItem color="inherit">List Resume</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <CatchingPokemonIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Simple Resume
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default NavBar;
