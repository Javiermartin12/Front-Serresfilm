import { AppBar, Toolbar, Button, Typography } from "@mui/material";

export default function Home() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Home</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <h1>Welcome to the Home page!</h1>
    </div>
  );
}
