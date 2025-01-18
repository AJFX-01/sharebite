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
import DonationProofUpload from './DonationProofUpload';

let rowHeight = 60;

const DonationHistory = () => {
  // const dispatch = useDispatch();
  // const credentials = useSelector(
  //   (state: RootState) => state.credential.credentials.credentials,
  // );
  const [items, setItems] = useState<GridRowsProp<Donation>>([]);
  const { down } = useBreakpoints();
  const [loading, setLoading] = useState<boolean>(false);
  const title = 'You have not made any donations';
  const description = 'No Donations History.';

  const [isProofBox, setProofBox] = useState(false);
  const [rowDetails, setRowDetails] = useState<GridValidRowModel | null>(null);

  const handleOpen = (row: GridValidRowModel) => {
    setRowDetails(row);
    setProofBox(true);
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
      field: 'description',
      headerName: 'Description',
      flex: 1,
      width: 200,
      hideable: false,
    },
    {
      field: 'is_reserved',
      headerName: 'Reserved',
      flex: 1,
      minWidth: 100,
      hideable: false,
      renderCell: (params) => {
        const color =
          params.row.status === 'TRUE'
            ? '#06c9a9'
            : params.row.status === 'FALSE'
              ? '#0047CC'
              : '#e30707';

        return <Typography color={color}>{params.row.status}</Typography>;
      },
    },
    {
      field: 'is_delivered',
      headerName: 'Delivered',
      flex: 1,
      minWidth: 100,
      hideable: false,
      renderCell: (params) => {
        const color =
          params.row.status === 'TRUE'
            ? '#06c9a9'
            : params.row.status === 'FALSE'
              ? '#0047CC'
              : '#e30707';

        return <Typography color={color}>{params.row.status}</Typography>;
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
      headerName: '',
      flex: 1,
      width: 150,
      hideable: false,
      renderCell: (params) => {
        return (
          <>
            <Button
              onClick={() => handleOpen(params.row)}
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
      },
    },
  ];

  // const handleRefresh = () => {
  //   fetchListingData();
  // };

  // const handleSearch = (value: string) => {
  //   setSearchTerm(value);
  //   setItems(
  //     credentials.filter((item) =>
  //       item.id.toLowerCase().includes(value.toLowerCase()),
  //     ),
  //   );
  // };

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

  // const fetchListingData = async () => {};

  // useEffect(() => {
  //   fetchListingData();
  // });

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
      {isProofBox && (
        <DonationProofUpload
          onClose={() => setProofBox(false)}
          donation={rowDetails as Donation}
        />
      )}
    </Stack>
  );
};

export default DonationHistory;
