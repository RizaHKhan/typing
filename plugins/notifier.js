export default ({ app, store }, inject) => {
  inject('notifier', {
    showMessage({ message = '', color = '' }) {
      store.commit('ui/ADD_SNACKBAR_MESSAGE', { message, color })
    },
  })
}
