import { Link } from "react-router-dom";

export default function Navigation() {

  return(
    <>
      <Link
        to="/rpc"
      >
        <p>RPC</p>
      </Link>
      <Link
        to="/copper"
      >
        <p>Copper Price</p>
      </Link>
    </>
  )
}