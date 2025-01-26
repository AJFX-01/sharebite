import { Card, Stack, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridPaginationModel } from '@mui/x-data-grid';
import { dateFormatFromUTC, toUpperCase, transformBool } from 'helpers/utils';
import NoData from '../../components/base/NoData';
import { useEffect, useState } from 'react';
import { useBreakpoints } from 'providers/useBreakpoints';
import { useDonation } from 'context/donationContext';
import ErrorDisplay from 'components/base/ErrorDisplay';

let rowHeight = 60;

const DonationHistory = () => {
  const {
    currentUserDonations,
    currentUserDonationLoading,
    currentUserDonationError,
    setCstatus,
  } = useDonation();
  const { down } = useBreakpoints();
  const title = 'You have not made any donations';
  const description = 'No Donations History.';

  const columns: GridColDef[] = [
    {
      field: 'title',
      headerName: 'Title',
      flex: 1,
      minWidth: 150,
      hideable: false,
    },
    {
      field: 'is_reserved',
      headerName: 'Reserved',
      maxWidth: 100,
      hideable: false,
      renderCell: (params) => {
        const color =
          toUpperCase(params.row.is_reserved) === 'TRUE'
            ? '#06c9a9'
            : '#e30707';

        return (
          <Typography color={color}>
            {transformBool(params.row.is_reserved)}
          </Typography>
        );
      },
    },
    {
      field: 'is_deleivered',
      headerName: 'Delivered',
      maxWidth: 100,
      hideable: false,
      renderCell: (params) => {
        const color =
          toUpperCase(params.row.is_delivered) === 'TRUE'
            ? '#06c9a9'
            : '#e30707';
        return (
          <Typography color={color}>
            {transformBool(params.row.is_deleivered)}
          </Typography>
        );
      },
    },
    {
      field: 'location',
      headerName: 'Location',
      flex: 1,
      minWidth: 100,
      hideable: false,
    },
    {
      field: 'created_at',
      headerName: 'Date',
      flex: 1,
      minWidth: 100,
      hideable: false,
      renderCell: (params) => <>{dateFormatFromUTC(params.value)}</>,
    },
    {
      field: '',
      headerName: 'Proof',
      flex: 1,
      minWidth: 100,
      hideable: false,
      renderCell: (params) => {
        if (params.row.proof === undefined || params.row.proof === null) {
          return <Typography color={'#06c9a9'}>Not Avaliable</Typography>;
        } else {
          return <Typography color={'#06c9a9'}>Avaliable</Typography>;
        }
      },
    },
  ];

  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 10,
  });

  const isXs = down('sm');

  if (isXs) {
    rowHeight = 55;
  } else {
    rowHeight = 64;
  }

  const handlePaginationModelChange = (model: GridPaginationModel) => {
    setPaginationModel(model);
  };

  const fetchListingData = () => {
    setCstatus('Successful');
  };

  useEffect(() => {
    fetchListingData();
  });

  return (
    <Stack sx={{ overflow: 'auto', justifyContent: 'space-between' }}>
      <Stack
        sx={{
          mb: 1.5,
          mt: 1,
          justifyContent: 'space-between',
          alignContent: 'center',
        }}
        direction="row"
      >
        <Typography
          sx={{
            fontSize: {
              xs: 'body2.fontSize',
              md: 'h6.fontSize',
              xl: 'h3.fontSize',
            },
            fontWeight: 600,
            alignSelf: 'center',
          }}
        >
          All Donations You Made
        </Typography>
      </Stack>
      <Card
        sx={{
          flexGrow: { md: 1 },
          display: { md: 'flex' },
          flexDirection: { md: 'column' },
          overflow: 'hidden',
          borderRadius: 6.5,
          '&.MuiPaper-root': {
            p: 1,
            border: 1,
            borderColor: 'neutral.light',
            bgcolor: { xs: 'transparent', sm: 'white' },
            boxShadow: (theme) =>
              `inset 0px -1px ${theme.palette.neutral.light}`, // color for row border
          },
        }}
      >
        <>
          {currentUserDonationError ? (
            <ErrorDisplay
              title={'Something went wrong, Please Try again'}
              description={currentUserDonationError.message}
            />
          ) : (
            <DataGrid
              rowHeight={rowHeight}
              rows={currentUserDonations.slice(
                paginationModel.page * paginationModel.pageSize,
                (paginationModel.page + 1) * paginationModel.pageSize,
              )}
              rowCount={currentUserDonations.length}
              columns={columns}
              disableRowSelectionOnClick
              paginationMode="server"
              paginationModel={paginationModel}
              onPaginationModelChange={handlePaginationModelChange}
              slots={{
                noRowsOverlay: () => (
                  <NoData title={title} description={description} />
                ),
                pagination: () => null, // Hide the default pagination component
              }}
              loading={currentUserDonationLoading}
              sx={{
                px: { xs: 0, md: 3 },
                '& .MuiDataGrid-main': {
                  minHeight: 300,
                },
                '& .MuiDataGrid-virtualScroller': {
                  minHeight: 300,
                  p: 0,
                },
                '& .MuiDataGrid-columnHeader': {
                  fontSize: { xs: 10, lg: 13 },
                  pl: 3,
                },
                '& .MuiDataGrid-cell': {
                  fontSize: { xs: 10, lg: 12 },
                  pl: 3,
                },
                // '& .MuiTypography-root': {
                //   fontSize: { xs: 13, lg: 16 },
                // },
              }}
            />
          )}
        </>
      </Card>
    </Stack>
  );
};

export default DonationHistory;
