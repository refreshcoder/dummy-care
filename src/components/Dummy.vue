<template>
  <div class="main">
    <div class="config" v-if="configShow">
      <van-cell-group inset>
        <van-field v-model="payTime" label="挂号时间">
          <template #input>
            <time-picker v-model="payTime" type="datetime" />
          </template>
        </van-field>
        <van-field v-model="orderDate" label="就诊时段">
          <template #input>
            <time-picker v-model="orderDate" type="date" />
          </template>
        </van-field>
        <van-field v-model="number" type="digit" label="就诊排队号" />
        <van-field v-model="type" label="费用类型" />
        <van-field v-model="hospital" label="医院名称" />
        <van-field v-model="room" label="就诊科室" />
        <van-field v-model="doctor" label="医生姓名" />
        <van-field v-model="patient" label="就诊人" />
        <van-field v-model="patientNo" label="就诊人卡号" />
        <van-field v-model="id" type="digit" label="平台单号" />
        <van-field v-model="price" type="number" label="交易金额" />
        <van-field v-model="status" label="支付状态" />
      </van-cell-group>
    </div>

    <div class="title">
      <div class="title-logo">
        <img src="@/assets/locklock.png" @click="toggleConfig" />
      </div>
      <div class="title-text">
        <div class="main-text">挂号成功</div>
        <div>{{ payTime }}</div>
      </div>
    </div>
    <div class="section">
      <div class="item">
        <div class="label">就诊时段</div>
        <div class="value alert-text">
          <p>{{ orderDate }} {{ getDay(orderDate) }}</p>
          <p>白天</p>
        </div>
      </div>
      <div class="item">
        <div class="label">就诊排队号</div>
        <div class="value">{{ number }}</div>
      </div>
    </div>
    <div class="section">
      <div class="item">
        <div class="label">费用类型</div>
        <div class="value">{{ type }}</div>
      </div>
      <div class="item">
        <div class="label">医院名称</div>
        <div class="value">{{ hospital }}</div>
      </div>
      <div class="item">
        <div class="label">就诊科室</div>
        <div class="value">{{ room }}</div>
      </div>
      <div class="item">
        <div class="label">医生姓名</div>
        <div class="value">{{ doctor }}</div>
      </div>
    </div>
    <div class="section">
      <div class="item">
        <div class="label">就诊人</div>
        <div class="value">
          <p>{{ patient }}</p>
          <p>{{ patientNo }}</p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="item">
        <div class="label">平台单号</div>
        <div class="value">{{ id }}</div>
      </div>
      <div class="item">
        <div class="label">交易金额</div>
        <div class="value">￥{{ price }}</div>
      </div>
      <div class="item">
        <div class="label">支付状态</div>
        <div class="value">{{ status }}</div>
      </div>
    </div>
  </div>
</template>

<script>
const randomNo = (length) => {
  let no = "";
  for (let i = 0; i < length; i++) {
    no += (Math.random() * 10).toFixed(0);
  }
  return no;
};
const randomRange = (min, max) => {
  return (Math.random() * (max - min) + min).toFixed(0);
};
import moment from "moment";
import TimePicker from "@/components/TimePicker";
const list = ["日", "一", "二", "三", "四", "五", "六"];
import { reactive, toRefs } from "vue";
export default {
  components: {
    TimePicker,
  },
  setup() {
    const state = reactive({
      payTime: moment().format("YYYY-MM-DD HH:mm"),
      orderDate: moment().format("YYYY-MM-DD"),
      number: randomRange(3, 18),
      type: "预约挂号",
      hospital: "成都市武侯区第三人民医院",
      room: "眼科门诊",
      doctor: "眼科门诊",
      patient: "某某某",
      patientNo: "011" + randomNo(6),
      id: randomNo(18),
      price: "11.00",
      status: "已支付",
      //
      configShow: false,
    });

    const getDay = (time) => {
      return "星期" + list[moment(time).day() % 7];
    };

    const toggleConfig = () => {
      state.configShow = !state.configShow;
    };

    return {
      ...toRefs(state),
      getDay,
      toggleConfig,
    };
  },
};
</script>

<style lang="less" scoped>
@main: #4eb3a5;
@alert: #e2822c;
@bt: #4c4c4c;
@gt: #999999;

@border: #d9d9db;

@wbc: #ffffff;
@gbc: #f3f7f8;

.main {
  min-height: 100vh;
  background-color: @gbc;
  .main-text {
    color: @main;
  }
  .config {
    padding: 20px 0;
  }
  div > p {
    margin: 0 0 4px 0;
    &:last-child {
      margin: 0;
    }
  }
  .title {
    background-color: @wbc;
    display: flex;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid @border;
    .title-logo {
      margin-right: 16px;
      width: 40px;
      height: 40px;
      img {
        width: 100%;
      }
    }
    .title-text {
      text-align: left;
      color: @bt;
    }
  }
  .section {
    background-color: @wbc;
    margin: 16px 0;
    padding: 0 16px;
    border-top: 1px solid @border;
    border-bottom: 1px solid @border;
    .item {
      padding: 16px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid @border;
      &:last-child {
        border-bottom: none;
      }
      .label {
        text-align: left;
        color: @bt;
      }
      .value {
        text-align: right;
        color: @gt;
      }
      .alert-text {
        color: @alert;
      }
    }
  }
}
</style>
