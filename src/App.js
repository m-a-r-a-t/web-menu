import Header from './components/Header'
import Menu from './components/Menu'
import Content from './components/Content'
import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: {
    Header,
    Menu,
    Content,
    Navbar,
  },

  template: /*html*/ `
    <div class=".container " style="height: 100vh;">
        <Header v-bind:age="5"/>
        <Navbar/>
        <div class=".container " style="max-height: calc(100vh - 232px);height: 100%;">
            <div class=" d-flex flex-row" style="max-height: calc(100vh - 232px);height: 100%;">
                <Content />
            </div>
        </div>
    </div>
    `,
}
