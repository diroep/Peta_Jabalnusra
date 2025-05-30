var wms_layers = [];

var format_Indonesia_0 = new ol.format.GeoJSON();
var features_Indonesia_0 = format_Indonesia_0.readFeatures(json_Indonesia_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Indonesia_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Indonesia_0.addFeatures(features_Indonesia_0);
var lyr_Indonesia_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Indonesia_0, 
                style: style_Indonesia_0,
                popuplayertitle: 'Indonesia',
                interactive: false,
                title: '<img src="styles/legend/Indonesia_0.png" /> Indonesia'
            });
var format_Ocean_Indonesia_1 = new ol.format.GeoJSON();
var features_Ocean_Indonesia_1 = format_Ocean_Indonesia_1.readFeatures(json_Ocean_Indonesia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ocean_Indonesia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ocean_Indonesia_1.addFeatures(features_Ocean_Indonesia_1);
var lyr_Ocean_Indonesia_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ocean_Indonesia_1, 
                style: style_Ocean_Indonesia_1,
                popuplayertitle: 'Ocean_Indonesia',
                interactive: false,
                title: '<img src="styles/legend/Ocean_Indonesia_1.png" /> Ocean_Indonesia'
            });
var format_Jabalnusra_2 = new ol.format.GeoJSON();
var features_Jabalnusra_2 = format_Jabalnusra_2.readFeatures(json_Jabalnusra_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jabalnusra_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jabalnusra_2.addFeatures(features_Jabalnusra_2);
var lyr_Jabalnusra_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jabalnusra_2, 
                style: style_Jabalnusra_2,
                popuplayertitle: 'Jabalnusra',
                interactive: false,
                title: '<img src="styles/legend/Jabalnusra_2.png" /> Jabalnusra'
            });
var format_Bali_3 = new ol.format.GeoJSON();
var features_Bali_3 = format_Bali_3.readFeatures(json_Bali_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bali_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bali_3.addFeatures(features_Bali_3);
var lyr_Bali_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bali_3, 
                style: style_Bali_3,
                popuplayertitle: 'Bali',
                interactive: true,
                title: '<img src="styles/legend/Bali_3.png" /> Bali'
            });
var format_PulauJawa_4 = new ol.format.GeoJSON();
var features_PulauJawa_4 = format_PulauJawa_4.readFeatures(json_PulauJawa_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PulauJawa_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PulauJawa_4.addFeatures(features_PulauJawa_4);
var lyr_PulauJawa_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PulauJawa_4, 
                style: style_PulauJawa_4,
                popuplayertitle: 'Pulau Jawa',
                interactive: true,
                title: '<img src="styles/legend/PulauJawa_4.png" /> Pulau Jawa'
            });
var format_Nusatenggara_5 = new ol.format.GeoJSON();
var features_Nusatenggara_5 = format_Nusatenggara_5.readFeatures(json_Nusatenggara_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nusatenggara_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nusatenggara_5.addFeatures(features_Nusatenggara_5);
var lyr_Nusatenggara_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nusatenggara_5, 
                style: style_Nusatenggara_5,
                popuplayertitle: 'Nusatenggara',
                interactive: true,
                title: '<img src="styles/legend/Nusatenggara_5.png" /> Nusatenggara'
            });
var format_Other_Countries_6 = new ol.format.GeoJSON();
var features_Other_Countries_6 = format_Other_Countries_6.readFeatures(json_Other_Countries_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Other_Countries_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Other_Countries_6.addFeatures(features_Other_Countries_6);
var lyr_Other_Countries_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Other_Countries_6, 
                style: style_Other_Countries_6,
                popuplayertitle: 'Other_Countries',
                interactive: false,
                title: '<img src="styles/legend/Other_Countries_6.png" /> Other_Countries'
            });

lyr_Indonesia_0.setVisible(true);lyr_Ocean_Indonesia_1.setVisible(true);lyr_Jabalnusra_2.setVisible(true);lyr_Bali_3.setVisible(true);lyr_PulauJawa_4.setVisible(true);lyr_Nusatenggara_5.setVisible(true);lyr_Other_Countries_6.setVisible(true);
var layersList = [lyr_Indonesia_0,lyr_Ocean_Indonesia_1,lyr_Jabalnusra_2,lyr_Bali_3,lyr_PulauJawa_4,lyr_Nusatenggara_5,lyr_Other_Countries_6];
lyr_Indonesia_0.set('fieldAliases', {'Raster': 'Raster', });
lyr_Ocean_Indonesia_1.set('fieldAliases', {'FID_Admin0': 'FID_Admin0', 'Raster': 'Raster', 'FID_Ocean': 'FID_Ocean', 'Id': 'Id', });
lyr_Jabalnusra_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PROV': 'PROV', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Bali_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PROV': 'PROV', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PulauJawa_4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'Raster': 'Raster', 'Shape_Leng': 'Shape_Leng', 'Wilayah_Ke': 'Wilayah_Ke', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'Pulau': 'Pulau', });
lyr_Nusatenggara_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PROV': 'PROV', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Other_Countries_6.set('fieldAliases', {'FID_Admin0': 'FID_Admin0', 'Raster': 'Raster', 'FID_all_to': 'FID_all_to', 'Dissolv': 'Dissolv', });
lyr_Indonesia_0.set('fieldImages', {'Raster': 'Range', });
lyr_Ocean_Indonesia_1.set('fieldImages', {'FID_Admin0': 'Range', 'Raster': 'Range', 'FID_Ocean': 'Range', 'Id': 'Range', });
lyr_Jabalnusra_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'PROV': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Bali_3.set('fieldImages', {'OBJECTID': 'Hidden', 'PROV': 'TextEdit', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_PulauJawa_4.set('fieldImages', {'OBJECTID_1': 'Hidden', 'OBJECTID': 'Hidden', 'Raster': 'Hidden', 'Shape_Leng': 'Hidden', 'Wilayah_Ke': 'Hidden', 'Shape_Le_1': 'Hidden', 'Shape_Area': 'Hidden', 'Pulau': 'TextEdit', });
lyr_Nusatenggara_5.set('fieldImages', {'OBJECTID': 'Hidden', 'PROV': 'TextEdit', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_Other_Countries_6.set('fieldImages', {'FID_Admin0': 'Range', 'Raster': 'Range', 'FID_all_to': 'Range', 'Dissolv': 'Range', });
lyr_Indonesia_0.set('fieldLabels', {'Raster': 'no label', });
lyr_Ocean_Indonesia_1.set('fieldLabels', {'FID_Admin0': 'no label', 'Raster': 'no label', 'FID_Ocean': 'no label', 'Id': 'no label', });
lyr_Jabalnusra_2.set('fieldLabels', {'OBJECTID': 'no label', 'PROV': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Bali_3.set('fieldLabels', {'PROV': 'no label', });
lyr_PulauJawa_4.set('fieldLabels', {'Pulau': 'no label', });
lyr_Nusatenggara_5.set('fieldLabels', {'PROV': 'no label', });
lyr_Other_Countries_6.set('fieldLabels', {'FID_Admin0': 'no label', 'Raster': 'no label', 'FID_all_to': 'no label', 'Dissolv': 'no label', });
lyr_Other_Countries_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});