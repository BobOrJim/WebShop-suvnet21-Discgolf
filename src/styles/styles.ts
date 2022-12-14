import { createTheme } from "@mui/material/styles";

export const DrawerWidth = 250;

export const ColorsLight = {
  primary: "#5f2c3e",
  secondary: "#d1adcc",
  success: "#4CAF50",
  info: "#00a2ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#0e1b20",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  dim_grey: "#696969",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  light_gray: "rgb(230,230,230)",
  white: "#fff",
  black: "#000",
};

export const defaultTheme = createTheme({});

const themeLight = createTheme({
  palette: {
    primary: {
      main: ColorsLight.primary,
    },
    secondary: {
      main: ColorsLight.secondary,
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: false,
        disableElevation: false,
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 10,
      },
    },

    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
      styleOverrides: {
        tooltip: {
          background: ColorsLight.primary,
        },
        arrow: {
          color: ColorsLight.primary,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: DrawerWidth,
          background: ColorsLight.primary,
          color: ColorsLight.secondary,
          borderRadius: "0px 100px 0px 0px",
          borderRight: `1px solid ${ColorsLight.primary}`,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: ColorsLight.primary,
        },
      },
    },
  },
});

export default themeLight;
