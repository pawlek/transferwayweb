<template>
  <div class="map" ref="chartdiv" id="chartdiv">
  </div>
</template>

<script>
    import * as am4core from "@amcharts/amcharts4/core";
    import * as am4maps from "@amcharts/amcharts4/maps";

    import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
    import am4geodata_worldUltra from "@amcharts/amcharts4-geodata/worldUltra";
    import am4themes_animated from "@amcharts/amcharts4/themes/animated";

    am4core.options.autoSetClassName = true;
    am4core.useTheme(am4themes_animated);

    export default {
        name: 'SectionThird',
        mounted() {
            var map = am4core.create("chartdiv", am4maps.MapChart);
                map.geodata = am4geodata_worldUltra;
                map.projection = new am4maps.projections.Mercator();

                map.seriesContainer.draggable = false;
                map.seriesContainer.resizable = false;
                map.maxZoomLevel = 2.5;
                map.minZoomLevel = 2.5;

            var interfaceColors = new am4core.InterfaceColorSet();

            map.homeZoomLevel = 2.5;
            map.homeGeoPoint = {
                latitude: 46,
                longitude: 14
            };

            var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

            function createSeries(name, include, color, hoverColor) {
                var series = map.series.push(new am4maps.MapPolygonSeries());
                    series.name = name;
                    series.useGeodata = true;
                    series.include = include;
                    series.fill = am4core.color(color);
                    
                    series.mapPolygons.template.tooltipText = "{name}";
                    series.tooltip.getFillFromObject = false;
                    series.tooltip.background.fill = am4core.color("#fff");
                    series.tooltip.label.fill = am4core.color("#000");
                    series.mapPolygons.template.fill = am4core.color(color);

                var hover = series.mapPolygons.template.states.create("hover");
                    hover.properties.fill = am4core.color(hoverColor);

                return series;
            }

            createSeries("Standard Route", ["SI", "AT", "IT", "HR", "HU"], "#a5d4ea", "#fb9289");
            createSeries("Optional Route", ["DE", "CZ", "PL", "SK", "RS", "CH", "LU", "FR", "BE", "NL"], "#75c5a5", "#fb9289");
            createSeries("Optional Route 2", ["MC", "ES", "AD", "BY", "UA", "MD", "ME", "BA"], "#E8CCBF", "#fb9289");
            createSeries("Optional Route 3", ["PT", "LT", "LV", "EE", "AL", "BG", "GR", "XK", "MK", "RO"], "#eeeeee", "#fb9289");

            // map.legend = new am4maps.Legend();
            // map.legend.position = "right";
            // map.legend.align = "right";

            var imageSeries = map.series.push(new am4maps.MapImageSeries());
            var imageTemplate = imageSeries.mapImages.template;
                imageTemplate.tooltipText = "{title}";
                imageTemplate.nonScaling = true;

            var circle = imageSeries.mapImages.template.createChild(am4core.Circle);
                circle.radius = 8;
                circle.propertyFields.fill = "color";

            var circle2 = imageSeries.mapImages.template.createChild(am4core.Circle);
                circle2.radius = 3;
                circle2.propertyFields.fill = "color";


                circle2.events.on("inited", function(event){
                    animateBullet(event.target);
                });


            function animateBullet(circle) {
                var animation = circle.animate([{ property: "scale", from: 1, to: 5 }, { property: "opacity", from: 0.5, to: 0 }], 3000, am4core.ease.circleOut);
                    animation.events.on("animationended", function(event){
                        animateBullet(event.target.object);
                    });
            }

            var colorSet = new am4core.ColorSet();

            // var marker = imageTemplate.createChild(am4core.Sprite);
            //     marker.path = targetSVG;
            //     marker.horizontalCenter = "middle";
            //     marker.verticalCenter = "middle";
            //     marker.scale = 0.7; 
            //     marker.fill = interfaceColors.getFor("alternativeBackground");
            function createCity(name, latitude, longitude, color) {
                var city = {
                    "title": name,
                    "latitude": latitude,
                    "longitude": longitude,
                    "color": color
                }

                return city;
            }

            imageTemplate.propertyFields.latitude = "latitude";
            imageTemplate.propertyFields.longitude = "longitude";
            imageSeries.data = [
                createCity("Ljubljana", 46.0514, 14.5060, "#e61d61"),
                // AT
                createCity("Vienna Airport (VIE)", 48.1179656, 16.5608945, "#038f82"),
                createCity("Salzburg", 47.8027887, 12.98639, "#038f82"),
                // SK
                // createCity("Bratislava", 48.1356952, 16.9758329, "#038f82"),
                // CZ
                createCity("Prague", 50.0595854, 14.32554, "#038f82"),
                // DE
                createCity("Munchen Airport (MUC)", 48.3536972, 11.7729223, "#038f82"),
                createCity("Frankfurt Airport (FRA)", 50.0481601, 8.5675493, "#038f82"),
                // HU
                createCity("Budapest Airport (BUD)", 47.4384587, 19.2501071, "#038f82"),
                // IT
                createCity("Venice Airport (VCE)", 45.5040369, 12.3395396, "#038f82"),
                createCity("Milano Airport (MXP)", 45.632495, 8.7122137, "#038f82"),
                createCity("Rome Airport (FCO)", 41.7998868, 12.2440497, "#038f82"),
                // HR
                createCity("Zagreb Airport (ZAG)", 45.7396829, 16.0789894, "#038f82"),
                createCity("Pula", 44.8689975, 13.8450795, "#038f82"),
                createCity("Zadar", 44.1160002, 15.2324572, "#038f82"),
                createCity("Split", 43.5225293, 16.4532678, "#038f82"),
                // RS
                createCity("Belgrade Airport ( )", 44.8197129, 20.2912567, "#038f82"),
                // FR
                createCity("Strasbourg", 48.5690286, 7.6220099, "#038f82"),
                createCity("Paris", 48.8588377, 2.2770199, "#038f82"),
                createCity("Nice Airport ( )", 43.6631354, 7.206813, "#038f82"),
                // IS
                createCity("Barcelona", 41.3782242, 2.1631396, "#038f82"),
                createCity("Madrid", 40.419532, -3.7407388, "#038f82"),
                // AD
                createCity("Andorra la Vella", 42.5095679, 1.5116108, "#038f82"),
            ];

            // Add lines
            var lineSeries = map.series.push(new am4maps.MapLineSeries());
                lineSeries.dataFields.multiGeoLine = "multiGeoLine";
                
            var lineTemplate = lineSeries.mapLines.template;  
                lineTemplate.nonScalingStroke = true;
                lineTemplate.arrow.nonScaling = true;
                lineTemplate.arrow.width = 4;
                lineTemplate.arrow.height = 6;
                lineTemplate.stroke = interfaceColors.getFor("alternativeBackground");
                lineTemplate.fill = interfaceColors.getFor("alternativeBackground");
                lineTemplate.line.strokeOpacity = 0.4;
                lineTemplate.strokeWidth = 1;

            function createLine(city, latitude2, longitude2) {
                var routeLine = { 
                    "multiGeoLine": [
                        [   
                            {"latitude": 46.0514, "longitude": 14.5060},
                            {"latitude": latitude2, "longitude": longitude2}
                        ]
                    ]
                };

                return routeLine;
            }

            lineSeries.data = [
                createLine("Vienna Airport (VIE)", 48.1179656, 16.5608945),
                createLine("Salzburg", 47.8027887, 12.98639),
                // SK
                // createLine("Bratislava", 48.1356952, 16.9758329),
                // CZ
                createLine("Prague", 50.0595854, 14.32554),
                // DE
                createLine("Munchen Airport (MUC)", 48.3536972, 11.7729223),
                createLine("Frankfurt Airport (FRA)", 50.0481601, 8.5675493),
                // HU
                createLine("Budapest Airport (BUD)", 47.4384587, 19.2501071),
                // IT
                createLine("Venice Airport (VCE)", 45.5040369, 12.3395396),
                createLine("Milano Airport (MXP)", 45.632495, 8.7122137),
                createLine("Rome Airport (FCO)", 41.7998868, 12.2440497),
                // HR
                createLine("Zagreb Airport (ZAG)", 45.7396829, 16.0789894),
                createLine("Pula", 44.8689975, 13.8450795),
                createLine("Zadar", 44.1160002, 15.2324572),
                createLine("Split", 43.5225293, 16.4532678),
                // RS
                createLine("Belgrade Airport ( )", 44.8197129, 20.2912567),
                // FR
                createLine("Strasbourg", 48.5690286, 7.6220099),
                createLine("Paris", 48.8588377, 2.2770199),
                createLine("Nice Airport ( )", 43.6631354, 7.206813),
                // IS
                createLine("Barcelona", 41.3782242, 2.1631396),
                createLine("Madrid", 40.419532, -3.7407388),
                // AD
                createLine("Andorra la Vella", 42.5095679, 1.5116108),
            ];
            lineSeries.id = "myline";
            lineSeries.setClassName();
        },
        beforeDestroy() {
            if (this.map) {
                this.map.dispose()
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .map{
        width: 100%;
        height: 100vh;
    }
    .amcharts-Circle {
        z-index: 999;
    }
    .amcharts-myline{
        z-index: 800;
    }
</style>