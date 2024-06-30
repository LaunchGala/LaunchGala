import { defineStore } from "pinia";

export const usePmKpiStore = defineStore("venue", {
    state: () => ({
      selectedVenue: null,
      searchFilters: {}
    }),
    getters: {
      getSelectedVenue: (state) => state.selectedVenue,
      getSearchFilters: (state) => state.searchFilters,
    },
    actions: {
      updateSelectedVenue(value) {
        this.selectedVenue = value;
      },
      updateSearchFilters(value) {
        this.searchFilters = value;
      },
      initAllVenues(){},
      addVenue(){},
      reserveVenue(){},
      deleteVenue(){},
      
    },
  });