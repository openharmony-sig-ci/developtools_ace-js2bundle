{"render": "function (vm) { var _vm = vm || this; return _c('div', [_l((function () {return _vm.list}),function($item,$idx){return _c('div', {'onBubbleEvents' : {'click' : function (evt) {_vm.test($item,evt)}}} , [_c('text', {'attrs' : {'value' : function () {return ($idx) + decodeURI('.') + ($item.name)}}} )] )}),_c('div', [_l((function () {return _vm.list}),function(personItem,$idx){return _c('div', {'onBubbleEvents' : {'click' : function (evt) {_vm.test($idx,evt)}}} , [_c('text', {'attrs' : {'value' : function () {return ($idx) + decodeURI('-') + (personItem.name) + decodeURI('--') + (personItem.age)}}} )] )}),_c('image', {'attrs' : {'src' : function () {return _vm.personItem}}} )] ),_c('div', [_l((function () {return _vm.list}),function(personItem,personIndex){return _c('div', {'onBubbleEvents' : {'click' : function (evt) {_vm.test(personItem,evt)}}} , [_c('text', {'attrs' : {'value' : function () {return (personIndex) + decodeURI('.') + (personItem.name)}}} )] )}),_c('swiper', {'attrs' : {'index' : function () {return _vm.personIndex},'loop' : function () {return _vm.personItem}}} )] ),_l((function () {return _vm.list}),function(personItem,personIndex){return _c('div', {'onBubbleEvents' : {'click' : function (evt) {_vm.test(personItem,evt)}}} , [_l((function () {return _vm.menu}),function(item,index){return _c('div', [_c('text', {'attrs' : {'value' : function () {return (personItem.id) + decodeURI('--') + (item.name)}}} )] )})] )}),_l((function () {return _vm.list}),function(personItem,personIndex){return _c('div', {'onBubbleEvents' : {'click' : function (evt) {_vm.test(personItem,evt)}}} , [_l((function () {return personItem}),function(item,index){return _c('div', [_c('text', {'attrs' : {'value' : function () {return (index) + decodeURI('--') + (item.name)}}} )] )})] )}),_l((function () {return _vm.list}),function(personItem,personIndex){return _c('div', {'onBubbleEvents' : {'click' : function (evt) {_vm.test(personItem,evt)}}} , [_c('div', {'attrs' : {'value' : function () {return (personIndex) + decodeURI('.') + (personItem.name)}},'onBubbleEvents' : {'click' : personItem.click}} )] )}),_l((function () {return value.list}),function(index,value){return _c('div', {'onBubbleEvents' : {'click' : function (evt) {_vm.test(value,evt)}}} , [_c('div', {'attrs' : {'value' : function () {return value.info}},'onBubbleEvents' : {'click' : value.click}} )] )})] ) }"}