import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Query } from "react-apollo";
import { getGames } from "./gameQuery";
import { getGame } from "./types/getGame";
import { oc } from "ts-optchain";
import { Review } from "./types/Review";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Query<getGame> query={getGames}>
            {({ data, loading }) => {
              if (loading) {
                return <div>Loading...</div>;
              }

              const reviews = oc(data).myGame.reviews([]);

              return (
                <>
                  {reviews.length > 0 ? (
                    reviews.map((review: any) => (
                      <div key={review.id}>
                        <ReviewCard review={review} />
                      </div>
                    ))
                  ) : (
                    <h5>No reviews!</h5>
                  )}
                </>
              );
            }}
          </Query>
        </header>
      </div>
    );
  }
}

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return <>Review: {JSON.stringify(review)}</>;
};

export default App;
