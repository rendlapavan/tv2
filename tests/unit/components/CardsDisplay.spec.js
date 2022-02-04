import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";

import CardsDisplay from "@/components/CardsDisplay.vue";
import SingleView from "@/components/SingleView.vue"

describe("CardsDisplay.vue", () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const routes = [
      {
        path: "/singleview/:id",
        component: SingleView,
      },
    ];

    const router = new VueRouter({ routes });
  let wrapper;
  const mockStore = { state: jest.fn() };
  beforeEach(() => {
    wrapper = shallowMount(CardsDisplay, {
      propsData: {
        from: 'search',
      },
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
  it("should route to singleview component with id when showClicked method is called", async () => {
    await wrapper.vm.showClicked(10);
    expect(wrapper.vm.$route.path).toBe("/singleview/10");
  });

    it("should return original image if image is present when deimage",async () => {
      const mockShow = {image:{original:'sample'}}
      const returnData = await wrapper.vm.deimage(mockShow);
      expect(returnData).toBe(mockShow.image.original);
    });
});
