import Card from "./Card";


const CardList=({RobotArrays})=>{
    

    return (
        <>
{RobotArrays.map((user, i)=>{
    return(
<Card name={RobotArrays[i].name}
 key={i} id={RobotArrays[i].id}
  email={RobotArrays[i].email}
  
  phone={RobotArrays[i].phone}
  
  />
  
    )
})}
        </>

    )
}
export default CardList;