import image from '../../public/i.png'

console.log(image)

export default {
    name: 'ContentPage',
    data() {
        return {
            imgs_count: 1,
            items: [{type: 'text', text: 'Hellow wolrd !'}, {type: 'img', path: image, imgNumber: 1},{type: 'text', text: 'Hellow wolrd !'}, {type: 'img', path: image, imgNumber: 2 ,text:'Моё фото'}]
        }
    },
    methods:{
        add_paragraphs(text){
            let finished_html = '<p>' + text
            finished_html = finished_html.replaceAll(/\n/g,'</p><p>')
            return finished_html.slice(0,finished_html.length-3)
        }
    },
    props:{
        title:{
            default:''
        },
        content:{
            title:'',
            data:[]
        },
    },
    template: `
    <div class="pl-5 pr-5  d-flex flex-column align-items-center" style="height: 100%; overflow: auto;line-height: 1.5;text-indent: 1.5em;">
        <h3 class="text-center p-1">{{content.title}}</h3>
        <div style="width: 1000px">
            <template v-for="item in content.data">
                <div class="text-align-justify " style=" word-break: normal;text-align: start;"   v-if="item.type == 'text'" v-html="add_paragraphs(item.text)"></div>
                <div class="d-flex flex-column align-items-center" v-else>
                    <img :src="item.path">
                    <div style="font-style: italic">Рисунок {{item.imgNumber}} - {{item.text}}</div>
               </div>
            </template>
       </div>
    </div>
    `

}