import "./assets/style/main.css";
import { useContext, useEffect } from "react";
import { storeContext } from "./context/storeContext";
import { Button } from "@mui/material";
import { network } from "./utils/network/network";
function App() {
  const { setData } = useContext(storeContext);
  useEffect(() => {
    network.getAll().then((res) => setData(res));
  }, []);
  return (
    <>
      <Button variant="outlined" color="error">
        click me
      </Button>
    </>
  );
}

export default App;
