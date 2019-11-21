import { useContext, useEffect, useState } from "react";
import { navigate } from "gatsby";

import UserContext from "../../context/UserContext";

import {
  checkIsLoggedInOnClient,
  checkIsLoggedInOnServer,
  isReturningUser,
  clientLogIn
} from "../../utils/auth";

/*
  This hook checks if user is signed in before fetching user data.
  This is needed for "returning" users who refresh or visit a "user" page directly.
  In these cases, the user context is not properly set but there could be a user id in local storage.
  Therefore, we need to take the id, confirm the user is signed in on the server and set user context before making any calls. 
*/
const baseURL = process.env.GATSBY_API_URL;

const constructQueryURL = (route, parameters) => {
  const url = new URL(baseURL + route);
  Object.keys(parameters).forEach(key =>
    url.searchParams.append(key, parameters[key])
  );
  return url;
};

const useFetch = (route, parameters = {}, method = "GET") => {
  // Fetch will only happen if isLoggedIn is true
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userContext = useContext(UserContext);
  const isLoggedInOnClient = checkIsLoggedInOnClient(userContext);

  // On first mount, find out whether user is signed in on client and server
  useEffect(() => {
    if (isLoggedInOnClient) {
      // The user is logged in on client so we assume they are logged in on server
      setIsLoggedIn(true);
    } else if (isReturningUser()) {
      /* The user isn't logged in on client, but they are returning, 
      so they might be logged in on server. Let's check. */
      const checkServer = async () => {
        const isLoggedInOnServer = await checkIsLoggedInOnServer();
        if (!isLoggedInOnServer) {
          navigate("/Login/", { replace: true });
          return false;
        }
        const { email, homes } = isLoggedInOnServer.data;

        if (!email || !homes) {
          navigate("/Login/", { replace: true });
          return false;
        }

        //TODO messy, email sent twice..?
        clientLogIn(userContext, email, homes[0]);
        setIsLoggedIn(true);
      };
      checkServer();
    } else {
      // The user isn't logged in on a client or returning
      navigate("/Login/", { replace: true });
    }
  }, []);

  // FETCH
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (parameters instanceof Error) {
      setError(parameters);
    } else if (isLoggedIn) {
      const fetchData = async () => {
        try {
          const url =
            method === "GET"
              ? constructQueryURL(route, parameters)
              : baseURL + route;
          const options = { ...parameters, credentials: "include", method };
          const response = await fetch(url, options);
          if (!response.ok) {
            throw Error(response.statusText);
          }
          const json = await response.json();
          setResponse(json);
        } catch (error) {
          setError(error);
        }
      };
      fetchData();
    }
  }, [isLoggedIn]);
  return { response, error, updateResponse: setResponse };
};

export default useFetch;
