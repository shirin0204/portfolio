import { createApp } from 'vue';
import App from './App.vue';
// import Amplify from 'aws-amplify';
// import aws_exports from './aws-exports';
// import { AmplifyProvider } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';

// Amplify.configure(aws_exports);

const app = createApp(App);

// app.component(AmplifyProvider.name, AmplifyProvider);

app.mount('#app');
