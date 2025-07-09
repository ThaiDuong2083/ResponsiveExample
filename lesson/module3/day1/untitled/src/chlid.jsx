const Child = ({action}) => {
    const handleClick = () => {
        action("update check")
    }
    return (
        <>
            <button className={"btn btn-primary"} onClick={handleClick}>Update</button>
        </>
    )
}

export default Child;