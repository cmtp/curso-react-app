import React from 'react';
import { array } from 'prop-types';
import HomeListItem from './HomeListItem';

import './HomeList.css';

const HomeList = ({ posts }) => (
  <div className="HomeList">
    {posts.map((post) => (
      <HomeListItem post={post} key={post.id} />
    ))}
  </div>
);

HomeList.propTypes = {
  posts: array,
};

export default HomeList;
