import { Grid, Box, styled } from '@mui/material';

const Image = styled('img')(({ theme }) => ({
  marginTop: 10,
  width: '100%',
  height: 220,
  objectFit: 'contain',
  [theme.breakpoints.down('md')]: {
    height: 180,
    objectFit: 'cover',
  },
}));

const MidSection = () => {
  const url = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

  return (
    <Box sx={{ backgroundColor: '#fff', padding: 2 }}>
      <Grid container>
        <Grid item xs={12}>
          <Image src={url} alt="Offre spéciale Flipkart - Promotion du jour" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MidSection;