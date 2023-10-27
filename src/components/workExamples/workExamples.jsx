// import Text from "@mui/material/Typography"
import style from "./workExamples.module.css"
import turnOnImg from "./img/switch_pic 1.png"

function WorkExamples () {
    return(
    <div className={style.WorkExamplesBlock}>
    <img src={turnOnImg} style={{marginLeft: "1150px", marginTop: "-50px"}} alt="" />
    <h3>
    Наши работы
    </h3>
    </div>
    )
}
export default WorkExamples;