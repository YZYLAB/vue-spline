<template>
    <div :className="className" :style="containerStyle">
      <canvas :id="id" ref="spline" :style="canvasStyle"></canvas>
    </div>
</template>

<script>
import "./three.js";

import { speRuntimeFactory } from "./spline.runtime.min.js";
const SpeRuntime = speRuntimeFactory({}, window.THREE);

export default {
  props: {
    id: {
      type: String,
    },
    scene: {
      type: Object,
    },
    className: {
      type: String,
    },
    canvasStyle: {
      type: Object,
      default: () => {
        return { height: "100%", width: "100%", outline: "none" };
      },
    },
    containerStyle: {
      type: Object,
      default: () => {
        return {
          width: "100%",
          height: "100%",
          overflow: "hidden",
          position: "relative",
        };
      },
    },
  },
  mounted() {
    new SpeRuntime.Application().start(this.scene, this.$refs.spline)
  },
};
</script>

<style>
</style>