import * as styledElements from "./RotatingExpandIconStyles"

const RotatingExpandIcon = ({ isExpanded, onClick }: { isExpanded: boolean; onClick: () => void }) => {
    return (
        <styledElements.Row>
            <styledElements.ExpandIcon
                className="material-icons"
                onClick={onClick}
            >
                {isExpanded ? "close" : "add"}
            </styledElements.ExpandIcon>
        </styledElements.Row>
    )
};

export default RotatingExpandIcon;