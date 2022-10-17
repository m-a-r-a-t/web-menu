export default {
    name: 'Header',
    props: {
        age: {
            default: 1
        }
    },


    template: `
    <div class=".container d-flex flex-row align-items-center justify-content-center p-2 border-bottom border-secondary  "  >
        <div class="col d-flex flex-column p-2" style="font-style: italic; font-weight: bolder">
            <div>Учреждение: НИУ МГСУ</div>
            <div>Институт: ИЦТМС</div>
            <div>Кафедра: ИСТАС</div>
            <div>Сабитов Марат Рафаэлевич</div>
            <div>1 группа</div>
            <div>2021 г.</div>
        </div>
        <div class="col-xxl- d-flex flex-column align-items-center">
            <h3>Курсовая работа на тему:</h3>
            <h5>Разработка Web-страницы с описанием разделов системного программного обеспечения</h5>
        </div>
        <div class="col d-flex flex-column align-items-center"></div>
    </div>
    `

}