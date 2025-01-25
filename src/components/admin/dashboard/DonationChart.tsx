import { Card, Stack } from '@mui/material';
import DonationIcon from './DonationDetailsIcon';
import DonationPieChart, { PieChartDataType } from './DonationPieChart';
import { useDonation } from 'context/donationContext';
import { calculatePercentage } from 'helpers/utils';


const dataP: PieChartDataType[] = [
  { name: 'Donor', value: 16.8, color: '#e30707' },
  { name: 'Reciever', value: 14.8, color: '#f5ffc4' },
];

const DonationChart = () => {
  const { donations } = useDonation();

  const pendingDonation = donations.filter((donation) => {
    const matchDonation = donation.status.toUpperCase() === 'PENDING';
    return matchDonation;
  });

  const dataDonation: PieChartDataType[] = [
    {
      name: 'Successful',
      value: calculatePercentage(
        donations.length,
        donations.length - pendingDonation.length,
      ),
      color: '#06c9a9',
    },
    {
      name: 'Pending',
      value: calculatePercentage(donations.length, pendingDonation.length),
      color: '#0047CC',
    },
  ];

  return (
    <Stack spacing={1.5} direction="row">
      <DonationPieChart
        data={dataDonation}
        titleheader="Donation Distribution"
        titleLenght={donations.length}
      />
      <DonationPieChart
        data={dataP}
        titleheader="People distribution"
        titleLenght={122}
      />
      <Stack
        spacing={1.5}
        direction="column"
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '25.3%',
        }}
      >
        <Card
          sx={{
            borderRadius: '5px',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
            width: '100%',
            height: '50%',
            display: 'flex',
            pl: '10px',
            py: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <DonationIcon
            iconName="iconoir:network"
            iconColor="#e6ed0c"
            iconTitle="Successful Donations"
            IconNumber={donations.length - pendingDonation.length}
            iconBgColor="#f5ffc4"
          />
        </Card>
        <Card
          sx={{
            py: 3,
            pl: '10px',
            borderRadius: '5px',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
            width: '100%',
            height: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <DonationIcon
            iconName="streamline:interface-arrows-reload-2-arrows-load-arrow-sync-square-loading-reload-synchronize"
            iconColor="#0e80eb"
            iconTitle="Pending Donations"
            IconNumber={pendingDonation.length}
            iconBgColor="#e1effc"
          />
        </Card>
      </Stack>
    </Stack>
  );
};

export default DonationChart;
