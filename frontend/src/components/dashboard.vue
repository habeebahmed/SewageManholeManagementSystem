<template>
  <div class="home">
    <div class="middle">
      <div >
        <div class="info_card">
          <h3>Recorded Manholes</h3>
          <h2>{{ overview.tm }}</h2>
        </div>

        <div class="info_card">
          <h3>Recorded Overflows</h3>
          <h2>{{ overview.to }}</h2>
        </div>

        <div class="info_card">
          <h3>Recorded Missing</h3>
          <h2>{{ overview.tmiss }}</h2>
        </div>

        <div class="info_card">
          <h3>Manholes Damaged</h3>
          <h2>{{ overview.td }}</h2>
        </div>
      </div>

      <!-- Weather Data -->
      <el-row :gutter="20" id="weatherMapData" style="margin-bottom:40px">
        <el-col :span="20" >
          <el-card class="box-card" style="margin-left: 1rem; padding:1rem;">
            <el-row :gutter="10">
              <el-col :span="24" style="border-bottom: 1px solid #ccc; padding-bottom:10px;">
                <h2 style="font-size:20px; font-family:ExtraBold">Current Weather</h2>
              </el-col>
            </el-row>
            <el-row :gutter="10" style="margin-top:20px;">
              <el-col :span="12"><h2>Weather:</h2></el-col>
              <el-col :span="12"><h2>{{ weather.weather[0].description }}</h2></el-col>
            </el-row>
            <el-row :gutter="10" style="margin-top:20px;">
              <el-col :span="12"><h2>Temperature:</h2></el-col>
              <el-col :span="12"><h2>{{ Math.floor(weather.main.temp - 273) }} °C</h2></el-col>
            </el-row>
            <el-row :gutter="10" style="margin-top:20px;">
              <el-col :span="12"><h2>Pressure:</h2></el-col>
              <el-col :span="12"><h2>{{ weather.main.pressure }}</h2></el-col>
            </el-row>
            <el-row :gutter="10" style="margin-top:20px;">
              <el-col :span="12"><h2>Humidity:</h2></el-col>
              <el-col :span="12"><h2>{{ weather.main.humidity }}</h2></el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>

      <!-- Graph -->
      <el-row :gutter="20">
        <el-col :span="20" >
          <el-card class="box-card" style="margin-left: 1rem; padding:1rem;">
            <el-row :gutter="10">
              <el-col :span="24" :offset="1">
                <h2 style=" font-family:ExtraBold">Statistics</h2>
              </el-col>
            </el-row>
            <el-row :gutter="10" style="margin-top:20px;">
              <el-col :span="24" style="border-bottom: 1px solid #ccc; padding-bottom:10px;">
              </el-col>
            </el-row>
            <el-row style="margin-top:20px;">
              <el-col :span="24" :offset="0" style="padding-left:20px">
                <chart-file :chart-data="datacollection" :height="175"/>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>

      <!-- Map -->
      <el-row :gutter="20">
        <el-col :span="20">
          <el-card style="margin-left: 1rem; padding:0; margin-top: 2rem;">
            <el-row :gutter="10" style="margin-top:20px;">
              <el-col :span="24" style="border-bottom: 1px solid #ccc; padding-bottom:10px;">
                <h2 style=" font-family:ExtraBold">Map</h2>
              </el-col>
            </el-row >
            <div id="map" style="margin-top:20px;"></div>
          </el-card>
        </el-col>
      </el-row>

      <!-- Dialog -->
      <el-row>
        <el-col :span="24">
          <el-dialog
            :visible.sync="dialogVisible"
            width="70%">
            <span>
              <el-button type="success" plain style="float:right;" @click="resolveIssue(man_dataset.manholeId)">Resolve Issue</el-button>
              <h2 style="margin-bottom: 20px">Data</h2>
              <el-row :gutter="20">
                <el-col :span="10" :offset="2">
                  <h3 style="font-family: ExtraBold; color:#1492e6">Manhole ID:</h3>
                </el-col>
                <el-col :span="10" :offset="2">
                  <h3 style="font-family: Light; color:#1492e6">{{man_dataset.manholeId}}</h3>
                </el-col>
              </el-row>

              <el-row :gutter="20">
                <el-col :span="10" :offset="2">
                  <h3 style="font-family: ExtraBold; color:#1492e6">Phone Number Of Incharge:</h3>
                </el-col>
                <el-col :span="10" :offset="2">
                  <h3 style="font-family: Light; color:#1492e6">{{man_dataset.phoneNumber}}</h3>
                </el-col>
              </el-row>

              <el-row :gutter="20">
                <el-col :span="24" :offset="0">
                  <h3 style="font-family: ExtraBold; color:#1492e6; text-align:center; font-size:25px;margin:10px;"> Logs: </h3>
                </el-col>
              </el-row>

              <el-row :gutter="20" v-for="item in man_dataset.log" v-bind:key="item">
                <el-col :span="10" :offset="2">
                  <h3 style="font-family: ExtraBold; color:#1492e6; float:right;margin-right:100px"> {{ item.type }} </h3>
                </el-col>
                <el-col :span="10" :offset="2">
                  <h3 style="font-family: Light; color:#1492e6"> {{ new Date(item.date).toGMTString() }} </h3>
                </el-col>
              </el-row>
            </span>
          </el-dialog>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import chartFile from './chartFile'
