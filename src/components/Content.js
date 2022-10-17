import ContentPage from "./ContentPage";
import file_managers from "../content_pages/file_managers/file_managers";
import dolphin from "../content_pages/paragon_backup/paragon_backup";
import pages from '../content_pages/index'
import Present from "./Present";
console.log(pages)
export default {
    name: 'Content',
    components: {ContentPage,Present},
    data() {
        return {
            pages,
        }
    },
    template: `
    <div   style="padding-right:0;word-break:break-all;width: 100%">
            <template v-for="page in pages">
                    <ContentPage  :content="{...page.content}" v-if="$route.fullPath == '/' + page.link"/>
            </template>
            
            <Present v-if="$route.fullPath == '/present_file_managers'"/>
            
            
    </div>
    `
}