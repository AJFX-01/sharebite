import { Button, Card, Stack, Typography } from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridPaginationModel,
  GridRowsProp,
  GridValidRowModel,
} from '@mui/x-data-grid';
import { dateFormatFromUTC } from 'helpers/utils';
import NoData from '../../components/base/NoData';
// import IconifyIcon from 'components/base/IconifyIcon';
import { useState, MouseEvent, useEffect } from 'react';
import { useBreakpoints } from 'providers/useBreakpoints';
import { reserveddonations } from 'data/dummydata';
import DonationProofUpload from 'components/donor/DonationProofUpload';

let rowHeight = 60;

const RecieptList = () => {
  // const dispatch = useDispatch();
  // const credentials = useSelector(
  //   (state: RootState) => state.credential.credentials.credentials,
  // );
  const [items, setItems] = useState<GridRowsProp<ReDonation>>([]);
  const { down } = useBreakpoints();
  const [open, setOpen] = useState<HTMLElement | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const [rowDetails, setRowDetails] = useState<GridValidRowModel | null>(null);
  const title = 'No Donation is Avaliable for pickup';
  const description = 'No Donations is avaliable.';

  const handleOpen = (
    event: MouseEvent<HTMLElement>,
    row: GridValidRowModel,
  ) => {
    setOpen(event.currentTarget);
    if (row != null) {
      setRowDetails(row);
    }
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
      field: 'location',
      headerName: 'Location',
      flex: 1,
      minWidth: 100,
      hideable: false,
    },
    {
      field: 'receipt',
      headerName: 'Pickup Date',
      flex: 1,
      minWidth: 100,
      hideable: false,
      renderCell: (params) => {
        if (params.row.receipt === undefined || params.row.receipt === null) {
          return <>-</>;
        } else {
          return <>{dateFormatFromUTC(params.row.receipt.pickup_date)}</>;
        }
      },
    },
    {
      field: 'is_reserved',
      headerName: 'View Reciept',
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
              View Reciept
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

  const fetchListingData = () => {
    setLoading(true);
    setItems(reserveddonations); // Always set all items
    setLoading(false);
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
          Avaliable Donations
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
        {/* <>
          {error ? (
            <ErrorDisplay
              title={'Something went wrong, Please Try again'}
              description={error.message}
            />
          ) : ( */}
        <DataGrid
          rowHeight={rowHeight}
          rows={items.slice(
            paginationModel.page * paginationModel.pageSize,
            (paginationModel.page + 1) * paginationModel.pageSize,
          )}
          rowCount={items.length}
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
          loading={loading}
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
        {/* )}
        </> */}
      </Card>
      {open && (
        <DonationProofUpload
          onClose={() => handleClose()}
          donation={rowDetails as ReDonation}
          mode="reciept"
        />
      )}
    </Stack>
  );
};

export default RecieptList;
