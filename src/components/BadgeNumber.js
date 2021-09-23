
const BadgeNumber = (props) => {
    const {numero} = props;
    return <>
        <span className="badge rounded-pill bg-danger">{numero}</span>
    </>
}

export default BadgeNumber;