import Menu from './Menu'
export default {
  name: 'Navbar',
  components: {
    Menu,
  },
  props: {},

  template: /*html*/ `
  <nav class="navbar navbar-expand-lg border-bottom border-secondary ">
    <Menu/>
  </nav>
  `,
}
