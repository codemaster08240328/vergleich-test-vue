import { shallowMount } from "@vue/test-utils";
import AttributeBadge from "@/components/attribute-badge/AttributeBadge.vue";

describe("AttributeBadge rendered correcty", () => {
  it("renders correctly", () => {
    const propsData = {
      rating: 91,
    };

    const wrapper = shallowMount(AttributeBadge, {
      propsData,
    });

    expect(wrapper).toMatchSnapshot();
  });

  it("color props passes correctly", () => {
    const propsData = {
      color: "#0298d5",
      rating: 91,
    };

    const wrapper = shallowMount(AttributeBadge, {
      propsData,
    });

    expect(wrapper.props().color).toBe(propsData.color);

    const badgeComponentRef = wrapper.findComponent({
      ref: "badge__component",
    });

    expect(badgeComponentRef.attributes().style).toContain(
      `--primary-color: ${propsData.color}`
    );
  });

  it("type props passes correctly", () => {
    const propsData = {
      rating: 90,
      type: "number",
    };

    const wrapper = shallowMount(AttributeBadge, {
      propsData,
    });

    const badgeComponentGradeRef = wrapper.findComponent({
      ref: "badge__component-content-grade",
    });

    const badgeComponentNumberRef = wrapper.findComponent({
      ref: "badge__component-content-number",
    });

    expect(wrapper.props().type).toBe(propsData.type);

    expect(badgeComponentGradeRef.exists()).toBe(true);
    expect(badgeComponentGradeRef.text()).toBe("2,0");
    expect(badgeComponentNumberRef.exists()).toBe(true);
    expect(badgeComponentNumberRef.text()).toBe("gut");
  });

  it("too low rating passes", () => {
    const propsData = {
      rating: 15,
      type: "number",
    };

    const wrapper = shallowMount(AttributeBadge, {
      propsData,
    });

    const badgeComponentGradeRef = wrapper.findComponent({
      ref: "badge__component-content-grade",
    });

    expect(badgeComponentGradeRef.exists()).toBe(true);
    expect(badgeComponentGradeRef.text()).toBe("6,0");
  });
});
