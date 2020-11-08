export default function ({store, redirect}) {
  if (!store.getters.hasCode) {
    redirect('/?message=code')
  }
}
