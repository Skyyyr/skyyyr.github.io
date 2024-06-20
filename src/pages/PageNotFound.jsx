import { useNavigate } from "react-router-dom";

function PageNotFound() {
    const nav = useNavigate()

    function takeMeHome() {
        nav('/home')
    }

    return (
        <div className={'row lost'}>
            <h1>
                This is not the page you're looking for...
            </h1>
            <button onClick={takeMeHome} className={'lost'}>
                Take me back
            </button>
        </div>
    )
}

export default PageNotFound