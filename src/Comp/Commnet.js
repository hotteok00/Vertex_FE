import { useState } from "react";
import {
  Box,
  Avatar,
  Stack,
  Typography,
  Button,
  Collapse,
  TextField
} from "@mui/material";

export default function Comment({ isReply, hasReply }) {

  const [replyCommnetExpand, setReplyCommnetExpand] = useState(false);
  const [replyWriteExpand, setReplyWriteExpand] = useState(false);

  const handleReplyCommnetExpand = () => {
    setReplyWriteExpand(false)
    setReplyCommnetExpand(!replyCommnetExpand);
  };

  const handleReplyWriteExpand = () => {
    setReplyCommnetExpand(true)
    setReplyWriteExpand(!replyWriteExpand);
  };


  return (
    <Box sx={isReply && {paddingLeft: "65px"}}>
      <Stack
        direction="row"
        alignItems="center"
        sx={{ padding: "10px 0px", width: "100%", margin: "0px 0px" }}
      >

        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"
          sx={{ marginRight: "15px", width: "50px", height: "50px" }}
        />

        <Stack>
          <Stack direction="row" alignItems="baseline">
            <Typography variant="caption" display="block" sx={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", marginRight: "15px" }}>
              {"User Name"}
            </Typography>
            <Typography variant="caption" display="block" sx={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.5) ", marginRight: "15px"}}>
              {"23/01/01"}
            </Typography>


            {!isReply && <Button 
                            variant="text" 
                            color="white"
                            onClick={handleReplyWriteExpand} 
                            sx={{padding: "0px", minWidth:0, marginRight: "5px"}}>
              <Typography variant="caption" display="block" sx={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.5)" }}>
                {"Reply /"}
              </Typography>
            </Button>}
            <Button variant="text" color="white" sx={{padding: "0px", minWidth:0, marginRight: "5px"}}>
              <Typography variant="caption" display="block" sx={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.5)" }}>
                {"Update /"}
              </Typography>
            </Button>
            <Button variant="text" color="white" sx={{padding: "0px", minWidth:0}}>
              <Typography variant="caption" display="block" sx={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.5)" }}>
                {"Delete"}
              </Typography>
            </Button>

          </Stack>
          <Typography variant="body2" color="white">
            {"This is Test Comment!!!"}
          </Typography>


          {hasReply && <Button variant="text" color="white" onClick={handleReplyCommnetExpand} sx={{padding: "0px",}}>
              <Typography variant="caption" display="block" sx={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.5)" }}>
                {"Show Reply"}
              </Typography>
          </Button>}

        </Stack>
      </Stack>

      {/* Reply */}
      {hasReply && <Collapse in={replyCommnetExpand} timeout="auto" unmountOnExit>
        <Comment isReply={true}></Comment>
        <Comment isReply={true}></Comment>
      </Collapse>}

      {/* Reply Write */}
      <Collapse in={replyWriteExpand} timeout="auto" unmountOnExit>
      <Box component="form" sx={{paddingLeft: "65px", paddingBottom: "15px"}}>
        <TextField
          fullWidth
          color='white'
          multiline
          maxRows={4}
          InputProps={{
            endAdornment: (
              <Button variant="outlined" color='white' sx={{marginLeft: "10px", width: "200px"}}>
                Commit
              </Button>
            ),
          }}
        ></TextField>
      </Box>

      </Collapse>


    </Box>
  )
}