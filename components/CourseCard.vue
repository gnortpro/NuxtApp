<template>
  <div class="col-md-12">
    <nuxt-link :to="'/course/' + course.id">
      <v-card class="card-course">
        <div class="row">
          <div class="col-md-3 justify-center">
            <v-img class="course-thumbnail" :src="course.thumbnail"></v-img>
          </div>
          <div class="col-md-6">
            <div class="course-title justify-left">
              {{ course.post_title }}
            </div>
            <p class="course-excerpt">{{ course.post_excerpt }}</p>
          </div>
          <div class="col-md-3">
            <p class="course-progress text-center">10 / 11 lessons completed</p>
            <v-card-actions class="justify-center">
              <v-btn round large color="success">Resume</v-btn>
            </v-card-actions>
          </div>
        </div>
      </v-card>
    </nuxt-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    course: {
      type: Object,
      default: null
    }
  },
  created() {
    this.$store.dispatch('getCourseDetails', this.$route.params.id)
  },
  // eslint-disable-next-line vue/order-in-components
  computed: mapState(['course'])
}
</script>

<style scope>
.course-progress {
  font-weight: 600;
  font-size: 17px;
}
a:hover {
  text-decoration: none;
}
.course-thumbnail {
  border-radius: 16px;
  height: 100%;
  width: auto;
}
.card-course {
  border-radius: 16px;
  margin-bottom: 20px;
  padding: 20px;
}
.course-title {
  font-size: 27px;
}
#grayscale-background {
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: gray;
  -webkit-filter: grayscale(1);
  color: #b7b3b3;
}
#grayscale-background:hover {
  -webkit-filter: none;
  -moz-filter: none;
  filter: none;
  color: #012243;
  cursor: pointer;
}
a#grayscale-background:hover {
  text-decoration: none;
}
</style>
