/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */
import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Home: "Home", // Alterado de TabOneScreen para Home
          Projetos: "Projetos", // Alterado de TabTwoScreen para Projetos
          Sobre: "Sobre", // Adicionado
          Habilidades: "Habilidades", // Adicionado
          Contato: "Contato", // Adicionado
        },
      },
      NotFound: "*", // Mantido como estava
    },
  },
};
