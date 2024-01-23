import imgVkLogo from './img/VK Logo 1.png'
import s from './vkButton.module.css'
// import AAA from "../../../node_modules/magic.css/dist/magic.css"

function VkBtn () {
    function targetToVk () {
        window.open( "https://vk.com/elektriks34",'_blank')
    }
    return (
        <div onClick={targetToVk} className={s.vkbtn}>
            <p >Больше наших работ в группе вк</p>
            <img className={s.logoStyle} src={imgVkLogo} alt="" />
        </div>
    )
}

export default VkBtn