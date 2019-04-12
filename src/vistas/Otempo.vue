<template>
<div>
<v-card class="ma-6 pa-3">
    <weather 
        api-key="be0f4800bf876a9ab89178154d4563bd"
        title="O tempo en Pontevedra"
        latitude="42.430468"
        longitude="-8.644619"
        language="es"
        bar-color="#333"
        update-interval="2800"
        units="uk"> 
    </weather>
</v-card>
</div>
</template>
 
<script>

import VueWeatherWidget from 'vue-weather-widget';
import 'vue-weather-widget/dist/css/vue-weather-widget.css';

export default {
    components: {
        'weather': VueWeatherWidget
    },
}
</script> 
