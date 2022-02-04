import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import { routes } from "@/router/index.js";

import SingleView from "@/components/SingleView.vue";
// import CardsDisplay from "@/components/CardsDisplay.vue";

describe("In category Component", () => {
  const localVue = createLocalVue();
  let wrapper;
  let router = new VueRouter({ routes });
  let state;
  let actions;
  let store;
  beforeEach(() => {
    localVue.use(VueRouter);
    localVue.use(Vuex);
    state = {
      show: {},
    },
    actions = {
        getShowById: () => jest.fn(),
      },
    store = new Vuex.Store({
        state,
        actions,
      });
    wrapper = shallowMount(SingleView, {
      router,
      store,
      localVue,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
