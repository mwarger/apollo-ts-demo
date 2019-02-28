/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GameInfo
// ====================================================

export interface GameInfo_cover {
  __typename: "Image";
  url: string | null;
}

export interface GameInfo {
  __typename: "Game";
  id: string | null;
  name: string | null;
  summary: string | null;
  cover: GameInfo_cover;
}
