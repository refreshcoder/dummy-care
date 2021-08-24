import { createApp } from 'vue'
import App from './App.vue'
import { Field, CellGroup, DatetimePicker, ActionSheet  } from 'vant';

const app = createApp(App)

app.use(Field).use(CellGroup).use(DatetimePicker).use(ActionSheet);

app.mount('#app')
