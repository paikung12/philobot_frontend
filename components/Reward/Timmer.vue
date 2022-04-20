<template>
  <div  >
    <div v-show ="statusType !== 'expired'">
      <div class="text-6xl text-center flex w-full items-center justify-center">

      <div class="w-28 mx-1 p-4 bg-white text-green-500 rounded-lg">
        <div class="font-mono leading-none " x-text="days">{{ days }}</div>
        <div class="font-mono uppercase text-sm leading-none">{{ wordString.day }}</div>
      </div>

        <div class="w-28 mx-1 p-4 bg-white text-green-500 rounded-lg">
          <div class="font-mono leading-none" x-text="days">{{ hours }}</div>
          <div class="font-mono uppercase text-sm leading-none">{{ wordString.hours }}</div>
        </div>
        <div class="w-28 mx-1 p-4 bg-white text-green-500 rounded-lg">
          <div class="font-mono leading-none" x-text="days">{{ minutes }}</div>
          <div class="font-mono uppercase text-sm leading-none">{{ wordString.minutes }}</div>
        </div>

        <div class="w-28 mx-1 p-4 bg-white text-green-500 rounded-lg">
          <div class="font-mono leading-none" x-text="days">{{ seconds }}</div>
          <div class="font-mono uppercase text-sm leading-none">{{ wordString.seconds }}</div>
        </div>

    </div>
<!--    <div class="status-tag" :class="statusType">{{ statusText }}</div>-->
      </div>
  </div>
</template>

<script>

export default {
  props: ['starttime','endtime','trans'] ,
  data: function(){
    return{
      timer:"",
      wordString: {},
      start: "",
      end: "",
      interval: "",
      days:"",
      minutes:"",
      hours:"",
      seconds:"",
      message:"",
      statusType:"",
      statusText: "",

    };
  },
  created: function () {
    this.wordString = JSON.parse(this.trans);
  },
  mounted(){
    this.start = new Date(this.starttime).getTime();
    this.end = new Date(this.endtime).getTime();
    // Update the count down every 1 second
    this.timerCount(this.start,this.end);
    this.interval = setInterval(() => {
      this.timerCount(this.start,this.end);
    }, 1000);
  },
  methods: {
    timerCount: function(start,end){
      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = start - now;
      var passTime =  end - now;

      if(distance < 0 && passTime < 0){
        this.message = this.wordString.expired;
        this.statusType = "expired";
        this.statusText = this.wordString.status.expired;
        clearInterval(this.interval);
        return;

      }else if(distance < 0 && passTime > 0){
        this.calcTime(passTime);
        this.message = this.wordString.running;
        this.statusType = "running";
        this.statusText = this.wordString.status.running;

      } else if( distance > 0 && passTime > 0 ){
        this.calcTime(distance);
        this.message = this.wordString.upcoming;
        this.statusType = "upcoming";
        this.statusText = this.wordString.status.upcoming;
      }
    },
    calcTime: function(dist){
      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
    }

  }
}
</script>

