<template>
  <span @click="open"> {{ current }} </span>
  <van-action-sheet v-model:show="show">
    <van-datetime-picker
      :type="type"
      v-model="inner"
      title="选择时间"
      @confirm="confirm"
      @cancel="close"
    />
  </van-action-sheet>
</template>

<script>
import moment from "moment";
import { reactive, toRefs } from "@vue/reactivity";
export default {
  props: {
    modelValue: String,
    type: String || "date",
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const state = reactive({
      current: props.modelValue,
      inner: new Date(props.modelValue),
      type: props.type,
      show: false,
    });

    const formatTime = (time) => {
      let formatter;
      switch (state.type) {
        case "datetime":
          formatter = "YYYY-MM-DD HH:mm";
          break;
        case "date":
          formatter = "YYYY-MM-DD";
          break;
        default:
          formatter = "YYYY-MM-DD";
          break;
      }
      return moment(time).format(formatter);
    };
    const confirm = (value) => {
      state.current = formatTime(value);
      emit("update:modelValue", state.current);
      close();
    };
    const open = () => {
      state.show = true;
    };
    const close = () => {
      state.show = false;
    };

    return {
      ...toRefs(state),
      formatTime,
      confirm,
      open,
      close,
    };
  },
};
</script>

<style>
</style>