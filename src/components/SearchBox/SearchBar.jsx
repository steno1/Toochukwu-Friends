const SearchBox=({SearchField, searching})=>{
    return (
    <div className="pa2 ">
<input className="pa2 ba ba--green bg-lightest-blue" 
type="search" placeholder="Search Robot"
    onChange={searching}
    //searching is a props passed down from App.jsx
/>
    </div>

        
    )
}
export default SearchBox;