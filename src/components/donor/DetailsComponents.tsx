import { Stack, Typography } from '@mui/material';

const Details = ({
  titleLeft,
  titleRight,
  labelLeft,
  labelRight,
}: DetailsProps) => {
  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: 'space-between',
        alignItems: 'start',
        mb: 4,
      }}
    >
      <Stack
        direction="column"
        sx={{
          justifyContent: 'space-between',
          alignItems: 'start',
          mb: 4,
          width: '50%',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          {titleLeft}
        </Typography>
        <Typography
          sx={{
            fontSize: 13,
            fontWeight: 500,
            color: '#0047CC',
          }}
        >
          {labelLeft}
        </Typography>
      </Stack>
      <Stack
        direction="column"
        sx={{
          justifyContent: 'space-between',
          alignItems: 'start',
          mb: 4,
          width: '50%',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: 14,
            fontWeight: 600,
            textAlign: 'left',
          }}
        >
          {titleRight}
        </Typography>
        <Typography
          sx={{
            fontSize: 13,
            fontWeight: 500,
            color: '#0047CC',
            textAlign: 'left',
          }}
        >
          {labelRight}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Details;
