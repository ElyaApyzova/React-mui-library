import { Typography } from "@mui/material";


export const MuiTypography = () => {
    return (
        <div>
            <Typography variant="h1">Hello H1</Typography>
            <Typography variant="h2">Hello H2</Typography>
            <Typography variant="h3">Hello H3</Typography>
            <Typography variant="h4" component="h1" gutterBottom>Hello H4</Typography>
            <Typography variant="h5">Hello H5</Typography>
            <Typography variant="h6">Hello H6</Typography>

            <Typography variant="subtitle1">Subtitle 1</Typography>
            <Typography variant="subtitle2">Subtitle 2</Typography>

            <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, aliquam architecto accusamus nemo aspernatur consectetur aperiam, debitis totam accusantium facilis quasi omnis iste non eum praesentium consequatur odit, excepturi eligendi.</Typography>

            <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos asperiores quae dolor error reprehenderit ullam, ab totam voluptate necessitatibus doloremque delectus eaque recusandae? Quia molestiae repudiandae et totam fuga blanditiis?</Typography>
        </div>
    )
}