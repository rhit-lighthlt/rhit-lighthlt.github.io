export default function Card(props){
    return (
        <div className="container w-auto p-10 md:p-3 shadow-lg m-3">
            <img className="rounded pb-3" src="{props.href}" alt="">
            </img>
            <h1 className="mb-2 max-w-full text-xl  text-center">
                {props.title}
            </h1>
            <hr></hr>
            <p className="mt-2">
                {props.desc}
            </p>
        </div>
    )
}