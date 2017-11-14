const state = {
  count: 0
}

const actions = {
  CHANGE_COUNT ({ commit, state }, payload) {
    console.log({ commit, state }, payload)
    commit('CHANGE_COUNT', payload)
  }
}

const mutations = {
  CHANGE_COUNT (state, payload) {
    state.count = payload.count
  }
}

const moduleTest = {
  state: state,
  mutations: mutations,
  actions: actions,
  getters: {

  }
}

export default moduleTest
