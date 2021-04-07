export default function About(props) {
    return (
        <section id="About" className="container mx-auto w-full">
            <h1 className="text-4xl text-center my-5">About</h1>
            <hr></hr>
            <div className="p-4 flex flex-row-reverse">
                <img className="rounded sm:max-w-xs ml-6" src="./img/1.jpg" alt=""></img>
                <p className="text-lg">Hello and welcome to my website. My name is Luke Lighthart and I am programmer. I am 19 years old and currently a sophmore student at Rose-Hulman Institute of Technology with a major in International Computer Science. I have experience in multiple different disciplines and many different programming languages and paradigms. I have an interest in cybersecurity and digital forensics. I am looking for new opportunities to expand my horizons and challange my knowledge and abilites. If you are interested in myself or my work you can download a copy of my resume <a id="Resume" className="underline" href="./static/resume.pdf" download>here</a>.</p>
            </div>
        </section>
    )
}