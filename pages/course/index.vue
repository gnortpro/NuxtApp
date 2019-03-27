<template>
  <v-container grid-list-md>
    <h1>Course</h1>
    <CourseCard v-for="course in courses" :key="course.id" :course="course" />
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import CourseCard from '~/components/CourseCard.vue'
export default {
  middleware: 'guest',
  components: {
    CourseCard
  },
  computed: mapState(['courses']),

  created() {
    this.$store.dispatch('getCourseList')
  }

  // eslint-disable-next-line vue/order-in-components
}
</script>

<style></style>
