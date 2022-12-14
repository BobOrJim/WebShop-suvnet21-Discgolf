import { ArrowBack } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { CSSProperties } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import AddressForm from "./AddressForm";
import ConfirmCart from "./ConfirmCart";
import Review from "./Review";

const steps = ["Confirm product", "Shipping address", "Review your order"];
const theme = createTheme();

let activeStepOld = 0;

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const { cartQuantity, clearCart } = useCartContext();
  const nav = useNavigate();

  const handleNext = () => {
    activeStepOld = activeStep;
    if (activeStep === 2) {
      clearCart();
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component='main' maxWidth='sm' sx={{ mb: 4 }}>
        <Paper variant='outlined' sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component='h1' variant='h4' align='center'>
            Checkout
          </Typography>
          {cartQuantity == 0 && activeStepOld != 2 && (
            <Container>
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                Your cart is empty! Why did you go here?
              </Box>
              <Box>
                <Button onClick={() => nav("/")}>{<ArrowBack />}</Button>
              </Box>
            </Container>
          )}
          {(cartQuantity > 0 || activeStep > 0) && (
            <Box>
              <Box>
                <Button onClick={() => nav("/")}>{<ArrowBack />}</Button>
              </Box>
              <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <React.Fragment>
                {activeStep === 3 && activeStepOld === 2 ? (
                  <React.Fragment>
                    <Typography variant='h5' gutterBottom>
                      Thank you for your order.
                    </Typography>
                    <NavLink style={linkStyle} to='/'>
                      <Button>Back home</Button>
                    </NavLink>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      {(activeStep === 1 || activeStep === 2) && (
                        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                          {activeStep === 1 ? "Back to cart" : "Back to shipping"}
                        </Button>
                      )}
                    </Box>
                    {activeStep === 0 && <ConfirmCart submit={handleNext} />}
                    {activeStep === 1 && <AddressForm submit={handleNext} />}
                    {activeStep === 2 && <Review submit={handleNext} />}
                  </React.Fragment>
                )}
              </React.Fragment>
            </Box>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

interface LinkProps {
  isActive: boolean;
}

const linkStyle = ({ isActive }: LinkProps): CSSProperties => ({
  padding: "0.4rem",
  textDecoration: "none",
  borderRadius: "1rem",
  color: "black",
  background: isActive ? "#CCCCFF" : undefined,
});
