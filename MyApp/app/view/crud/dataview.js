Ext.define('MyApp.view.crud.dataview', {
    extend: 'Ext.Container',
    xtype: 'detail',

    requires: [
        
        'Ext.dataview.plugin.ItemTip'
     
    ],

    height: 400,
    layout: 'fit',
    width: 400,

    items: [{
        xtype: 'dataview',
        scrollable: "y",
        inline: true,
        cls: 'dataview-inline',
        itemTpl: 'Name: {name}<br>Belt: {belt}<br>Special_Power: {special_power}<hr>',
        store: 'personnel',
        plugins: {
            dataviewtip: {
                align: 'tl-bl',
                maxHeight: 200,
                width: 300,
                scrollable: 'y',
                allowOver: true,
                anchor: true,
                bind: '{record}',
                cls: 'dataview-basic',
                tpl: '<strong>Name</strong><div class="info">{name}</div>' +
                    '<strong>Belt</strong><div class="info">{belt}</div>' +
                    '<strong>Special_Power</strong><div class="info">{special_power}</div>' 
            }
        }
    }]
});