import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Grid } from "semantic-ui-react";

import PostCard from "../components/PostCard";

function Home() {
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);
  if (data) {
    console.log(data);
  }
  return (
    <Grid columns={3}>
      <Grid.Row
        className="page-title"
        style={{
          display: "block",
          justifyContent: "center",
          textAlign: "center",
          fontSize: "2rem",
          marginTop: "10px",
        }}
      >
        <h1>Recent Posts</h1>
      </Grid.Row>
      {loading ? (
        <h1>Loading posts...</h1>
      ) : (
        data &&
        data.getPosts.map((post) => (
          <Grid.Column key={post.id}>
            <PostCard post={post} />
          </Grid.Column>
        ))
      )}
    </Grid>
  );
}

const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      userName
      likeCount
      likes {
        userName
      }
      commentCount
      comments {
        id
        userName
        createdAt
        body
      }
    }
  }
`;

export default Home;
