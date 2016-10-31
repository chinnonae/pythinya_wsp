var store = null;
const service = {
	show: function() {
    console.log(getAction());
    store.dispatch(getAction().showLoader());
	},
	hide: function() {
    store.dispatch(getAction().hideLoader());
	},
	subscribe: function(s) {
    store = s;
	}
};

function getAction() {
  return cc.get('redux.actions');
}
cc.register('services.waitme', service);
