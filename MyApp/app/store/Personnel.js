Ext.define('MyApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',
    storeId: 'personnel',
    // autoLoad: true,
   fields: [
       'id','name','belt', 'special_power','created_at','updetd_at'
   ],
    proxy: {
        type: 'jsonp',
        api: {
            read: "http://localhost/MyApp_php/readSport.php"
        },  
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
