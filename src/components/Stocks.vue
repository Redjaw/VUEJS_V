<template>
	<canvas id="myChart"></canvas>
</template>

<script>
import { Chart, registerables } from 'chart.js'

export default ({
  name: "stocks",
  data() {	
	return{
		myChart: {},
		acme: [],
		global: []
	}
  },
  mounted() {
	Chart.register(...registerables)
	this.axios.get('stocks')
		.then(response => {
			this.acme = response.data.acme
			this.global = response.data.global
			this.createChart()
		})
		.catch(error=>console.log(error))
	
  },
  methods: {
	returnDays(daysNumber){
		let days = [...Array(daysNumber)]
		days = days.map((item,index)=> {
			return 'Giorno '+ (index+1)
		})
		return days
	},
	createChart(){
		var ctx = document.getElementById('myChart').getContext('2d');
		this.myChart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: this.returnDays(this.acme.length),
				datasets: [{
					label: 'ACME Inc.',
					backgroundColor: 'rgba(255, 99, 132, 0.2)',
					borderColor: 'rgba(255, 99, 132, 1)',
					data: this.acme,
					borderWidth: 1
				},{
					label: 'Global Inc.',
					backgroundColor: 'rgba(54, 162, 235, 0.2)',
					borderColor: 'rgba(54, 162, 235, 1)',
					data: this.global,
					borderWidth: 1
				}]
			},

		});
	}
  }
});
</script>
