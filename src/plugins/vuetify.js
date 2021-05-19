import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  breakpoint:{
    mobileBreakpoint:'xs'
  },
  theme:{
    themes: {
      light: {
        // primary: '#1976D2',
        primary:'#1976d2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
      },
      dark: {
        // primary: '#2196F3',
        primary:'#00FF00',
        secondary: '#424242',
        accent: '#FF4081',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
      },
    },
  }
});
