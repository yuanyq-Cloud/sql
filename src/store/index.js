import Vue from "vue";
import Vuex from "vuex";
import Logo from "../assets/logo.png";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

    TBitem: {
      photo: Logo,
      name: "淘宝商品",
      detail: "商品详细商品详细商品详细商品详细商品详细商品详细",
    },
    JDitem: {
      photo: Logo,
      name: "京东商品",
      detail: "商品详细商品详细商品详细商品详细商品详细商品详细",
    },
    Hotitem: {
      photo: Logo,
      name: "热门商品",
      detail: "商品详细商品详细商品详细商品详细商品详细商品详细",
    },
    Reitem: {
      photo: Logo,
      name: "推荐商品",
      detail: "商品详细商品详细商品详细商品详细商品详细商品详细",
    },
    word: {
      key: "关键词",
      detail: "description description description description description",
    },
  },
  getters: {
    getTBItems: (state) => {
      const tableData = Array(20).fill(state.TBitem);
      return tableData;
    },
    getJDItems: (state) => {
      const tableData = Array(20).fill(state.JDitem);
      return tableData;
    },
    getHotItems: (state) => {
      const tableData = Array(20).fill(state.Hotitem);
      return tableData;
    },
    getReItems: (state) => {
      const tableData = Array(20).fill(state.Reitem);
      return tableData;
    },
    getWords: (state) => {
      const tableData = Array(20).fill(state.word);
      return tableData;
    },
  },
  mutations: {

  },
  actions: {

  },
  modules: {},
});
