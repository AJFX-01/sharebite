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
import FilterDropdown from 'components/base/FilterDropDown';
import DonationDetails from './DonationInsight';
import MakeDonation from './MakeDonation';
import { donations } from 'data/dummydata';
import DonationView from './DonationDetails';

const filter_data: FilterDataType[] = [
  {
    id: 1,
    title: 'All',
  },
  {
    id: 2,
    title: 'Successful ',
  },
  {
    id: 3,
    title: 'Pending',
  },
];

let rowHeight = 60;

const DonationListings = () => {
  // const dispatch = useDispatch();
  // const credentials = useSelector(
  //   (state: RootState) => state.credential.credentials.credentials,
  // );
  const [items, setItems] = useState<GridRowsProp<Donation>>([]);
  const { down } = useBreakpoints();
  const [open, setOpen] = useState<{ [key: string]: HTMLElement | null }>({
    popover1: null,
    popover2: null,
    popover3: null,
  });
  const [issueModal, setIssueModal] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [rowDetails, setRowDetails] = useState<GridValidRowModel | null>(null);
  const title = 'No Donations Available';
  const description = 'There is no Donations to display at the moment.';

  const handleOpen = (
    event: MouseEvent<HTMLElement>,
    popoverId: string,
    row?: GridValidRowModel,
  ) => {
    setOpen({ ...open, [popoverId]: event.currentTarget });
    if (row != null) {
      setRowDetails(row);
    }
  };

  const handleClose = (popoverId: string) => {
    setOpen({ ...open, [popoverId]: null });
  };

  const handleSelect = (value: string) => {
    setSelectedItem(value);
    setOpen({});
    // setItems(
    //   credentials.filter(
    //     (item) => item.status.toUpperCase() === value.toUpperCase(),
    //   ),
    // );
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
      field: 'is_reserved',
      headerName: 'Reserved',
      flex: 1,
      minWidth: 50,
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
      headerName: 'Details',
      flex: 1,
      minWidth: 150,
      hideable: false,
      renderCell: (params) => {
        return (
          <>
            <Button
              onClick={(event) => handleOpen(event, 'popover3', params.row)}
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

  const fetchListingData = () => {
    setLoading(true);
    setItems(donations); // Always set all items
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
        <Stack
          direction="row"
          sx={{
            justifyContent: 'space-between',
            width: '100%',
            mb: 2,
          }}
        >
          <Stack direction="row" alignItems="center" sx={{ py: 1 }}>
            <Typography
              sx={{
                fontSize: {
                  xs: 'body2.fontSize',
                  md: 'h6.fontSize',
                  xl: 'h4.fontSize',
                },
                fontWeight: 500,
              }}
            >
              Doantions Analysis
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 'overline.fontSize', md: 'caption.fontSize' },
                fontWeight: 'bold',
                color: '#0047CC',
                ml: 1,
                backgroundColor: 'neutral.light',
                padding: '7px',
              }}
            >
              ALL TIME
            </Typography>
          </Stack>
          <Stack
            direction="row"
            sx={{
              width: '25%',
              justifyContent: 'space-between',
            }}
          >
            <Button
              sx={{
                px: 1,
                position: 'relative',
                border: '2px solid #0047CC',
                borderRadius: 2,
                alignItems: 'center',
              }}
              onClick={(event) => handleOpen(event, 'popover1')}
            >
              <div style={{ alignSelf: 'center' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="#0047CC"
                    d="M7 11h10v2H7zM4 7h16v2H4zm6 8h4v2h-4z"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <Typography
                color="#0047CC"
                fontWeight="400"
                textAlign="center"
                alignSelf="center"
                paddingLeft={0.5}
              >
                Filter By
              </Typography>
            </Button>
            <FilterDropdown
              open={open.popover1}
              onClose={() => handleClose('popover1')}
              selectedItem={selectedItem}
              onSelect={handleSelect}
              filterData={filter_data}
            />
            <Button
              variant="contained"
              sx={{
                px: 1,
                borderRadius: 2,
                alignItems: 'center',
                bgcolor: '#0047CC',
              }}
              onClick={(event) => handleOpen(event, 'popover2')}
            >
              <div style={{ alignSelf: 'center' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="#ffff"
                    d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <Typography
                color="#ffff"
                fontWeight="400"
                textAlign="center"
                alignSelf="center"
                paddingLeft={0.5}
              >
                Add Donation
              </Typography>
            </Button>
          </Stack>
          {/* <IconButton sx={{ bgcolor: 'neutral.light' }} onClick={handleRefresh}>
            <IconifyIcon
              color="#0047CC"
              icon="radix-icons:reload"
              sx={{
                width: { xs: 15, md: 15, xl: 15 },
                height: { xs: 15, md: 15, xl: 15 },
              }}
            />
          </IconButton> */}
        </Stack>
      </Stack>
      <DonationDetails />
      <Card
        sx={{
          flexGrow: { md: 1 },
          display: { md: 'flex' },
          flexDirection: { md: 'column' },
          overflow: 'hidden',
          borderRadius: 2.5,
          mt: 2,
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
      {open.popover2 && (
        <MakeDonation onClose={() => handleClose('popover2')} />
      )}
      {open.popover3 && (
        <DonationView
          onClose={() => handleClose('popover3')}
          donation={rowDetails as Donation}
        />
      )}
    </Stack>
  );
};

export default DonationListings;
