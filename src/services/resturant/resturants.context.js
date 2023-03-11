import React, { createContext, useState, useEffect } from "react";

import { restaurantRequest, restaurantsTransform } from "./resturants.service";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [resturants, setResturants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retriveREsturants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantRequest()
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false);
          setResturants(results);
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error);
        }, 2000);
    });
  };

  useEffect(() => {
    retriveREsturants();
  }, []);

  return (
    <RestaurantContext.Provider value={{ resturants, isLoading, error }}>
      {children}
    </RestaurantContext.Provider>
  );
};
