var store = null;
const service = {
	show: function(message,callback) {
    store.dispatch(getAction().toggleSnackBar(true, message, callback));
	},
	hide: function() {
    store.dispatch(getAction().toggleSnackBar(false,""));
	},
	subscribe: function(s) {
    store = s;
	}
};

function getAction() {
  return cc.get('redux.actions');
}
cc.register('services.snackbar', service);
