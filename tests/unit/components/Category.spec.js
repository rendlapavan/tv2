import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import { routes } from "@/router/index.js";

import Category from "@/components/Category.vue";
import CardsDisplay from "@/components/CardsDisplay.vue";


describe("In category Component", () => {
  let categoryWrapper;
  let router = new VueRouter({ routes });
  let getters;
  let store;
  beforeEach(() => {
    Vue.use(VueRouter);
    Vue.use(Vuex);
    getters = {
      getShowsByCat: () => jest.fn(),
    };
    store = new Vuex.Store({
      getters,
    });
    categoryWrapper = shallowMount(Category, {
      data() {
          return {
            categoryName: "action",
          };
      },
      Vue,
      router,
      store,
    });
  });

  afterEach(() => {
    categoryWrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(categoryWrapper.isVueInstance).toBeTruthy();
  });

  it("it should call showDetails method which updates the store", async () => {
    expect(categoryWrapper.vm.getShowsByCat).toHaveBeenCalledWith(categoryWrapper.categoryName);
  });
  it("should render cards display component", () => {
    expect(CardsDisplay).toBeTruthy();
  });
});