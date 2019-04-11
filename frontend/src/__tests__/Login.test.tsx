import React from 'react';
import renderer from 'react-test-renderer';
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
} from 'react-testing-library';

import 'jest-dom/extend-expect';
import {Login} from '../Login';

// automatically unmount and cleanup DOM after the test is finished.
// @ts-ignore
afterEach(cleanup);

test('renders correctly', async () => {
  const tree = renderer
    .create(<Login handleSubmit={async () => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('test required fields', async () => {});

test('test invalid email', async () => {});

test('test invalid password', async () => {});

test('test valid submit', async () => {});
