import {
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Popover,
  Typography,
} from '@mui/material';
import { Fragment } from 'react/jsx-runtime';
import SimpleBar from 'simplebar-react';

export interface FilterDataType {
  id: number;
  title: string;
}

interface FilterDropdownProps {
  onClose: () => void;
  open: HTMLElement | null;
  selectedItem: string;
  onSelect: (value: string) => void;
  filterData: FilterDataType[];
}
const FilterDropdown = ({
  open,
  onClose,
  selectedItem,
  onSelect,
  filterData,
}: FilterDropdownProps) => {
  return (
    <Fragment>
      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={onClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              ml: 0.75,
              width: 100,
              bgcolor: 'common.white',
              borderRadius: '3%',
            },
          },
        }}
      >
        <Divider sx={{ borderStyle: 'dashed' }} />
        <List disablePadding dense>
          <SimpleBar style={{ height: '100%', maxHeight: 150 }}>
            {filterData.map((notification) => (
              <ListItemButton
                key={notification.id}
                onClick={() => onSelect(notification.title)}
                sx={{
                  py: 1.5,
                  px: 2.5,
                  mt: '1px',
                  backgroundColor:
                    selectedItem === notification.title
                      ? 'neutral.light'
                      : 'transparent',
                }}
              >
                <ListItemText
                  primary={
                    <Typography
                      variant="button"
                      sx={{
                        textTransform: 'capitalize',
                        fontWeight: 'bold',
                      }}
                    >
                      {notification.title}
                    </Typography>
                  }
                />
              </ListItemButton>
            ))}
          </SimpleBar>
        </List>
        <Divider sx={{ borderStyle: 'dashed' }} />
      </Popover>
    </Fragment>
  );
};

export default FilterDropdown;
