


const Navbar = ({handleToggleSidebar}) => {

    return (<>
        <div id="show-list-button-area">
            <button id="list-button" onClick = {handleToggleSidebar}>&#9776;
            </button>
        </div>
        <div id="title-area">
            <h1 id="lotion-title">Lotion</h1>
            <p id = "lotion-description">Like Notion, but worse.</p>
        </div>
        <div id="title-area-filling">
        </div>
    </>
    );
}
 
export default Navbar;