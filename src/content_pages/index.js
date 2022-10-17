import action_backup from "./action_backup/action_backup"
import backup_tools from "./backup_tools/backup_tools"
import paragon_backup from "./paragon_backup/paragon_backup"
import file_managers from "./file_managers/file_managers"
import easeus from "./easeus/easeus"
import total_commander from "./total_commander/total_commander"
import xyplorer from "./xyplorer/xyplorer"
import free_commander from "./free_commander/free_commander"
import means_of_restirction from "./means_of_restictions/means_of_restirction"
import winguard from "./winguard/winguard"
import winlock from "./winlock/winlock"
import deskman from "./deskman/deskman"
import choice_os from "./choice_os/choice_os"
import disk_markup from "./disk_markup/disk_markup"
import linux from "./linux/linux"
import windows from "./windows/windows"
import mac_os from "./mac_os/mac_os"
import choice_file_system from "./choice_file_system/choice_file_system"
import about_project from "./about_project/about_project";
import {reformPages} from "../utils/utils"

export default reformPages([
    {content: about_project, link: ''},
    {content: choice_os, link: 'choice_os'},
    {content: linux, link: 'linux'},
    {content: windows, link: 'windows'},
    {content: mac_os, link: 'mac_os'},
    {content: choice_file_system, link: 'choice_file_system'},
    {content: disk_markup, link: 'disk_markup'},

    {content: backup_tools, link: 'backup_tools'},
    {content: action_backup, link: 'action_backup'},
    {content: paragon_backup, link: 'paragon_backup'},
    {content: easeus, link: 'easeus'},


    {content: means_of_restirction, link: 'means_of_restirction'},
    {content: winguard, link: 'winguard'},
    {content: winlock, link: 'winlock'},
    {content: deskman, link: 'deskman'},


    {content: file_managers, link: 'file_managers'},
    {content: total_commander, link: 'total_commander'},
    {content: xyplorer, link: 'xyplorer'},
    {content: free_commander, link: 'free_commander'},

])