import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";

const pages = [
  { title: "Главная", path: "/" },
  { title: "Страница 1", path: "/page1" },
  { title: "Страница 2", path: "/page2" },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo / title */}
          <AdbIcon sx={{ display: "flex", mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            onClick={() => handleNavigate("/")}
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            LOGO
          </Typography>

          {/* Desktop menu buttons */}
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={() => handleNavigate(page.path)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          {/* Profile menu */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Profile" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
