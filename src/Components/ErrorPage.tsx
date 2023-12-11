import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError() as Error;
  console.error(error);
  return (
    <section>
      <h2>Nothing here...</h2>
      <Link to="/">Go Back!</Link>
      <p>{error.message}</p>
    </section>
  );
};
