import React from 'react';
import { render } from '@testing-library/react';
import Layout from './Layouts';
import { Provider, useSelector } from 'react-redux';
// import configureStore from 'redux-mock-store';
// import { isNewContactVisible } from '../../store/AppSlices'; 
import store from '../store/Store'



// Mock de useSelector
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
  }));
  
  describe('Layout component', () => {
    beforeEach(() => {
      useSelector.mockClear(); // Limpia cualquier llamada previa a useSelector
    });
  
    test('renders Nav component', () => {
      useSelector.mockReturnValue(false); // Simula que isNewContactVisible es falso
      const { getByText } = render(
        <Provider store={store}>
          <Layout />
        </Provider>
      );
      expect(getByText('Nav')).toBeInTheDocument();
    });
  
    test('does not render NewContact component when isNewContactVisible is false', () => {
      useSelector.mockReturnValue(false); // Simula que isNewContactVisible es falso
      const { queryByText } = render(
        <Provider store={store}>
          <Layout />
        </Provider>
      );
      expect(queryByText('NewContact')).not.toBeInTheDocument();
    });
  
    test('renders NewContact component when isNewContactVisible is true', () => {
      useSelector.mockReturnValue(true); // Simula que isNewContactVisible es verdadero
      const { getByText } = render(
        <Provider store={store}>
          <Layout />
        </Provider>
      );
      expect(getByText('NewContact')).toBeInTheDocument();
    });
  });