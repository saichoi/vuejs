import { createApp } from 'vue';

import App from './App.vue';
import BaseCard from './UI/BaseCard.vue';
import BaseButton from './UI/BaseButton.vue';
import BaseDialog from './UI/BaseDialog.vue';

const app = createApp(App)

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);

app.mount('#app');