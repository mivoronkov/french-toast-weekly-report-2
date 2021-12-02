export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

import '../src/styles/main.scss';
import 'bootstrap';
import "../src/styles/main.scss";
import "../src/img/happy.svg";
import "../src/img/very-happy.svg";
import "../src/img/very-sad.svg";
import "../src/img/neutral.svg";
import "../src/img/sad.svg";
import "../src/img/unmarked.svg";