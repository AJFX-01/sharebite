import { Button, Card, Stack, Typography } from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridPaginationModel,
  GridValidRowModel,
} from '@mui/x-data-grid';
import { dateFormatFromUTC } from 'helpers/utils';
import NoData from '../../components/base/NoData';
import { useState, MouseEvent } from 'react';
import { useBreakpoints } from 'providers/useBreakpoints';
import DonationProofUpload from 'components/donor/DonationProofUpload';
import CancelReservation from './CancelReservation';
import { useDonation } from 'context/donationContext';
import ErrorDisplay from 'components/base/ErrorDisplay';

let rowHeight = 60;

const ReserveDonations = () => {
  const { reservations, reservationError, reservationLoading } = useDonation();
  const filteredReservations = reservations.filter((reservation) => {
    const matchedReservations =
      reservation.receipt === null || reservation.receipt === undefined;
    return matchedReservations;
  });
  const { down } = useBreakpoints();
  const [open, setOpen] = useState<{ [key: string]: HTMLElement | null }>({
    popover1: null,
    popover2: null,
    popover3: null,
  });
  const [rowDetails, setRowDetails] = useState<GridValidRowModel | null>(null);
  const title = 'No Donation is Avaliable for pickup';
  const description = 'No Donations is avaliable.';

  const handleOpen = (
    event: MouseEvent<HTMLElement>,
    popoverId: string,
    row: GridValidRowModel,
  ) => {
    setOpen({ ...open, [popoverId]: event.currentTarget });
    if (row != null) {
      setRowDetails(row);
    }
  };

  const handleClose = (popoverId: string) => {
    setOpen({ ...open, [popoverId]: null });
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
      field: 'is_reserved',
      headerName: 'View Details',
      flex: 1,
      minWidth: 150,
      hideable: false,
      renderCell: (params) => {
        return (
          <>
            <Button
              onClick={(event) => handleOpen(event, 'popover1', params.row)}
              variant="contained"
              color="primary"
              disabled={
                params.row.receipt === undefined || params.row.receipt === null
                  ? false
                  : true
              }
              sx={{
                fontSize: 12,
                width: 150,
              }}
            >
              Cancel Pickup
            </Button>
          </>
        );
      },
    },
    {
      field: '',
      headerName: 'Proof',
      flex: 1,
      minWidth: 100,
      hideable: false,
      renderCell: (params) => {
        if (params.row.receipt === undefined || params.row.receipt === null) {
          return (
            <>
              <Button
                onClick={(event) => handleOpen(event, 'popover2', params.row)}
                variant="contained"
                color="primary"
                sx={{
                  fontSize: 12,
                  width: 150,
                }}
              >
                Upload Proof
              </Button>
            </>
          );
        } else {
          return <Typography color={'#06c9a9'}>Picked Up Completed</Typography>;
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
          Reserved Donations
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
          {reservationError ? (
            <ErrorDisplay
              title={'Something went wrong, Please Try again'}
              description={reservationError.message}
            />
          ) : (
            <DataGrid
              rowHeight={rowHeight}
              rows={filteredReservations.slice(
                paginationModel.page * paginationModel.pageSize,
                (paginationModel.page + 1) * paginationModel.pageSize,
              )}
              rowCount={filteredReservations.length}
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
              loading={reservationLoading}
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
      {open.popover2 && (
        <DonationProofUpload
          onClose={() => handleClose('popover2')}
          donation={rowDetails as Donation}
          mode="reciept"
        />
      )}
      {open.popover1 && (
        <CancelReservation
          open={open.popover1}
          onClose={() => handleClose('popover1')}
          donationData={rowDetails as Donation}
        />
      )}
    </Stack>
  );
};

export default ReserveDonations;
