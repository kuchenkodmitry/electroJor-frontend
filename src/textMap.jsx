let testArray = [
    <div>pidor</div>,
    <div>2</div>,
    <div>pidor</div>,
    <div>3</div>,
    <div>pidor</div>,
    <div>2</div>,
    <div>pidor</div>,
    <div>2</div>,
    <div>pidor</div>,
    <div>2</div>,
    <div>pidor</div>,
    <div>2</div>,
    <div>pidor</div>,
    <div>2</div>,
]



function TestMap () {

    let ObjectMap = [];

function returnArrays () {
    let namesObj = 'cardList'
    for (let i = 0 , count = 0; i <= testArray.length -1; i++, count++){
        
        if (count >= 2) {
            count -= 2;
            namesObj = namesObj + i
        }
        if (count === 0){
            ObjectMap[namesObj] = []
        }
        ObjectMap[namesObj] = [...ObjectMap[namesObj], testArray[i]]
    }
    return (ObjectMap)
}
returnArrays()

console.log(ObjectMap['cardList']);
    return (
        <div>
            {}
        </div>
    )
}

export default TestMap