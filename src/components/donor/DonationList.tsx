import { Button, Card, Stack, Typography } from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridPaginationModel,
  GridRowsProp,
  GridValidRowModel,
} from '@mui/x-data-grid';
import { dateFormatFromUTC, toUpperCase, transformBool } from 'helpers/utils';
import NoData from '../../components/base/NoData';
import { useState, MouseEvent, useEffect } from 'react';
import { useBreakpoints } from 'providers/useBreakpoints';
import FilterDropdown from 'components/base/FilterDropDown';
import DonationDetails from './DonationInsight';
import MakeDonation from './MakeDonation';
import DonationView from './DonationDetails';
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

const DonationListings = () => {
  const [items, setItems] = useState<GridRowsProp<Donation>>([]);
  const { down } = useBreakpoints();
  const [open, setOpen] = useState<{ [key: string]: HTMLElement | null }>({
    popover1: null,
    popover2: null,
    popover3: null,
  });
  const [selectedItem, setSelectedItem] = useState<string>('ALL');
  const [rowDetails, setRowDetails] = useState<GridValidRowModel | null>(null);
  const title = 'No Donations Available';
  const description = 'There is no Donations to display at the moment.';

  const { data, isLoading, error } = useQuery({
    queryKey: [''],
    queryFn: () => DonationApiRequest.getUserDonations(selectedItem),
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
    console.log(items);
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
      field: 'location',
      headerName: 'Location',
      flex: 1,
      minWidth: 100,
      hideable: false,
    },
    {
      field: 'created_at',
      headerName: 'Date Donated',
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

  const fetchData = async () => {
    if (data) {
      setItems(data);
    }
  }

  useEffect(() => {
    fetchData();
    if (data) {
      setItems(data);
    }
  }, [data]);

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
        <MakeDonation onClose={() => handleClose('popover2')} />
      )}
      {open.popover3 && (
        <DonationView
          onClose={() => handleClose('popover3')}
          donation={rowDetails as Donation}
          mode=""
        />
      )}
    </Stack>
  );
};

export default DonationListings;
