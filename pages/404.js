import Link from "next/link";
import { Container, CssBaseline, Typography, Button } from "@mui/material";

const Custom404 = () => {
  return (
    <Container maxWidth="sm">
      <CssBaseline />
      <Typography variant="h1" align="center" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        The page you are looking for does not exist.
      </Typography>
      <div style={{ textAlign: "center" }}>
        <Link href="/" passHref>
          <Button variant="contained" color="primary">
            Go back to the homepage
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default Custom404;
