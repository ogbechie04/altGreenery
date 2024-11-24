import React, { useState } from "react";
import {
  Box,
  MenuItem,
  TextField,
  Select,
  InputAdornment,
  FormControl,
  SelectChangeEvent,
  MenuProps,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { KeyboardArrowDown } from "@mui/icons-material";
import '../app/globals.css'

// Define the type for a country
interface Country {
  code: string;
  name: string;
  dialCode: string;
  flag: string;
}

const PhoneNumberInput: React.FC = () => {
  // Define the list of countries with type annotations
  const countries: Country[] = [
    {
      code: "NG",
      name: "Nigeria",
      dialCode: "+234",
      flag: "emojione:flag-for-nigeria",
    },
    {
      code: "US",
      name: "United States",
      dialCode: "+1",
      flag: "emojione:flag-for-united-states",
    },
    {
      code: "CA",
      name: "Canada",
      dialCode: "+1",
      flag: "emojione:flag-for-canada",
    },
  ];

  // State for the selected country
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);

  // Event handler for country selection
  const handleCountryChange = (event: SelectChangeEvent<string>) => {
    const countryCode = event.target.value;
    const country = countries.find((c) => c.code === countryCode);
    if (country) {
      setSelectedCountry(country);
    }
  };

  const dropdownMenuProps: Partial<MenuProps> = {
    PaperProps: {
      sx: {
        padding: "16px 10px",
        borderRadius: "8px",
        fontFamily: 'arimo' ,
        "& .MuiList-root": {
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          fontFamily: 'arimo !important'
        },
      },
    },
  };

  return (
    <Box display="flex" alignItems="center" width={'100%'} sx={{fontFamily: "'Arimo', sans-serif !important "}}>
      {/* Country Selector */}
      <FormControl sx={{ flexShrink: 0 }}>
        <Select
          value={selectedCountry.code}
          onChange={handleCountryChange}
          MenuProps={dropdownMenuProps}
          IconComponent={KeyboardArrowDown}
          renderValue={() => (
            <Box
              display="flex"
              flexDirection={"row-reverse"}
              alignItems="center"
              gap={1}
            >
              <Icon icon={selectedCountry.flag} width={24} height={24} />
              <span>{selectedCountry.code}</span>
            </Box>
          )}
          sx={{
            // minWidth: "6rem",
            height: '48px',
            borderBottomLeftRadius: "8px",
            borderTopLeftRadius: "8px",
            borderBottomRightRadius: 0,
            borderTopRightRadius: 0,
            backgroundColor: "white",
            fontFamily: 'arimo',
            width: 'auto',
            "& .MuiInputBase-input": { paddingX: "16px", paddingY: "12px", fontFamily: 'arimo' },
          }}
        >
          {countries.map((country) => (
            <MenuItem
              key={country.code}
              value={country.code}
              sx={{ "& .MuiMenuItem-root": { paddingY: "8px" } }}
            >
              <Box display="flex" alignItems="center" gap={1}>
                <Icon icon={country.flag} width={24} height={24} />
                <span>{country.name}</span>
              </Box>
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Phone Number Input */}
      <TextField
        variant="outlined"
        placeholder="Enter phone number"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                {selectedCountry.dialCode}
              </InputAdornment>
            ),
          },
        }}
        sx={{ flex: 1,
          "& .MuiTextField-root": { flex: 1 },
          "& .MuiInputBase-root": {
            borderBottomLeftRadius: "0px",
            borderTopLeftRadius: "0px",
            borderBottomRightRadius: "8px",
            borderTopRightRadius: "8px",
            height: '48px',
          },
          "& .MuiInputBase-input": { paddingY: "12px" },
        }}
      />
    </Box>
  );
};

export default PhoneNumberInput;
