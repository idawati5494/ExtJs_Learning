/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'MyApp.store.Personnel'
    ],

    title: 'Sport Extjs Example @idaa',
    controller: 'main',
    viewModel: { type: 'main' },

    selType: 'rowmodel',
    selModel:
    {
        mode: 'SINGLE'
    },
    viewConfig:
    {
        stripeRows: true
    },
    listeners: {
        selectionchange: 'onSelectionChange'
    },
    bind: {
        store: '{MainListStore}'
    },
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
    titleBar: {
        shadow: false,
        items: [{
            align: 'right',
            xtype: 'button',
            text: 'Export to ...',
            stretchMenu: true,
            arrow: false,
            menu: {
                defaults: {
                    handler: 'exportDocument'
                },
                indented: false,
                items: [{
                    text: 'Excel xlsx',
                    cfg: {
                        type: 'excel07',
                        ext: 'xlsx',
                        includeGroups: true,
                        includeSummary: true
                    }
                }, {
                    text: 'Excel xml',
                    cfg: {
                        type: 'excel03',
                        ext: 'xml',
                        includeGroups: true,
                        includeSummary: true
                    }
                }, {
                    text: 'CSV',
                    cfg: {
                        type: 'csv'
                    }
                }, {
                    text: 'TSV',
                    cfg: {
                        type: 'tsv',
                        ext: 'csv'
                    }
                }, {
                    text: 'HTML',
                    cfg: {
                        type: 'html',
                        includeGroups: true,
                        includeSummary: true
                    }
                }]
            }
        }]
    },



    // initComponent: function () 
    // {
    //     Ext.apply(this,
    //     {
    //         plugins: [Ext.create('Ext.grid.plugin.RowEditing',
    //         {
    //             clicksToEdit: 2
    //         })],
            columns: [
                { text: 'ID', dataIndex: 'id', hidden: false, width: 50 },
                { text: 'Name', dataIndex: 'name', width: 200,
                 editor:
                    {
                        allowBlank: true
                    }
                }, 
                { text: 'Belt', dataIndex: 'belt', width: 80,
                 editor:
                    {
                        allowBlank: true
                    } 
                },
                { text: 'Special Power', dataIndex: 'special_power', width: 150, editor:
                    {
                        allowBlank: true
                    }
                },
                {
                    xtype: 'checkcolumn',
                    headerCheckbox: true,
                    dataIndex: 'verified',
                    text: 'Verified'
                },
                { text: 'Created_At', dataIndex: 'created_at', width: 150 },
                { text: 'Updated_At', dataIndex: 'updated_at', width: 150 }
            ],
    //         tbar: [{
    //             text: 'Add Sport',
    //             iconCls: 'fa-plus',
    //             handler: 'onAddClick'
    //         }, {
    //             itemId: 'removeSport',
    //             text: 'Remove Student',
    //             iconCls: 'fa-times',
    //             reference: 'btnRemoveSport',
    //             handler: 'onRemoveClick',
    //             disabled: true
    //         }]
    //     })
    // },
    listeners: {
        select: 'onItemSelected'
    }
});
