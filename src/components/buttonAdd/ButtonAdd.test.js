import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ButtonAdd from './ButtonAdd';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { toggleFavoriteState } from '../../store/AppSlices'; 

// Mock del store de Redux
const mockStore = configureStore([]);

describe('ButtonAdd component', () => {
  let store;
  
  beforeEach(() => {
    store = mockStore({
      users: {
        userList: [
          { id: 1, name: 'Usuario 1', favorite: false },
          { id: 2, name: 'Usuario 2', favorite: false },
         
        ],
        UsuariosFavoritos: [], 
      },
    });
  });

  test('renderiza correctamente', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <ButtonAdd userId={1} />
      </Provider>
    );
    const button = getByRole('button');
    expect(button).toBeTruthy();
  });

  test('agrega un usuario a favoritos al hacer clic en el botón', () => {
    const userId = 1;
    const { getByRole } = render(
      <Provider store={store}>
        <ButtonAdd userId={userId} />
      </Provider>
    );
    const button = getByRole('button');
    fireEvent.click(button);

    const expectedAction = toggleFavoriteState(userId);
    expect(store.getActions()).toContainEqual(expectedAction);
  });
});
