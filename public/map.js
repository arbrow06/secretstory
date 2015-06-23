var map = L.map('map').setView([40.911, -73.837], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; Test',
    maxZoom: 18,
    id: 'andrewbrown.m8aobonh',
    accessToken: 'pk.eyJ1IjoiYW5kcmV3YnJvd24iLCJhIjoiNzc2OGRjZTI4YTI0NDViNTAyNDgxNWVhZTM4N2JiNWMifQ.nqxvTAuR8iVPjFK72Qe22A'
}).addTo(map);

map._initPathRoot()

d3.json("point.json", function(col) {
    color = "#3333FF";
    col.features.forEach(function(d){
        d.LatLng = new L.LatLng(d.geometry.coordinates[0], d.geometry.coordinates[1]);
        L.circle([d.LatLng.lat, d.LatLng.lng], 500, {stroke: false,
            fillOpacity: 0.6,
            fillColor: (color)
            }).addTo(map); //radius in meters
        console.log(col.features.length);
    });
})