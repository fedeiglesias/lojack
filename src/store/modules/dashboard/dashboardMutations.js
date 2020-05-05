export default {
    SET_DATA (state, dashboardData) {
      state.data = dashboardData
    },
  
    SET_ERROR (state, data) {
      state.error = data
    },
  
    SET_LOADING (state, data) {
      state.loading = data
    }
  }