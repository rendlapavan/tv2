import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";

import Navbar from "@/components/Navbar.vue";
import Search from "@/components/Search.vue";

describe("In category Component", () => {
  const localVue = createLocalVue();
  let wrapper;
  let getters;
  let store;
  localVue.use(VueRouter);
    const routes = [
      {
        path: "/search/:name",
        component: Search,
      },
    ];
    
  let router = new VueRouter({ routes });
  beforeEach(() => {
    Vue.use(VueRouter);
    Vue.use(Vuex);
    getters = {
      getShowsByCat: () => jest.fn(),
    };
    store = new Vuex.Store({
      getters,
    });
    wrapper = shallowMount(Navbar, {
      data() {
        return {};
      },
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
  it("clicked() will route to /search component", async () => {
    await wrapper.vm.clicked();
    expect(wrapper.vm.$route.path).toBe("/search/");
  });
});
