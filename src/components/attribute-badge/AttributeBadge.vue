<template>
  <div class="badge__component" :style="cssValues" ref="badge__component">
    <div class="badge__component-header">AUSZEICHNUNG</div>
    <div class="badge__component-content">
      <span class="badge__component-content-title"> Unsere Bewertung </span>
      <span
        v-if="isNumber"
        class="badge__component-content-grade"
        ref="badge__component-content-grade"
      >
        {{ formatNumber(gradeNumber) }}
      </span>
      <span
        ref="badge__component-content-number"
        :class="{
          'badge__component-content-number': isNumber,
          'badge__component-content-text': !isNumber,
        }"
      >
        {{ gradeText(gradeNumber) }}
      </span>
    </div>
    <div class="badge__component-footer">04/2021</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

enum GradeTypes {
  TEXT = "text",
  NUMBER = "number",
}

type TCssValue = {
  "--primary-color": string;
};

const GRADE_NUMBERS: number[] = [
  6.0,
  6.0,
  6.0,
  5.0,
  4.5,
  4.0,
  3.5,
  3.0,
  2.5,
  2.0,
  1.0,
];

const GRADE_TEXTS: string[] = [
  "sehr gut",
  "gut",
  "befriedigend",
  "ausreichend",
  "mangelhaft",
  "ungenügend",
];

@Component({
  name: "attribute-badge",
})
export default class AttributeBadge extends Vue {
  @Prop({ default: GradeTypes.TEXT }) type!: GradeTypes;
  @Prop() rating!: number;
  @Prop({ default: "#f00" }) color!: string;

  get cssValues(): TCssValue {
    return {
      "--primary-color": this.color,
    };
  }

  get isNumber(): boolean {
    return this.type === GradeTypes.NUMBER;
  }

  get gradeNumber(): number {
    if (this.rating <= 20) return GRADE_NUMBERS[Math.ceil(this.rating / 10)];

    const stepDown = Math.floor(this.rating / 10);
    const stepUp = Math.ceil(this.rating / 10);
    const remainder = Math.ceil(this.rating % 10);

    if (stepDown === stepUp) return GRADE_NUMBERS[stepDown];

    const baseValue = GRADE_NUMBERS[stepDown];
    const nextVale = GRADE_NUMBERS[stepUp];
    const diff = Math.ceil(remainder * (baseValue - nextVale)) / 10;

    return baseValue - diff;
  }

  gradeText(grade: number): string {
    return GRADE_TEXTS[Math.floor(grade) - 1];
  }

  formatNumber(grade: number): string {
    return grade.toFixed(1).replace(".", ",");
  }
}
</script>

<style lang="scss" scoped>
.badge__component {
  text-align: center;
  border: solid 2px var(--primary-color);
  width: 146px;
  height: 141px;
  font-size: 13px;
  display: inline-flex;
  flex-direction: column;
  line-height: 20px;

  &-header {
    background-color: var(--primary-color);
    color: #fff;
    font-weight: 600;
    line-height: 26px;
    height: 31.33px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &-title {
      display: block;
      margin-bottom: 8px;
      font-size: 12px;
    }

    &-grade {
      color: var(--primary-color);
      font-size: 32px;
      font-weight: 700;
      line-height: 24px;
    }

    &-text {
      text-transform: uppercase;
      color: var(--primary-color);
      font-size: 18px;
      font-weight: 700;
    }

    &-number {
      font-size: 12px;
      font-weight: 600;
    }
  }

  &-footer {
    background-color: #f5f5f5;
    border-top: 1px solid #d8dadb;
    height: 23.33px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
  }
}
</style>
