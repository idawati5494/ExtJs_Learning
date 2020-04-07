/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'MyApp.store.Personnel'
    ],

    title: 'Sport Extjs',

    // store: {
    //     type: 'personnel'
    // },

    bind: '{personnel}',
    viewModel:{
        stores:{
            personnel:{
                    type: 'personnel'
            }
        }
    },
    columns: [
       
        { text: 'Name', dataIndex: 'name', width: 200 }, 
        { text: 'Belt', dataIndex: 'belt', width: 150 },
        { text: 'Special Power', dataIndex: 'special_power', width: 200},
        { text: 'Createt_At', dataIndex: 'created_at', width: 200 },
        { text: 'Updated_At', dataIndex: 'updated_at', width: 200 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
