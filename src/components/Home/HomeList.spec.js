import React from 'react';
import { shallow } from 'enzyme';
import HomeList from './HomeList';

const emptyPosts = [];
const mockPosts = [
  {
    id: '98a76fb7-8638-4ec1-82ba-debc7a6952c5',
    title: 'Lorem Ipsum 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo enim odio, ac dignissim enim commodo et. Phasellus ante metus, mollis sit amet auctor non, dapibus aliquam nunc. Pellentesque accumsan sem ut ligula imperdiet, at pretium felis lacinia. Ut cursus accumsan tristique. Sed malesuada nulla at ullamcorper malesuada. Aliquam vel mattis massa. Proin fermentum ut ante ac lobortis. Suspendisse quis mattis turpis, vel facilisis sem. Curabitur dapibus felis mi, id pharetra dolor convallis non. Proin vel lacus eget sapien viverra ultricies sed quis nulla. Donec porta blandit hendrerit. Donec et tellus luctus, lobortis quam nec, facilisis quam. Nunc diam orci, ornare id metus sit amet, dapibus vestibulum risus. Mauris tristique pulvinar mauris vel facilisis.',
    user: '66907a5e-9299-4d9b-989f-c0934bdb1ca5',
    comments: [],
  },
  {
    id: '2b3ba5bb-c3a6-40ad-9c12-5ec0ad0565ac',
    title: 'Lorem Ipsum 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo enim odio, ac dignissim enim commodo et. Phasellus ante metus, mollis sit amet auctor non, dapibus aliquam nunc. Pellentesque accumsan sem ut ligula imperdiet, at pretium felis lacinia. Ut cursus accumsan tristique. Sed malesuada nulla at ullamcorper malesuada. Aliquam vel mattis massa. Proin fermentum ut ante ac lobortis. Suspendisse quis mattis turpis, vel facilisis sem. Curabitur dapibus felis mi, id pharetra dolor convallis non. Proin vel lacus eget sapien viverra ultricies sed quis nulla. Donec porta blandit hendrerit. Donec et tellus luctus, lobortis quam nec, facilisis quam. Nunc diam orci, ornare id metus sit amet, dapibus vestibulum risus. Mauris tristique pulvinar mauris vel facilisis.',
    user: 'c27e65d4-73d9-4058-be59-d38a5a222356',
    comments: [],
  },
];

describe('HomeList Component with empty posts', () => {
  const wrapper = shallow(<HomeList posts={emptyPosts} />);

  it('Should have a initial Rendered', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('Should have a warning message when empty posts', () => {
    expect(wrapper.find('div').text()).toEqual('There is no Posts.');
  });
});

describe('HomeList Component with data', () => {
  const wrapper = shallow(<HomeList posts={mockPosts} />);

  it('Should have a HomeList class', () => {
    expect(wrapper.find('div').first().hasClass('HomeList')).toBe(true);
  });

  it('should have a redered data', () => {
    expect(wrapper.find('HomeListItem')).toHaveLength(mockPosts.length);
  });
});
