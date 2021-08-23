<template>
  <div class="main">
    <div class="setting">
      <div class="item">
        <div class="label">挂号时间</div>
        <div class="value">
          <input v-model="payTime" placeholder="2020-01-01 14:22:22" />
        </div>
      </div>
      <div class="item">
        <div class="label">就诊时段</div>
        <div class="value">
          <input v-model="orderDate" placeholder="2020-01-01" />
        </div>
      </div>
      <div class="item">
        <div class="label">就诊排队号</div>
        <div class="value"><input v-model="number" placeholder="" /></div>
      </div>
      <div class="item">
        <div class="label">费用类型</div>
        <div class="value"><input v-model="type" placeholder="" /></div>
      </div>
      <div class="item">
        <div class="label">医院名称</div>
        <div class="value"><input v-model="hospital" placeholder="" /></div>
      </div>
      <div class="item">
        <div class="label">就诊科室</div>
        <div class="value"><input v-model="room" placeholder="" /></div>
      </div>
      <div class="item">
        <div class="label">医生姓名</div>
        <div class="value"><input v-model="doctor" placeholder="" /></div>
      </div>
      <div class="item">
        <div class="label">就诊人</div>
        <div class="value">
          <input v-model="patient" placeholder="" />
        </div>
      </div>
      <div class="item">
        <div class="label">就诊人卡号</div>
        <div class="value"><input v-model="patientNo" placeholder="" /></div>
      </div>
      <div class="item">
        <div class="label">平台单号</div>
        <div class="value"><input v-model="id" placeholder="" /></div>
      </div>
      <div class="item">
        <div class="label">交易金额</div>
        <div class="value"><input v-model="price" placeholder="" /></div>
      </div>
      <div class="item">
        <div class="label">支付状态</div>
        <div class="value"><input v-model="status" placeholder="" /></div>
      </div>
    </div>

    <div class="title">
      <div class="title-logo">
        <img src="@/assets/locklock.png" />
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
          <div>{{ orderDate }} {{ getDay(orderDate) }}</div>
          <div>白天</div>
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
          <div>{{ patient }}</div>
          <div>{{ patientNo }}</div>
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
import moment from "moment";
const list = ["日", "一", "二", "三", "四", "五", "六"];
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const state = reactive({
      payTime: "2021-08-24 00:36:29",
      orderDate: "2021-08-13",
      number: "11",
      type: "预约挂号",
      hospital: "成都市武侯区第三人民医院",
      room: "眼科门诊",
      doctor: "眼科门诊",
      patient: "某某",
      patientNo: "01167198",
      id: "3602532480578519048",
      price: "11.00",
      status: "已支付",
    });

    const getDay = (time) => {
      return "星期" + list[moment(time).day() % 7];
    };

    return {
      ...toRefs(state),
      getDay,
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
  background-color: @gbc;
  .main-text {
    color: @main;
  }
  .setting{
    margin-bottom: 200px;
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
