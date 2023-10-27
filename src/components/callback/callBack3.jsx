import ElectricWorkerImg from "./img/ElectricWorker.png"
import Text from "@mui/material/Typography"
import RussianFlagIco from './img/flag.png'

function CallBackBottom () {
    return(
    <div>
        <img src={ElectricWorkerImg} alt="" />
        <div>
            <Text>Остались вопросы? Перезвоним в течении 20 минут !</Text>
            <div>
                <Text>

                </Text>
                <div>
                <img src={RussianFlagIco} alt="" />
                <input type="text" />
                <button></button>
                </div>
                <Text></Text>
            </div>
        </div>
    </div>
    )
}

export default CallBackBottom;