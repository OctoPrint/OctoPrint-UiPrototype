import * as React from "react";
import {styled, createTheme, ThemeProvider} from "@mui/material/styles";
import {
    Drawer,
    Box,
    AppBar,
    Toolbar,
    List,
    Typography,
    IconButton,
    Container,
    Grid,
    Divider,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import AccountIcon from "@mui/icons-material/AccountCircle";

import ExtensionPoint from "./extensions/ExtensionPoint";

import ExtensionSpawner from "./ExtensionSpawner"; // eslint-disable-line no-unused-vars

const drawerWidth = 240;

const StyledAppBar = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== "open"
})(({theme, open}) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    })
}));

const StyledDrawer = styled(Drawer, {
    shouldForwardProp: (prop) => prop !== "open"
})(({theme, open}) => ({
    "& .MuiDrawer-paper": {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        }),
        boxSizing: "border-box",
        ...(!open && {
            overflowX: "hidden",
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up("sm")]: {
                width: theme.spacing(9)
            }
        })
    }
}));

const mdTheme = createTheme();

const NavigationBar = ({open, toggleDrawer, toggleTheme}) => {
    return (
        <StyledAppBar position="absolute" open={open}>
            <Toolbar
                sx={{
                    pr: "24px" // keep right padding when drawer closed
                }}
            >
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                    sx={{
                        marginRight: "36px",
                        ...(open && {display: "none"})
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{flexGrow: 1}}
                >
                    UI Prototype
                </Typography>
                <ExtensionPoint name="Dashboard.Navigation.NavigationBar.Icons" />
                <IconButton color="inherit" onClick={toggleTheme}>
                    <Brightness4Icon />
                </IconButton>
            </Toolbar>
        </StyledAppBar>
    );
};

const NavigationDrawer = ({open, toggleDrawer}) => {
    return (
        <StyledDrawer variant="permanent" open={open}>
            <Toolbar
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    px: [1]
                }}
            >
                <IconButton onClick={toggleDrawer}>
                    <ChevronLeftIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
                <ListItemButton>
                    <ListItemIcon>
                        <AccountIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logged in" />
                </ListItemButton>
                <ExtensionPoint name="Dashboard.Navigation.NavigationDrawer.List" />
            </List>
        </StyledDrawer>
    );
};

const Navigation = () => {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    const toggleTheme = () => {
        const newPaletteMode = mdTheme.palette.mode === "light" ? "dark" : "light";
        mdTheme.palette.mode = newPaletteMode;
    };

    return (
        <>
            <NavigationBar
                open={open}
                toggleDrawer={toggleDrawer}
                toggleTheme={toggleTheme}
            />
            <NavigationDrawer open={open} toggleDrawer={toggleDrawer} />
        </>
    );
};

function DashboardContent() {
    const sortContainers = (a, b) => {
        return a > b;
    };

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{display: "flex"}}>
                <Navigation />
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === "light"
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: "100vh",
                        overflow: "auto"
                    }}
                >
                    <Toolbar />
                    <Container sx={{mt: 5, mb: 5}}>
                        <Grid container spacing={3}>
                            <ExtensionPoint
                                name="Dashboard.Containers"
                                sort={sortContainers}
                            />
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}
