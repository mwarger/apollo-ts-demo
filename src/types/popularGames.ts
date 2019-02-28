/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: popularGames
// ====================================================

export interface popularGames_getPopularGames_cover {
  __typename: "Image";
  url: string | null;
}

export interface popularGames_getPopularGames {
  __typename: "Game";
  id: string | null;
  name: string | null;
  summary: string | null;
  cover: popularGames_getPopularGames_cover;
}

export interface popularGames {
  getPopularGames: (popularGames_getPopularGames | null)[] | null;
}
