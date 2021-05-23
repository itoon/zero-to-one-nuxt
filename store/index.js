export const state = () => ({
  isLoading: false
});

export const getters = {
  getIsLoading: state => state.isLoading
};

export const actions = {
  setLoading(context) {
    context.commit("SET_LOADING", true);
  }
};

export const mutations = {
  SET_LOADING(state, isLoading) {
    state.isLoading = isLoading;
  }
};
