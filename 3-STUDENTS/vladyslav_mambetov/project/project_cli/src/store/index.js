import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const URL_CATALOG = '/api/catalog';   //for Dev
const URL_BASKET = '/api/basket';     //for Dev

export default new Vuex.Store({
  state: {
    itemsCatalog: [],
    itemsBasket: [],
    goodCost: 0
  },
  mutations: {
    setItemsCatalog: (state, itemsCatalog) => {
      state.itemsCatalog = itemsCatalog;
    },
    setItemsBasket: (state, itemsBasket) => {
      state.itemsBasket = itemsBasket;
    },
    addItemToBasket: (state, item) => {
      let find = state.itemsBasket.find(el => el.productId == item.productId);

      if (!find) {
          state.itemsBasket.push(Object.assign({}, item, { amount: 1 }));
      } else {
          find.amount++;
      }
    },
    removeItemFromBasket: (state, id) => {
      let find = state.itemsBasket.find(el => el.productId == id);
                    
      if (find.amount > 1) {
          find.amount--;
      } else {
          state.itemsBasket.splice(state.itemsBasket.indexOf(find), 1);
      }
    }
  },
  actions: {
    getItemsCatalog({commit}) {
      return fetch(URL_CATALOG)
        .then(data => data.json())
        .then(data => {
          commit('setItemsCatalog', data);
        });
    },
    getItemsBasket({commit}) {
      return fetch(URL_BASKET)
        .then(data => data.json())
        .then(data => {
          commit('setItemsBasket', data.content);
        });
    },
    addItemToBasket({commit}, item) {
      commit('addItemToBasket', item);
    },
    removeItemFromBasket({commit}, id) {
      commit('removeItemFromBasket', id);
    }
  },
  modules: {
  },
  getters: {
    itemsCatalog(state) {
      return state.itemsCatalog;
    },
    itemsBasket(state) {
      return state.itemsBasket;
    },
    goodCost(state) {
      return state.itemsBasket.reduce(
        (sum, el) => (sum + el.productPrice * el.amount), 0
      );
    }
  }
})
