/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getGame
// ====================================================

export interface getGame_myGame_cover {
  __typename: "Image";
  url: string | null;
}

export interface getGame_myGame_platforms {
  __typename: "Platform";
  id: string | null;
  name: string | null;
  url: string | null;
}

export interface getGame_myGame_achievements {
  __typename: "Achievement";
  id: string | null;
  name: string | null;
  description: string | null;
}

export interface getGame_myGame_reviews {
  __typename: "Review";
  id: string | null;
  likes: number | null;
  views: number | null;
  introduction: string | null;
}

export interface getGame_myGame {
  __typename: "Game";
  id: string | null;
  name: string | null;
  summary: string | null;
  cover: getGame_myGame_cover;
  platforms: (getGame_myGame_platforms | null)[] | null;
  achievements: (getGame_myGame_achievements | null)[] | null;
  reviews: (getGame_myGame_reviews | null)[] | null;
}

export interface getGame {
  myGame: getGame_myGame | null;
}
