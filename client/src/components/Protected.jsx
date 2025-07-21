
import { Navigate } from "react-router-dom";
function Protected({ children ,user}) {
 
  if (!user ) {
    return <Navigate to="/signin" replace={true}></Navigate>;
  }
  return children;
}

export default Protected;
