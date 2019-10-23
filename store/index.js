import builtOn from '~/plugins/builtOn'

export function state() {
  return {
    categories: [],
    products: [],
    product: {}
  }
}

export const getters = {
  getCategories: (state) => state.categories,
  getProducts: (state) => state.products,
  getProduct: (state) => state.product
};

export const mutations = {
  SET_CATEGORIES(state, payload) {
    state.categories = payload
  },
  SET_PRODUCTS(state, payload) {
    state.products = payload
  },
  SET_PRODUCT(state, payload) {
    state.product = payload
  }
};

export const actions = {
  async fetchCategories({ commit }) {
    const categories = await builtOn.products.get({
      urlParams: {
        expand: 'image',
        tags: 'category'
      }
    });

    commit('SET_CATEGORIES', categories.current)
  },

  async fetchProducts({ commit }, slug) {
    const products = await builtOn.products.get({
      urlParams: {
        expand: 'image',
        tags: slug
      }
    });

    commit('SET_PRODUCTS', products.current)
  },

  async fetchProduct({ commit }, id) {
    const product = await builtOn.products.get(id, {
      urlParams: {
        expand: '_sub_products, image'
      }
    });

    commit('SET_PRODUCT', product)
  }
};
