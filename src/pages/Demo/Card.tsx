import { Box, CardActionArea, CardContent, CardMedia, Card as MuiCard, Typography } from '@mui/material';
import tryImage from '../../assets/try.png';

/**
 * yoinked from https://codesandbox.io/p/sandbox/clever-frost-v7xn94?file=%2Fsrc%2FDemo.tsx%3A1%2C1-30%2C2
 */

export const Card = () => {
  return (
    <Box flexWrap="wrap" display="flex" justifyContent="center" alignItems="center">
      <MuiCard>
        <CardActionArea>
          <CardMedia component="img" height="600" image={tryImage} alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h2" component="div">
              Pictured:
            </Typography>
            <Typography variant="h5" sx={{ color: 'text.secondary' }}>
              The developer.
            </Typography>
          </CardContent>
        </CardActionArea>
      </MuiCard>
    </Box>
  );
};
