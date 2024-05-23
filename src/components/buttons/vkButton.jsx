import imgVkLogo from './img/VK Logo 1.png'
import s from './vkButton.module.css'

function VkBtn () {
    function targetToVk () {
        window.open( "https://vk.com/elektriks34",'_blank')
    }
    return (
        <div onClick={targetToVk} className={s.vkbtn}>
            <p style={{
                margin: 0,
                fontFamily: "SourceCodePro-Regular",
                fontSize: '18px'
            }} >Больше наших работ в группе</p>
            <img className={s.logoStyle} src={imgVkLogo} alt="" />
        </div>
    )
}

export default VkBtn