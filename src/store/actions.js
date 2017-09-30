import Vue from 'vue';
import firebase from 'firebase'
export const loadData = ({commit}) => {
    var user = firebase.auth().currentUser;
    Vue.http.get(`data${user.uid}.json`)
        .then(response => response.json())
        .then(data => {
            if (data) {
                const stocks = data.stocks;
                const funds = data.funds;
                const stockPortfolio = data.stockPortfolio;

                const portfolio = {
                    stockPortfolio,
                    funds
                };

                commit("SET_PORTFOLIO", portfolio);
                commit("SET_STOCKS", stocks);
            }
        })
};