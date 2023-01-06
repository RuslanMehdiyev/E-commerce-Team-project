import "./assets/style/main.css";
import { useContext } from "react";
import { storeContext } from "./context/storeContext";
import { Button } from "@mui/material";
function App() {
  const { data } = useContext(storeContext);
  return (
    <>
      <Button variant="outlined" color="error">
        click me
      </Button>
    </>
  );
}

export default App;
