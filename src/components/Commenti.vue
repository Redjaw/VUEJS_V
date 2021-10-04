<template>
    <Timeline :value="commenti" align="alternate" class="customized-timeline">
        <template #content="slotProps">
            <Card>
                <template #title>
                    {{slotProps.item.author}}
                </template>
                <template #subtitle>
                    {{slotProps.item.date}}
                </template>
                <template #content>
                    <p>{{slotProps.item.comment}}</p>
                </template>
            </Card>
        </template>
    </Timeline>
</template>

<script>
import Timeline from 'primevue/timeline'
import Card from 'primevue/card'

export default ({
  name: "commenti",
  props: ['commenti'],
  components: {Timeline,Card},
  data(){
	return {
		pizza: ""
	}
  },
});
</script>
