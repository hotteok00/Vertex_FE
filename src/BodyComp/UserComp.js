import { useState } from 'react';
import {
  TextField,
  Box,
  Button,
  Stack,
  MenuItem,
  FormControl,
  Select
} from "@mui/material";
import { useSelector } from 'react-redux';
import DefaultModal from '../Modal/DefaultModal';
import PostUploadModal from '../Modal/PostUploadModal';
import UserCard from '../Comp/UserCard';
import VideoCardList from '../Comp/VideoCardList';
import CommunityCardList from '../Comp/CommunityCardList';
import VideoListCardList from '../Comp/VideoLsitCardList';
import AccountSettingModal from '../Modal/AccountSettingModal';

// Category Values
const VIDEO = "V"
const VIDEO_LIST = "L"
const COMMUNITY = "C"
const UPLOADED_POST = "U"


export default function UserComp() {

  const category = useSelector((state) => state.category)
  const [searchOpt, setSearchOpt] = useState("Title");
  const [select, setSelect] = useState(VIDEO)



  const handleSelect = (select) => {
    setSelect(select)
  }

  const handleSearchOptChange = (event) => {
    setSearchOpt(event.target.value);
  };

  const handleTestModal = () => {

  };

  // PostUpload Modal Handler
  const [isPostUplaodModalOpen, setIsPostUplaodModalOpen] = useState(false)
  const handlePostUploadOpne = () => { setIsPostUplaodModalOpen(true) }
  const handlePostUploadClose = () => { setIsPostUplaodModalOpen(false) }

  // Account Setting Modal Handler
  const [isAccountSettingOpen, setIsAccountSettingOpen] = useState(false);
  const handleAccounSettingOpen = () => { setIsAccountSettingOpen(true) }
  const handleAccounSettingClose = () => { setIsAccountSettingOpen(false) }

  return (
    <Stack spacing={2}>
      <UserCard user={category.sub}></UserCard>

      {/* Btns : Video, Video List, Community */}
      <Stack direction="row" spacing={2}>
        <Button fullWidth variant="outlined" color='white'
          onClick={() => { handleSelect(VIDEO) }}
          sx={{ height: "40px", }}>
          Video
        </Button>
        <Button fullWidth variant="outlined" color='white'
          onClick={() => { handleSelect(VIDEO_LIST) }}
          sx={{ height: "40px" }}>
          Video List
        </Button>
        <Button fullWidth variant="outlined" color='white'
          onClick={() => { handleSelect(COMMUNITY) }}
          sx={{ height: "40px" }}>
          Community
        </Button>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Button fullWidth variant="outlined" color='white'
          onClick={() => { handleSelect(UPLOADED_POST) }}
          sx={{ height: "40px", }}>
          Uploaded Post
        </Button>
        {/* Account Setting Btns : Update Profile, Account Setting */}
        <Button fullWidth variant="outlined" color='white'
          onClick={() => {}}
          sx={{ height: "40px" }}>
          Update Profile
        </Button>
        <Button fullWidth variant="outlined" color='white'
          onClick={handleAccounSettingOpen}
          sx={{ height: "40px" }}>
          Account Setting
        </Button>
      </Stack>

      {/* Search */}
      <Stack direction="row-reverse" sx={{ justifyContent: "space-between" }}>


        <Box
          component="form"
          sx={{ display: "flex", width: "40vw", minWidth: "400px" }}
        >
          {/* Search Option */}
          <FormControl
            color="white"
            size="small"
            sx={{ width: "200px", marginRight: "10px" }}
          >
            <Select
              value={searchOpt}
              onChange={handleSearchOptChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={"Title"}>Title</MenuItem>
              <MenuItem value={"Body"}>Body</MenuItem>
              <MenuItem value={"Title + Body"}>Title + Body</MenuItem>
              <MenuItem value={"Hash Tag"}>Hash Tag</MenuItem>
            </Select>
          </FormControl>

          {/* Search String */}
          <TextField
            fullWidth
            id="standard-search"
            label="Search"
            color="white"
            size="small"
          ></TextField>
        </Box>

        {/* Btn */}
        {(select === COMMUNITY) && <Button
          fullWidth
          sx={{ width: "150px" }}
          color='white'
          variant="outlined"
          onClick={handlePostUploadOpne}>
          Upload Post
        </Button>}

        {(select === VIDEO_LIST) && <Button
          fullWidth
          sx={{ width: "150px" }}
          color='white'
          variant="outlined"
          onClick={handlePostUploadOpne}>
          Add Lsit
        </Button>}


        {/* Upload Post Mdl_Pst */}
        <DefaultModal
          open={isPostUplaodModalOpen}
          onClose={handlePostUploadClose}
          title={"Upload Post"}
          children={PostUploadModal}
        />

        {/* Account Setting Modal */}
        <DefaultModal
          open={isAccountSettingOpen}
          onClose={handleAccounSettingClose}
          title={"Account Setting"}
          children={AccountSettingModal}
        />


      </Stack>

      {(select === VIDEO) && <VideoCardList></VideoCardList>}
      {(select === VIDEO_LIST) && <VideoListCardList></VideoListCardList>}
      {(select === COMMUNITY) && <CommunityCardList></CommunityCardList>}
      {(select === UPLOADED_POST) && <CommunityCardList></CommunityCardList>}


    </Stack>
  )
}