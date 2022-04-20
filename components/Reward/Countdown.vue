<template>
<div>
    <div class="text-yellow-100 -mt-5">
        <div class="text-6xl text-center flex w-full items-center justify-center">
          <Reward-Timmer   :starttime="startDate"
                           :endtime="endDate"
                           trans='{
                           "day":"Day",
                           "hours":"Hours",
                           "minutes":"Minuts",
                           "seconds":"Seconds",
                           "expired":"Event has been expired.",
                           "running":"Till the end of event.",
                           "upcoming":"Till start of event.",
                           "status": {
                              "expired":"Expired",
                              "running":"Running",
                              "upcoming":"Future"
                             }}' />
        </div>
    </div>
</div>
</template>

<script>

import moment from 'moment'
export default {
  components:{

  },
    data() {
        return {}
    },
  props:{
      vote:{
        default:{}
      }
  },
  computed:{
    endDate(){
      return moment(this.vote.times).format('MMM  DD YYYY hh:mm:ss')
    },
    startDate(){
      return moment().format('MMM  DD YYYY hh:mm:ss')
    },

  }

}
</script>
<style>

</style>

