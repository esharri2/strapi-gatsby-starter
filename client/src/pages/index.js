import React from "react";
import { graphql, Link } from "gatsby";

const Index = ({ data }) => {
  const restaurants = data.allStrapiRestaurant.edges;

  console.log(restaurants);
  return (
    <div>
      <h1>Restaurants</h1>
      <div>
        {restaurants.map(restaurant => (
          <li>
            <h2>{restaurant.node.name}</h2>
            <p>{restaurant.node.description || "no description"}</p>
          </li>
        ))}
      </div>
      <Link to="/component-demo">Component demo page</Link>
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
