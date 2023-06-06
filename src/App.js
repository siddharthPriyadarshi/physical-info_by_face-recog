import ImageUpload from "./components/ImageUpload";
import Header from "./components/Header";

const App = () =>{

    return (
        <>
            <Header />
            <div className = "main-container" style = {{border: "2px solid red", width: "100vw", display: "flex", justifyContent: "center", alignItems:"center"}}>
                <div className = "left-container" style = {{width: "50%",  border: "2px solid green"}}>
                    <ImageUpload />
                </div>
                <div className = "right-container" style = {{width: "50%", border: "2px solid black"}}></div>
            </div>
        </>
    )
}

export default App;