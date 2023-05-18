const Scroll=({children})=>{
return (
    <div style={{
        overflowY:"scroll",
        height:"100vh"
    }}>
    {children}

    </div>
)
}
export default Scroll;
/*
In React, children is a special prop that allows you
 to pass components, elements, or text as children to a component.
  It provides a way to nest content within a component.
*/