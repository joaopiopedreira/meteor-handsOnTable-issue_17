/**
 * Created by joaopedreira on 15/02/15.
 */

Template.dataManager.onRendered(function(){

  console.log('rendering from onRendered');

  var meteorData = DumbLists;

  var container = document.getElementById('data-manager-content');

  //var headerRenderer = function (instance, td, row, col, prop, value, cellProperties) {
  //    Handsontable.renderers.TextRenderer.apply(this, arguments);
  //    td.style.fontWeight = 'bold';
  //    td.style.textAlign = 'center';
  //};

  var hot = new Handsontable(container, {
    readOnly:false,
    //formulas:true,
    data: meteorData,
    height: 396,
    minSpareRows: 1,
    //manualColumnResize: true,
    colHeaders: [
      'Customer',
      'Document No.',
      'Date',
      'Phone',
      'Address',
      'Postal Code',
      'Vehicle',
      'Closed',
      'Updated'],
    rowHeaders:true,
    autoWrapRow: true,
    //colWidths: [200, 85, 70, 70, 70, 70, 70, 70],
    contextMenu: {
      items: {
        "row_above": {
          disabled: function () {
            // if first row, disable this option
            return hot.getSelected()[0] === 0;
          }
        },
        "row_below": {},
        "hsep1": "---------",
        "remove_row": {},
        "undo":{},
        "redo":{},
        "alignment":{}
      }
    },
    beforeRemoveRow: function(){return confirm("Are you sure you want to remove this row?")},
    columns: [
      {data: 'customer'},
      {data: 'docNo'},
      {data: 'date',type:'date',dateFormat: 'YYYY-MM-DD'},
      {data: 'contactPhone'},
      {data: 'address'},
      {data: 'postCode'},
      {data: 'name',
        type: 'dropdown',
        source: _.uniq(_.map(DumbLists,function(it){return it.name}))
      },
      {data: 'closed',type:'checkbox',readOnly:true},
      {data: 'confirmClose',type:'checkbox',readOnly:true}
    ]
  });

});


Template.dataManager.helpers({

});

Template.dataManager.events({
  'click .btn-primary':function(){
    "use strict";
    console.log('clicked button');
    window.history.go(-1);
  }
});