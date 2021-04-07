import {default as Card} from './Card'

export default function Projects(props){
    return (
        <section id="Projects" className="container mx-auto mb-5">
            <h1 className="text-4xl text-center my-5">Projects</h1>
            <hr></hr>
            <div className="flex flex-col md:flex-row mt-2">
                <Card title="Internship Manager" desc="After My Highschool rebuilt their internship department they needed an internship management system and hired me to build them one. I built it using the web library Django using my skills in python development" href="https://static.djangoproject.com/img/logo-django.42234b631760.svg"/>
                <Card title="Scheme Interpreter" desc="For my Programming Language Concepts final I had to build my own Scheme interpreter using the scheme programming language."/>
                {/* <Card title="" desc="" href=""/> */}
            </div>
        </section>
    )
}