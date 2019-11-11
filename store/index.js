import builtOn from '~/plugins/builtOn'
import {$post} from "~/plugins/http";

export function state() {
  return {
    categories: [],
    rawProducts: [],
    product: {},
    cart: [],
    order: {
      card: {
        last4: 4242,
        exp_month: 10,
        exp_year: 2020
      },
      address: ''
    }
  }
}

export const getters = {
  getCategories: (state) => state.categories,
  getProducts: (state) => state.rawProducts.current,
  getProduct: (state) => state.product,
  getCart: (state) => state.cart,
  getOrder: (state) => state.order
};

export const mutations = {
  SET_CATEGORIES(state, payload) {
    state.categories = payload
  },
  SET_PRODUCT(state, payload) {
    state.product = payload
  },
  INIT_CART(state, payload) {
    state.cart = payload;
  },
  SET_RAW_PRODUCTS(state, payload) {
    state.rawProducts = payload;
  },
  ADD_PRODUCT(state, product) {
    state.cart.push({
      id: product.id,
      name: product.name,
      final_price: product.final_price,
      currency: product.currency,
      brand: product.tags[0]
    })
  },
  REMOVE_PRODUCT(state, id) {
    const index = state.cart.findIndex(product => product.id === id);

    state.cart.splice(index, 1)
  },
  SET_DELIVERY_ADDRESS(state, address) {
    state.order.address = address
  },
  CLEAR_ORDER(state) {
    state.order.address = '';
    state.cart = [];
  }
};

export const actions = {
  nuxtServerInit({commit}, {req}) {
    const email = this.$cookies.get('built-on-secret');

    console.log(req)
  },

  async fetchCategories({commit}) {
    const categories = await builtOn.products.get({
      urlParams: {expand: 'image', tags: 'category'}
    });

    commit('SET_CATEGORIES', categories.current)
  },

  async fetchProducts({commit}, slug) {
    const products = await builtOn.products.get({
      size: 6,
      urlParams: {
        expand: 'image',
        tags: slug
      }
    });

    commit('SET_RAW_PRODUCTS', products)
  },

  async fetchNextPage({commit, state}) {
    const products = await state.rawProducts.next();

    commit('SET_RAW_PRODUCTS', products)
  },

  async fetchProduct({commit}, id) {
    const product = await builtOn.products.get(id, {
      urlParams: {expand: 'image'}
    });

    commit('SET_PRODUCT', product)
  },

  addProductToCart({commit}, product) {
    commit('ADD_PRODUCT', product)
  },

  removeProductFromCart({commit}, product) {
    commit('REMOVE_PRODUCT', product.id)
  },

  setDeliveryAddress({ commit }, address) {
    commit('SET_DELIVERY_ADDRESS', address)
  },

  clearOrder({commit}) {
    commit('CLEAR_ORDER')
  }
};
