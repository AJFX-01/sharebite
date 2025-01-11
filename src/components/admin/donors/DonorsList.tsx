import { Card, Stack, Typography } from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridPaginationModel,
  GridRowsProp,
} from '@mui/x-data-grid';
import { dateFormatFromUTC } from 'helpers/utils';
import NoData from '../../base/NoData';
// import IconifyIcon from 'components/base/IconifyIcon';
import { useState, MouseEvent, useEffect } from 'react';
import { useBreakpoints } from 'providers/useBreakpoints';

const columns: GridColDef[] = [
  {
    field: 'firstname',
    headerName: "Member's Name",
    flex: 1,
    minWidth: 300,
    hideable: false,
    renderCell: (params) => {
      const fullname = params.row.first_name + ' ' + params.row.last_name;

      return <>{fullname}</>;
    },
  },
  {
    field: 'Email',
    headerName: 'email',
    flex: 1,
    width: 200,
    hideable: false,
  },
  {
    field: 'created_at',
    headerName: 'Joined On',
    flex: 1,
    minWidth: 100,
    hideable: false,
    renderCell: (params) => <>{dateFormatFromUTC(params.value)}</>,
  },
];

let rowHeight = 60;

const DonorsListings = () => {
  // const dispatch = useDispatch();
  // const credentials = useSelector(
  //   (state: RootState) => state.credential.credentials.credentials,
  // );
  const [items, setItems] = useState<GridRowsProp<User>>([]);
  const { down } = useBreakpoints();
  const [open, setOpen] = useState<null | HTMLElement>(null);
  const [issueModal, setIssueModal] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const title = 'No Donors Available';
  const description = 'There is no Donors to display at the moment.';

  // const handleOpen = (event: MouseEvent<HTMLElement>) => {
  //   setOpen(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setOpen(null);
  // };

  // const handleSelect = (value: string) => {
  //   setSelectedItem(value);
  //   setOpen(null);
  //   setItems(
  //     credentials.filter(
  //       (item) => item.status.toUpperCase() === value.toUpperCase(),
  //     ),
  //   );
  // };

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
          Donations
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
          <>
            <Button
              sx={{
                px: 1,
                position: 'relative',
                border: '2px solid #0047CC',
                borderRadius: 2,
                alignItems: 'center',
              }}
              onClick={handleOpen}
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
              open={open}
              onClose={handleClose}
              selectedItem={selectedItem}
              onSelect={handleSelect}
              filterData={filter_data}
            />
          </>
          <IconButton sx={{ bgcolor: 'neutral.light' }} onClick={handleRefresh}>
            <IconifyIcon
              color="#0047CC"
              icon="radix-icons:reload"
              sx={{
                width: { xs: 15, md: 15, xl: 15 },
                height: { xs: 15, md: 15, xl: 15 },
              }}
            />
          </IconButton>
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
    </Stack>
  );
};

export default DonorsListings;
