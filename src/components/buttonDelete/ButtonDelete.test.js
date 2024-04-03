import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ButtonDelete from './ButtonDelete';

describe('ButtonDelete component', () => {
  const mockStore = configureStore([]);
  const store = mockStore({});

  it('should render a button with class "btn-delete"', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ButtonDelete />
      </Provider>
    );
    const buttonElement = getByTestId('delete-button');
    expect(buttonElement).toHaveClass('btn-delete');
  });
});
