import Particles from 'react-particles-js'
import particleConfig from '../config/particles'

export default function Header(props) {
    return (
        <header className="bg-gray-900 w-full relative">
            <Particles width="100%" height="60vh" params={particleConfig}/>
            <div className="transform absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h1 className="underline text-5xl text-white">Luke Lighthart</h1>
                <p className="text-white mt-4 text-center text-xl">Designer, Developer, Artist</p>
            </div>
        </header>
    )
}