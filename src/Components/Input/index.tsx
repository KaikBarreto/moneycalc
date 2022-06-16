import "./styles.css"

type InputType = {
    placeholder: string,
    name: string,
    header: string,
    handleChange: any
}

export const Input = function({ placeholder, name, header, handleChange}: InputType): JSX.Element {


    return (
        <>
            <h4>{header}</h4>
            <input type="number" min="0" placeholder={placeholder} name={name} onChange={handleChange} />
        </>
    )
}