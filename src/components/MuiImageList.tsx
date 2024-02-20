import { Stack, ImageList, ImageListItem, Box, ImageListItemBar } from "@mui/material";

export const MuiImageList = () => {
    return (
        <Stack spacing={4}>
         <ImageList
            sx={{ width: 500, height: 450 }}
            cols={3}
            rowHeight={164}>
                {
                    itemData.map(item => (
                        <ImageListItem key={item.img}>
                           <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading="lazy" />
                           <ImageListItemBar title={item.title} /> 
                        </ImageListItem>
                    ))
                }
         </ImageList>
         <ImageList
         variant="woven"
            sx={{ width: 500, height: 450 }}
            cols={3}
            gap={8}>
                {
                    itemData2.map(item => (
                        <ImageListItem key={item.img}>
                           <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading="lazy" /> 
                        </ImageListItem>
                    ))
                }
         </ImageList>
         <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
         <ImageList
         variant="masonry"
            cols={3}
            gap={8}>
                {
                    itemData3.map(item => (
                        <ImageListItem key={item.img}>
                           <img src={`${item.img}?w=248&fit=crop&auto=format&dpr=2`} alt={item.title} loading="lazy" /> 
                        </ImageListItem>
                    ))
                }
         </ImageList>
         </Box>
        </Stack>
    )
}

const itemData = [
    {
    img:'https://images.unsplash.com/photo-1707343848655-a196bfe88861?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Breakfast'
},
{
    img:'https://images.unsplash.com/photo-1707343848655-a196bfe88861?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Breakfast'
},
{
    img:'https://images.unsplash.com/photo-1707343848655-a196bfe88861?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Breakfast'
},
{
    img:'https://images.unsplash.com/photo-1707343848655-a196bfe88861?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Breakfast'
},
{
    img:'https://images.unsplash.com/photo-1707343848655-a196bfe88861?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Breakfast'
},
{
    img:'https://images.unsplash.com/photo-1707343848655-a196bfe88861?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Breakfast'
},
]

const itemData2 = [
    {
    img:'https://images.unsplash.com/photo-1707343848655-a196bfe88861?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Breakfast'
},
{
    img:'https://images.unsplash.com/photo-1707343848655-a196bfe88861?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Breakfast'
},
{
    img:'https://images.unsplash.com/photo-1707343848655-a196bfe88861?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Breakfast'
},
{
    img:'https://images.unsplash.com/photo-1707343848655-a196bfe88861?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Breakfast'
},
{
    img:'https://images.unsplash.com/photo-1707343848655-a196bfe88861?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Breakfast'
},
{
    img:'https://images.unsplash.com/photo-1707343848655-a196bfe88861?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Breakfast'
},
]

const itemData3 = [
    {
    img:'https://images.unsplash.com/photo-1707343848655-a196bfe88861?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Breakfast'
},
{
    img:'https://images.unsplash.com/photo-1707343848655-a196bfe88861?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Breakfast'
},
{
    img:'https://images.unsplash.com/photo-1707343848655-a196bfe88861?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Breakfast'
},
{
    img:'https://images.unsplash.com/photo-1707343848655-a196bfe88861?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Breakfast'
},
{
    img:'https://images.unsplash.com/photo-1707343848655-a196bfe88861?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Breakfast'
},
{
    img:'https://images.unsplash.com/photo-1707343848655-a196bfe88861?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Breakfast'
},
]