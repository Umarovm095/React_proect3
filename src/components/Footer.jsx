import FooterLogo from "./FooterLogo"
import Copyright from "./Copyright"
import FooterMenu from "./FooterMenu"

function Footer() {
    return (
        <div className="footer">
            <FooterLogo/>
            <Copyright/>
            <FooterMenu/>
        </div>
    )
}

export default Footer