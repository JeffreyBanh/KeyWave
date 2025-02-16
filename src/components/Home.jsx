import * as React from "react";
import { extendTheme, styled } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import Grid from "@mui/material/Grid2";
import {
  TextField,
  Typography,
  Box,
  Stack,
  Paper,
  Container,
} from "@mui/material";
import { ContactEmergency } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  height: "20vh",
  width: "100%",
  ...theme.typography.body1,
  padding: theme.spacing(0),
  // textAlign: 'center',
  overflow: "hidden",

  // color: theme.palette.text.secondary,
  // ...theme.applyStyles('dark', {
  //   backgroundColor: '#1A2027',
  // }),
}));

const NAVIGATION = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "home",
    title: "Home",
    icon: <DashboardIcon />,
  },
  {
    segment: "orders",
    title: "Orders",
    icon: <ShoppingCartIcon />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Analytics",
  },
  {
    segment: "reports",
    title: "Reports",
    icon: <BarChartIcon />,
    children: [
      {
        segment: "sales",
        title: "Sales",
        icon: <DescriptionIcon />,
      },
      {
        segment: "traffic",
        title: "Traffic",
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: "integrations",
    title: "Integrations",
    icon: <LayersIcon />,
  },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: "class",
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled("div")(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

export default function DashboardLayoutBasic(props) {
  const { window } = props;

  const router = useDemoRouter("/home");

  // Remove this const when copying and pasting into your project.
  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
        title: "KeyWave",
        homeUrl: "/toolpad/core/introduction",
      }}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <PageContainer>
          <Container
            sx={{
              display: "flex", // Use Flexbox to align children horizontally
              justifyContent: "space-between", // Distribute space between the boxes
              alignItems: "center", // Vertically center the boxes (optional)
              gap: "32px",
            }}
          >
            {/* First Item - 25% width */}
            <Item sx={{ flex: "0 0 25%" }}>
              <img
                src="./cover.jpg"
                style={{
                  width: "100%", // Make the image fill the Item width
                  height: "100%", // Make the image fill the Item height
                  objectFit: "cover", // Ensures the image covers the Item while maintaining aspect ratio
                }}
              />
            </Item>

            {/* Second Item - 50% width */}
            <Box 
              sx={{
                display: "flex", // Use Flexbox
                justifyContent: "space-between", // Distribute space evenly between items
                alignItems: "center", // Vertically center the items
                width: "100%", // Ensure the Box takes full width
                border: "1px solid black", // Optional: Add border for visual clarity
                padding: 2, // Optional: Add padding
              }}
            >
              <Typography>hello</Typography>
              <Typography>hello</Typography>
              <Typography>hello</Typography>
              <Typography>hello</Typography>
            </Box>

            {/* Third Item - 25% width */}
            <Item sx={{ flex: "0 0 25%" }}>
              <img
                src="./cover.jpg"
                style={{
                  width: "100%", // Make the image fill the Item width
                  height: "100%", // Make the image fill the Item height
                  objectFit: "cover", // Ensures the image covers the Item while maintaining aspect ratio
                }}
              />
            </Item>
          </Container>

          <Container
            sx={
              {
                // display: "flex", // Use Flexbox to align children horizontally
                // justifyContent: "space-between", // Distribute space between the boxes
                // alignItems: "center", // Vertically center the boxes (optional)
                // gap: "32px"
              }
            }
          >
            <Item>
              <img
                src={"./cover.jpg"}
                s
                style={{
                  width: "20%", // Make the image fill the Box width
                  height: "100%", // Make the image fill the Box height
                  objectFit: "fill", // Ensures the image covers the Box while maintaining aspect ratio
                }}
              />
              Hello
            </Item>
          </Container>
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
