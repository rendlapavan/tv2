import { shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";

import Home from "@/views/Home.vue";
import CardsDisplay from "@/components/CardsDisplay.vue";

describe("app.vue", () => {
  let wrapper;
  const mockStore = { state: jest.fn() };
  const router = new VueRouter({
    path: "/category/:cat",
    name: 'Category',
  });
  router.push({
    name: "Category",
  });
  beforeEach(() => {
    wrapper = shallowMount(Home, {
      mocks: {
        $store: mockStore,
      },
      router,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });
  it("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  it("should show Popular Shows tiltle", () => {
    expect(wrapper.text()).toContain('Popular Shows');
  });
  
  it("should render cards display component",() => {
    expect(wrapper.findComponent(CardsDisplay).exists()).toBe(true);
  })
  it("should route to single view component on click of card", async () => {
    wrapper.vm.viewCategory();

    expect(wrapper.vm.$route.path).toEqual(router.path);
  });
});
