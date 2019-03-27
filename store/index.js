// simply export the state as a function, and the mutations and actions as objects
export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  },

  getCourseById: state => id => {
    return state.course.find(courseDetails => courseDetails.ID === id)
  }
}
export const state = () => ({
  courses: [],
  course: []
})

export const mutations = {
  SET_COURSE: (state, payload) => (state.courses = payload),
  SET_COURSE_DETAIL: (state, payload) => (state.course = payload)
}

export const actions = {
  async getCourseList({ store, $axios, error }) {
    try {
      const { data } = await $axios.get('courses/list_course/')
      store.commit('SET_COURSE', data)
    } catch (e) {}
  },
  async getCourseDetails({ store, params, $axios, error }) {
    try {
      const { data } = await $axios.get('courses/list_course/' + params.id)
      store.commit('SET_COURSE_DETAIL', data)
    } catch (e) {}
  }
}
