export default {
  name: 'Menu',
  data() {
    return {
      isMenuOpen: false,
      prev_link: this.$route.name,
      links: [
        {
          main_link: {
            link: '',
            name: 'О проекте',
          },
          other_links: [],
        },
        {
          main_link: {
            link: 'choice_os',
            name: 'Выбор операционной системы',
          },
          other_links: [
            { link: 'linux', name: 'Linux' },
            { link: 'mac_os', name: 'macOS' },
            { link: 'windows', name: 'Windows' },
          ],
        },
        {
          main_link: {
            link: 'choice_file_system',
            name: 'Выбор файловой системы',
          },
          other_links: [],
        },
        {
          main_link: {
            link: 'disk_markup',
            name: 'Разметка жесткого диска на разделы',
          },
          other_links: [],
        },
        {
          main_link: {
            link: 'backup_tools',
            name: 'Средства резервного копирования и восстановления данных',
          },
          other_links: [
            { link: 'action_backup', name: 'Action Backup' },
            { link: 'paragon_backup', name: 'Paragon Backup and Recovery' },
            { link: 'easeus', name: 'EaseUS Todo Backup' },
          ],
        },
        {
          main_link: {
            link: 'means_of_restirction',
            name: 'Средства ограничения доступа к вычислительной системе и её отдельным состовляющим',
          },
          other_links: [
            { link: 'winguard', name: 'WinGuard' },
            { link: 'winlock', name: 'WinLock' },
            { link: 'deskman', name: 'Deskman' },
          ],
        },
        {
          main_link: {
            link: 'file_managers',
            name: 'Файловые менеджеры',
          },
          other_links: [
            { link: 'total_commander', name: 'Total Commander' },
            { link: 'xyplorer', name: 'XYplorer' },
            { link: 'free_commander', name: 'FreeCommander' },
          ],
        },
        {
          main_link: {
            link: 'present_file_managers',
            name: 'Презентация Файловые менеджеры',
          },
          other_links: [],
        },
      ],
    }
  },
  created() {
    window.onclick = function (event) {
      if (!event.target.matches('.dropbtn')) {
        // console.log(this.isMenuOpen)

        if (this.isMenuOpen) {
          this.isMenuOpen = !this.isMenuOpen
        }
      }
    }.bind(this)
  },
  methods: {
    async changeColorAndRoute(link) {
      this.prev_link = link
      if (link === '') await this.$router.push('/')
      await this.$router.push(link)
      console.log(this.route)
    },

    changeMenuState() {
      this.isMenuOpen = !this.isMenuOpen
    },
  },
  template: /*html*/ `
        <div class="dropdown" >
            <button type="button" class="btn btn-primary dropbtn" @click="changeMenuState()" >Меню</button>
            <div class="dropdown-content" :style="{display: isMenuOpen ? 'block':'none', }">
                <nav class="nav flex-column " style="height: 100%; overflow: hidden; width: 20rem; color: #5e884d;overflow: auto">
                <ul>
                <li v-for="item in links">
                    <div class="text-wrap">
                            <div :class="{ my_active: prev_link === item.main_link.link || $route.fullPath === '/' + item.main_link.link }" @click="changeColorAndRoute(item.main_link.link)" style="cursor: pointer; "   class="p-1" >{{item.main_link.name}}</div>
                            <ul>
                                <li v-for="other_link in item.other_links">
                                    <div :class="{ my_active: prev_link === other_link.link || $route.fullPath === '/' + other_link.link}" @click="changeColorAndRoute(other_link.link)"  style="cursor: pointer  "  class="p-1">{{other_link.name}}</div>
                                </li>
                            </ul>
                    </div>
                </li>
                </ul>
            </nav>
          </div>
        </div>
       
    `,
}
