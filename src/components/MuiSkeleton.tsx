import { Stack, Skeleton, Box, Avatar, Typography } from "@mui/material";
import { useState, useEffect } from "react";

export const MuiSkeleton = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])
    return (
        <Stack spacing={1} width='250px'>
            {/*<Skeleton variant="text" />
            <Skeleton variant="circular" width={40} height={40} />
    <Skeleton variant="rectangular" width={250} height={125} animation='wave' />*/}

    <Box sx={{ width: '250px' }}>
     {
        loading ? (
            <Skeleton variant="rectangular" width={256} height={144} animation='wave' />
        ) : (
            <img src="https://images.unsplash.com/photo-1710898018615-7d60175a3dc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D" alt="skeleton" width={256} height={144} /> 
        )
     }

     <Stack direction='row' spacing={1} sx={{ width: '100%', marginTop: '12px' }}>
      {
        loading ? (
            <Skeleton variant="circular" width={40} height={40} animation='wave' />
        ) : (
            <Avatar>V</Avatar>
        )
      }
      <Stack sx={{ width: '80%' }}>
        {
            loading ? (
                <>
                 <Typography variant="body1">
                    <Skeleton variant="text" width='100%' animation='wave' />
                 </Typography>
                 <Typography variant="body2">
                    <Skeleton variant="text" width='100%' animation='wave' />
                 </Typography>
                </>
            ) : (
                <>
                <Typography variant="body1">React MUI Tutorial</Typography>
                </>
            )
        }
      </Stack>
     </Stack>
    </Box>
        </Stack>
    )
}