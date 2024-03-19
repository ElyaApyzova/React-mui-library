import { Box, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Avatar, ListItemButton, Divider} from '@mui/material';
import MailIcon from "@mui/icons-material/Mail"


export const MuiList = () => {
    return (
        <Box sx={{ width: '400px', bgcolor: '#efefef'}}>
          <List>
            <ListItem disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <ListItemAvatar>
                    <Avatar>
                    <MailIcon />
                    </Avatar>
                    </ListItemAvatar>
                    </ListItemIcon>
                <ListItemText primary='List item 1' />
                </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem>
            <ListItemIcon>
            <ListItemAvatar>
                    <Avatar>
                    <MailIcon />
                    </Avatar>
                    </ListItemAvatar>
                    </ListItemIcon>
                <ListItemText primary='List item 2' secondary='Secondary text' />
            </ListItem>
            <Divider />
            <ListItem>
            <ListItemIcon>
            <ListItemAvatar>
                    <Avatar>
                    <MailIcon />
                    </Avatar>
                    </ListItemAvatar>
                    </ListItemIcon>
                <ListItemText primary='List item 3' />
            </ListItem>
          </List>
        </Box>
    )
}