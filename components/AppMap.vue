<template>
  <div>
    <h3 class="mb-6 text-2xl font-semibold">{{ $t('map_description') }}</h3>
    <GMap
      ref="gMap"
      language="en"
      :cluster="{ options: { styles: clusterStyle } }"
      :center="{ lat: locations[0].lat, lng: locations[0].lng }"
      :options="{ fullscreenControl: false, styles: mapStyle }"
      :zoom="15"
    >
      <GMapMarker
        v-for="location in locations"
        :key="location.id"
        :position="{ lat: location.lat, lng: location.lng }"
        :options="{
          icon: location === currentLocation ? pins.selected : pins.notSelected,
        }"
        @click="currentLocation = location"
      >
        <GMapInfoWindow :options="{ maxWidth: 200 }">
          <code> lat: {{ location.lat }}, lng: {{ location.lng }} </code>
        </GMapInfoWindow>
      </GMapMarker>
      <GMapCircle :options="circleOptions" />
    </GMap>
    <h4 class="mt-6 mb-2 text-xl">Santa Elena, Colombia</h4>
    <p>{{ $t('where_description') }}</p>
  </div>
</template>

<script>
export default {
  name: 'AppMap',
  data: () => ({
    currentLocation: {},
    /* circleOptions: {
      ...
    }, */
    locations: [
      {
        lat: 6.257004,
        lng: -75.491772,
      },
      /* {
        lat: 45.815,
        lng: "15.9819"
      },
      {
        lat: "45.12",
        lng: "16.21"
      } */
    ],
    pins: {
      selected: 'data:image/png;base64,iVBORw0KGgo...',
      notSelected: 'data:image/png;base64,iVBORw0KGgo...',
    },
    // mapStyle: [...],
    clusterStyle: [
      {
        url: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png',
        width: 56,
        height: 56,
        textColor: '#fff',
      },
    ],
  }),
}
</script>
