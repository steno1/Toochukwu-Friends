import Card from "./Card";


const CardList=({RobotArray})=>{
    

    return (
        <>
{RobotArray.map((user, i)=>{
    return(
<Card name={RobotArray[i].name}
 key={i} id={RobotArray[i].id}
  email={RobotArray[i].email}/>
    )
})}
        </>

    )
}
export default CardList;