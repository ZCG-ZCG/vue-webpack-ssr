import Vuex from 'vuex'
import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

const isDev = process.env.NODE_ENV === 'development'

export default () => {
  const store = new Vuex.Store({
    strict: isDev, // 可以是否为开发环境判断能不能修改store中的值
    state: defaultState,
    mutations,
    getters,
    actions
    // modules: {
    //   a: {
    //     namespaced: true, // 在每个不同的模块中可配置相同名字的mutations
    //     state: {
    //       text: 1
    //     },
    //     mutations: {
    //       updateText (state, text) {
    //         console.log('a state', state)
    //         state.text = text
    //       }
    //     },
    //     getters: {
    //       textPlus (state, getters, rootState) {
    //         return state.text + rootState.b.text
    //       }
    //     },
    //     actions: {
    //       add ({ state, commit, rootState }) {
    //         commit('updateCount', { num1: 456789 }, { root: true })
    //       }
    //     }
    //   },
    //   b: {
    //     namespaced: true,
    //     state: {
    //       text: 2
    //     },
    //     actions: {
    //       testAction ({ commit }) {
    //         commit('a/updateText', 'test text', { root: true })
    //       }
    //     }
    //   }
    // }
  })

  if (module.hot) {
    module.hot.accept([
      './actions/actions.js',
      './getters/getters.js',
      './mutations/mutations.js',
      './state/state.js'
    ], () => {
      const newActions = require('./actions/actions').default
      const newGetters = require('./getters/getters').default
      const newMutations = require('./mutations/mutations').default
      const newState = require('./state/state').default

      store.hotUpdate({
        actions: newActions,
        getters: newGetters,
        mutations: newMutations,
        state: newState
      })
    })
  }
  return store
}