import axios from 'axios'

export default {
  components: {
    chartFile
  },
  data () {
    return {
      UpNext: [],
      dialogVisible: false,
      featured: null,
      value7: null,
      datacollection: {
        labels: ['27-03-2018', '28-03-2018', '29-03-2018', '30-03-2018', '01-04-2018'],
        datasets: [
          {
            label: 'Overflows',
            backgroundColor: 'rgba(63, 63, 191, 0.5)',
            data: [5, 1, 2, 3, 4]
          },
          {
            label: 'Damages',
            backgroundColor: 'rgba(63, 127, 191, 0.5)',
            data: [3, 4, 5, 2, 1]
          },
          {
            label: 'Missing',
            backgroundColor: 'rgba(63, 191, 191, 0.5)',
            data: [2, 3, 4, 0, 7]
          }
        ]
      },
      pickerOptions: {
        shortcuts: [{
          text: 'Last week',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: 'Last month',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: 'Last 3 months',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      options: null,
      map: null,
      markers: null,
      weather: {
        weather: [{
          description: 'Fetching'
        }],
        main: {
          temp: 'Fetching',
          pressure: 'Fetching',
          humidity: 'Fetching'
        }
      },
      obtainedData: null,
      overview: {
        tm: 'Fetching',
        to: 'Fetching',
        tmiss: 'Fetching',
        td: 'Fetching'
      },
      man_dataset: {

      }
    }
  },
  mounted () {
    const vue = this
    axios.post('https://api.openweathermap.org/data/2.5/weather?lat=17.4399&appid=4b3aa11447e1909b30f25d98007aee54&lon=78.4983')
      .then(function (response) {
        vue.weather = response.data
      })
      .catch(function (error) {
        console.log(error)
      })
    this.obtainData()
    setInterval(function () {
      vue.obtainData()
    }, 1000 * 30)
  },
  methods: {
    obtainData () {
      const vue = this
      axios.post('https://apricot-pie-53281.herokuapp.com/manholeinfo')
        .then(function (response) {
          vue.obtainedData = response.data
          vue.overview.tm = vue.obtainedData.total_manholes
          vue.overview.to = vue.obtainedData.info[0].total_overflow
          vue.overview.tmiss = vue.obtainedData.info[0].total_missing
          vue.overview.td = vue.obtainedData.info[0].total_damage
          vue.initMap()
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    notifyMe (title, error) {
      this.$notify({
        title: title,
        dangerouslyUseHTMLString: true,
        message: `<h2 style="color:#1492e6;">${error}</h2>`,
        duration: 0,
        position: 'bottom-right'
      })
    },
    initMap () {
      this.options = {
        zoom: 10,
        center: {
          lat: 17.4399,
          lng: 78.4983
        }
      }
      this.map = new google.maps.Map(document.getElementById('map'), this.options)
      this.markers = []

      for (let i = 0; i < this.obtainedData.manhole.length; i++) {
        let icon
        if (this.obtainedData.manhole[i].status.damage) {
          icon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
          this.notifyMe(`Manhole #${this.obtainedData.manhole[i].manholeId}`, `The manhole was damaged.`)
        } else if (this.obtainedData.manhole[i].status.overflow) {
          icon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
          this.notifyMe(`Manhole #${this.obtainedData.manhole[i].manholeId}`, `The manhole is about to overflow.`)
        } else if (this.obtainedData.manhole[i].status.manholeCover) {
          icon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
          this.notifyMe(`Manhole #${this.obtainedData.manhole[i].manholeId}`, `The manhole was removed..`)
        } else {
          icon = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
        }
        this.markers.push({
          coords: {
            lat: Number(this.obtainedData.manhole[i].location.lat),
            lng: Number(this.obtainedData.manhole[i].location.long)
          },
          iconImage: icon,
          content: `<h2 style="font-family: Extrabold; color: #1492e6;">Manhole #${this.obtainedData.manhole[i].manholeId}</h2>
                    <h2 style="font-family: Light; color: #1492e6;" @click="displayInfo">Click to know more info</h2>`
        })
      }
      for (let i = 0; i < this.obtainedData.manhole.length; i++) {
        this.addMarker(this.markers[i], this.obtainedData.manhole[i])
      }
    },
    resolveIssue (id) {
      const vue = this
      axios.get('https://apricot-pie-53281.herokuapp.com/resolved?manholeId=' + id)
        .then(function (response) {
          vue.obtainData()
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    addMarker (props, infs) {
      const vue = this
      let marker = new google.maps.Marker({
        position: props.coords,
        map: this.map
      })

      if (props.iconImage) {
        marker.setIcon(props.iconImage)
      }

      if (props.content) {
        var infowindow = new google.maps.InfoWindow({
          content: props.content
        })
        marker.addListener('mouseover', function () {
          infowindow.open(this.map, marker)
        })
        marker.addListener('click', function () {
          vue.dialogVisible = true
          vue.man_dataset = infs
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#weatherMapData h2{
  font-size: 15px;
  margin: 0;
  padding: 0;
}

h2,h4 {
  font-family: Light;
  color:#1492e6;
}

.manhole_title {
}

.manhole_info {
    font-family:Light;
    color:#1492e6;
}

.manhole_info:hover {
    font-family:Light;
    color:cyan;
}

.info_card {
  float:left;
  margin: 2.4rem;
  margin-left: 1rem;
  height:100px;
  border-radius: 5px;
  width:250px;
  box-shadow: 0px 0px 10px #CED0DB;
  padding: 10px;
  animation: fadeIn 1s ease-in-out 0s forwards;
  text-align: center;
}

.info_card h3{
  font-family:  Light;
  color:#1492e6;
  text-align: center;
}

.info_card h2{
  font-family: Extrabold;
  color:#1492e6;
  font-size: 50px;
  float: right;
  text-align: center;
}

.rcard {
  float: left;
  margin: 20px;
  opacity: 0;
  animation: fadeIn 1s ease-in-out 0s forwards;
}

h2 {
  text-align: center;
  width:100%;
  opacity: 0;
  animation: fadeIn 1s ease-in-out 0s forwards;
}

#map{
      height:535px;
      width:100%;
    }

.center {
  width:200px;
  margin-left: 43%;
  display: grid;
  grid-template-columns: 25px auto 25px;
  grid-template-rows: 5px auto;
  animation: fadeIn 1s ease-in-out 0s forwards;
}

.center img{
  display: inline;
}

#left_leaf {
  grid-column-start: 1;
  grid-row-start: 1;
}

#featured {
  grid-column-start: 2;
  grid-row-start: 2;
  padding: 0;
  margin: 0;
}

#right_leaf {
  grid-column-start: 3;
  grid-row-start: 1;
}

.middle {
  display: block;
  margin: 0 auto;
  width: 100%;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
</style>
