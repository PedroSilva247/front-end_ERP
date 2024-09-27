import AccountContainer from "../accountContainer/AccountContainer"
import './navigation.css'

function Navigation({isLoggedIn}) {
    return (
        <>
            <nav className="navigation">
                <h1 className="logo">Brand Logo</h1>
                
                <AccountContainer isLoggedIn={isLoggedIn}/>
                    
                
            </nav>
            
        </>
    )
}

export default Navigation