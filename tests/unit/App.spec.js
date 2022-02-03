import { shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";

import app from "@/App.vue";
import Navbar from "@/components/Navbar.vue";

describe("app.vue", () => {
  let appWrapper;
  const mockStore={ dispatch: jest.fn() }
  const router = new VueRouter();
  beforeEach(() => {
    appWrapper = shallowMount(app, {
      mocks: {
        $store: mockStore,
      },
      router,
    });
  });

  afterEach(() => {
    appWrapper.destroy();
  });
  it("is a Vue instance", () => {
    expect(appWrapper.isVueInstance).toBeTruthy();
  });
  it('it should have a div element with id="app"', () => {
    expect(appWrapper.attributes("id")).toBe("app");
  });
  it("it should load navbar", () => {
    expect(appWrapper.findComponent(Navbar).exists()).toBe(true);
  });
});
