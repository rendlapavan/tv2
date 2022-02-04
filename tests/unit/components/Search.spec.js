import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import { routes } from "@/router/index.js";

import Search from "@/components/Search.vue";
import CardsDisplay from "@/components/CardsDisplay.vue";

describe("In category Component", () => {
  let wrapper;
  let router = new VueRouter({ routes });
  let actions;
  let store;
  beforeEach(() => {
    Vue.use(VueRouter);
    Vue.use(Vuex);
    actions = {
      getShowsSearch: jest.fn(),
    };
    store = new Vuex.Store({
      actions,
    });
    wrapper = shallowMount(Search, {
      Vue,
      router,
      store,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

   it("should render cards display component", () => {
     expect(CardsDisplay).toBeTruthy();
   });
   it("data set to showName should be correct", () => {
    wrapper.setData({ showName: "flash" });
     expect(wrapper.vm.showName).toEqual('flash');
   });
});
