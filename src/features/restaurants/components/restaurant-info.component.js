import React from "react";
import { Card } from "react-native-paper";

import styled from "styled-components/native";

const Title = styled.Text`
  padding: 16px;
  padding-top: 5;
  color: ${(props) => props.theme.colors.ui.primary};
`;

const RestaurantCard = styled(Card)`
  background-color: white;
  margin: 5px;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 10px;
  background-color: white;
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Rajesh dai ko coffee pasal",
    address = "bato side ko rukh muni",
    rating = 4,
    photos = [
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    icon,
    openingHours = true,
    isClosedTemporarily,
  } = restaurant;
  return (
    <RestaurantCard>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
