import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      "Canadian Food Price Dashboard": "Tableau de bord des prix alimentaires canadiens",
      "Visualizing food price trends across Canada (2017-2025)": "Visualisation des tendances de prix alimentaires à travers le Canada (2017-2025)",

      "Graph of Food Prices Over Time": "Graphique des prix alimentaires",
      "Table of Food Prices Over Time": "Tableau des prix alimentaires",
      "From": "De",
      "To": "À",
      "Price": "Prix",
      "Year": "Année",

      "Chart Type": "Type de graphique",
      "Line Chart": "Graphique linéaire",
      "Bar Chart": "Diagramme à barres",
      "Select Item": "Sélectionner un élément",

      /*Food*/
      "Broccoli (per unit)": "Brocoli (par unité)",
      "Eggs (per dozen)": "Œufs (par douzaine)",
      "Milk (per litre)": "Lait (par litre)",
      "Bread (per 675g)": "Pain (pour 675 g)",
      "Chicken breast (per kg)": "Poitrine de poulet (par kg)",

      /*Food dropdown*/
      "All": "Tout",
      "Broccoli": "Brocoli",
      "Eggs": "Œufs",
      "Milk": "Lait",
      "Bread": "Pain",
      "Chicken breast": "Poitrine de poulet",

      /*Footer*/
      "ABOUT": "À PROPOS",
      "DATA SOURCE": "SOURCE DES DONNÉES",
      "A comprehensive dashboard for comparing and visualizing price trends of staple Canadian groceries over the last several years.": "Un tableau de bord complet pour comparer et visualiser les tendances des prix des produits alimentaires de base au Canada au cours des dernières années.",
      "Data source": "Source des données",
      "Statistics Canada": "Statistique Canada",
      "Developed by": "Développé par",
      "All prices shown represent average prices from January of each year.": "Tous les prix affichés représentent les prix moyens de janvier de chaque année.",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;