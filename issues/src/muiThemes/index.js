import { withStyles } from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";

export const UserPostWrapper = withStyles({
    root: {
        border: "2px solid black",
        borderRadius: "5px",
        width: "95%",
        minWidth: "700px",
        height: "125px",
        padding: "3% 1%",
        margin: "2% 0",
        marginRight: "1%",
        display: "flex"
    }
})(Card)

export const PostsContainer = withStyles({
    root: {
        border: "1px solid black",
        display: "flex",
        flexFlow: "column wrap",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "2%",
        backgroundColor: "#4D546191"
    }
})(Box)