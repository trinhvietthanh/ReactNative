import React, {useState} from 'react';
import { Box, Image, FlatList, Text } from 'native-base';
import moment from 'moment';

export const FixtureList = ({logo}) => {
  const [fixtures, setFixtures] = useState();

  return (
    <Box>
      <Box>LiverPool</Box>
      <Image source={logo}/>
      <FlatList
        data={fixtures}
        renderItem={({item})=> {
          return (
            <Box>
              <Box>{moment("12/04/2022").format('DD MMMM YYYY')}</Box>
              <Box>
                <Image source={logo}/>
                <Text>220</Text>
              </Box>
              <Box>
                <Text>Mancity</Text>
                <Text>loss</Text>
              </Box>
            </Box>
          )
        }}
        keyExtractor={(item, index) => index}
      />
    </Box>
  )

}

