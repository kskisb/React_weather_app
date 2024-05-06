// Results.tsx

type ResultsProps = {
    results: {
        country: string
        cityName: string
        temperature: string
        conditionText: string
        icon: string
    }
}

const Results = (props: ResultsProps) => {
    return (
        <>
            {props.results.country &&
                <>
                    <div>{props.results.country}</div>
                    <div>{props.results.cityName}</div>
                    <div>{props.results.temperature} <span>℃</span></div>
                    <div>
                        <img src={props.results.icon} alt="icon"/>
                        <span>{props.results.conditionText}</span>
                    </div>
                </>
            }
        </>
    )
}

export default Results