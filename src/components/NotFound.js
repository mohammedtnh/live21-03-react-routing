import { Button } from "./styles";
import { Link } from "react-router-dom";
const NotFound = ({ goTo }) => (
  <>
    <h2>404 this page does not exist!</h2>
    {/* <div onClick={() => goTo("/")}> */}
    <Link to="/">
      <Button>Go back home!</Button>
    </Link>
    {/* </div> */}
  </>
);

export default NotFound;
