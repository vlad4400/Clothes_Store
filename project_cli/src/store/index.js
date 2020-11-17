import Vue from 'vue'
import Vuex from 'vuex'
import Axios from '../../utils/axios'  //PSEUDO-axios

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
          let newItem = Object.assign({}, item, { amount: 1 })

          Axios.post(`${URL_BASKET}`, newItem)
          .then(status => {
            if (status) {
              state.itemsBasket.push(newItem);
            }
          })
          .catch(e => {
            console.log(e);
          })
      } else {
          Axios.put(`${URL_BASKET}/${find.productId}`, 1)
          .then(status => {
            if (status) {
              find.amount++;
            }
          })
          .catch(e => {
            console.log(e);
          })
      }
    },
    removeItemFromBasket: (state, id) => {
      let find = state.itemsBasket.find(el => el.productId == id);
                    
      if (find.amount > 1) {
        Axios.put(`${URL_BASKET}/${find.productId}`, -1)
        .then(status => {
          if (status) {
            find.amount--;
          }
        })
        .catch(e => {
          console.log(e);
        })
      } else {
        Axios.delete(`${URL_BASKET}/${find.productId}`)
        .then(status => {
          if (status) {
            state.itemsBasket.splice(state.itemsBasket.indexOf(find), 1);
          }
        })
        .catch(e => {
          console.log(e);
        })
      }
    }
  },
  actions: {
    getItemsCatalog({commit}) {
      return Axios.get(URL_CATALOG)
        .then(data => {
          commit('setItemsCatalog', data);
        });
    },
    getItemsBasket({commit}) {
      return Axios.get(URL_BASKET)
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
