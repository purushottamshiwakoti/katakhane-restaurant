import React, { useContext, useState } from "react";
import { SearchBar } from "react-native-screens";
import styled from "styled-components/native";
import { LocationContext } from "../../services/resturant/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
  const { keyboard, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState();
  console.log(LocationContext);
  return (
    <SearchContainer>
      <SearchBar
      placeholder="Search for a location"
      />
    </SearchContainer>
  );
};
