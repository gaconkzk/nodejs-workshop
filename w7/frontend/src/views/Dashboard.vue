<template lang="pug">
.dashboard-wrapper
  .first-section
    .recent-proposal
      p
        | Recent proposals
      div
        img.img(:src="urlOne" alt="userImage")
        img.img(:src="urlTwo" alt="userImage")
        img.img(:src="urlThree" alt="userImage")
    .info
      img.img(:src="urlTwo" alt="userImage")
      p.name Alexandra Smith
      p.address
        icon(name="map-marker")
        |  Los Angeles, CA
    .events
      .events-data
        p.counts
          | 156
        p
        p
          | friends
      .events-data
        p.counts
          | 182
        p
        p
          | events
      .events-data
        p.counts
          | 244
        p
        p
          | checkins
  transition(name="fade-table" appear="")
    .second-section(style="overflow:auto;")
      table.event-table
        thead
          tr
            th.image-header
            th.header-cell
              | Invitations
            th.header-cell.event-header
              | events
            th.header-cell.calendar-header
              | calendar
            th.header-cell.friend-list-header
              | friends
            th.header-cell
              icon(name="cog" scale="1.5")
        tbody
          tr
            td.image-cell
              img.img(:src="eventOne" alt="eventImage")
            td.table-body-cell
              | Party Hall
            td.table-body-cell.event-info-cell
              icon(name="map-marker")
              |  1642 N Las Palmas Ave Los Angeles,CA 90028
            td.table-body-cell.calendar-info-cell
              | Fri, June 24
            td.table-body-cell.star
              icon(name="star")
            td.table-body-cell
              icon(name="check-circle" scale="1.5")
          tr
            td.image-cell
              img.img(:src="eventTwo" alt="eventImage")
            td.table-body-cell
              | Music Event
            td.table-body-cell.event-info-cell
              icon(name="map-marker")
              |  6555 Hollywood Blvd Hollywood,CA 90028
            td.table-body-cell.calendar-info-cell
              | Sat, June 25
            td.table-body-cell.star
              icon(name="star")
            td.table-body-cell
              icon(name="check-circle" scale="1.5")
          tr
            td.image-cell
              img.img(:src="eventThree" alt="eventImage")
            td.table-body-cell
              | Restaurant
            td.table-body-cell.event-info-cell
              icon(name="map-marker")
              |  811 wilshire Blvd Los Angeles,CA 90028
            td.table-body-cell.calendar-info-cell
              | Fri, Jul 26
            td.table-body-cell.star
              icon(name="star")
            td.table-body-cell
              icon(name="check-circle" scale="1.5")
</template>

<script>
export default {
  name: 'DashboardScreen',
  data () {
    return {
      show: false,
      urlOne: require('../assets/userOne.jpg'),
      urlTwo: require('../assets/userTwo.jpg'),
      urlThree: require('../assets/userThree.jpeg'),
      eventOne: require('../assets/eventOne.jpg'),
      eventTwo: require('../assets/eventTwo.jpg'),
      eventThree: require('../assets/eventThree.jpeg')
    }
  },
  methods: {
    customAfterAppearHook() {
      this.show = true
    }
  }
}
</script>

<style lang="scss" scoped>
	@import "@/styles/views/dashboard.scss"
</style>
