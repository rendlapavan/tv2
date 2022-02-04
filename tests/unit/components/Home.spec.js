import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";

import Home from "@/views/Home.vue";
import CardsDisplay from "@/components/CardsDisplay.vue";
import Category from "@/components/Category.vue";

describe("app.vue", () => {
  const localVue = createLocalVue();
  localVue.use(VueRouter);
  let wrapper;
  const mockStore = { state: jest.fn() };
  const routes = [
    {
      path: "/category/:cat",
      component: Category,
    },
  ];

  const router = new VueRouter({ routes });
  beforeEach(() => {
    wrapper = shallowMount(Home, {
      mocks: {
        $store: mockStore,
      },
      localVue,
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
  it("should navigate to category component when viewCategory is called", async () => {
    await wrapper.vm.viewCategory('cat');
    expect(wrapper.vm.$route.path).toBe("/category/cat");
  });
  it("limit the no. of shows", async () => {
    const beforeData = [
      { show: 0 },
      { show: 1 },
      { show: 2 },
      { show: 3 },
      { show: 4 },
      { show: 5 },
      { show: 6 },
      { show: 7 },
      { show: 8 },
      { show: 9 },
      { show: 10 },
      { show: 11 },
      { show: 12 },
      { show: 13 },
      { show: 14 },
      { show: 15 },
      { show: 16 },
    ];
     const afterData = [
       { show: 0 },
       { show: 1 },
       { show: 2 },
       { show: 3 },
       { show: 4 },
       { show: 5 },
       { show: 6 },
       { show: 7 },
       { show: 8 },
       { show: 9 },
       { show: 10 },
       { show: 11 },
       { show: 12 },
       { show: 13 },
     ];
     const data = await wrapper.vm.limitNoOfShows(beforeData);
     expect(data).toEqual(afterData);
  });
});
