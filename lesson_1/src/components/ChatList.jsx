import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import uuid from 'react-uuid'

export default function ChatList (props) {
    return (
       <>
       <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {[props.chat].map((item) => (
        <ListItem
          key={uuid()}
          disableGutters
          secondaryAction={
            <IconButton aria-label="comment">
              <CommentIcon />
            </IconButton>   
          }
        >
          <ListItemText primary={`Chat name ${props.name}`} />
        </ListItem>
      ))}
    </List>

       </> 
    )
}