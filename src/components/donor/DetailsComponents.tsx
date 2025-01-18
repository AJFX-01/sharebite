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
        pl: '10px',
        mb: 4,
      }}
    >
      <Stack
        direction="column"
        sx={{
          justifyContent: 'space-between',
          alignItems: 'start',
          pl: '10px',
          mb: 4,
        }}
      >
        <Typography
          sx={{
            fontSize: 12,
            fontWeight: 500,
          }}
        >
          {titleRight}
        </Typography>
        <Typography
          sx={{
            fontSize: 13,
            fontWeight: 500,
            color: '#0047CC',
          }}
        >
          {labelRight}
        </Typography>
      </Stack>
      <Stack
        direction="column"
        sx={{
          justifyContent: 'space-between',
          alignItems: 'start',
          pl: '10px',
          mb: 4,
        }}
      >
        <Typography
          sx={{
            fontSize: 12,
            fontWeight: 500,
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
    </Stack>
  );
};
