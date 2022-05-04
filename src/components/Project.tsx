export default function Project(props: any) {
    const imgs = props.data.img.map((index: string, key: number) => <img className="projectImg" key={key} src={index} alt={props.data.name + key} />)

    return (
        <div className="my-4 text-center lg:text-left">
            <h3 className="mb-2">{props.data.name}</h3>
            <p className="mb-4">{props.data.description}</p>

            <div className="grid sm:grid-cols-2 gap-4">
                {imgs}
            </div>

            <div className="flex gap-4 text-primary justify-center mt-2">
                <a target="_blank" className="underline transition-all hover:brightness-150 cursor-pointer" href={props.data.site}>View Site</a>
                ⬩
                <a target="_blank" className="underline transition-all hover:brightness-150 cursor-pointer" href={props.data.git}>View Git</a>
            </div>
        </div>
    )
}