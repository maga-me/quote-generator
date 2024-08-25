// stores/quoteStore.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useQuotesStore = defineStore('quotes', {
  state: () => ({
    quote: [],
    error: null,
  }),
  actions: {
    async fetchQuotes() {
      try {
        const response = await axios.get('https://api.api-ninjas.com/v1/quotes', {
          params: {  },
          headers: { 'X-Api-Key': 'e9hJN4bJCJcTJyKPwl3iQg==ASknzczDlK6aU1da' },
        });
        this.quote = response.data;
      } catch (error) {
        this.error = error.response ? error.response.data : 'An error occurred';
        console.error('Error: ', this.error);
      }
    }
  }
});
