import Particles from 'react-particles-js'
import particleConfig from '../config/particles'

export default function Header(props) {
    return (
        <header>
            <Particles width="100vw" height="100vh" params={particleConfig}/>
        </header>
    )
}