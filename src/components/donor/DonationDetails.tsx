import { Card, Stack } from '@mui/material';
import DonationIcon from 'components/admin/dashboard/DonationDetailsIcon';

const DonationDetails = () => {
  return (
    <Stack>
      <Card
        sx={{
          borderRadius: '5px',
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
          padding: 1,
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Stack
          direction="row"
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            pl: '10px',
          }}
        >
          <DonationIcon
            iconName="carbon:credentials"
            iconColor="#0047CC"
            iconTitle="Donations Made"
            IconNumber={190}
            iconBgColor="neutral.light"
          />
          <DonationIcon
            iconName="stash:shield-check-light"
            iconColor="#06c9a9"
            iconTitle="Succesful Donations"
            IconNumber={151}
            iconBgColor="#cffff9"
          />
          <DonationIcon
            iconName="mdi:donation-outline"
            iconColor="#e30707"
            iconTitle="Pending Donations"
            IconNumber={23}
            iconBgColor="#f7b5b5"
          />
        </Stack>
      </Card>
    </Stack>
  );
};

export default DonationDetails;
