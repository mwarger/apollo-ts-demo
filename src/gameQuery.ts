import { gql } from "apollo-boost";

export const gameFragment = gql`
  fragment GameInfo on Game {
    id
    name
    summary
    cover {
      url
    }
  }
`;

export const reviewFragment = gql`
  fragment Review on Review {
    id
    likes
    views
    introduction
  }
`;

export const getGames = gql`
  query getGame {
    myGame: getGame(id: 90101) {
      id
      name
      summary
      cover {
        url
      }
      platforms {
        id
        name
        url
      }
      achievements {
        id
        name
        description
      }
      reviews {
        ...Review
      }
    }
  }
  ${reviewFragment}
`;

export const popularGames = gql`
  query popularGames {
    getPopularGames {
      id
      name
      summary
      cover {
        url
      }
    }
  }
`;
