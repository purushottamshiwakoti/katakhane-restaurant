import React, { useContext } from "react";
import { ActivityIndicator, Searchbar } from "react-native-paper";
import { FlatList, View } from "react-native";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info.component";
import { Spacer } from "../../../components/spacer/spacer.components";
import { RestaurantContext } from "../../../services/resturant/resturants.context";
import { Search } from "../search.component";

// export const SearchContainer = styled.View`
//   padding: ${(props) => props.theme.space[3]};
// `;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
const Loading = styled.View`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
   top: 50%;
    left: "50%; 
  `;

export const RestaurantsScreen = () => {
  const { isLoading, error, resturants } = useContext(RestaurantContext);
  // console.log(restaurantsContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} style={{ marginLeft: -25 }} animating={true} />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={resturants}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <>
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
