import { Box, Card,  CardContent, Typography,CardActions, Button, CardMedia } from "@mui/material";


export const MuiCard = () => {
    return (
        <Box width='300px'>
         <Card>
            <CardMedia
            component='img'
            height='140'
            image="https://images.unsplash.com/photo-1708183698996-301224359c03?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="unsplash image" />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                React
                </Typography>
                <Typography variant="body2" color='text.secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In officia omnis consectetur? Asperiores, sit, reprehenderit nemo obcaecati expedita, veritatis hic officia repellat cupiditate corporis tenetur dolor veniam! Labore, distinctio pariatur.</Typography>  
            </CardContent>
            <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn more</Button>
            </CardActions>
         </Card>
        </Box>
    )
}