import builtOn from '~/plugins/builtOn'

export function state() {
  return {
    categories: [],
    rawProducts: [],
    product: {}
  }
}

export const getters = {
  getCategories: (state) => state.categories,
  getProducts: (state) => state.rawProducts.current,
  getProduct: (state) => state.product,
  getProductsTotalCount: (state) => state.rawProducts.paginationTotal,
  getCart: (state) => {
    const rawData = localStorage.getItem('built-bag');
    return rawData ? JSON.parse(rawData) : [];
  }
};

export const mutations = {
  SET_CATEGORIES(state, payload) {
    state.categories = payload
  },
  SET_PRODUCT(state, payload) {
    state.product = payload
  },
  SET_RAW_PRODUCTS(state, payload) {
    state.rawProducts = payload;
  }
};

export const actions = {
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
  }
};
