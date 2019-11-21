import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";

const Index = ({ data }) => {
  const restaurants = data.allStrapiRestaurant.edges;

  console.log(restaurants);
  return (
    <div>
      <SEO />
      <h1>Restaurants</h1>
      <div>
        {restaurants.map(restaurant => (
          <li>
            <h2>{restaurant.node.name}</h2>
            <p>{restaurant.node.description || "no description"}</p>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Index;

export const query = graphql`
  query {
    allStrapiRestaurant {
      edges {
        node {
          id
          name
          description
        }
      }
    }
  }
`;
