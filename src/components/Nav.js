export default function Nav(props){
    return (
        <div className="flex flex-row justify-end pt-6 w-full">
            <a href="#" className="mr-3 text-lg py-2 px-3 rounded hover:text-white hover:bg-purple-600">About</a>
            <a href="#" className="mr-3 text-lg py-2 px-3 rounded hover:text-white hover:bg-purple-600">Projects</a>
            <a href="#" className="mr-3 text-lg py-2 px-3 rounded hover:text-white hover:bg-purple-600">Resume</a>
        </div>
    )
}