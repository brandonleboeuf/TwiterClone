import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import { Grid } from 'semantic-ui-react';

import { AuthContext } from '../context/auth';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import { FETCH_POSTS_QUERY } from '../util/graphql';

function Home() {
  const { user } = useContext(AuthContext);
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);

  return (
    <Grid columns={3}>
      <Grid.Row
        className="page-title"
        style={{
          display: 'block',
          justifyContent: 'center',
          textAlign: 'center',
          fontSize: '2rem',
          marginTop: '10px',
        }}
      >
        <h1>Recent Posts</h1>
      </Grid.Row>
      {user && (
        <Grid.Column>
          <PostForm />
        </Grid.Column>
      )}
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

export default Home;
