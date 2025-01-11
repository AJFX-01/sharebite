import { Avatar, Box, Stack, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';

interface DonationIconProps {
  iconName: string;
  iconTitle: string;
  IconNumber: number;
  iconColor: string;
  iconBgColor: string;
}
const DonationIcon = (iconDetail: DonationIconProps) => {
  return (
    <Box sx={{ py: 1.5, px: 0 }}>
      <Stack direction="row" spacing={1.5}>
        <Stack
          direction="row"
          sx={{
            width: 45,
            height: 45,
            bgcolor: iconDetail.iconBgColor,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
          }}
        >
          <Avatar
            variant="rounded"
            sx={{
              width: 30,
              height: 30,
              bgcolor: 'transparent',
            }}
          >
            <IconifyIcon
              icon={iconDetail.iconName}
              color={iconDetail.iconColor}
              width={25}
              height={25}
            />
          </Avatar>
        </Stack>
        <div>
          <Typography
            variant="subtitle2"
            fontWeight={500}
            noWrap
            sx={{
              width: 150,
            }}
          >
            {iconDetail.iconTitle}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              width: 150,
              fontSize: { sm: 'h2.fontSize', xl: 'h1.fontSize' },
              fontWeight: 600,
            }}
            noWrap
          >
            {iconDetail.IconNumber}
          </Typography>
        </div>
      </Stack>
    </Box>
  );
};

export default DonationIcon;
