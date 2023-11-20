import React from "react";
import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter, useParams } from "react-router-dom"; // Import useParams
import { RouterProvider } from "react-router-dom";
import Account from "./Account";
import Search from "./Search";
import MovieInfo from "./MovieInfo"; // Import MovieInfo component

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/search",
      element: <Search />,
    },
    {
      path: "/account",
      element: <Account />,
    },
    {
      path: "/browse/:id", // Define a dynamic route with ':id' as a parameter
      element: <MovieInfoWrapper />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

// MovieInfoWrapper component to handle the dynamic rendering of MovieInfo
const MovieInfoWrapper = () => {
  const { id } = useParams(); // Get the 'id' parameter from the URL

  // Render the MovieInfo component with the extracted 'id'
  return <MovieInfo id={id} />;
};

export default Body;
