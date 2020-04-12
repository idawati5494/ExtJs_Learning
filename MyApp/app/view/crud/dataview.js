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
        cls: 'dataview-basic',
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
                tpl:'<table style="border-spacing:3px;border-collapse:separate">' + 
                    '<strong>Name</strong><div class="info">{name}</div>' +
                    '<strong>Belt</strong><div class="info">{belt}</div>' +
                    '<strong>Special_Power</strong><div class="info">{special_power}</div>' +
                    '<strong>Created_At</strong><div class="info">{created_at}</div>' +
                    '<strong>Updated_At</strong><div class="info">{updated_at}</div>' 
            }
        }
    }]
});