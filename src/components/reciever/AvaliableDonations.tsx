import { Button, Card, Stack, Typography } from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridPaginationModel,
  GridValidRowModel,
} from '@mui/x-data-grid';
import { dateFormatFromUTC, toUpperCase, transformBool } from 'helpers/utils';
import NoData from '../../components/base/NoData';
// import IconifyIcon from 'components/base/IconifyIcon';
import { useState, MouseEvent } from 'react';
import { useBreakpoints } from 'providers/useBreakpoints';
import DonationView from 'components/donor/DonationDetails';
import { useDonation } from 'context/donationContext';
import ErrorDisplay from 'components/base/ErrorDisplay';

let rowHeight = 60;

const AvailableDonations = () => {
  const { donations, donationLoading, donationError } = useDonation();
  const { down } = useBreakpoints();
  const [open, setOpen] = useState<null | HTMLElement>(null);
  // const [searchTerm, setSearchTerm] = useState<string>('');
  const [rowDetails, setRowDetails] = useState<GridValidRowModel | null>(null);
  const title = 'No Donation is Avaliable for pickup';
  const description = 'No Donations is avaliable.';

  const filteredDonations = donations.filter((donation) => {
    const matchDonations = toUpperCase(donation.is_reserved) === 'FALSE';
    return matchDonations;
  });

  const handleOpen = (
    event: MouseEvent<HTMLElement>,
    row: GridValidRowModel,
  ) => {
    setOpen(event.currentTarget);
    setRowDetails(row);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const columns: GridColDef[] = [
    {
      field: 'title',
      headerName: 'Title',
      flex: 1,
      width: 200,
      hideable: false,
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      minWidth: 100,
      hideable: false,
      renderCell: (params) => {
        const color =
          toUpperCase(params.row.status.toUpperCase()) === 'SUCCESSFUL'
            ? '#06c9a9'
            : '#e30707';

        return <Typography color={color}>{params.row.status}</Typography>;
      },
    },
    {
      field: 'is_reserved',
      headerName: 'Reserved',
      flex: 1,
      minWidth: 50,
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
      field: 'is_delivered',
      headerName: 'Delivered',
      flex: 1,
      minWidth: 50,
      hideable: false,
      renderCell: (params) => {
        const color =
          toUpperCase(params.row.is_delivered) === 'TRUE'
            ? '#06c9a9'
            : '#e30707';
        return (
          <Typography color={color}>
            {transformBool(params.row.is_delivered)}
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
      headerName: 'View Details',
      flex: 1,
      minWidth: 150,
      hideable: false,
      renderCell: (params) => {
        return (
          <>
            <Button
              onClick={(event) => handleOpen(event, params.row)}
              variant="contained"
              color="primary"
              sx={{
                fontSize: 12,
                width: 150,
              }}
            >
              Full Details
            </Button>
          </>
        );
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
          Avaliable Donations
        </Typography>
        {/* <Stack
          direction="row"
          sx={{
            justifyContent: 'space-between',
            width: '40%',
          }}
        >
          <SearchInput
            fullWidth={true}
            size={'small'}
            placeholder={'Enter DID to search'}
            value={searchTerm}
            onChange={handleSearch}
          />
        </Stack> */}
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
          {donationError ? (
            <ErrorDisplay
              title={'Something went wrong, Please Try again'}
              description={donationError.message}
            />
          ) : (
            <DataGrid
              rowHeight={rowHeight}
              rows={filteredDonations.slice(
                paginationModel.page * paginationModel.pageSize,
                (paginationModel.page + 1) * paginationModel.pageSize,
              )}
              rowCount={filteredDonations.length}
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
              loading={donationLoading}
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
      {open && (
        <DonationView
          onClose={() => handleClose()}
          donation={rowDetails as Donation}
          mode="Reserved"
        />
      )}
    </Stack>
  );
};

export default AvailableDonations;
