import { Card, Stack } from '@mui/material';
import DonationIcon from './DonationDetailsIcon';
import DonationPieChart, { PieChartDataType } from './DonationPieChart';

const data: PieChartDataType[] = [
  { name: 'Completed', value: 16.8, color: '#06c9a9' },
  { name: 'Ongoing', value: 14.8, color: '#0047CC' },
];

const dataP: PieChartDataType[] = [
  { name: 'Donor', value: 16.8, color: '#e30707' },
  { name: 'Reciever', value: 14.8, color: '#f5ffc4' },
];

const DonationChart = () => {
  return (
    <Stack spacing={1.5} direction="row">
      <DonationPieChart data={data} titleheader="Donation Distribution" />
      <DonationPieChart data={dataP} titleheader="People distribution" />
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
            iconTitle="Completed Donations"
            IconNumber={151}
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
            iconTitle="Ongoing Donations"
            IconNumber={1034}
            iconBgColor="#e1effc"
          />
        </Card>
      </Stack>
    </Stack>
  );
};

export default DonationChart;
