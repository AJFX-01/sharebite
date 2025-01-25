import { Button, Card, Stack, Typography } from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridPaginationModel,
  GridRowsProp,
  GridValidRowModel,
} from '@mui/x-data-grid';
import { dateFormatFromUTC, toUpperCase, transformBool } from 'helpers/utils';
import NoData from '../../base/NoData';
// import IconifyIcon from 'components/base/IconifyIcon';
import { useState, MouseEvent, useEffect } from 'react';
import { useBreakpoints } from 'providers/useBreakpoints';
import FilterDropdown from 'components/base/FilterDropDown';
import AdminDonationDetails from './AdminDonationDetials';
import { useQuery } from '@tanstack/react-query';
import DonationApiRequest from 'api/donation';

import ErrorDisplay from 'components/base/ErrorDisplay';

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

const RecentListings = () => {
  const [items, setItems] = useState<GridRowsProp<Donation>>([]);
  const { down } = useBreakpoints();
  const [open, setOpen] = useState<{ [key: string]: HTMLElement | null }>({
    popover1: null,
    popover2: null,
    popover3: null,
  });
  const [rowDetails, setRowDetails] = useState<GridValidRowModel | null>(null);
  const [selectedItem, setSelectedItem] = useState<string>('');
  const title = 'No Donations Available';
  const description = 'There is no Donations to display at the moment.';

  const { data, isLoading, error } = useQuery({
    queryKey: [''],
    queryFn: () => DonationApiRequest.getAllDonations(),
  });

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
    setItems(
      items.filter((item) => item.status.toUpperCase() === value.toUpperCase()),
    );
  };

  const fetchListingData = async () => {
    if (data) {
      setItems(data); // Always set all items
    }
  };

  useEffect(() => {
    fetchListingData();
  }, [data]);

  const columns: GridColDef[] = [
    {
      field: 'title',
      headerName: 'Title',
      flex: 1,
      width: 200,
      hideable: false,
    },
    {
      field: 'donor',
      headerName: 'Donor',
      flex: 1,
      width: 200,
      hideable: false,
      renderCell: (params) => {
        return (
          <Typography
            sx={{
              textTransform: 'capitalize',
            }}
          >
            {params.row.donor.first_name} {params.row.donor.last_name}
          </Typography>
        );
      },
    },
    {
      field: 'status',
      headerName: 'Delivered',
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
      field: 'is_delivered',
      headerName: 'Delivered',
      flex: 1,
      minWidth: 100,
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
              onClick={(event) => handleOpen(event, 'popover2', params.row)}
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
            alignSelf: 'flex-start',
          }}
        >
          Donations
        </Typography>
        <Stack
          direction="row"
          sx={{
            justifyContent: 'space-between',
            // width: '20%',
            alignSelf: 'flex-end',
          }}
        >
          <>
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
          </>
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
          {error ? (
            <ErrorDisplay
              title={'Something went wrong, Please Try again'}
              description={error.message}
            />
          ) : (
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
              loading={isLoading}
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
        <AdminDonationDetails
          onClose={() => handleClose('popover2')}
          donation={rowDetails as Donation}
        />
      )}
    </Stack>
  );
};

export default RecentListings;
