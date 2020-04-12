/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    
    onAddClick: function (sender, record) {

        var mainGrid = this.getView();
        var mainStore = mainGrid.getStore();
        
        //adding dummy sport
        var mainModel = Ext.create('MyApp.model.Base');
        mainModel.set("id", 0);
        mainModel.set("name", "New Sport");
        mainModel.set("belt", "");
        mainModel.set("special_power", "");
        mainModel.set("created_at", "");
        mainModel.set("updated_at", "");

        mainStore.insert(0,mainModel);
    },
    onLoadClick: function (sender, record) {
        var mainStore = this.getView().getStore();
        mainStore.load();
    },
 
    onRemoveClick: function (sender, record) {
        var mainGrid = this.getView();
        var mainStore = mainGrid.getStore();

        //delete selected rows if selModel is checkboxmodel
        var selectedRows = mainGrid.getSelectionModel().getSelection();

        mainStore.remove(selectedRows);
    },

    onSelectionChange: function (sender, record, isSelected) {
        var removeBtn = this.lookupReference('btnRemoveSport');
        if(record.length)
            removeBtn.setDisabled(false);
        else
            removeBtn.setDisabled(true);
    },





    // onItemSelected: function (sender, record) {
    //     Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    // },

    // onConfirm: function (choice) {
    //     if (choice === 'yes') {
    //         //
    //     }
    // },
    onReadClicked: function(){
     
        Ext.getStore('personnel').load();
    }
});
