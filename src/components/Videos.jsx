import { Box } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import {VideoCard, ChannelCard} from './'

const Videos = ({ videos, direction }) => {

  console.log('main hu videos se',videos)
  if(!videos?.length) return 'Loading...';

  return (
    <div>
      <Stack direction={direction || "row" } flexWrap='wrap' justifyContent= "Start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
      </Stack>
    </div>
  )
}

export default Videos

