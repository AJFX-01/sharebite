import { Card, Stack, Typography } from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridPaginationModel,
} from '@mui/x-data-grid';
import { dateFormatFromUTC } from 'helpers/utils';
import NoData from '../../base/NoData';
import { useState } from 'react';
import { useBreakpoints } from 'providers/useBreakpoints';
import { useDonation } from 'context/donationContext';
import ErrorDisplay from 'components/base/ErrorDisplay';

let rowHeight = 60;

const DonorsListings = () => {
  const { users, userLoading, userError } = useDonation();
  const { down } = useBreakpoints();
  // const [searchTerm, setSearchTerm] = useState<string>('');
  const title = 'No Donors Available';
  const description = 'There is no Donors to display at the moment.';

  // const handleSearch = (value: string) => {
  //   setSearchTerm(value);
  //   setItems(
  //     credentials.filter((item) =>
  //       item.id.toLowerCase().includes(value.toLowerCase()),
  //     ),
  //   );
  // };

  const columns: GridColDef[] = [
    {
      field: '',
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
      field: 'email',
      headerName: 'Email',
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
          Donations
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
          {userError ? (
            <ErrorDisplay
              title={'Something went wrong, Please Try again'}
              description={userError.message}
            />
          ) : (
            <DataGrid
              rowHeight={rowHeight}
              rows={users.slice(
                paginationModel.page * paginationModel.pageSize,
                (paginationModel.page + 1) * paginationModel.pageSize,
              )}
              rowCount={users.length}
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
              loading={userLoading}
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

export default DonorsListings;
