export default function Nav(props){
    return (
        <div className="flex flex-col items-center sm:flex-row justify-end sm:p-2 w-full">
            <a href="#About" className="mr-3 text-lg py-2 sm:px-4 hover:underline">About</a>
            <a href="#Projects" className="mr-3 text-lg py-2 sm:px-4 hover:underline">Projects</a>
            <a href="#Resume" className="mr-3 text-lg py-2 sm:px-4 hover:underline">Resume</a>
        </div>
    )
}