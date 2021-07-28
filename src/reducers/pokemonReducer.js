const initialState = {
    pokemonList: [],
    busqueda: '',
    loading: false,
    error: false,
}

export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default pokemonReducer;