// script.js
const courseData = [
        {
            "SL": "1",
            "COURSE": "ACT201",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2",
            "COURSE": "ACT201",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3",
            "COURSE": "ACT201",
            "DEPARTMENT": "HMF",
            "SECTION": "07",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "4",
            "COURSE": "ACT201",
            "DEPARTMENT": "HMF",
            "SECTION": "07",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "5",
            "COURSE": "ACT201",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "6",
            "COURSE": "ACT201",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "7",
            "COURSE": "ACT201",
            "DEPARTMENT": "KUR",
            "SECTION": "08",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "8",
            "COURSE": "ACT201",
            "DEPARTMENT": "KUR",
            "SECTION": "08",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "9",
            "COURSE": "ACT201",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "10",
            "COURSE": "ACT201",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "11",
            "COURSE": "ACT201",
            "DEPARTMENT": "TBR",
            "SECTION": "06",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "12",
            "COURSE": "ACT201",
            "DEPARTMENT": "TBR",
            "SECTION": "06",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "13",
            "COURSE": "ACT201",
            "DEPARTMENT": "SPC",
            "SECTION": "10",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "14",
            "COURSE": "ACT201",
            "DEPARTMENT": "SPC",
            "SECTION": "10",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "15",
            "COURSE": "ACT201",
            "DEPARTMENT": "HMF",
            "SECTION": "09",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "16",
            "COURSE": "ACT201",
            "DEPARTMENT": "HMF",
            "SECTION": "09",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "17",
            "COURSE": "ACT201",
            "DEPARTMENT": "AFZ",
            "SECTION": "04",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "18",
            "COURSE": "ACT201",
            "DEPARTMENT": "AFZ",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "19",
            "COURSE": "ACT201",
            "DEPARTMENT": "TBR",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "20",
            "COURSE": "ACT201",
            "DEPARTMENT": "TBR",
            "SECTION": "03",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "21",
            "COURSE": "ACT201",
            "DEPARTMENT": "KUR",
            "SECTION": "05",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "22",
            "COURSE": "ACT201",
            "DEPARTMENT": "KUR",
            "SECTION": "05",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "23",
            "COURSE": "ACT202",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "TUESDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "24",
            "COURSE": "ACT202",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "SUNDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "25",
            "COURSE": "ACT202",
            "DEPARTMENT": "SDO",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "26",
            "COURSE": "ACT202",
            "DEPARTMENT": "SDO",
            "SECTION": "03",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "27",
            "COURSE": "ACT202",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "28",
            "COURSE": "ACT202",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "29",
            "COURSE": "ACT202",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "30",
            "COURSE": "ACT202",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "31",
            "COURSE": "ACT202",
            "DEPARTMENT": "SDO",
            "SECTION": "04",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "32",
            "COURSE": "ACT202",
            "DEPARTMENT": "SDO",
            "SECTION": "04",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "33",
            "COURSE": "ACT202",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "34",
            "COURSE": "ACT202",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "35",
            "COURSE": "ACT301",
            "DEPARTMENT": "KUR",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "36",
            "COURSE": "ACT301",
            "DEPARTMENT": "KUR",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "37",
            "COURSE": "ACT301",
            "DEPARTMENT": "SPC",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "38",
            "COURSE": "ACT301",
            "DEPARTMENT": "SPC",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "39",
            "COURSE": "ACT421",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "40",
            "COURSE": "ACT421",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "41",
            "COURSE": "ACT422",
            "DEPARTMENT": "AFZ",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "42",
            "COURSE": "ACT422",
            "DEPARTMENT": "AFZ",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "43",
            "COURSE": "ACT431",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "44",
            "COURSE": "ACT431",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "45",
            "COURSE": "ACT511",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "09:55 AM"
        },
        {
            "SL": "46",
            "COURSE": "ACT511",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "09:55 AM"
        },
        {
            "SL": "47",
            "COURSE": "ANT101",
            "DEPARTMENT": "ZTK",
            "SECTION": "10",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "48",
            "COURSE": "ANT101",
            "DEPARTMENT": "ZTK",
            "SECTION": "10",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "49",
            "COURSE": "ANT101",
            "DEPARTMENT": "FMZ",
            "SECTION": "06",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "50",
            "COURSE": "ANT101",
            "DEPARTMENT": "FMZ",
            "SECTION": "06",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "51",
            "COURSE": "ANT101",
            "DEPARTMENT": "MZC",
            "SECTION": "07",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "52",
            "COURSE": "ANT101",
            "DEPARTMENT": "MZC",
            "SECTION": "07",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "53",
            "COURSE": "ANT101",
            "DEPARTMENT": "SES",
            "SECTION": "03",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "54",
            "COURSE": "ANT101",
            "DEPARTMENT": "SES",
            "SECTION": "03",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "55",
            "COURSE": "ANT101",
            "DEPARTMENT": "MZC",
            "SECTION": "12",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "56",
            "COURSE": "ANT101",
            "DEPARTMENT": "MZC",
            "SECTION": "12",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "57",
            "COURSE": "ANT101",
            "DEPARTMENT": "MZC",
            "SECTION": "11",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "58",
            "COURSE": "ANT101",
            "DEPARTMENT": "MZC",
            "SECTION": "11",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "59",
            "COURSE": "ANT101",
            "DEPARTMENT": "FMZ",
            "SECTION": "09",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "60",
            "COURSE": "ANT101",
            "DEPARTMENT": "FMZ",
            "SECTION": "09",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "61",
            "COURSE": "ANT101",
            "DEPARTMENT": "ZTK",
            "SECTION": "05",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "62",
            "COURSE": "ANT101",
            "DEPARTMENT": "ZTK",
            "SECTION": "05",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "63",
            "COURSE": "ANT101",
            "DEPARTMENT": "SES",
            "SECTION": "04",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "64",
            "COURSE": "ANT101",
            "DEPARTMENT": "SES",
            "SECTION": "04",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "65",
            "COURSE": "ANT101",
            "DEPARTMENT": "SES",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "66",
            "COURSE": "ANT101",
            "DEPARTMENT": "SES",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "67",
            "COURSE": "ANT101",
            "DEPARTMENT": "FMZ",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "68",
            "COURSE": "ANT101",
            "DEPARTMENT": "ZTK",
            "SECTION": "08",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "69",
            "COURSE": "ANT101",
            "DEPARTMENT": "ZTK",
            "SECTION": "08",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "70",
            "COURSE": "ANT101",
            "DEPARTMENT": "FMZ",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "71",
            "COURSE": "ANT103",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "03:05 PM",
            "END-TIME": "04:00 PM"
        },
        {
            "SL": "72",
            "COURSE": "ANT103",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:05 PM",
            "END-TIME": "04:00 PM"
        },
        {
            "SL": "73",
            "COURSE": "ANT103",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "04:10 PM",
            "END-TIME": "05:05 PM"
        },
        {
            "SL": "74",
            "COURSE": "ANT103",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "04:10 PM",
            "END-TIME": "05:05 PM"
        },
        {
            "SL": "75",
            "COURSE": "ANT202",
            "DEPARTMENT": "FMZ",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "76",
            "COURSE": "ANT202",
            "DEPARTMENT": "FMZ",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "77",
            "COURSE": "ANT203",
            "DEPARTMENT": "ALM",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "78",
            "COURSE": "ANT203",
            "DEPARTMENT": "ALM",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "79",
            "COURSE": "ANT211",
            "DEPARTMENT": "MZC",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "80",
            "COURSE": "ANT211",
            "DEPARTMENT": "MZC",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "81",
            "COURSE": "ANT342",
            "DEPARTMENT": "ZTK",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "82",
            "COURSE": "ANT342",
            "DEPARTMENT": "ZTK",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "83",
            "COURSE": "ANT376",
            "DEPARTMENT": "SHR",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "84",
            "COURSE": "ANT376",
            "DEPARTMENT": "SHR",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "85",
            "COURSE": "APE400",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "FRIDAY",
            "START-TIME": "06:00 PM",
            "END-TIME": "09:00 PM"
        },
        {
            "SL": "000086",
            "COURSE": "APE450",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "FRIDAY",
            "START-TIME": "06:00 PM",
            "END-TIME": "09:00 PM"
        },
        {
            "SL": "000087",
            "COURSE": "ARC101",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "12:05 PM"
        },
        {
            "SL": "88",
            "COURSE": "ARC101",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "12:05 PM"
        },
        {
            "SL": "89",
            "COURSE": "ARC101",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "12:00 PM"
        },
        {
            "SL": "90",
            "COURSE": "ARC101",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "12:05 PM"
        },
        {
            "SL": "91",
            "COURSE": "ARC101",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "12:05 PM"
        },
        {
            "SL": "92",
            "COURSE": "ARC101",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "12:00 PM"
        },
        {
            "SL": "93",
            "COURSE": "ARC102",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "12:05 PM"
        },
        {
            "SL": "94",
            "COURSE": "ARC102",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "12:05 PM"
        },
        {
            "SL": "95",
            "COURSE": "ARC102",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "12:00 PM"
        },
        {
            "SL": "96",
            "COURSE": "ARC102",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "12:05 PM"
        },
        {
            "SL": "97",
            "COURSE": "ARC102",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "12:05 PM"
        },
        {
            "SL": "98",
            "COURSE": "ARC102",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "12:00 PM"
        },
        {
            "SL": "99",
            "COURSE": "ARC111",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "12:05 PM"
        },
        {
            "SL": "100",
            "COURSE": "ARC111",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "12:05 PM"
        },
        {
            "SL": "101",
            "COURSE": "ARC111",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "12:05 PM"
        },
        {
            "SL": "102",
            "COURSE": "ARC111",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "12:05 PM"
        },
        {
            "SL": "103",
            "COURSE": "ARC112",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "12:05 PM"
        },
        {
            "SL": "104",
            "COURSE": "ARC112",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "12:05 PM"
        },
        {
            "SL": "105",
            "COURSE": "ARC113",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "05:05 PM"
        },
        {
            "SL": "106",
            "COURSE": "ARC113",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "05:05 PM"
        },
        {
            "SL": "107",
            "COURSE": "ARC121",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "12:15 PM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "108",
            "COURSE": "ARC121",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:15 PM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "109",
            "COURSE": "ARC122",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "02:55 PM"
        },
        {
            "SL": "110",
            "COURSE": "ARC122",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "02:55 PM"
        },
        {
            "SL": "111",
            "COURSE": "ARC123",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "01:20 PM",
            "END-TIME": "02:15 PM"
        },
        {
            "SL": "112",
            "COURSE": "ARC123",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "01:20 PM",
            "END-TIME": "02:15 PM"
        },
        {
            "SL": "113",
            "COURSE": "ARC123",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "12:15 PM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "114",
            "COURSE": "ARC123",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "12:15 PM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "115",
            "COURSE": "ARC201",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "12:05 PM"
        },
        {
            "SL": "116",
            "COURSE": "ARC201",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "12:05 PM"
        },
        {
            "SL": "117",
            "COURSE": "ARC201",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "12:00 PM"
        },
        {
            "SL": "118",
            "COURSE": "ARC201",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "12:05 PM"
        },
        {
            "SL": "119",
            "COURSE": "ARC201",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "12:05 PM"
        },
        {
            "SL": "120",
            "COURSE": "ARC201",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "12:00 PM"
        },
        {
            "SL": "121",
            "COURSE": "ARC202",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "12:05 PM"
        },
        {
            "SL": "122",
            "COURSE": "ARC202",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "12:05 PM"
        },
        {
            "SL": "123",
            "COURSE": "ARC202",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "12:00 PM"
        },
        {
            "SL": "124",
            "COURSE": "ARC214",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "05:05 PM"
        },
        {
            "SL": "125",
            "COURSE": "ARC214",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "05:05 PM"
        },
        {
            "SL": "126",
            "COURSE": "ARC224",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "10:05 AM",
            "END-TIME": "11:00 AM"
        },
        {
            "SL": "127",
            "COURSE": "ARC224",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "10:05 AM",
            "END-TIME": "11:00 AM"
        },
        {
            "SL": "128",
            "COURSE": "ARC225",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "02:55 PM"
        },
        {
            "SL": "129",
            "COURSE": "ARC225",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "02:55 PM"
        },
        {
            "SL": "130",
            "COURSE": "ARC231",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "03:05 PM",
            "END-TIME": "04:00 PM"
        },
        {
            "SL": "131",
            "COURSE": "ARC231",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:05 PM",
            "END-TIME": "04:00 PM"
        },
        {
            "SL": "132",
            "COURSE": "ARC232",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "02:55 PM"
        },
        {
            "SL": "133",
            "COURSE": "ARC232",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "02:55 PM"
        },
        {
            "SL": "134",
            "COURSE": "ARC241",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "12:15 PM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "135",
            "COURSE": "ARC241",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:15 PM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "136",
            "COURSE": "ARC242",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "12:15 PM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "137",
            "COURSE": "ARC242",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "12:15 PM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "138",
            "COURSE": "ARC251",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "02:55 PM"
        },
        {
            "SL": "139",
            "COURSE": "ARC251",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "02:55 PM"
        },
        {
            "SL": "140",
            "COURSE": "ARC252",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "05:00 PM"
        },
        {
            "SL": "141",
            "COURSE": "ARC293",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "05:05 PM"
        },
        {
            "SL": "142",
            "COURSE": "ARC300",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "FRIDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "11:00 AM"
        },
        {
            "SL": "143",
            "COURSE": "ARC301",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "144",
            "COURSE": "ARC301",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "145",
            "COURSE": "ARC301",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "146",
            "COURSE": "ARC301",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "147",
            "COURSE": "ARC301",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "148",
            "COURSE": "ARC301",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "149",
            "COURSE": "ARC302",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "150",
            "COURSE": "ARC302",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "151",
            "COURSE": "ARC302",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "152",
            "COURSE": "ARC302",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "153",
            "COURSE": "ARC302",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "154",
            "COURSE": "ARC302",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "155",
            "COURSE": "ARC311",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "05:05 PM"
        },
        {
            "SL": "156",
            "COURSE": "ARC312",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "05:05 PM"
        },
        {
            "SL": "157",
            "COURSE": "ARC312",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "05:05 PM"
        },
        {
            "SL": "158",
            "COURSE": "ARC315",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "05:05 PM"
        },
        {
            "SL": "159",
            "COURSE": "ARC315",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "05:05 PM"
        },
        {
            "SL": "160",
            "COURSE": "ARC326",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "12:40 PM",
            "END-TIME": "02:10 PM"
        },
        {
            "SL": "161",
            "COURSE": "ARC327",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "10:05 AM",
            "END-TIME": "11:00 AM"
        },
        {
            "SL": "162",
            "COURSE": "ARC327",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "10:05 AM",
            "END-TIME": "11:00 AM"
        },
        {
            "SL": "163",
            "COURSE": "ARC331",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "09:55 AM"
        },
        {
            "SL": "164",
            "COURSE": "ARC331",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "09:55 AM"
        },
        {
            "SL": "165",
            "COURSE": "ARC343",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "12:15 PM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "166",
            "COURSE": "ARC343",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:15 PM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "167",
            "COURSE": "ARC393",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "12:15 PM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "168",
            "COURSE": "ARC393",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:15 PM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "169",
            "COURSE": "ARC401",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "170",
            "COURSE": "ARC401",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "171",
            "COURSE": "ARC401",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "172",
            "COURSE": "ARC401",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "05:05 PM"
        },
        {
            "SL": "173",
            "COURSE": "ARC402",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "174",
            "COURSE": "ARC402",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "175",
            "COURSE": "ARC402",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "05:05 PM"
        },
        {
            "SL": "176",
            "COURSE": "ARC402",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "177",
            "COURSE": "ARC402",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "178",
            "COURSE": "ARC402",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "179",
            "COURSE": "ARC402",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "05:05 PM"
        },
        {
            "SL": "180",
            "COURSE": "ARC402",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "181",
            "COURSE": "ARC411",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "05:05 PM"
        },
        {
            "SL": "182",
            "COURSE": "ARC412",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "05:05 PM"
        },
        {
            "SL": "183",
            "COURSE": "ARC413",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "04:00 PM"
        },
        {
            "SL": "184",
            "COURSE": "ARC431",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "04:00 PM"
        },
        {
            "SL": "185",
            "COURSE": "ARC432",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "01:20 PM",
            "END-TIME": "02:15 PM"
        },
        {
            "SL": "186",
            "COURSE": "ARC432",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "01:20 PM",
            "END-TIME": "02:15 PM"
        },
        {
            "SL": "187",
            "COURSE": "ARC441",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "02:55 PM"
        },
        {
            "SL": "188",
            "COURSE": "ARC441",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "02:55 PM"
        },
        {
            "SL": "189",
            "COURSE": "ARC452",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "12:15 PM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "190",
            "COURSE": "ARC452",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:15 PM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "191",
            "COURSE": "ARC494",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "04:10 PM",
            "END-TIME": "05:05 PM"
        },
        {
            "SL": "192",
            "COURSE": "ARC494",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "04:10 PM",
            "END-TIME": "05:05 PM"
        },
        {
            "SL": "193",
            "COURSE": "ARC502",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "194",
            "COURSE": "ARC502",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "195",
            "COURSE": "ARC502",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "05:05 PM"
        },
        {
            "SL": "196",
            "COURSE": "ARC502",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "197",
            "COURSE": "ARC503",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "198",
            "COURSE": "ARC503",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "05:05 PM"
        },
        {
            "SL": "199",
            "COURSE": "ARC503",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "200",
            "COURSE": "ARC503",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "201",
            "COURSE": "ARC512",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "05:05 PM"
        },
        {
            "SL": "202",
            "COURSE": "ARC522",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "12:15 PM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "203",
            "COURSE": "ARC522",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:15 PM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "204",
            "COURSE": "ARC541",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "01:20 PM",
            "END-TIME": "04:25 PM"
        },
        {
            "SL": "205",
            "COURSE": "BCH101",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "206",
            "COURSE": "BCH101",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "207",
            "COURSE": "BCH101",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "208",
            "COURSE": "BCH101",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "209",
            "COURSE": "BCH101",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "210",
            "COURSE": "BCH101",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "211",
            "COURSE": "BCH101",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "212",
            "COURSE": "BCH101",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "213",
            "COURSE": "BCH101",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "214",
            "COURSE": "BCH101",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "215",
            "COURSE": "BCH101",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "216",
            "COURSE": "BCH101",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "217",
            "COURSE": "BCH101",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "218",
            "COURSE": "BCH101",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "219",
            "COURSE": "BCH101",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "220",
            "COURSE": "BCH101",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "221",
            "COURSE": "BCH101",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "222",
            "COURSE": "BCH101",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "223",
            "COURSE": "BCH101",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "224",
            "COURSE": "BCH101",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "225",
            "COURSE": "BCH102",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "226",
            "COURSE": "BCH102",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "227",
            "COURSE": "BCH102",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "228",
            "COURSE": "BCH102",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "229",
            "COURSE": "BCH102",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "230",
            "COURSE": "BCH102",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "231",
            "COURSE": "BCH102",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "232",
            "COURSE": "BCH102",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "233",
            "COURSE": "BCH102",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "234",
            "COURSE": "BCH102",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "235",
            "COURSE": "BCH102",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "236",
            "COURSE": "BCH102",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "237",
            "COURSE": "BCH102",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "238",
            "COURSE": "BCH102",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "239",
            "COURSE": "BCH201",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "240",
            "COURSE": "BCH201",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "241",
            "COURSE": "BCH201",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "242",
            "COURSE": "BCH201",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "243",
            "COURSE": "BCH201",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "244",
            "COURSE": "BCH201",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "245",
            "COURSE": "BCH202",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "246",
            "COURSE": "BCH202",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "247",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "20",
            "DAY": "WEDNESDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "248",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "20",
            "DAY": "MONDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "249",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "250",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "251",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "252",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "253",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "16",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "254",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "16",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "255",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "256",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "257",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "17",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "258",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "17",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "259",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "260",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "261",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "262",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "263",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "18",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "264",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "18",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "265",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "14",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "266",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "14",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "267",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "268",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "269",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "15",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "270",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "15",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "271",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "272",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "273",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "274",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "275",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "276",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "277",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "278",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "279",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "19",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "280",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "19",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "281",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "282",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "283",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "284",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "285",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "286",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "287",
            "COURSE": "BTE101",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "288",
            "COURSE": "BTE101",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "289",
            "COURSE": "BTE101",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "290",
            "COURSE": "BTE101",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "291",
            "COURSE": "BTE101",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "292",
            "COURSE": "BTE101",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "293",
            "COURSE": "BTE101",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "294",
            "COURSE": "BTE101",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "295",
            "COURSE": "BTE101",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "296",
            "COURSE": "BTE101",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "297",
            "COURSE": "BTE102",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "298",
            "COURSE": "BTE102",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "299",
            "COURSE": "BTE102",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "300",
            "COURSE": "BTE102",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "286",
            "COURSE": "BIO101",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "287",
            "COURSE": "BTE101",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "288",
            "COURSE": "BTE101",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "289",
            "COURSE": "BTE101",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "290",
            "COURSE": "BTE101",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "291",
            "COURSE": "BTE101",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "292",
            "COURSE": "BTE101",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "293",
            "COURSE": "BTE101",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "294",
            "COURSE": "BTE101",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "295",
            "COURSE": "BTE101",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "296",
            "COURSE": "BTE101",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "297",
            "COURSE": "BTE102",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "298",
            "COURSE": "BTE102",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "299",
            "COURSE": "BTE102",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "300",
            "COURSE": "BTE102",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "301",
            "COURSE": "BTE102",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "302",
            "COURSE": "BTE102",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "303",
            "COURSE": "BTE102",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "304",
            "COURSE": "BTE102",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "305",
            "COURSE": "BTE103",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "306",
            "COURSE": "BTE103",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "307",
            "COURSE": "BTE103",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "308",
            "COURSE": "BTE103",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "309",
            "COURSE": "BTE103",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "310",
            "COURSE": "BTE103",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "311",
            "COURSE": "BTE103",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "312",
            "COURSE": "BTE103",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1321",
            "COURSE": "BTE201",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "322",
            "COURSE": "BTE201",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "323",
            "COURSE": "BTE202",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "324",
            "COURSE": "BTE202",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "325",
            "COURSE": "BTE203",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "326",
            "COURSE": "BTE203",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "327",
            "COURSE": "BTE203",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "328",
            "COURSE": "BTE203",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "329",
            "COURSE": "BTE204",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "330",
            "COURSE": "BTE204",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "331",
            "COURSE": "BTE204",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "332",
            "COURSE": "BTE204",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2345",
            "COURSE": "BTE302",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "346",
            "COURSE": "BTE302",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "347",
            "COURSE": "BTE303",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "348",
            "COURSE": "BTE303",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "349",
            "COURSE": "BTE304",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "350",
            "COURSE": "BTE304",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "351",
            "COURSE": "BTE306",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "352",
            "COURSE": "BTE306",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "353",
            "COURSE": "BTE307",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "354",
            "COURSE": "BTE307",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "355",
            "COURSE": "BTE308",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "356",
            "COURSE": "BTE308",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "357",
            "COURSE": "BTE309",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "358",
            "COURSE": "BTE309",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "359",
            "COURSE": "BTE310",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "360",
            "COURSE": "BTE310",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "361",
            "COURSE": "BTE311",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "362",
            "COURSE": "BTE311",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "363",
            "COURSE": "BTE317",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "364",
            "COURSE": "BTE317",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "365",
            "COURSE": "BTE317",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "366",
            "COURSE": "BTE317",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3373",
            "COURSE": "BTE400",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "FRIDAY",
            "START-TIME": "06:00 PM",
            "END-TIME": "09:00 PM"
        },
        {
            "SL": "0000374",
            "COURSE": "BTE401",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "376",
            "COURSE": "BTE401",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "21901377",
            "COURSE": "BTE401",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "21901378",
            "COURSE": "BTE402",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "379",
            "COURSE": "BTE402",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "380",
            "COURSE": "BTE403",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "381",
            "COURSE": "BTE403",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "382",
            "COURSE": "BTE404",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "383",
            "COURSE": "BTE404",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "384",
            "COURSE": "BTE405",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "385",
            "COURSE": "BTE405",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "386",
            "COURSE": "BTE406",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "387",
            "COURSE": "BTE406",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "388",
            "COURSE": "BTE409",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "21901389",
            "COURSE": "BTE409",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "21901390",
            "COURSE": "BTE411",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "391",
            "COURSE": "BTE411",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "392",
            "COURSE": "BTE450",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "FRIDAY",
            "START-TIME": "06:00 PM",
            "END-TIME": "09:00 PM"
        },
        {
            "SL": "0000393",
            "COURSE": "BUS102",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "SATURDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "394",
            "COURSE": "BUS102",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "THURSDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "397",
            "COURSE": "BUS102",
            "DEPARTMENT": "TBA",
            "SECTION": "22",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "398",
            "COURSE": "BUS102",
            "DEPARTMENT": "TBA",
            "SECTION": "22",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "399",
            "COURSE": "BUS102",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "400",
            "COURSE": "BUS102",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "401",
            "COURSE": "BUS102",
            "DEPARTMENT": "TBA",
            "SECTION": "21",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "402",
            "COURSE": "BUS102",
            "DEPARTMENT": "TBA",
            "SECTION": "21",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "403",
            "COURSE": "BUS102",
            "DEPARTMENT": "AAK",
            "SECTION": "05",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "404",
            "COURSE": "BUS102",
            "DEPARTMENT": "AAK",
            "SECTION": "05",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "405",
            "COURSE": "BUS102",
            "DEPARTMENT": "TTB",
            "SECTION": "07",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "406",
            "COURSE": "BUS102",
            "DEPARTMENT": "TTB",
            "SECTION": "07",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "407",
            "COURSE": "BUS102",
            "DEPARTMENT": "NAC",
            "SECTION": "14",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "408",
            "COURSE": "BUS102",
            "DEPARTMENT": "NAC",
            "SECTION": "14",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "411",
            "COURSE": "BUS102",
            "DEPARTMENT": "TBA",
            "SECTION": "20",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "412",
            "COURSE": "BUS102",
            "DEPARTMENT": "TBA",
            "SECTION": "20",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "413",
            "COURSE": "BUS102",
            "DEPARTMENT": "TBA",
            "SECTION": "23",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "414",
            "COURSE": "BUS102",
            "DEPARTMENT": "TBA",
            "SECTION": "23",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "415",
            "COURSE": "BUS102",
            "DEPARTMENT": "TAK",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "416",
            "COURSE": "BUS102",
            "DEPARTMENT": "TAK",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "417",
            "COURSE": "BUS102",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "418",
            "COURSE": "BUS102",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "419",
            "COURSE": "BUS102",
            "DEPARTMENT": "TBA",
            "SECTION": "17",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "420",
            "COURSE": "BUS102",
            "DEPARTMENT": "TBA",
            "SECTION": "17",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "421",
            "COURSE": "BUS102",
            "DEPARTMENT": "TAK",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "422",
            "COURSE": "BUS102",
            "DEPARTMENT": "TAK",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "423",
            "COURSE": "BUS102",
            "DEPARTMENT": "AAK",
            "SECTION": "06",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "424",
            "COURSE": "BUS102",
            "DEPARTMENT": "AAK",
            "SECTION": "06",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "425",
            "COURSE": "BUS102",
            "DEPARTMENT": "ZHM",
            "SECTION": "11",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "426",
            "COURSE": "BUS102",
            "DEPARTMENT": "ZHM",
            "SECTION": "11",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "427",
            "COURSE": "BUS102",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "428",
            "COURSE": "BUS102",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "429",
            "COURSE": "BUS102",
            "DEPARTMENT": "TTB",
            "SECTION": "04",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "430",
            "COURSE": "BUS102",
            "DEPARTMENT": "TTB",
            "SECTION": "04",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "431",
            "COURSE": "BUS102",
            "DEPARTMENT": "TBA",
            "SECTION": "24",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "432",
            "COURSE": "BUS102",
            "DEPARTMENT": "TBA",
            "SECTION": "24",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "433",
            "COURSE": "BUS102",
            "DEPARTMENT": "TBA",
            "SECTION": "19",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "434",
            "COURSE": "BUS102",
            "DEPARTMENT": "TBA",
            "SECTION": "19",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "435",
            "COURSE": "BUS102",
            "DEPARTMENT": "TBA",
            "SECTION": "16",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "436",
            "COURSE": "BUS102",
            "DEPARTMENT": "TBA",
            "SECTION": "16",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "437",
            "COURSE": "BUS102",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "440",
            "COURSE": "BUS102",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "441",
            "COURSE": "BUS201",
            "DEPARTMENT": "MKT",
            "SECTION": "10",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "442",
            "COURSE": "BUS201",
            "DEPARTMENT": "MKT",
            "SECTION": "10",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "443",
            "COURSE": "BUS201",
            "DEPARTMENT": "SEQ",
            "SECTION": "15",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "444",
            "COURSE": "BUS201",
            "DEPARTMENT": "SEQ",
            "SECTION": "15",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "445",
            "COURSE": "BUS201",
            "DEPARTMENT": "SEQ",
            "SECTION": "16",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "446",
            "COURSE": "BUS201",
            "DEPARTMENT": "SEQ",
            "SECTION": "16",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "447",
            "COURSE": "BUS201",
            "DEPARTMENT": "MKT",
            "SECTION": "18",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "448",
            "COURSE": "BUS201",
            "DEPARTMENT": "MKT",
            "SECTION": "18",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "449",
            "COURSE": "BUS201",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "450",
            "COURSE": "BUS201",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "451",
            "COURSE": "BUS201",
            "DEPARTMENT": "NBR",
            "SECTION": "09",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "452",
            "COURSE": "BUS201",
            "DEPARTMENT": "NBR",
            "SECTION": "09",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "453",
            "COURSE": "BUS201",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "454",
            "COURSE": "BUS201",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "455",
            "COURSE": "BUS201",
            "DEPARTMENT": "TTB",
            "SECTION": "12",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "456",
            "COURSE": "BUS201",
            "DEPARTMENT": "TTB",
            "SECTION": "12",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "457",
            "COURSE": "BUS201",
            "DEPARTMENT": "TTB",
            "SECTION": "14",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "458",
            "COURSE": "BUS201",
            "DEPARTMENT": "TTB",
            "SECTION": "14",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "459",
            "COURSE": "BUS201",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "460",
            "COURSE": "BUS201",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "461",
            "COURSE": "BUS201",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "462",
            "COURSE": "BUS201",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "463",
            "COURSE": "BUS201",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "464",
            "COURSE": "BUS201",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "465",
            "COURSE": "BUS201",
            "DEPARTMENT": "NBR",
            "SECTION": "13",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "466",
            "COURSE": "BUS201",
            "DEPARTMENT": "NBR",
            "SECTION": "13",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "467",
            "COURSE": "BUS201",
            "DEPARTMENT": "FEA",
            "SECTION": "05",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "468",
            "COURSE": "BUS201",
            "DEPARTMENT": "FEA",
            "SECTION": "05",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "469",
            "COURSE": "BUS201",
            "DEPARTMENT": "FEA",
            "SECTION": "06",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "470",
            "COURSE": "BUS201",
            "DEPARTMENT": "FEA",
            "SECTION": "06",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "471",
            "COURSE": "BUS201",
            "DEPARTMENT": "FEA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "472",
            "COURSE": "BUS201",
            "DEPARTMENT": "FEA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "473",
            "COURSE": "BUS201",
            "DEPARTMENT": "TKM",
            "SECTION": "08",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "474",
            "COURSE": "BUS201",
            "DEPARTMENT": "TKM",
            "SECTION": "08",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "475",
            "COURSE": "BUS201",
            "DEPARTMENT": "TKM",
            "SECTION": "17",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "476",
            "COURSE": "BUS201",
            "DEPARTMENT": "TKM",
            "SECTION": "17",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "477",
            "COURSE": "BUS203",
            "DEPARTMENT": "RBB",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "478",
            "COURSE": "BUS203",
            "DEPARTMENT": "RBB",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "479",
            "COURSE": "BUS204",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "480",
            "COURSE": "BUS204",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "481",
            "COURSE": "BUS204",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "482",
            "COURSE": "BUS204",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "483",
            "COURSE": "BUS204",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "484",
            "COURSE": "BUS204",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "485",
            "COURSE": "BUS204",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "486",
            "COURSE": "BUS204",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "487",
            "COURSE": "BUS204",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "488",
            "COURSE": "BUS204",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "489",
            "COURSE": "BUS204",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "490",
            "COURSE": "BUS204",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "491",
            "COURSE": "BUS209",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "492",
            "COURSE": "BUS209",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "493",
            "COURSE": "BUS209",
            "DEPARTMENT": "EKR",
            "SECTION": "05",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "494",
            "COURSE": "BUS209",
            "DEPARTMENT": "EKR",
            "SECTION": "05",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "495",
            "COURSE": "BUS209",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "496",
            "COURSE": "BUS209",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "497",
            "COURSE": "BUS209",
            "DEPARTMENT": "SMB",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "498",
            "COURSE": "BUS209",
            "DEPARTMENT": "SMB",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "499",
            "COURSE": "BUS209",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "500",
            "COURSE": "BUS209",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "501",
            "COURSE": "BUS221",
            "DEPARTMENT": "AAC",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "502",
            "COURSE": "BUS221",
            "DEPARTMENT": "AAC",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "503",
            "COURSE": "BUS221",
            "DEPARTMENT": "NHF",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "504",
            "COURSE": "BUS221",
            "DEPARTMENT": "NHF",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "505",
            "COURSE": "BUS221",
            "DEPARTMENT": "AAC",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "506",
            "COURSE": "BUS221",
            "DEPARTMENT": "AAC",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "507",
            "COURSE": "BUS232",
            "DEPARTMENT": "MZN",
            "SECTION": "03",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "508",
            "COURSE": "BUS232",
            "DEPARTMENT": "MZN",
            "SECTION": "03",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "509",
            "COURSE": "BUS232",
            "DEPARTMENT": "ZHL",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "510",
            "COURSE": "BUS232",
            "DEPARTMENT": "ZHL",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "511",
            "COURSE": "BUS232",
            "DEPARTMENT": "MZN",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "512",
            "COURSE": "BUS232",
            "DEPARTMENT": "MZN",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "513",
            "COURSE": "BUS232",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "514",
            "COURSE": "BUS232",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "515",
            "COURSE": "BUS301",
            "DEPARTMENT": "MFE",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "516",
            "COURSE": "BUS301",
            "DEPARTMENT": "MFE",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "517",
            "COURSE": "BUS301",
            "DEPARTMENT": "MFE",
            "SECTION": "04",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "518",
            "COURSE": "BUS301",
            "DEPARTMENT": "MFE",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "519",
            "COURSE": "BUS301",
            "DEPARTMENT": "MFE",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "520",
            "COURSE": "BUS301",
            "DEPARTMENT": "MFE",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "521",
            "COURSE": "BUS301",
            "DEPARTMENT": "NHF",
            "SECTION": "05",
            "DAY": "SATURDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "522",
            "COURSE": "BUS301",
            "DEPARTMENT": "NHF",
            "SECTION": "05",
            "DAY": "THURSDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "523",
            "COURSE": "BUS301",
            "DEPARTMENT": "NHF",
            "SECTION": "03",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "524",
            "COURSE": "BUS301",
            "DEPARTMENT": "NHF",
            "SECTION": "03",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "525",
            "COURSE": "BUS334",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "526",
            "COURSE": "BUS334",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "527",
            "COURSE": "BUS335",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "528",
            "COURSE": "BUS335",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "529",
            "COURSE": "CEE211",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "09:55 AM"
        },
        {
            "SL": "530",
            "COURSE": "CEE211",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "09:55 AM"
        },
        {
            "SL": "531",
            "COURSE": "CEE212",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "09:55 AM"
        },
        {
            "SL": "532",
            "COURSE": "CEE212",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "09:55 AM"
        },
        {
            "SL": "533",
            "COURSE": "CEE213",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "09:55 AM"
        },
        {
            "SL": "534",
            "COURSE": "CEE213",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:00 AM",
            "END-TIME": "09:55 AM"
        },
        {
            "SL": "535",
            "COURSE": "CEE311",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "10:05 AM",
            "END-TIME": "11:00 AM"
        },
        {
            "SL": "536",
            "COURSE": "CEE311",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "10:05 AM",
            "END-TIME": "11:00 AM"
        },
        {
            "SL": "537",
            "COURSE": "CEE312",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "10:05 AM",
            "END-TIME": "11:00 AM"
        },
        {
            "SL": "538",
            "COURSE": "CEE312",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "10:05 AM",
            "END-TIME": "11:00 AM"
        },
        {
            "SL": "539",
            "COURSE": "CEE411",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "10:05 AM",
            "END-TIME": "11:00 AM"
        },
        {
            "SL": "540",
            "COURSE": "CEE411",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "10:05 AM",
            "END-TIME": "11:00 AM"
        },
        {
            "SL": "541",
            "COURSE": "CEE412",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "11:10 AM",
            "END-TIME": "12:05 PM"
        },
        {
            "SL": "542",
            "COURSE": "CEE412",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:10 AM",
            "END-TIME": "12:05 PM"
        },
        {
            "SL": "543",
            "COURSE": "CHE101",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "544",
            "COURSE": "CHE101",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "545",
            "COURSE": "CHE101",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "546",
            "COURSE": "CHE101",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "547",
            "COURSE": "CHE101",
            "DEPARTMENT": "TBA",
            "SECTION": "14",
            "DAY": "TUESDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "548",
            "COURSE": "CHE101",
            "DEPARTMENT": "TBA",
            "SECTION": "14",
            "DAY": "SUNDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "549",
            "COURSE": "CHE101",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "550",
            "COURSE": "CHE101",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "551",
            "COURSE": "CHE101",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "THURSDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "552",
            "COURSE": "CHE101",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "SATURDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "553",
            "COURSE": "CHE101",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "554",
            "COURSE": "CHE101",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "555",
            "COURSE": "CHE101",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "556",
            "COURSE": "CHE101",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "557",
            "COURSE": "CHE101",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "558",
            "COURSE": "CHE101",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "559",
            "COURSE": "CHE101",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "WEDNESDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "560",
            "COURSE": "CHE101",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "MONDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "561",
            "COURSE": "CHE101",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "THURSDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "562",
            "COURSE": "CHE101",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "SATURDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "563",
            "COURSE": "CHE101",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "564",
            "COURSE": "CHE101",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "565",
            "COURSE": "CHE101",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "566",
            "COURSE": "CHE101",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "567",
            "COURSE": "CHE101",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "568",
            "COURSE": "CHE101",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "569",
            "COURSE": "CHE101",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "570",
            "COURSE": "CHE101",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "571",
            "COURSE": "CHE110",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "572",
            "COURSE": "CHE110",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "573",
            "COURSE": "CHE110",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "574",
            "COURSE": "CHE110",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "575",
            "COURSE": "CHN101",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "576",
            "COURSE": "CHN101",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "577",
            "COURSE": "CHN101",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "578",
            "COURSE": "CHN101",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "579",
            "COURSE": "CHN101",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "580",
            "COURSE": "CHN101",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "581",
            "COURSE": "CHN101",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "582",
            "COURSE": "CHN101",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "583",
            "COURSE": "CHN101",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "584",
            "COURSE": "CHN101",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "585",
            "COURSE": "CHN101",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "586",
            "COURSE": "CHN101",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "587",
            "COURSE": "CHN101",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "588",
            "COURSE": "CHN101",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "589",
            "COURSE": "CSE101",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "590",
            "COURSE": "CSE101",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "591",
            "COURSE": "CSE101",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "592",
            "COURSE": "CSE101",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "593",
            "COURSE": "CSE101",
            "DEPARTMENT": "ASA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "594",
            "COURSE": "CSE101",
            "DEPARTMENT": "ASA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "595",
            "COURSE": "CSE101",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "596",
            "COURSE": "CSE101",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "597",
            "COURSE": "CSE101",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "598",
            "COURSE": "CSE101",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "599",
            "COURSE": "CSE101",
            "DEPARTMENT": "ASA",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "600",
            "COURSE": "CSE101",
            "DEPARTMENT": "ASA",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "601",
            "COURSE": "CSE101",
            "DEPARTMENT": "ASA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "602",
            "COURSE": "CSE101",
            "DEPARTMENT": "ASA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "603",
            "COURSE": "CSE101",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "604",
            "COURSE": "CSE101",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "605",
            "COURSE": "CSE101",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "606",
            "COURSE": "CSE101",
            "DEPARTMENT": "ASA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "607",
            "COURSE": "CSE101",
            "DEPARTMENT": "ASA",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "608",
            "COURSE": "CSE101",
            "DEPARTMENT": "ASA",
            "SECTION": "03",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "609",
            "COURSE": "CSE101",
            "DEPARTMENT": "ASA",
            "SECTION": "03",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "610",
            "COURSE": "CSE101",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "611",
            "COURSE": "CSE101",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "612",
            "COURSE": "CSE101",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "613",
            "COURSE": "CSE103",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "01:30 AM"
        },
        {
            "SL": "614",
            "COURSE": "CSE103",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "05:05 PM"
        },
        {
            "SL": "615",
            "COURSE": "CSE110",
            "DEPARTMENT": "WRA",
            "SECTION": "18",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "616",
            "COURSE": "CSE110",
            "DEPARTMENT": "WRA",
            "SECTION": "18",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "617",
            "COURSE": "CSE110",
            "DEPARTMENT": "WRA",
            "SECTION": "16",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "618",
            "COURSE": "CSE110",
            "DEPARTMENT": "WRA",
            "SECTION": "16",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "619",
            "COURSE": "CSE110",
            "DEPARTMENT": "SBB",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "620",
            "COURSE": "CSE110",
            "DEPARTMENT": "SBB",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "621",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "24",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "622",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "24",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "623",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "26",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "624",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "26",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "625",
            "COURSE": "CSE110",
            "DEPARTMENT": "NAD",
            "SECTION": "09",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "626",
            "COURSE": "CSE110",
            "DEPARTMENT": "NAD",
            "SECTION": "09",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "627",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "25",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "628",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "25",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "629",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "19",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "630",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "19",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "631",
            "COURSE": "CSE110",
            "DEPARTMENT": "MSI",
            "SECTION": "15",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "632",
            "COURSE": "CSE110",
            "DEPARTMENT": "MSI",
            "SECTION": "15",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "633",
            "COURSE": "CSE110",
            "DEPARTMENT": "TAW",
            "SECTION": "06",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "634",
            "COURSE": "CSE110",
            "DEPARTMENT": "TAW",
            "SECTION": "06",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "635",
            "COURSE": "CSE110",
            "DEPARTMENT": "MSI",
            "SECTION": "13",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "636",
            "COURSE": "CSE110",
            "DEPARTMENT": "MSI",
            "SECTION": "13",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "637",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "27",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "638",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "27",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "639",
            "COURSE": "CSE110",
            "DEPARTMENT": "DFD",
            "SECTION": "04",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "640",
            "COURSE": "CSE110",
            "DEPARTMENT": "DFD",
            "SECTION": "04",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "641",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "22",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "642",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "22",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "643",
            "COURSE": "CSE110",
            "DEPARTMENT": "MNY",
            "SECTION": "11",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "644",
            "COURSE": "CSE110",
            "DEPARTMENT": "MNY",
            "SECTION": "11",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "645",
            "COURSE": "CSE110",
            "DEPARTMENT": "MNY",
            "SECTION": "10",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "646",
            "COURSE": "CSE110",
            "DEPARTMENT": "MNY",
            "SECTION": "10",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "647",
            "COURSE": "CSE110",
            "DEPARTMENT": "NAD",
            "SECTION": "08",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "648",
            "COURSE": "CSE110",
            "DEPARTMENT": "NAD",
            "SECTION": "08",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "649",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "650",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "651",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "652",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "653",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "21",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "654",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "21",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "655",
            "COURSE": "CSE110",
            "DEPARTMENT": "WRA",
            "SECTION": "17",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "656",
            "COURSE": "CSE110",
            "DEPARTMENT": "WRA",
            "SECTION": "17",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "657",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "28",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "658",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "28",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "659",
            "COURSE": "CSE110",
            "DEPARTMENT": "MSI",
            "SECTION": "12",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "660",
            "COURSE": "CSE110",
            "DEPARTMENT": "MSI",
            "SECTION": "12",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "661",
            "COURSE": "CSE110",
            "DEPARTMENT": "SBB",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "662",
            "COURSE": "CSE110",
            "DEPARTMENT": "SBB",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "663",
            "COURSE": "CSE110",
            "DEPARTMENT": "NSB",
            "SECTION": "07",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "664",
            "COURSE": "CSE110",
            "DEPARTMENT": "NSB",
            "SECTION": "07",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "665",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "20",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "666",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "20",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "667",
            "COURSE": "CSE110",
            "DEPARTMENT": "MSI",
            "SECTION": "14",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "668",
            "COURSE": "CSE110",
            "DEPARTMENT": "MSI",
            "SECTION": "14",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "669",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "23",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "670",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "23",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "671",
            "COURSE": "CSE110",
            "DEPARTMENT": "MSI",
            "SECTION": "15",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "672",
            "COURSE": "CSE110",
            "DEPARTMENT": "MSI",
            "SECTION": "15",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "673",
            "COURSE": "CSE110",
            "DEPARTMENT": "MNY",
            "SECTION": "11",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "674",
            "COURSE": "CSE110",
            "DEPARTMENT": "MNY",
            "SECTION": "11",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "675",
            "COURSE": "CSE110",
            "DEPARTMENT": "NAD",
            "SECTION": "09",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "676",
            "COURSE": "CSE110",
            "DEPARTMENT": "NAD",
            "SECTION": "09",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "677",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "19",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "678",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "19",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "679",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "23",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "680",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "23",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "681",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "24",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "682",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "24",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "683",
            "COURSE": "CSE110",
            "DEPARTMENT": "MSI",
            "SECTION": "14",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "684",
            "COURSE": "CSE110",
            "DEPARTMENT": "MSI",
            "SECTION": "14",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "685",
            "COURSE": "CSE110",
            "DEPARTMENT": "TAW",
            "SECTION": "06",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "686",
            "COURSE": "CSE110",
            "DEPARTMENT": "TAW",
            "SECTION": "06",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "687",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "27",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "688",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "27",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "689",
            "COURSE": "CSE110",
            "DEPARTMENT": "NAD",
            "SECTION": "08",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "690",
            "COURSE": "CSE110",
            "DEPARTMENT": "NAD",
            "SECTION": "08",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "691",
            "COURSE": "CSE110",
            "DEPARTMENT": "DFD",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "692",
            "COURSE": "CSE110",
            "DEPARTMENT": "DFD",
            "SECTION": "03",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "693",
            "COURSE": "CSE110",
            "DEPARTMENT": "MNY",
            "SECTION": "10",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "694",
            "COURSE": "CSE110",
            "DEPARTMENT": "MNY",
            "SECTION": "10",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "695",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "28",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "696",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "28",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "697",
            "COURSE": "CSE110",
            "DEPARTMENT": "NSB",
            "SECTION": "07",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "698",
            "COURSE": "CSE110",
            "DEPARTMENT": "NSB",
            "SECTION": "07",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "699",
            "COURSE": "CSE110",
            "DEPARTMENT": "WRA",
            "SECTION": "16",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "700",
            "COURSE": "CSE110",
            "DEPARTMENT": "WRA",
            "SECTION": "16",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "701",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "26",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "702",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "26",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "703",
            "COURSE": "CSE110",
            "DEPARTMENT": "WRA",
            "SECTION": "18",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "704",
            "COURSE": "CSE110",
            "DEPARTMENT": "WRA",
            "SECTION": "18",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "705",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "25",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "706",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "25",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "707",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "21",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "708",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "21",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "709",
            "COURSE": "CSE110",
            "DEPARTMENT": "MSI",
            "SECTION": "13",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "710",
            "COURSE": "CSE110",
            "DEPARTMENT": "MSI",
            "SECTION": "13",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "711",
            "COURSE": "CSE110",
            "DEPARTMENT": "SBB",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "712",
            "COURSE": "CSE110",
            "DEPARTMENT": "SBB",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "713",
            "COURSE": "CSE110",
            "DEPARTMENT": "WRA",
            "SECTION": "17",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "714",
            "COURSE": "CSE110",
            "DEPARTMENT": "WRA",
            "SECTION": "17",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "715",
            "COURSE": "CSE110",
            "DEPARTMENT": "SBB",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "716",
            "COURSE": "CSE110",
            "DEPARTMENT": "SBB",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "717",
            "COURSE": "CSE110",
            "DEPARTMENT": "MSI",
            "SECTION": "12",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "718",
            "COURSE": "CSE110",
            "DEPARTMENT": "MSI",
            "SECTION": "12",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "719",
            "COURSE": "CSE110",
            "DEPARTMENT": "DFD",
            "SECTION": "04",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "720",
            "COURSE": "CSE110",
            "DEPARTMENT": "DFD",
            "SECTION": "04",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "721",
            "COURSE": "CSE110",
            "DEPARTMENT": "DFD",
            "SECTION": "05",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "722",
            "COURSE": "CSE110",
            "DEPARTMENT": "DFD",
            "SECTION": "05",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "723",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "20",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "724",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "20",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "725",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "22",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "726",
            "COURSE": "CSE110",
            "DEPARTMENT": "TBA",
            "SECTION": "22",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "727",
            "COURSE": "CSE111",
            "DEPARTMENT": "SBB",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "728",
            "COURSE": "CSE111",
            "DEPARTMENT": "SBB",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "729",
            "COURSE": "CSE111",
            "DEPARTMENT": "TMD",
            "SECTION": "16",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "730",
            "COURSE": "CSE111",
            "DEPARTMENT": "TMD",
            "SECTION": "16",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "731",
            "COURSE": "CSE111",
            "DEPARTMENT": "SAD",
            "SECTION": "23",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "732",
            "COURSE": "CSE111",
            "DEPARTMENT": "SAD",
            "SECTION": "23",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "733",
            "COURSE": "CSE111",
            "DEPARTMENT": "TAW",
            "SECTION": "09",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "734",
            "COURSE": "CSE111",
            "DEPARTMENT": "TAW",
            "SECTION": "09",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "735",
            "COURSE": "CSE111",
            "DEPARTMENT": "SAD",
            "SECTION": "22",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "736",
            "COURSE": "CSE111",
            "DEPARTMENT": "SAD",
            "SECTION": "22",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "737",
            "COURSE": "CSE111",
            "DEPARTMENT": "TBA",
            "SECTION": "28",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "738",
            "COURSE": "CSE111",
            "DEPARTMENT": "TBA",
            "SECTION": "28",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "739",
            "COURSE": "CSE111",
            "DEPARTMENT": "SAD",
            "SECTION": "24",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "740",
            "COURSE": "CSE111",
            "DEPARTMENT": "SAD",
            "SECTION": "24",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "741",
            "COURSE": "CSE111",
            "DEPARTMENT": "TMD",
            "SECTION": "17",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "742",
            "COURSE": "CSE111",
            "DEPARTMENT": "TMD",
            "SECTION": "17",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "743",
            "COURSE": "CSE111",
            "DEPARTMENT": "RAK",
            "SECTION": "18",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "744",
            "COURSE": "CSE111",
            "DEPARTMENT": "RAK",
            "SECTION": "18",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "745",
            "COURSE": "CSE111",
            "DEPARTMENT": "ZTB",
            "SECTION": "10",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "746",
            "COURSE": "CSE111",
            "DEPARTMENT": "ZTB",
            "SECTION": "10",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "747",
            "COURSE": "CSE111",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "748",
            "COURSE": "CSE111",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "749",
            "COURSE": "CSE111",
            "DEPARTMENT": "SHRR",
            "SECTION": "20",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "750",
            "COURSE": "CSE111",
            "DEPARTMENT": "SHRR",
            "SECTION": "20",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "751",
            "COURSE": "CSE111",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "752",
            "COURSE": "CSE111",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "753",
            "COURSE": "CSE111",
            "DEPARTMENT": "ZTB",
            "SECTION": "11",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "754",
            "COURSE": "CSE111",
            "DEPARTMENT": "ZTB",
            "SECTION": "11",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "755",
            "COURSE": "CSE111",
            "DEPARTMENT": "PRN",
            "SECTION": "05",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "756",
            "COURSE": "CSE111",
            "DEPARTMENT": "PRN",
            "SECTION": "05",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "757",
            "COURSE": "CSE111",
            "DEPARTMENT": "TAW",
            "SECTION": "07",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "758",
            "COURSE": "CSE111",
            "DEPARTMENT": "TAW",
            "SECTION": "07",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "759",
            "COURSE": "CSE111",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "760",
            "COURSE": "CSE111",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "761",
            "COURSE": "CSE111",
            "DEPARTMENT": "TBA",
            "SECTION": "30",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "762",
            "COURSE": "CSE111",
            "DEPARTMENT": "TBA",
            "SECTION": "30",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "763",
            "COURSE": "CSE111",
            "DEPARTMENT": "TAW",
            "SECTION": "08",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "764",
            "COURSE": "CSE111",
            "DEPARTMENT": "TAW",
            "SECTION": "08",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "765",
            "COURSE": "CSE111",
            "DEPARTMENT": "TBA",
            "SECTION": "27",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "766",
            "COURSE": "CSE111",
            "DEPARTMENT": "TBA",
            "SECTION": "27",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "767",
            "COURSE": "CSE111",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "768",
            "COURSE": "CSE111",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "769",
            "COURSE": "CSE111",
            "DEPARTMENT": "SAD",
            "SECTION": "25",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "770",
            "COURSE": "CSE111",
            "DEPARTMENT": "SAD",
            "SECTION": "25",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "771",
            "COURSE": "CSE111",
            "DEPARTMENT": "TBA",
            "SECTION": "26",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "772",
            "COURSE": "CSE111",
            "DEPARTMENT": "TBA",
            "SECTION": "26",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "773",
            "COURSE": "CSE111",
            "DEPARTMENT": "SCD",
            "SECTION": "14",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "774",
            "COURSE": "CSE111",
            "DEPARTMENT": "SCD",
            "SECTION": "14",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "775",
            "COURSE": "CSE111",
            "DEPARTMENT": "SBB",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "776",
            "COURSE": "CSE111",
            "DEPARTMENT": "SBB",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "777",
            "COURSE": "CSE111",
            "DEPARTMENT": "SCD",
            "SECTION": "15",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "778",
            "COURSE": "CSE111",
            "DEPARTMENT": "SCD",
            "SECTION": "15",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "779",
            "COURSE": "CSE111",
            "DEPARTMENT": "PRN",
            "SECTION": "06",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "780",
            "COURSE": "CSE111",
            "DEPARTMENT": "PRN",
            "SECTION": "06",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "781",
            "COURSE": "CSE111",
            "DEPARTMENT": "RAK",
            "SECTION": "19",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "782",
            "COURSE": "CSE111",
            "DEPARTMENT": "RAK",
            "SECTION": "19",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "783",
            "COURSE": "CSE111",
            "DEPARTMENT": "SHRR",
            "SECTION": "21",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "784",
            "COURSE": "CSE111",
            "DEPARTMENT": "SHRR",
            "SECTION": "21",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "785",
            "COURSE": "CSE111",
            "DEPARTMENT": "TBA",
            "SECTION": "29",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "786",
            "COURSE": "CSE111",
            "DEPARTMENT": "TBA",
            "SECTION": "29",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "787",
            "COURSE": "CSE111",
            "DEPARTMENT": "TAW",
            "SECTION": "07",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "788",
            "COURSE": "CSE111",
            "DEPARTMENT": "TAW",
            "SECTION": "07",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "789",
            "COURSE": "CSE111",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "790",
            "COURSE": "CSE111",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "791",
            "COURSE": "CSE111",
            "DEPARTMENT": "TAW",
            "SECTION": "08",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "792",
            "COURSE": "CSE111",
            "DEPARTMENT": "TAW",
            "SECTION": "08",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "793",
            "COURSE": "CSE111",
            "DEPARTMENT": "TBA",
            "SECTION": "29",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "794",
            "COURSE": "CSE111",
            "DEPARTMENT": "TBA",
            "SECTION": "29",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "795",
            "COURSE": "CSE111",
            "DEPARTMENT": "TBA",
            "SECTION": "26",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "796",
            "COURSE": "CSE111",
            "DEPARTMENT": "TBA",
            "SECTION": "26",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "797",
            "COURSE": "CSE111",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "798",
            "COURSE": "CSE111",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "799",
            "COURSE": "CSE111",
            "DEPARTMENT": "RAK",
            "SECTION": "18",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "800",
            "COURSE": "CSE111",
            "DEPARTMENT": "RAK",
            "SECTION": "18",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "801",
            "COURSE": "CSE111",
            "DEPARTMENT": "SAD",
            "SECTION": "24",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "802",
            "COURSE": "CSE111",
            "DEPARTMENT": "SAD",
            "SECTION": "24",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "803",
            "COURSE": "CSE111",
            "DEPARTMENT": "SAD",
            "SECTION": "23",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "804",
            "COURSE": "CSE111",
            "DEPARTMENT": "SAD",
            "SECTION": "23",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "805",
            "COURSE": "CSE111",
            "DEPARTMENT": "SCD",
            "SECTION": "14",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "806",
            "COURSE": "CSE111",
            "DEPARTMENT": "SCD",
            "SECTION": "14",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "807",
            "COURSE": "CSE111",
            "DEPARTMENT": "ZTB",
            "SECTION": "11",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "808",
            "COURSE": "CSE111",
            "DEPARTMENT": "ZTB",
            "SECTION": "11",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "809",
            "COURSE": "CSE111",
            "DEPARTMENT": "RAK",
            "SECTION": "19",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "810",
            "COURSE": "CSE111",
            "DEPARTMENT": "RAK",
            "SECTION": "19",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "811",
            "COURSE": "CSE111",
            "DEPARTMENT": "SBB",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "812",
            "COURSE": "CSE111",
            "DEPARTMENT": "SBB",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "813",
            "COURSE": "CSE111",
            "DEPARTMENT": "TBA",
            "SECTION": "27",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "814",
            "COURSE": "CSE111",
            "DEPARTMENT": "TBA",
            "SECTION": "27",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "815",
            "COURSE": "CSE111",
            "DEPARTMENT": "TBA",
            "SECTION": "28",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "816",
            "COURSE": "CSE111",
            "DEPARTMENT": "TBA",
            "SECTION": "28",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "817",
            "COURSE": "CSE111",
            "DEPARTMENT": "ZTB",
            "SECTION": "10",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "818",
            "COURSE": "CSE111",
            "DEPARTMENT": "ZTB",
            "SECTION": "10",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "819",
            "COURSE": "CSE111",
            "DEPARTMENT": "SHRR",
            "SECTION": "21",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "820",
            "COURSE": "CSE111",
            "DEPARTMENT": "SHRR",
            "SECTION": "21",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "821",
            "COURSE": "CSE111",
            "DEPARTMENT": "TMD",
            "SECTION": "16",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "822",
            "COURSE": "CSE111",
            "DEPARTMENT": "TMD",
            "SECTION": "16",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "823",
            "COURSE": "CSE111",
            "DEPARTMENT": "PRN",
            "SECTION": "05",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "824",
            "COURSE": "CSE111",
            "DEPARTMENT": "PRN",
            "SECTION": "05",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "825",
            "COURSE": "CSE111",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "826",
            "COURSE": "CSE111",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "827",
            "COURSE": "CSE111",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "828",
            "COURSE": "CSE111",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "829",
            "COURSE": "CSE111",
            "DEPARTMENT": "SCD",
            "SECTION": "15",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "830",
            "COURSE": "CSE111",
            "DEPARTMENT": "SCD",
            "SECTION": "15",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "831",
            "COURSE": "CSE111",
            "DEPARTMENT": "PRN",
            "SECTION": "06",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "832",
            "COURSE": "CSE111",
            "DEPARTMENT": "PRN",
            "SECTION": "06",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "833",
            "COURSE": "CSE111",
            "DEPARTMENT": "TBA",
            "SECTION": "30",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "834",
            "COURSE": "CSE111",
            "DEPARTMENT": "TBA",
            "SECTION": "30",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "835",
            "COURSE": "CSE111",
            "DEPARTMENT": "SBB",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "836",
            "COURSE": "CSE111",
            "DEPARTMENT": "SBB",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "837",
            "COURSE": "CSE111",
            "DEPARTMENT": "SHRR",
            "SECTION": "20",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "838",
            "COURSE": "CSE111",
            "DEPARTMENT": "SHRR",
            "SECTION": "20",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "839",
            "COURSE": "CSE111",
            "DEPARTMENT": "TAW",
            "SECTION": "09",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "840",
            "COURSE": "CSE111",
            "DEPARTMENT": "TAW",
            "SECTION": "09",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "841",
            "COURSE": "CSE111",
            "DEPARTMENT": "SAD",
            "SECTION": "25",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "842",
            "COURSE": "CSE111",
            "DEPARTMENT": "SAD",
            "SECTION": "25",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "843",
            "COURSE": "CSE111",
            "DEPARTMENT": "TMD",
            "SECTION": "17",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "844",
            "COURSE": "CSE111",
            "DEPARTMENT": "TMD",
            "SECTION": "17",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "845",
            "COURSE": "CSE111",
            "DEPARTMENT": "SAD",
            "SECTION": "22",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "846",
            "COURSE": "CSE111",
            "DEPARTMENT": "SAD",
            "SECTION": "22",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "847",
            "COURSE": "CSE220",
            "DEPARTMENT": "AJA",
            "SECTION": "05",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "848",
            "COURSE": "CSE220",
            "DEPARTMENT": "AJA",
            "SECTION": "05",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "849",
            "COURSE": "CSE220",
            "DEPARTMENT": "ZMD",
            "SECTION": "13",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "850",
            "COURSE": "CSE220",
            "DEPARTMENT": "ZMD",
            "SECTION": "13",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "851",
            "COURSE": "CSE220",
            "DEPARTMENT": "PNP",
            "SECTION": "25",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "852",
            "COURSE": "CSE220",
            "DEPARTMENT": "PNP",
            "SECTION": "25",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "853",
            "COURSE": "CSE220",
            "DEPARTMENT": "SFF",
            "SECTION": "28",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "854",
            "COURSE": "CSE220",
            "DEPARTMENT": "SFF",
            "SECTION": "28",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "855",
            "COURSE": "CSE220",
            "DEPARTMENT": "ABW",
            "SECTION": "03",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "856",
            "COURSE": "CSE220",
            "DEPARTMENT": "ABW",
            "SECTION": "03",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "857",
            "COURSE": "CSE220",
            "DEPARTMENT": "AJA",
            "SECTION": "06",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "858",
            "COURSE": "CSE220",
            "DEPARTMENT": "AJA",
            "SECTION": "06",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "859",
            "COURSE": "CSE220",
            "DEPARTMENT": "JMA",
            "SECTION": "10",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "860",
            "COURSE": "CSE220",
            "DEPARTMENT": "JMA",
            "SECTION": "10",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "861",
            "COURSE": "CSE220",
            "DEPARTMENT": "ZMD",
            "SECTION": "15",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "862",
            "COURSE": "CSE220",
            "DEPARTMENT": "ZMD",
            "SECTION": "15",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "863",
            "COURSE": "CSE220",
            "DEPARTMENT": "MTD",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "864",
            "COURSE": "CSE220",
            "DEPARTMENT": "MTD",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "865",
            "COURSE": "CSE220",
            "DEPARTMENT": "JMA",
            "SECTION": "09",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "866",
            "COURSE": "CSE220",
            "DEPARTMENT": "JMA",
            "SECTION": "09",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "867",
            "COURSE": "CSE220",
            "DEPARTMENT": "TBA",
            "SECTION": "22",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "868",
            "COURSE": "CSE220",
            "DEPARTMENT": "TBA",
            "SECTION": "22",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "869",
            "COURSE": "CSE220",
            "DEPARTMENT": "MTT",
            "SECTION": "27",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "870",
            "COURSE": "CSE220",
            "DEPARTMENT": "MTT",
            "SECTION": "27",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "871",
            "COURSE": "CSE220",
            "DEPARTMENT": "NSB",
            "SECTION": "11",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "872",
            "COURSE": "CSE220",
            "DEPARTMENT": "NSB",
            "SECTION": "11",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "873",
            "COURSE": "CSE220",
            "DEPARTMENT": "MTD",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "874",
            "COURSE": "CSE220",
            "DEPARTMENT": "MTD",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "875",
            "COURSE": "CSE220",
            "DEPARTMENT": "SFF",
            "SECTION": "29",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "876",
            "COURSE": "CSE220",
            "DEPARTMENT": "SFF",
            "SECTION": "29",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "877",
            "COURSE": "CSE220",
            "DEPARTMENT": "PNP",
            "SECTION": "26",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "878",
            "COURSE": "CSE220",
            "DEPARTMENT": "PNP",
            "SECTION": "26",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "879",
            "COURSE": "CSE220",
            "DEPARTMENT": "ZMD",
            "SECTION": "14",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "880",
            "COURSE": "CSE220",
            "DEPARTMENT": "ZMD",
            "SECTION": "14",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "881",
            "COURSE": "CSE220",
            "DEPARTMENT": "ANL",
            "SECTION": "20",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "882",
            "COURSE": "CSE220",
            "DEPARTMENT": "ANL",
            "SECTION": "20",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "883",
            "COURSE": "CSE220",
            "DEPARTMENT": "TBA",
            "SECTION": "21",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "884",
            "COURSE": "CSE220",
            "DEPARTMENT": "TBA",
            "SECTION": "21",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "885",
            "COURSE": "CSE220",
            "DEPARTMENT": "NAD",
            "SECTION": "17",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "886",
            "COURSE": "CSE220",
            "DEPARTMENT": "NAD",
            "SECTION": "17",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "887",
            "COURSE": "CSE220",
            "DEPARTMENT": "TBA",
            "SECTION": "30",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "888",
            "COURSE": "CSE220",
            "DEPARTMENT": "TBA",
            "SECTION": "30",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "889",
            "COURSE": "CSE220",
            "DEPARTMENT": "NZF",
            "SECTION": "18",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "890",
            "COURSE": "CSE220",
            "DEPARTMENT": "NZF",
            "SECTION": "18",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "891",
            "COURSE": "CSE220",
            "DEPARTMENT": "AHU",
            "SECTION": "23",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "892",
            "COURSE": "CSE220",
            "DEPARTMENT": "AHU",
            "SECTION": "23",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "893",
            "COURSE": "CSE220",
            "DEPARTMENT": "NZF",
            "SECTION": "19",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "894",
            "COURSE": "CSE220",
            "DEPARTMENT": "NZF",
            "SECTION": "19",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "895",
            "COURSE": "CSE220",
            "DEPARTMENT": "NSB",
            "SECTION": "12",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "896",
            "COURSE": "CSE220",
            "DEPARTMENT": "NSB",
            "SECTION": "12",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "897",
            "COURSE": "CSE220",
            "DEPARTMENT": "PRN",
            "SECTION": "08",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "898",
            "COURSE": "CSE220",
            "DEPARTMENT": "PRN",
            "SECTION": "08",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "899",
            "COURSE": "CSE220",
            "DEPARTMENT": "NAD",
            "SECTION": "16",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "900",
            "COURSE": "CSE220",
            "DEPARTMENT": "NAD",
            "SECTION": "16",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "901",
            "COURSE": "CSE220",
            "DEPARTMENT": "PRN",
            "SECTION": "07",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "902",
            "COURSE": "CSE220",
            "DEPARTMENT": "PRN",
            "SECTION": "07",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "903",
            "COURSE": "CSE220",
            "DEPARTMENT": "TBA",
            "SECTION": "31",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "904",
            "COURSE": "CSE220",
            "DEPARTMENT": "TBA",
            "SECTION": "31",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "905",
            "COURSE": "CSE220",
            "DEPARTMENT": "ABW",
            "SECTION": "04",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "906",
            "COURSE": "CSE220",
            "DEPARTMENT": "ABW",
            "SECTION": "04",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "907",
            "COURSE": "CSE220",
            "DEPARTMENT": "TBA",
            "SECTION": "32",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "908",
            "COURSE": "CSE220",
            "DEPARTMENT": "TBA",
            "SECTION": "32",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "909",
            "COURSE": "CSE220",
            "DEPARTMENT": "MTT",
            "SECTION": "27",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "910",
            "COURSE": "CSE220",
            "DEPARTMENT": "MTT",
            "SECTION": "27",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "911",
            "COURSE": "CSE220",
            "DEPARTMENT": "ZMD",
            "SECTION": "14",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "912",
            "COURSE": "CSE220",
            "DEPARTMENT": "ZMD",
            "SECTION": "14",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "913",
            "COURSE": "CSE220",
            "DEPARTMENT": "PRN",
            "SECTION": "08",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "914",
            "COURSE": "CSE220",
            "DEPARTMENT": "PRN",
            "SECTION": "08",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "915",
            "COURSE": "CSE220",
            "DEPARTMENT": "AJA",
            "SECTION": "05",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "916",
            "COURSE": "CSE220",
            "DEPARTMENT": "AJA",
            "SECTION": "05",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "917",
            "COURSE": "CSE220",
            "DEPARTMENT": "NAD",
            "SECTION": "17",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "918",
            "COURSE": "CSE220",
            "DEPARTMENT": "NAD",
            "SECTION": "17",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "919",
            "COURSE": "CSE220",
            "DEPARTMENT": "JMA",
            "SECTION": "10",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "920",
            "COURSE": "CSE220",
            "DEPARTMENT": "JMA",
            "SECTION": "10",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "921",
            "COURSE": "CSE220",
            "DEPARTMENT": "PNP",
            "SECTION": "26",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "922",
            "COURSE": "CSE220",
            "DEPARTMENT": "PNP",
            "SECTION": "26",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "923",
            "COURSE": "CSE220",
            "DEPARTMENT": "ABW",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "924",
            "COURSE": "CSE220",
            "DEPARTMENT": "ABW",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "925",
            "COURSE": "CSE220",
            "DEPARTMENT": "JMA",
            "SECTION": "09",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "926",
            "COURSE": "CSE220",
            "DEPARTMENT": "JMA",
            "SECTION": "09",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "927",
            "COURSE": "CSE220",
            "DEPARTMENT": "ABW",
            "SECTION": "04",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "928",
            "COURSE": "CSE220",
            "DEPARTMENT": "ABW",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "929",
            "COURSE": "CSE220",
            "DEPARTMENT": "NZF",
            "SECTION": "18",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "930",
            "COURSE": "CSE220",
            "DEPARTMENT": "NZF",
            "SECTION": "18",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "931",
            "COURSE": "CSE220",
            "DEPARTMENT": "ZMD",
            "SECTION": "15",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "932",
            "COURSE": "CSE220",
            "DEPARTMENT": "ZMD",
            "SECTION": "15",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "933",
            "COURSE": "CSE220",
            "DEPARTMENT": "ANL",
            "SECTION": "20",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "934",
            "COURSE": "CSE220",
            "DEPARTMENT": "ANL",
            "SECTION": "20",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "935",
            "COURSE": "CSE220",
            "DEPARTMENT": "SFF",
            "SECTION": "29",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "936",
            "COURSE": "CSE220",
            "DEPARTMENT": "SFF",
            "SECTION": "29",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "937",
            "COURSE": "CSE220",
            "DEPARTMENT": "NSB",
            "SECTION": "11",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "938",
            "COURSE": "CSE220",
            "DEPARTMENT": "NSB",
            "SECTION": "11",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "939",
            "COURSE": "CSE220",
            "DEPARTMENT": "ZMD",
            "SECTION": "13",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "940",
            "COURSE": "CSE220",
            "DEPARTMENT": "ZMD",
            "SECTION": "13",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "941",
            "COURSE": "CSE220",
            "DEPARTMENT": "PNP",
            "SECTION": "25",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "942",
            "COURSE": "CSE220",
            "DEPARTMENT": "PNP",
            "SECTION": "25",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "943",
            "COURSE": "CSE220",
            "DEPARTMENT": "NZF",
            "SECTION": "19",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "944",
            "COURSE": "CSE220",
            "DEPARTMENT": "NZF",
            "SECTION": "19",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "945",
            "COURSE": "CSE220",
            "DEPARTMENT": "AJA",
            "SECTION": "06",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "946",
            "COURSE": "CSE220",
            "DEPARTMENT": "AJA",
            "SECTION": "06",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "947",
            "COURSE": "CSE220",
            "DEPARTMENT": "NAD",
            "SECTION": "16",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "948",
            "COURSE": "CSE220",
            "DEPARTMENT": "NAD",
            "SECTION": "16",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "949",
            "COURSE": "CSE220",
            "DEPARTMENT": "TBA",
            "SECTION": "22",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "950",
            "COURSE": "CSE220",
            "DEPARTMENT": "TBA",
            "SECTION": "22",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "951",
            "COURSE": "CSE220",
            "DEPARTMENT": "AHU",
            "SECTION": "24",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "952",
            "COURSE": "CSE220",
            "DEPARTMENT": "AHU",
            "SECTION": "24",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "953",
            "COURSE": "CSE220",
            "DEPARTMENT": "TBA",
            "SECTION": "21",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "954",
            "COURSE": "CSE220",
            "DEPARTMENT": "TBA",
            "SECTION": "21",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "955",
            "COURSE": "CSE220",
            "DEPARTMENT": "MTD",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "956",
            "COURSE": "CSE220",
            "DEPARTMENT": "MTD",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "957",
            "COURSE": "CSE220",
            "DEPARTMENT": "TBA",
            "SECTION": "30",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "958",
            "COURSE": "CSE220",
            "DEPARTMENT": "TBA",
            "SECTION": "30",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "959",
            "COURSE": "CSE220",
            "DEPARTMENT": "TBA",
            "SECTION": "31",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "960",
            "COURSE": "CSE220",
            "DEPARTMENT": "TBA",
            "SECTION": "31",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "961",
            "COURSE": "CSE220",
            "DEPARTMENT": "NSB",
            "SECTION": "12",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "962",
            "COURSE": "CSE220",
            "DEPARTMENT": "NSB",
            "SECTION": "12",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "963",
            "COURSE": "CSE220",
            "DEPARTMENT": "TBA",
            "SECTION": "32",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "964",
            "COURSE": "CSE220",
            "DEPARTMENT": "TBA",
            "SECTION": "32",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "965",
            "COURSE": "CSE220",
            "DEPARTMENT": "MTD",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "966",
            "COURSE": "CSE220",
            "DEPARTMENT": "MTD",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "967",
            "COURSE": "CSE220",
            "DEPARTMENT": "PRN",
            "SECTION": "07",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "968",
            "COURSE": "CSE220",
            "DEPARTMENT": "PRN",
            "SECTION": "07",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "969",
            "COURSE": "CSE220",
            "DEPARTMENT": "SFF",
            "SECTION": "28",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "970",
            "COURSE": "CSE220",
            "DEPARTMENT": "SFF",
            "SECTION": "28",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "971",
            "COURSE": "CSE221",
            "DEPARTMENT": "SFF",
            "SECTION": "18",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "972",
            "COURSE": "CSE221",
            "DEPARTMENT": "SFF",
            "SECTION": "18",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "973",
            "COURSE": "CSE221",
            "DEPARTMENT": "MZU",
            "SECTION": "11",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "974",
            "COURSE": "CSE221",
            "DEPARTMENT": "MZU",
            "SECTION": "11",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "975",
            "COURSE": "CSE221",
            "DEPARTMENT": "MIBA",
            "SECTION": "05",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "976",
            "COURSE": "CSE221",
            "DEPARTMENT": "MIBA",
            "SECTION": "05",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "977",
            "COURSE": "CSE221",
            "DEPARTMENT": "FGZ",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "978",
            "COURSE": "CSE221",
            "DEPARTMENT": "FGZ",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "979",
            "COURSE": "CSE221",
            "DEPARTMENT": "MMM",
            "SECTION": "23",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "980",
            "COURSE": "CSE221",
            "DEPARTMENT": "MMM",
            "SECTION": "23",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "981",
            "COURSE": "CSE221",
            "DEPARTMENT": "MTD",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "982",
            "COURSE": "CSE221",
            "DEPARTMENT": "MTD",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "983",
            "COURSE": "CSE221",
            "DEPARTMENT": "TLQ",
            "SECTION": "19",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "984",
            "COURSE": "CSE221",
            "DEPARTMENT": "TLQ",
            "SECTION": "19",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "985",
            "COURSE": "CSE221",
            "DEPARTMENT": "ZMD",
            "SECTION": "13",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "986",
            "COURSE": "CSE221",
            "DEPARTMENT": "ZMD",
            "SECTION": "13",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "987",
            "COURSE": "CSE221",
            "DEPARTMENT": "TLQ",
            "SECTION": "20",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "988",
            "COURSE": "CSE221",
            "DEPARTMENT": "TLQ",
            "SECTION": "20",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "989",
            "COURSE": "CSE221",
            "DEPARTMENT": "MIBA",
            "SECTION": "08",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "990",
            "COURSE": "CSE221",
            "DEPARTMENT": "MIBA",
            "SECTION": "08",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "991",
            "COURSE": "CSE221",
            "DEPARTMENT": "DPU",
            "SECTION": "10",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "992",
            "COURSE": "CSE221",
            "DEPARTMENT": "DPU",
            "SECTION": "10",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "993",
            "COURSE": "CSE221",
            "DEPARTMENT": "NSB",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "994",
            "COURSE": "CSE221",
            "DEPARTMENT": "NSB",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "995",
            "COURSE": "CSE221",
            "DEPARTMENT": "SCD",
            "SECTION": "17",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "996",
            "COURSE": "CSE221",
            "DEPARTMENT": "SCD",
            "SECTION": "17",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "997",
            "COURSE": "CSE221",
            "DEPARTMENT": "MIBA",
            "SECTION": "06",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "998",
            "COURSE": "CSE221",
            "DEPARTMENT": "MIBA",
            "SECTION": "06",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "999",
            "COURSE": "CSE221",
            "DEPARTMENT": "SCD",
            "SECTION": "16",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1000",
            "COURSE": "CSE221",
            "DEPARTMENT": "SCD",
            "SECTION": "16",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1001",
            "COURSE": "CSE221",
            "DEPARTMENT": "ZTB",
            "SECTION": "14",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1002",
            "COURSE": "CSE221",
            "DEPARTMENT": "ZTB",
            "SECTION": "14",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1003",
            "COURSE": "CSE221",
            "DEPARTMENT": "MMM",
            "SECTION": "24",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1004",
            "COURSE": "CSE221",
            "DEPARTMENT": "MMM",
            "SECTION": "24",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1005",
            "COURSE": "CSE221",
            "DEPARTMENT": "MIBA",
            "SECTION": "07",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1006",
            "COURSE": "CSE221",
            "DEPARTMENT": "MIBA",
            "SECTION": "07",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1007",
            "COURSE": "CSE221",
            "DEPARTMENT": "SRF",
            "SECTION": "09",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1008",
            "COURSE": "CSE221",
            "DEPARTMENT": "SRF",
            "SECTION": "09",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1009",
            "COURSE": "CSE221",
            "DEPARTMENT": "RAK",
            "SECTION": "22",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1010",
            "COURSE": "CSE221",
            "DEPARTMENT": "RAK",
            "SECTION": "22",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1011",
            "COURSE": "CSE221",
            "DEPARTMENT": "RAK",
            "SECTION": "21",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1012",
            "COURSE": "CSE221",
            "DEPARTMENT": "RAK",
            "SECTION": "21",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1013",
            "COURSE": "CSE221",
            "DEPARTMENT": "FGZ",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1014",
            "COURSE": "CSE221",
            "DEPARTMENT": "FGZ",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1015",
            "COURSE": "CSE221",
            "DEPARTMENT": "ZTB",
            "SECTION": "15",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1016",
            "COURSE": "CSE221",
            "DEPARTMENT": "ZTB",
            "SECTION": "15",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1017",
            "COURSE": "CSE221",
            "DEPARTMENT": "DPU",
            "SECTION": "25",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1018",
            "COURSE": "CSE221",
            "DEPARTMENT": "DPU",
            "SECTION": "25",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1019",
            "COURSE": "CSE221",
            "DEPARTMENT": "MZU",
            "SECTION": "12",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1020",
            "COURSE": "CSE221",
            "DEPARTMENT": "MZU",
            "SECTION": "12",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1021",
            "COURSE": "CSE221",
            "DEPARTMENT": "MMM",
            "SECTION": "23",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1022",
            "COURSE": "CSE221",
            "DEPARTMENT": "MMM",
            "SECTION": "23",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1023",
            "COURSE": "CSE221",
            "DEPARTMENT": "MIBA",
            "SECTION": "07",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1024",
            "COURSE": "CSE221",
            "DEPARTMENT": "MIBA",
            "SECTION": "07",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1025",
            "COURSE": "CSE221",
            "DEPARTMENT": "MIBA",
            "SECTION": "05",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1026",
            "COURSE": "CSE221",
            "DEPARTMENT": "MIBA",
            "SECTION": "05",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1027",
            "COURSE": "CSE221",
            "DEPARTMENT": "MIBA",
            "SECTION": "06",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1028",
            "COURSE": "CSE221",
            "DEPARTMENT": "MIBA",
            "SECTION": "06",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1029",
            "COURSE": "CSE221",
            "DEPARTMENT": "SCD",
            "SECTION": "16",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1030",
            "COURSE": "CSE221",
            "DEPARTMENT": "SCD",
            "SECTION": "16",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1031",
            "COURSE": "CSE221",
            "DEPARTMENT": "SFF",
            "SECTION": "18",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1032",
            "COURSE": "CSE221",
            "DEPARTMENT": "SFF",
            "SECTION": "18",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1033",
            "COURSE": "CSE221",
            "DEPARTMENT": "ZTB",
            "SECTION": "14",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1034",
            "COURSE": "CSE221",
            "DEPARTMENT": "ZTB",
            "SECTION": "14",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1035",
            "COURSE": "CSE221",
            "DEPARTMENT": "MZU",
            "SECTION": "12",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1036",
            "COURSE": "CSE221",
            "DEPARTMENT": "MZU",
            "SECTION": "12",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1037",
            "COURSE": "CSE221",
            "DEPARTMENT": "MZU",
            "SECTION": "11",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1038",
            "COURSE": "CSE221",
            "DEPARTMENT": "MZU",
            "SECTION": "11",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1039",
            "COURSE": "CSE221",
            "DEPARTMENT": "FGZ",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1040",
            "COURSE": "CSE221",
            "DEPARTMENT": "FGZ",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1041",
            "COURSE": "CSE221",
            "DEPARTMENT": "NSB",
            "SECTION": "04",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1042",
            "COURSE": "CSE221",
            "DEPARTMENT": "NSB",
            "SECTION": "04",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1043",
            "COURSE": "CSE221",
            "DEPARTMENT": "DPU",
            "SECTION": "10",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1044",
            "COURSE": "CSE221",
            "DEPARTMENT": "DPU",
            "SECTION": "10",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1045",
            "COURSE": "CSE221",
            "DEPARTMENT": "FGZ",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1046",
            "COURSE": "CSE221",
            "DEPARTMENT": "FGZ",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1047",
            "COURSE": "CSE221",
            "DEPARTMENT": "MMM",
            "SECTION": "24",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1048",
            "COURSE": "CSE221",
            "DEPARTMENT": "MMM",
            "SECTION": "24",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1049",
            "COURSE": "CSE221",
            "DEPARTMENT": "TLQ",
            "SECTION": "20",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1050",
            "COURSE": "CSE221",
            "DEPARTMENT": "TLQ",
            "SECTION": "20",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1051",
            "COURSE": "CSE221",
            "DEPARTMENT": "TLQ",
            "SECTION": "19",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1052",
            "COURSE": "CSE221",
            "DEPARTMENT": "TLQ",
            "SECTION": "19",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1053",
            "COURSE": "CSE221",
            "DEPARTMENT": "RAK",
            "SECTION": "21",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1054",
            "COURSE": "CSE221",
            "DEPARTMENT": "RAK",
            "SECTION": "21",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1055",
            "COURSE": "CSE221",
            "DEPARTMENT": "RAK",
            "SECTION": "22",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1056",
            "COURSE": "CSE221",
            "DEPARTMENT": "RAK",
            "SECTION": "22",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1057",
            "COURSE": "CSE221",
            "DEPARTMENT": "ZTB",
            "SECTION": "15",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1058",
            "COURSE": "CSE221",
            "DEPARTMENT": "ZTB",
            "SECTION": "15",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1059",
            "COURSE": "CSE221",
            "DEPARTMENT": "MIBA",
            "SECTION": "08",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1060",
            "COURSE": "CSE221",
            "DEPARTMENT": "MIBA",
            "SECTION": "08",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1061",
            "COURSE": "CSE221",
            "DEPARTMENT": "SCD",
            "SECTION": "17",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1062",
            "COURSE": "CSE221",
            "DEPARTMENT": "SCD",
            "SECTION": "17",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1063",
            "COURSE": "CSE221",
            "DEPARTMENT": "ZMD",
            "SECTION": "13",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1064",
            "COURSE": "CSE221",
            "DEPARTMENT": "ZMD",
            "SECTION": "13",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1065",
            "COURSE": "CSE221",
            "DEPARTMENT": "DPU",
            "SECTION": "25",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1066",
            "COURSE": "CSE221",
            "DEPARTMENT": "DPU",
            "SECTION": "25",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1067",
            "COURSE": "CSE221",
            "DEPARTMENT": "SRF",
            "SECTION": "09",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1068",
            "COURSE": "CSE221",
            "DEPARTMENT": "SRF",
            "SECTION": "09",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1069",
            "COURSE": "CSE221",
            "DEPARTMENT": "MTD",
            "SECTION": "03",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1070",
            "COURSE": "CSE221",
            "DEPARTMENT": "MTD",
            "SECTION": "03",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1071",
            "COURSE": "CSE230",
            "DEPARTMENT": "RIM",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1072",
            "COURSE": "CSE230",
            "DEPARTMENT": "RIM",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1073",
            "COURSE": "CSE230",
            "DEPARTMENT": "MIT",
            "SECTION": "14",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1074",
            "COURSE": "CSE230",
            "DEPARTMENT": "MIT",
            "SECTION": "14",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1075",
            "COURSE": "CSE230",
            "DEPARTMENT": "TBA",
            "SECTION": "20",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1076",
            "COURSE": "CSE230",
            "DEPARTMENT": "TBA",
            "SECTION": "20",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1077",
            "COURSE": "CSE230",
            "DEPARTMENT": "TSM",
            "SECTION": "16",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1078",
            "COURSE": "CSE230",
            "DEPARTMENT": "TSM",
            "SECTION": "16",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1079",
            "COURSE": "CSE230",
            "DEPARTMENT": "TSM",
            "SECTION": "17",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1080",
            "COURSE": "CSE230",
            "DEPARTMENT": "TSM",
            "SECTION": "17",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1081",
            "COURSE": "CSE230",
            "DEPARTMENT": "JYS",
            "SECTION": "08",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1082",
            "COURSE": "CSE230",
            "DEPARTMENT": "JYS",
            "SECTION": "08",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1083",
            "COURSE": "CSE230",
            "DEPARTMENT": "NZF",
            "SECTION": "05",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1084",
            "COURSE": "CSE230",
            "DEPARTMENT": "NZF",
            "SECTION": "05",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1085",
            "COURSE": "CSE230",
            "DEPARTMENT": "TBA",
            "SECTION": "25",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1086",
            "COURSE": "CSE230",
            "DEPARTMENT": "TBA",
            "SECTION": "25",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1087",
            "COURSE": "CSE230",
            "DEPARTMENT": "TBA",
            "SECTION": "21",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1088",
            "COURSE": "CSE230",
            "DEPARTMENT": "TBA",
            "SECTION": "21",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1089",
            "COURSE": "CSE230",
            "DEPARTMENT": "TBA",
            "SECTION": "27",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1090",
            "COURSE": "CSE230",
            "DEPARTMENT": "TBA",
            "SECTION": "27",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1091",
            "COURSE": "CSE230",
            "DEPARTMENT": "TBA",
            "SECTION": "23",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1092",
            "COURSE": "CSE230",
            "DEPARTMENT": "TBA",
            "SECTION": "23",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1093",
            "COURSE": "CSE230",
            "DEPARTMENT": "TSM",
            "SECTION": "18",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1094",
            "COURSE": "CSE230",
            "DEPARTMENT": "TSM",
            "SECTION": "18",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1095",
            "COURSE": "CSE230",
            "DEPARTMENT": "TBA",
            "SECTION": "24",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1096",
            "COURSE": "CSE230",
            "DEPARTMENT": "TBA",
            "SECTION": "24",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1097",
            "COURSE": "CSE230",
            "DEPARTMENT": "TBA",
            "SECTION": "26",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1098",
            "COURSE": "CSE230",
            "DEPARTMENT": "TBA",
            "SECTION": "26",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1099",
            "COURSE": "CSE230",
            "DEPARTMENT": "IBR",
            "SECTION": "09",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1100",
            "COURSE": "CSE230",
            "DEPARTMENT": "IBR",
            "SECTION": "09",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1101",
            "COURSE": "CSE230",
            "DEPARTMENT": "NFP",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1102",
            "COURSE": "CSE230",
            "DEPARTMENT": "NFP",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1103",
            "COURSE": "CSE230",
            "DEPARTMENT": "IBR",
            "SECTION": "10",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1104",
            "COURSE": "CSE230",
            "DEPARTMENT": "IBR",
            "SECTION": "10",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1105",
            "COURSE": "CSE230",
            "DEPARTMENT": "RIM",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1106",
            "COURSE": "CSE230",
            "DEPARTMENT": "RIM",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1107",
            "COURSE": "CSE230",
            "DEPARTMENT": "MIT",
            "SECTION": "11",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1108",
            "COURSE": "CSE230",
            "DEPARTMENT": "MIT",
            "SECTION": "11",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1109",
            "COURSE": "CSE230",
            "DEPARTMENT": "TBA",
            "SECTION": "19",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1110",
            "COURSE": "CSE230",
            "DEPARTMENT": "TBA",
            "SECTION": "19",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1111",
            "COURSE": "CSE230",
            "DEPARTMENT": "TBA",
            "SECTION": "22",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1112",
            "COURSE": "CSE230",
            "DEPARTMENT": "TBA",
            "SECTION": "22",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1113",
            "COURSE": "CSE230",
            "DEPARTMENT": "JYS",
            "SECTION": "06",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1114",
            "COURSE": "CSE230",
            "DEPARTMENT": "JYS",
            "SECTION": "06",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1115",
            "COURSE": "CSE230",
            "DEPARTMENT": "JYS",
            "SECTION": "07",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1116",
            "COURSE": "CSE230",
            "DEPARTMENT": "JYS",
            "SECTION": "07",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1117",
            "COURSE": "CSE230",
            "DEPARTMENT": "TSM",
            "SECTION": "15",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1118",
            "COURSE": "CSE230",
            "DEPARTMENT": "TSM",
            "SECTION": "15",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1119",
            "COURSE": "CSE230",
            "DEPARTMENT": "NZF",
            "SECTION": "04",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1120",
            "COURSE": "CSE230",
            "DEPARTMENT": "NZF",
            "SECTION": "04",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1121",
            "COURSE": "CSE230",
            "DEPARTMENT": "MIT",
            "SECTION": "12",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1122",
            "COURSE": "CSE230",
            "DEPARTMENT": "MIT",
            "SECTION": "12",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1123",
            "COURSE": "CSE230",
            "DEPARTMENT": "MIT",
            "SECTION": "13",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1124",
            "COURSE": "CSE230",
            "DEPARTMENT": "MIT",
            "SECTION": "13",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1125",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1126",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1127",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "20",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1128",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "20",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1129",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1130",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1131",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1132",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1133",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "23",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1134",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "23",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1135",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "24",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1136",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "24",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1137",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1138",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1139",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "14",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1140",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "14",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1141",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "22",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1142",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "22",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1143",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "26",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1144",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "26",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1145",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1146",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1147",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "21",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1148",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "21",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1149",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1150",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1151",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1152",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1153",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "29",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1154",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "29",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1155",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1156",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1157",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1158",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1159",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "27",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1160",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "27",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1161",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "16",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1162",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "16",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1163",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "15",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1164",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "15",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1165",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1166",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1167",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "17",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1168",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "17",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1169",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1170",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1171",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "19",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1172",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "19",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1173",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "25",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1174",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "25",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1175",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "18",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1176",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "18",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1177",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "30",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1178",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "30",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1179",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1180",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1181",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "28",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1182",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "28",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1183",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1184",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1185",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1186",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1187",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1188",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1189",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1190",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1191",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "23",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1192",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "23",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1193",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "29",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1194",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "29",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1195",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "30",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1196",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "30",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1197",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "17",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1198",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "17",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1199",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1200",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1201",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1202",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1203",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "22",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1204",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "22",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1205",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1206",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1207",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "21",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1208",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "21",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1209",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1210",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1211",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1212",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1213",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "19",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1214",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "19",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1215",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1216",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1217",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "14",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1218",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "14",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1219",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1220",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1221",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "25",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1222",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "25",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1223",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "28",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1224",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "28",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1225",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "26",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1226",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "26",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1227",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "24",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1228",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "24",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1229",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1230",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1231",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "15",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1232",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "15",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1233",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "20",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1234",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "20",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1235",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1236",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1237",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "27",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1238",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "27",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1239",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1240",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1241",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "18",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1242",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "18",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1243",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "16",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1244",
            "COURSE": "CSE250",
            "DEPARTMENT": "TBA",
            "SECTION": "16",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1245",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "21",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1246",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "21",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1247",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1248",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1249",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "15",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1250",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "15",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1251",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "16",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1252",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "16",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1253",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "17",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1254",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "17",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1255",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1256",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1257",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1258",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1259",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1260",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1261",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1262",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1263",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1264",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1265",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "23",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1266",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "23",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1267",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "14",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1268",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "14",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1269",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "19",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1270",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "19",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1271",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1272",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1273",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "18",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1274",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "18",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1275",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1276",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1277",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1278",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1279",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "22",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1280",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "22",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1281",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1282",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1283",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1284",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1285",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1286",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1287",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1288",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1289",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "20",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1290",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "20",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1291",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "22",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1292",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "22",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1293",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1294",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1295",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1296",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1297",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1298",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1299",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "14",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1300",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "14",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1301",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1302",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1303",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "21",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1304",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "21",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1305",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1306",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1307",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "20",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1308",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "20",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1309",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1310",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1311",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1312",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1313",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "23",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1314",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "23",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1315",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1316",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1317",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1318",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1319",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "16",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1320",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "16",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1321",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "19",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1322",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "19",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1323",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1324",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1325",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "17",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1326",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "17",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1327",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "15",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1328",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "15",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1329",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1330",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1331",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "18",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1332",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "18",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1333",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1334",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1335",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1336",
            "COURSE": "CSE251",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1337",
            "COURSE": "CSE260",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1338",
            "COURSE": "CSE260",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1339",
            "COURSE": "CSE260",
            "DEPARTMENT": "AQZ",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1340",
            "COURSE": "CSE260",
            "DEPARTMENT": "AQZ",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1341",
            "COURSE": "CSE260",
            "DEPARTMENT": "AQZ",
            "SECTION": "03",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1342",
            "COURSE": "CSE260",
            "DEPARTMENT": "AQZ",
            "SECTION": "03",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1343",
            "COURSE": "CSE260",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1344",
            "COURSE": "CSE260",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1345",
            "COURSE": "CSE260",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1346",
            "COURSE": "CSE260",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1347",
            "COURSE": "CSE260",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1348",
            "COURSE": "CSE260",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1349",
            "COURSE": "CSE260",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1350",
            "COURSE": "CSE260",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1351",
            "COURSE": "CSE260",
            "DEPARTMENT": "AQZ",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1352",
            "COURSE": "CSE260",
            "DEPARTMENT": "AQZ",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1353",
            "COURSE": "CSE260",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1354",
            "COURSE": "CSE260",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1355",
            "COURSE": "CSE260",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1356",
            "COURSE": "CSE260",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1357",
            "COURSE": "CSE260",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1358",
            "COURSE": "CSE260",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1359",
            "COURSE": "CSE260",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1360",
            "COURSE": "CSE260",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1361",
            "COURSE": "CSE260",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1362",
            "COURSE": "CSE260",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1363",
            "COURSE": "CSE260",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1364",
            "COURSE": "CSE260",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1365",
            "COURSE": "CSE260",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1366",
            "COURSE": "CSE260",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1367",
            "COURSE": "CSE260",
            "DEPARTMENT": "AQZ",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1368",
            "COURSE": "CSE260",
            "DEPARTMENT": "AQZ",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1369",
            "COURSE": "CSE260",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1370",
            "COURSE": "CSE260",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1371",
            "COURSE": "CSE260",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1372",
            "COURSE": "CSE260",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1373",
            "COURSE": "CSE260",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1374",
            "COURSE": "CSE260",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1375",
            "COURSE": "CSE260",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1376",
            "COURSE": "CSE260",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1377",
            "COURSE": "CSE260",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1378",
            "COURSE": "CSE260",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1379",
            "COURSE": "CSE260",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1380",
            "COURSE": "CSE260",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1381",
            "COURSE": "CSE260",
            "DEPARTMENT": "AQZ",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1382",
            "COURSE": "CSE260",
            "DEPARTMENT": "AQZ",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1383",
            "COURSE": "CSE260",
            "DEPARTMENT": "AQZ",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1384",
            "COURSE": "CSE260",
            "DEPARTMENT": "AQZ",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1385",
            "COURSE": "CSE310",
            "DEPARTMENT": "ADR",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1386",
            "COURSE": "CSE310",
            "DEPARTMENT": "ADR",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1387",
            "COURSE": "CSE310",
            "DEPARTMENT": "ADR",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1388",
            "COURSE": "CSE310",
            "DEPARTMENT": "ADR",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1389",
            "COURSE": "CSE320",
            "DEPARTMENT": "ADHN",
            "SECTION": "08",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1390",
            "COURSE": "CSE320",
            "DEPARTMENT": "ADHN",
            "SECTION": "08",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1391",
            "COURSE": "CSE320",
            "DEPARTMENT": "AHU",
            "SECTION": "10",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1392",
            "COURSE": "CSE320",
            "DEPARTMENT": "AHU",
            "SECTION": "10",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1393",
            "COURSE": "CSE320",
            "DEPARTMENT": "TBA",
            "SECTION": "20",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1394",
            "COURSE": "CSE320",
            "DEPARTMENT": "TBA",
            "SECTION": "20",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1395",
            "COURSE": "CSE320",
            "DEPARTMENT": "TBA",
            "SECTION": "24",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1396",
            "COURSE": "CSE320",
            "DEPARTMENT": "TBA",
            "SECTION": "24",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1397",
            "COURSE": "CSE320",
            "DEPARTMENT": "TBA",
            "SECTION": "23",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1398",
            "COURSE": "CSE320",
            "DEPARTMENT": "TBA",
            "SECTION": "23",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1399",
            "COURSE": "CSE320",
            "DEPARTMENT": "FGZ",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1400",
            "COURSE": "CSE320",
            "DEPARTMENT": "FGZ",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1401",
            "COURSE": "CSE320",
            "DEPARTMENT": "ADHN",
            "SECTION": "07",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1402",
            "COURSE": "CSE320",
            "DEPARTMENT": "ADHN",
            "SECTION": "07",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1403",
            "COURSE": "CSE320",
            "DEPARTMENT": "AHU",
            "SECTION": "11",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1404",
            "COURSE": "CSE320",
            "DEPARTMENT": "AHU",
            "SECTION": "11",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1405",
            "COURSE": "CSE320",
            "DEPARTMENT": "SFQ",
            "SECTION": "22",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1406",
            "COURSE": "CSE320",
            "DEPARTMENT": "SFQ",
            "SECTION": "22",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1407",
            "COURSE": "CSE320",
            "DEPARTMENT": "SBLM",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1408",
            "COURSE": "CSE320",
            "DEPARTMENT": "SBLM",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1409",
            "COURSE": "CSE320",
            "DEPARTMENT": "NTR",
            "SECTION": "15",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1410",
            "COURSE": "CSE320",
            "DEPARTMENT": "NTR",
            "SECTION": "15",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1411",
            "COURSE": "CSE320",
            "DEPARTMENT": "NTR",
            "SECTION": "17",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1412",
            "COURSE": "CSE320",
            "DEPARTMENT": "NTR",
            "SECTION": "17",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1413",
            "COURSE": "CSE320",
            "DEPARTMENT": "ADHN",
            "SECTION": "09",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1414",
            "COURSE": "CSE320",
            "DEPARTMENT": "ADHN",
            "SECTION": "09",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1415",
            "COURSE": "CSE320",
            "DEPARTMENT": "RIM",
            "SECTION": "06",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1416",
            "COURSE": "CSE320",
            "DEPARTMENT": "RIM",
            "SECTION": "06",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1417",
            "COURSE": "CSE320",
            "DEPARTMENT": "SFQ",
            "SECTION": "21",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1418",
            "COURSE": "CSE320",
            "DEPARTMENT": "SFQ",
            "SECTION": "21",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1419",
            "COURSE": "CSE320",
            "DEPARTMENT": "SHRR",
            "SECTION": "14",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1420",
            "COURSE": "CSE320",
            "DEPARTMENT": "SHRR",
            "SECTION": "14",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1421",
            "COURSE": "CSE320",
            "DEPARTMENT": "AHU",
            "SECTION": "12",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1422",
            "COURSE": "CSE320",
            "DEPARTMENT": "AHU",
            "SECTION": "12",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1423",
            "COURSE": "CSE320",
            "DEPARTMENT": "SBLM",
            "SECTION": "04",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1424",
            "COURSE": "CSE320",
            "DEPARTMENT": "SBLM",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1425",
            "COURSE": "CSE320",
            "DEPARTMENT": "FGZ",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1426",
            "COURSE": "CSE320",
            "DEPARTMENT": "FGZ",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1427",
            "COURSE": "CSE320",
            "DEPARTMENT": "RIM",
            "SECTION": "05",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1428",
            "COURSE": "CSE320",
            "DEPARTMENT": "RIM",
            "SECTION": "05",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1429",
            "COURSE": "CSE320",
            "DEPARTMENT": "SRJ",
            "SECTION": "18",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1430",
            "COURSE": "CSE320",
            "DEPARTMENT": "SRJ",
            "SECTION": "18",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1431",
            "COURSE": "CSE320",
            "DEPARTMENT": "NTR",
            "SECTION": "16",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1432",
            "COURSE": "CSE320",
            "DEPARTMENT": "NTR",
            "SECTION": "16",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1433",
            "COURSE": "CSE320",
            "DEPARTMENT": "SHRR",
            "SECTION": "13",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1434",
            "COURSE": "CSE320",
            "DEPARTMENT": "SHRR",
            "SECTION": "13",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1435",
            "COURSE": "CSE320",
            "DEPARTMENT": "SRJ",
            "SECTION": "19",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1436",
            "COURSE": "CSE320",
            "DEPARTMENT": "SRJ",
            "SECTION": "19",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1437",
            "COURSE": "CSE321",
            "DEPARTMENT": "ACH",
            "SECTION": "05",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1438",
            "COURSE": "CSE321",
            "DEPARTMENT": "ACH",
            "SECTION": "05",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1439",
            "COURSE": "CSE321",
            "DEPARTMENT": "FLA",
            "SECTION": "04",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1440",
            "COURSE": "CSE321",
            "DEPARTMENT": "FLA",
            "SECTION": "04",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1441",
            "COURSE": "CSE321",
            "DEPARTMENT": "NTR",
            "SECTION": "07",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1442",
            "COURSE": "CSE321",
            "DEPARTMENT": "NTR",
            "SECTION": "07",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1443",
            "COURSE": "CSE321",
            "DEPARTMENT": "TSD",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1444",
            "COURSE": "CSE321",
            "DEPARTMENT": "TSD",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1445",
            "COURSE": "CSE321",
            "DEPARTMENT": "FLA",
            "SECTION": "03",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1446",
            "COURSE": "CSE321",
            "DEPARTMENT": "FLA",
            "SECTION": "03",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1447",
            "COURSE": "CSE321",
            "DEPARTMENT": "ACH",
            "SECTION": "06",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1448",
            "COURSE": "CSE321",
            "DEPARTMENT": "ACH",
            "SECTION": "06",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1449",
            "COURSE": "CSE321",
            "DEPARTMENT": "TSD",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1450",
            "COURSE": "CSE321",
            "DEPARTMENT": "TSD",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1451",
            "COURSE": "CSE321",
            "DEPARTMENT": "FLA",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1452",
            "COURSE": "CSE321",
            "DEPARTMENT": "FLA",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1453",
            "COURSE": "CSE321",
            "DEPARTMENT": "FLA",
            "SECTION": "04",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1454",
            "COURSE": "CSE321",
            "DEPARTMENT": "FLA",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1455",
            "COURSE": "CSE321",
            "DEPARTMENT": "ACH",
            "SECTION": "06",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1456",
            "COURSE": "CSE321",
            "DEPARTMENT": "ACH",
            "SECTION": "06",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1457",
            "COURSE": "CSE321",
            "DEPARTMENT": "TSD",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1458",
            "COURSE": "CSE321",
            "DEPARTMENT": "TSD",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1459",
            "COURSE": "CSE321",
            "DEPARTMENT": "ACH",
            "SECTION": "05",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1460",
            "COURSE": "CSE321",
            "DEPARTMENT": "ACH",
            "SECTION": "05",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1461",
            "COURSE": "CSE321",
            "DEPARTMENT": "NTR",
            "SECTION": "07",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1462",
            "COURSE": "CSE321",
            "DEPARTMENT": "NTR",
            "SECTION": "07",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1463",
            "COURSE": "CSE321",
            "DEPARTMENT": "TSD",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1464",
            "COURSE": "CSE321",
            "DEPARTMENT": "TSD",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1465",
            "COURSE": "CSE330",
            "DEPARTMENT": "ABW",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1466",
            "COURSE": "CSE330",
            "DEPARTMENT": "ABW",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1467",
            "COURSE": "CSE330",
            "DEPARTMENT": "AMK",
            "SECTION": "09",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1468",
            "COURSE": "CSE330",
            "DEPARTMENT": "AMK",
            "SECTION": "09",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1469",
            "COURSE": "CSE330",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1470",
            "COURSE": "CSE330",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1471",
            "COURSE": "CSE330",
            "DEPARTMENT": "ZWB",
            "SECTION": "06",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1472",
            "COURSE": "CSE330",
            "DEPARTMENT": "ZWB",
            "SECTION": "06",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1473",
            "COURSE": "CSE330",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1474",
            "COURSE": "CSE330",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1475",
            "COURSE": "CSE330",
            "DEPARTMENT": "AQU",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1476",
            "COURSE": "CSE330",
            "DEPARTMENT": "AQU",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1477",
            "COURSE": "CSE330",
            "DEPARTMENT": "RRH",
            "SECTION": "10",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1478",
            "COURSE": "CSE330",
            "DEPARTMENT": "RRH",
            "SECTION": "10",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1479",
            "COURSE": "CSE330",
            "DEPARTMENT": "AQU",
            "SECTION": "04",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1480",
            "COURSE": "CSE330",
            "DEPARTMENT": "AQU",
            "SECTION": "04",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1481",
            "COURSE": "CSE330",
            "DEPARTMENT": "ZWB",
            "SECTION": "05",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1482",
            "COURSE": "CSE330",
            "DEPARTMENT": "ZWB",
            "SECTION": "05",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1483",
            "COURSE": "CSE330",
            "DEPARTMENT": "AMK",
            "SECTION": "07",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1484",
            "COURSE": "CSE330",
            "DEPARTMENT": "AMK",
            "SECTION": "07",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1485",
            "COURSE": "CSE330",
            "DEPARTMENT": "AMK",
            "SECTION": "08",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1486",
            "COURSE": "CSE330",
            "DEPARTMENT": "AMK",
            "SECTION": "08",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1487",
            "COURSE": "CSE330",
            "DEPARTMENT": "ABW",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1488",
            "COURSE": "CSE330",
            "DEPARTMENT": "ABW",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1489",
            "COURSE": "CSE330",
            "DEPARTMENT": "ABW",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1490",
            "COURSE": "CSE330",
            "DEPARTMENT": "ABW",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1491",
            "COURSE": "CSE330",
            "DEPARTMENT": "RRH",
            "SECTION": "10",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1492",
            "COURSE": "CSE330",
            "DEPARTMENT": "RRH",
            "SECTION": "10",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1493",
            "COURSE": "CSE330",
            "DEPARTMENT": "ZWB",
            "SECTION": "06",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1494",
            "COURSE": "CSE330",
            "DEPARTMENT": "ZWB",
            "SECTION": "06",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1495",
            "COURSE": "CSE330",
            "DEPARTMENT": "AMK",
            "SECTION": "08",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1496",
            "COURSE": "CSE330",
            "DEPARTMENT": "AMK",
            "SECTION": "08",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1497",
            "COURSE": "CSE330",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1498",
            "COURSE": "CSE330",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1499",
            "COURSE": "CSE330",
            "DEPARTMENT": "ABW",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1500",
            "COURSE": "CSE330",
            "DEPARTMENT": "ABW",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1501",
            "COURSE": "CSE330",
            "DEPARTMENT": "AMK",
            "SECTION": "09",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1502",
            "COURSE": "CSE330",
            "DEPARTMENT": "AMK",
            "SECTION": "09",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1503",
            "COURSE": "CSE330",
            "DEPARTMENT": "AQU",
            "SECTION": "04",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1504",
            "COURSE": "CSE330",
            "DEPARTMENT": "AQU",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1505",
            "COURSE": "CSE330",
            "DEPARTMENT": "ZWB",
            "SECTION": "05",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1506",
            "COURSE": "CSE330",
            "DEPARTMENT": "ZWB",
            "SECTION": "05",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1507",
            "COURSE": "CSE330",
            "DEPARTMENT": "AQU",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1508",
            "COURSE": "CSE330",
            "DEPARTMENT": "AQU",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1509",
            "COURSE": "CSE330",
            "DEPARTMENT": "AMK",
            "SECTION": "07",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1510",
            "COURSE": "CSE330",
            "DEPARTMENT": "AMK",
            "SECTION": "07",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1511",
            "COURSE": "CSE330",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1512",
            "COURSE": "CSE330",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1513",
            "COURSE": "CSE331",
            "DEPARTMENT": "ZAD",
            "SECTION": "05",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1514",
            "COURSE": "CSE331",
            "DEPARTMENT": "ZAD",
            "SECTION": "05",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1515",
            "COURSE": "CSE331",
            "DEPARTMENT": "NFP",
            "SECTION": "10",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1516",
            "COURSE": "CSE331",
            "DEPARTMENT": "NFP",
            "SECTION": "10",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1517",
            "COURSE": "CSE331",
            "DEPARTMENT": "KKP",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1518",
            "COURSE": "CSE331",
            "DEPARTMENT": "KKP",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1519",
            "COURSE": "CSE331",
            "DEPARTMENT": "NFP",
            "SECTION": "09",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1520",
            "COURSE": "CSE331",
            "DEPARTMENT": "NFP",
            "SECTION": "09",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1521",
            "COURSE": "CSE331",
            "DEPARTMENT": "ZAD",
            "SECTION": "06",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1522",
            "COURSE": "CSE331",
            "DEPARTMENT": "ZAD",
            "SECTION": "06",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1523",
            "COURSE": "CSE331",
            "DEPARTMENT": "NFP",
            "SECTION": "08",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1524",
            "COURSE": "CSE331",
            "DEPARTMENT": "NFP",
            "SECTION": "08",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1525",
            "COURSE": "CSE331",
            "DEPARTMENT": "ZAD",
            "SECTION": "07",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1526",
            "COURSE": "CSE331",
            "DEPARTMENT": "ZAD",
            "SECTION": "07",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1527",
            "COURSE": "CSE331",
            "DEPARTMENT": "KKP",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1528",
            "COURSE": "CSE331",
            "DEPARTMENT": "KKP",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1529",
            "COURSE": "CSE331",
            "DEPARTMENT": "KKP",
            "SECTION": "03",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1530",
            "COURSE": "CSE331",
            "DEPARTMENT": "KKP",
            "SECTION": "03",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1531",
            "COURSE": "CSE331",
            "DEPARTMENT": "ZAD",
            "SECTION": "04",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1532",
            "COURSE": "CSE331",
            "DEPARTMENT": "ZAD",
            "SECTION": "04",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1533",
            "COURSE": "CSE340",
            "DEPARTMENT": "ZWB",
            "SECTION": "03",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1534",
            "COURSE": "CSE340",
            "DEPARTMENT": "ZWB",
            "SECTION": "03",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1535",
            "COURSE": "CSE340",
            "DEPARTMENT": "STF",
            "SECTION": "05",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1536",
            "COURSE": "CSE340",
            "DEPARTMENT": "STF",
            "SECTION": "05",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1537",
            "COURSE": "CSE340",
            "DEPARTMENT": "ZWB",
            "SECTION": "04",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1538",
            "COURSE": "CSE340",
            "DEPARTMENT": "ZWB",
            "SECTION": "04",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1539",
            "COURSE": "CSE340",
            "DEPARTMENT": "STF",
            "SECTION": "06",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1540",
            "COURSE": "CSE340",
            "DEPARTMENT": "STF",
            "SECTION": "06",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1541",
            "COURSE": "CSE340",
            "DEPARTMENT": "ACH",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1542",
            "COURSE": "CSE340",
            "DEPARTMENT": "ACH",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1543",
            "COURSE": "CSE340",
            "DEPARTMENT": "ACH",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1544",
            "COURSE": "CSE340",
            "DEPARTMENT": "ACH",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1545",
            "COURSE": "CSE341",
            "DEPARTMENT": "ZHS",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1546",
            "COURSE": "CSE341",
            "DEPARTMENT": "ZHS",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1547",
            "COURSE": "CSE341",
            "DEPARTMENT": "ZHS",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1548",
            "COURSE": "CSE341",
            "DEPARTMENT": "ZHS",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1549",
            "COURSE": "CSE341",
            "DEPARTMENT": "RRH",
            "SECTION": "06",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1550",
            "COURSE": "CSE341",
            "DEPARTMENT": "RRH",
            "SECTION": "06",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1551",
            "COURSE": "CSE341",
            "DEPARTMENT": "RRH",
            "SECTION": "05",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1552",
            "COURSE": "CSE341",
            "DEPARTMENT": "RRH",
            "SECTION": "05",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1553",
            "COURSE": "CSE341",
            "DEPARTMENT": "STF",
            "SECTION": "04",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1554",
            "COURSE": "CSE341",
            "DEPARTMENT": "STF",
            "SECTION": "04",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1555",
            "COURSE": "CSE341",
            "DEPARTMENT": "STF",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1556",
            "COURSE": "CSE341",
            "DEPARTMENT": "STF",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1557",
            "COURSE": "CSE341",
            "DEPARTMENT": "STF",
            "SECTION": "04",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1558",
            "COURSE": "CSE341",
            "DEPARTMENT": "STF",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1559",
            "COURSE": "CSE341",
            "DEPARTMENT": "ZHS",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1560",
            "COURSE": "CSE341",
            "DEPARTMENT": "ZHS",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1561",
            "COURSE": "CSE341",
            "DEPARTMENT": "ZHS",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1562",
            "COURSE": "CSE341",
            "DEPARTMENT": "ZHS",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1563",
            "COURSE": "CSE341",
            "DEPARTMENT": "RRH",
            "SECTION": "06",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1564",
            "COURSE": "CSE341",
            "DEPARTMENT": "RRH",
            "SECTION": "06",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1565",
            "COURSE": "CSE341",
            "DEPARTMENT": "STF",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1566",
            "COURSE": "CSE341",
            "DEPARTMENT": "STF",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1567",
            "COURSE": "CSE341",
            "DEPARTMENT": "RRH",
            "SECTION": "05",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1568",
            "COURSE": "CSE341",
            "DEPARTMENT": "RRH",
            "SECTION": "05",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1569",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1570",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1571",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1572",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1573",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1574",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1575",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1576",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1577",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1578",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1579",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1580",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1581",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1582",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1583",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1584",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1585",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1586",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1587",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1588",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1589",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1590",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1591",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1592",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1593",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1594",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1595",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1596",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1597",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1598",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1599",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1600",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1601",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1602",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1603",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1604",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1605",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1606",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1607",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1608",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1609",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1610",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1611",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1612",
            "COURSE": "CSE350",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1613",
            "COURSE": "CSE360",
            "DEPARTMENT": "KHR",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1614",
            "COURSE": "CSE360",
            "DEPARTMENT": "KHR",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1615",
            "COURSE": "CSE360",
            "DEPARTMENT": "KHR",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1616",
            "COURSE": "CSE360",
            "DEPARTMENT": "KHR",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1617",
            "COURSE": "CSE360",
            "DEPARTMENT": "ASA",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1618",
            "COURSE": "CSE360",
            "DEPARTMENT": "ASA",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1619",
            "COURSE": "CSE360",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1620",
            "COURSE": "CSE360",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1621",
            "COURSE": "CSE360",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1622",
            "COURSE": "CSE360",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1623",
            "COURSE": "CSE360",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1624",
            "COURSE": "CSE360",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1625",
            "COURSE": "CSE360",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1626",
            "COURSE": "CSE360",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1627",
            "COURSE": "CSE360",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1628",
            "COURSE": "CSE360",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1629",
            "COURSE": "CSE360",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1630",
            "COURSE": "CSE360",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1631",
            "COURSE": "CSE360",
            "DEPARTMENT": "KHR",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1632",
            "COURSE": "CSE360",
            "DEPARTMENT": "KHR",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1633",
            "COURSE": "CSE360",
            "DEPARTMENT": "KHR",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1634",
            "COURSE": "CSE360",
            "DEPARTMENT": "KHR",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1635",
            "COURSE": "CSE360",
            "DEPARTMENT": "ASA",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1636",
            "COURSE": "CSE360",
            "DEPARTMENT": "ASA",
            "SECTION": "03",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1637",
            "COURSE": "CSE370",
            "DEPARTMENT": "MTT",
            "SECTION": "12",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1638",
            "COURSE": "CSE370",
            "DEPARTMENT": "MTT",
            "SECTION": "12",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1639",
            "COURSE": "CSE370",
            "DEPARTMENT": "ANL",
            "SECTION": "11",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1640",
            "COURSE": "CSE370",
            "DEPARTMENT": "ANL",
            "SECTION": "11",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1641",
            "COURSE": "CSE370",
            "DEPARTMENT": "ANL",
            "SECTION": "09",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1642",
            "COURSE": "CSE370",
            "DEPARTMENT": "ANL",
            "SECTION": "09",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1643",
            "COURSE": "CSE370",
            "DEPARTMENT": "NNC",
            "SECTION": "07",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1644",
            "COURSE": "CSE370",
            "DEPARTMENT": "NNC",
            "SECTION": "07",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1645",
            "COURSE": "CSE370",
            "DEPARTMENT": "MTT",
            "SECTION": "14",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1646",
            "COURSE": "CSE370",
            "DEPARTMENT": "MTT",
            "SECTION": "14",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1647",
            "COURSE": "CSE370",
            "DEPARTMENT": "DPU",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1648",
            "COURSE": "CSE370",
            "DEPARTMENT": "DPU",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1649",
            "COURSE": "CSE370",
            "DEPARTMENT": "NNC",
            "SECTION": "06",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1650",
            "COURSE": "CSE370",
            "DEPARTMENT": "NNC",
            "SECTION": "06",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1651",
            "COURSE": "CSE370",
            "DEPARTMENT": "DPU",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1652",
            "COURSE": "CSE370",
            "DEPARTMENT": "DPU",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1653",
            "COURSE": "CSE370",
            "DEPARTMENT": "NNC",
            "SECTION": "05",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1654",
            "COURSE": "CSE370",
            "DEPARTMENT": "NNC",
            "SECTION": "05",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1655",
            "COURSE": "CSE370",
            "DEPARTMENT": "FLA",
            "SECTION": "04",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1656",
            "COURSE": "CSE370",
            "DEPARTMENT": "FLA",
            "SECTION": "04",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1657",
            "COURSE": "CSE370",
            "DEPARTMENT": "MTT",
            "SECTION": "13",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1658",
            "COURSE": "CSE370",
            "DEPARTMENT": "MTT",
            "SECTION": "13",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1659",
            "COURSE": "CSE370",
            "DEPARTMENT": "FLA",
            "SECTION": "03",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1660",
            "COURSE": "CSE370",
            "DEPARTMENT": "FLA",
            "SECTION": "03",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1661",
            "COURSE": "CSE370",
            "DEPARTMENT": "NNC",
            "SECTION": "08",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1662",
            "COURSE": "CSE370",
            "DEPARTMENT": "NNC",
            "SECTION": "08",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1663",
            "COURSE": "CSE370",
            "DEPARTMENT": "ANL",
            "SECTION": "10",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1664",
            "COURSE": "CSE370",
            "DEPARTMENT": "ANL",
            "SECTION": "10",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1665",
            "COURSE": "CSE370",
            "DEPARTMENT": "NNC",
            "SECTION": "07",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1666",
            "COURSE": "CSE370",
            "DEPARTMENT": "NNC",
            "SECTION": "07",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1667",
            "COURSE": "CSE370",
            "DEPARTMENT": "FLA",
            "SECTION": "04",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1668",
            "COURSE": "CSE370",
            "DEPARTMENT": "FLA",
            "SECTION": "04",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1669",
            "COURSE": "CSE370",
            "DEPARTMENT": "NNC",
            "SECTION": "08",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1670",
            "COURSE": "CSE370",
            "DEPARTMENT": "NNC",
            "SECTION": "08",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1671",
            "COURSE": "CSE370",
            "DEPARTMENT": "MTT",
            "SECTION": "12",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1672",
            "COURSE": "CSE370",
            "DEPARTMENT": "MTT",
            "SECTION": "12",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1673",
            "COURSE": "CSE370",
            "DEPARTMENT": "FLA",
            "SECTION": "03",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1674",
            "COURSE": "CSE370",
            "DEPARTMENT": "FLA",
            "SECTION": "03",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1675",
            "COURSE": "CSE370",
            "DEPARTMENT": "DPU",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1676",
            "COURSE": "CSE370",
            "DEPARTMENT": "DPU",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1677",
            "COURSE": "CSE370",
            "DEPARTMENT": "DPU",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1678",
            "COURSE": "CSE370",
            "DEPARTMENT": "DPU",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1679",
            "COURSE": "CSE370",
            "DEPARTMENT": "ANL",
            "SECTION": "10",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1680",
            "COURSE": "CSE370",
            "DEPARTMENT": "ANL",
            "SECTION": "10",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1681",
            "COURSE": "CSE370",
            "DEPARTMENT": "ANL",
            "SECTION": "09",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1682",
            "COURSE": "CSE370",
            "DEPARTMENT": "ANL",
            "SECTION": "09",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1683",
            "COURSE": "CSE370",
            "DEPARTMENT": "ANL",
            "SECTION": "11",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1684",
            "COURSE": "CSE370",
            "DEPARTMENT": "ANL",
            "SECTION": "11",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1685",
            "COURSE": "CSE370",
            "DEPARTMENT": "MTT",
            "SECTION": "14",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1686",
            "COURSE": "CSE370",
            "DEPARTMENT": "MTT",
            "SECTION": "14",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1687",
            "COURSE": "CSE370",
            "DEPARTMENT": "NNC",
            "SECTION": "05",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1688",
            "COURSE": "CSE370",
            "DEPARTMENT": "NNC",
            "SECTION": "05",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1689",
            "COURSE": "CSE370",
            "DEPARTMENT": "MTT",
            "SECTION": "13",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1690",
            "COURSE": "CSE370",
            "DEPARTMENT": "MTT",
            "SECTION": "13",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1691",
            "COURSE": "CSE370",
            "DEPARTMENT": "NNC",
            "SECTION": "06",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1692",
            "COURSE": "CSE370",
            "DEPARTMENT": "NNC",
            "SECTION": "06",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1693",
            "COURSE": "CSE390",
            "DEPARTMENT": "FDC",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1694",
            "COURSE": "CSE390",
            "DEPARTMENT": "FDC",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1695",
            "COURSE": "CSE391",
            "DEPARTMENT": "ADR",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1696",
            "COURSE": "CSE391",
            "DEPARTMENT": "ADR",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1697",
            "COURSE": "CSE391",
            "DEPARTMENT": "ADR",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1698",
            "COURSE": "CSE391",
            "DEPARTMENT": "ADR",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1699",
            "COURSE": "CSE420",
            "DEPARTMENT": "SRF",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1700",
            "COURSE": "CSE420",
            "DEPARTMENT": "SRF",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1701",
            "COURSE": "CSE420",
            "DEPARTMENT": "MNY",
            "SECTION": "04",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1702",
            "COURSE": "CSE420",
            "DEPARTMENT": "MNY",
            "SECTION": "04",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1703",
            "COURSE": "CSE420",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1704",
            "COURSE": "CSE420",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1705",
            "COURSE": "CSE420",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1706",
            "COURSE": "CSE420",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1707",
            "COURSE": "CSE420",
            "DEPARTMENT": "SRF",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1708",
            "COURSE": "CSE420",
            "DEPARTMENT": "SRF",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1709",
            "COURSE": "CSE420",
            "DEPARTMENT": "PNP",
            "SECTION": "06",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1710",
            "COURSE": "CSE420",
            "DEPARTMENT": "PNP",
            "SECTION": "06",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1711",
            "COURSE": "CSE420",
            "DEPARTMENT": "PNP",
            "SECTION": "05",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1712",
            "COURSE": "CSE420",
            "DEPARTMENT": "PNP",
            "SECTION": "05",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1713",
            "COURSE": "CSE420",
            "DEPARTMENT": "SRF",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1714",
            "COURSE": "CSE420",
            "DEPARTMENT": "SRF",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1715",
            "COURSE": "CSE420",
            "DEPARTMENT": "MNY",
            "SECTION": "04",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1716",
            "COURSE": "CSE420",
            "DEPARTMENT": "MNY",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1717",
            "COURSE": "CSE420",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1718",
            "COURSE": "CSE420",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1719",
            "COURSE": "CSE420",
            "DEPARTMENT": "PNP",
            "SECTION": "05",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1720",
            "COURSE": "CSE420",
            "DEPARTMENT": "PNP",
            "SECTION": "05",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1721",
            "COURSE": "CSE420",
            "DEPARTMENT": "SRF",
            "SECTION": "03",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1722",
            "COURSE": "CSE420",
            "DEPARTMENT": "SRF",
            "SECTION": "03",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1723",
            "COURSE": "CSE420",
            "DEPARTMENT": "PNP",
            "SECTION": "06",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1724",
            "COURSE": "CSE420",
            "DEPARTMENT": "PNP",
            "SECTION": "06",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1725",
            "COURSE": "CSE420",
            "DEPARTMENT": "SRF",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1726",
            "COURSE": "CSE420",
            "DEPARTMENT": "SRF",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1727",
            "COURSE": "CSE420",
            "DEPARTMENT": "SRF",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1728",
            "COURSE": "CSE420",
            "DEPARTMENT": "SRF",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1729",
            "COURSE": "CSE420",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1730",
            "COURSE": "CSE420",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1731",
            "COURSE": "CSE421",
            "DEPARTMENT": "SFQ",
            "SECTION": "08",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1732",
            "COURSE": "CSE421",
            "DEPARTMENT": "SFQ",
            "SECTION": "08",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1733",
            "COURSE": "CSE421",
            "DEPARTMENT": "SRJ",
            "SECTION": "09",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1734",
            "COURSE": "CSE421",
            "DEPARTMENT": "SRJ",
            "SECTION": "09",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1735",
            "COURSE": "CSE421",
            "DEPARTMENT": "SKZ",
            "SECTION": "12",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1736",
            "COURSE": "CSE421",
            "DEPARTMENT": "SKZ",
            "SECTION": "12",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1737",
            "COURSE": "CSE421",
            "DEPARTMENT": "TSD",
            "SECTION": "03",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1738",
            "COURSE": "CSE421",
            "DEPARTMENT": "TSD",
            "SECTION": "03",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1739",
            "COURSE": "CSE421",
            "DEPARTMENT": "TSD",
            "SECTION": "04",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1740",
            "COURSE": "CSE421",
            "DEPARTMENT": "TSD",
            "SECTION": "04",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1741",
            "COURSE": "CSE421",
            "DEPARTMENT": "SRJ",
            "SECTION": "10",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1742",
            "COURSE": "CSE421",
            "DEPARTMENT": "SRJ",
            "SECTION": "10",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1743",
            "COURSE": "CSE421",
            "DEPARTMENT": "FDC",
            "SECTION": "06",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1744",
            "COURSE": "CSE421",
            "DEPARTMENT": "FDC",
            "SECTION": "06",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1745",
            "COURSE": "CSE421",
            "DEPARTMENT": "SFQ",
            "SECTION": "07",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1746",
            "COURSE": "CSE421",
            "DEPARTMENT": "SFQ",
            "SECTION": "07",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1747",
            "COURSE": "CSE421",
            "DEPARTMENT": "FDC",
            "SECTION": "05",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1748",
            "COURSE": "CSE421",
            "DEPARTMENT": "FDC",
            "SECTION": "05",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1749",
            "COURSE": "CSE421",
            "DEPARTMENT": "SKZ",
            "SECTION": "11",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1750",
            "COURSE": "CSE421",
            "DEPARTMENT": "SKZ",
            "SECTION": "11",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1751",
            "COURSE": "CSE421",
            "DEPARTMENT": "ARF",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1752",
            "COURSE": "CSE421",
            "DEPARTMENT": "ARF",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1753",
            "COURSE": "CSE421",
            "DEPARTMENT": "ARF",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1754",
            "COURSE": "CSE421",
            "DEPARTMENT": "ARF",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1755",
            "COURSE": "CSE421",
            "DEPARTMENT": "SRJ",
            "SECTION": "10",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1756",
            "COURSE": "CSE421",
            "DEPARTMENT": "SRJ",
            "SECTION": "10",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1757",
            "COURSE": "CSE421",
            "DEPARTMENT": "SKZ",
            "SECTION": "12",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1758",
            "COURSE": "CSE421",
            "DEPARTMENT": "SKZ",
            "SECTION": "12",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1759",
            "COURSE": "CSE421",
            "DEPARTMENT": "SKZ",
            "SECTION": "11",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1760",
            "COURSE": "CSE421",
            "DEPARTMENT": "SKZ",
            "SECTION": "11",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1761",
            "COURSE": "CSE421",
            "DEPARTMENT": "SFQ",
            "SECTION": "08",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1762",
            "COURSE": "CSE421",
            "DEPARTMENT": "SFQ",
            "SECTION": "08",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1763",
            "COURSE": "CSE421",
            "DEPARTMENT": "SRJ",
            "SECTION": "09",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1764",
            "COURSE": "CSE421",
            "DEPARTMENT": "SRJ",
            "SECTION": "09",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1765",
            "COURSE": "CSE421",
            "DEPARTMENT": "TSD",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1766",
            "COURSE": "CSE421",
            "DEPARTMENT": "TSD",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1767",
            "COURSE": "CSE421",
            "DEPARTMENT": "ARF",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1768",
            "COURSE": "CSE421",
            "DEPARTMENT": "ARF",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1769",
            "COURSE": "CSE421",
            "DEPARTMENT": "FDC",
            "SECTION": "06",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1770",
            "COURSE": "CSE421",
            "DEPARTMENT": "FDC",
            "SECTION": "06",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1771",
            "COURSE": "CSE421",
            "DEPARTMENT": "ARF",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1772",
            "COURSE": "CSE421",
            "DEPARTMENT": "ARF",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1773",
            "COURSE": "CSE421",
            "DEPARTMENT": "FDC",
            "SECTION": "05",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1774",
            "COURSE": "CSE421",
            "DEPARTMENT": "FDC",
            "SECTION": "05",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1775",
            "COURSE": "CSE421",
            "DEPARTMENT": "TSD",
            "SECTION": "04",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1776",
            "COURSE": "CSE421",
            "DEPARTMENT": "TSD",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1777",
            "COURSE": "CSE421",
            "DEPARTMENT": "SFQ",
            "SECTION": "07",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1778",
            "COURSE": "CSE421",
            "DEPARTMENT": "SFQ",
            "SECTION": "07",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1779",
            "COURSE": "CSE422",
            "DEPARTMENT": "JMA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1780",
            "COURSE": "CSE422",
            "DEPARTMENT": "JMA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1781",
            "COURSE": "CSE422",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1782",
            "COURSE": "CSE422",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1783",
            "COURSE": "CSE422",
            "DEPARTMENT": "JMA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1784",
            "COURSE": "CSE422",
            "DEPARTMENT": "JMA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1785",
            "COURSE": "CSE422",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1786",
            "COURSE": "CSE422",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1787",
            "COURSE": "CSE422",
            "DEPARTMENT": "ZHS",
            "SECTION": "03",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1788",
            "COURSE": "CSE422",
            "DEPARTMENT": "ZHS",
            "SECTION": "03",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1789",
            "COURSE": "CSE422",
            "DEPARTMENT": "ZHS",
            "SECTION": "04",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1790",
            "COURSE": "CSE422",
            "DEPARTMENT": "ZHS",
            "SECTION": "04",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1791",
            "COURSE": "CSE422",
            "DEPARTMENT": "TRZ",
            "SECTION": "05",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1792",
            "COURSE": "CSE422",
            "DEPARTMENT": "TRZ",
            "SECTION": "05",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1793",
            "COURSE": "CSE422",
            "DEPARTMENT": "TRZ",
            "SECTION": "06",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1794",
            "COURSE": "CSE422",
            "DEPARTMENT": "TRZ",
            "SECTION": "06",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1795",
            "COURSE": "CSE422",
            "DEPARTMENT": "IBU",
            "SECTION": "08",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1796",
            "COURSE": "CSE422",
            "DEPARTMENT": "IBU",
            "SECTION": "08",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1797",
            "COURSE": "CSE422",
            "DEPARTMENT": "TRZ",
            "SECTION": "06",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1798",
            "COURSE": "CSE422",
            "DEPARTMENT": "TRZ",
            "SECTION": "06",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1799",
            "COURSE": "CSE422",
            "DEPARTMENT": "JMA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1800",
            "COURSE": "CSE422",
            "DEPARTMENT": "JMA",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1801",
            "COURSE": "CSE422",
            "DEPARTMENT": "JMA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1802",
            "COURSE": "CSE422",
            "DEPARTMENT": "JMA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1803",
            "COURSE": "CSE422",
            "DEPARTMENT": "ZHS",
            "SECTION": "04",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1804",
            "COURSE": "CSE422",
            "DEPARTMENT": "ZHS",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1805",
            "COURSE": "CSE422",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1806",
            "COURSE": "CSE422",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1807",
            "COURSE": "CSE422",
            "DEPARTMENT": "ZHS",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1808",
            "COURSE": "CSE422",
            "DEPARTMENT": "ZHS",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1809",
            "COURSE": "CSE422",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1810",
            "COURSE": "CSE422",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1811",
            "COURSE": "CSE422",
            "DEPARTMENT": "TRZ",
            "SECTION": "05",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1812",
            "COURSE": "CSE422",
            "DEPARTMENT": "TRZ",
            "SECTION": "05",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1813",
            "COURSE": "CSE422",
            "DEPARTMENT": "IBU",
            "SECTION": "08",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1814",
            "COURSE": "CSE422",
            "DEPARTMENT": "IBU",
            "SECTION": "08",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1815",
            "COURSE": "CSE423",
            "DEPARTMENT": "AJA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1816",
            "COURSE": "CSE423",
            "DEPARTMENT": "AJA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1817",
            "COURSE": "CSE423",
            "DEPARTMENT": "TMD",
            "SECTION": "06",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1818",
            "COURSE": "CSE423",
            "DEPARTMENT": "TMD",
            "SECTION": "06",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1819",
            "COURSE": "CSE423",
            "DEPARTMENT": "DMH",
            "SECTION": "10",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1820",
            "COURSE": "CSE423",
            "DEPARTMENT": "DMH",
            "SECTION": "10",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1821",
            "COURSE": "CSE423",
            "DEPARTMENT": "DMH",
            "SECTION": "09",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1822",
            "COURSE": "CSE423",
            "DEPARTMENT": "DMH",
            "SECTION": "09",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1823",
            "COURSE": "CSE423",
            "DEPARTMENT": "AJA",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1824",
            "COURSE": "CSE423",
            "DEPARTMENT": "AJA",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1825",
            "COURSE": "CSE423",
            "DEPARTMENT": "IBR",
            "SECTION": "08",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1826",
            "COURSE": "CSE423",
            "DEPARTMENT": "IBR",
            "SECTION": "08",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1827",
            "COURSE": "CSE423",
            "DEPARTMENT": "MZU",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1828",
            "COURSE": "CSE423",
            "DEPARTMENT": "MZU",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1829",
            "COURSE": "CSE423",
            "DEPARTMENT": "MZU",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1830",
            "COURSE": "CSE423",
            "DEPARTMENT": "MZU",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1831",
            "COURSE": "CSE423",
            "DEPARTMENT": "TMD",
            "SECTION": "05",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1832",
            "COURSE": "CSE423",
            "DEPARTMENT": "TMD",
            "SECTION": "05",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1833",
            "COURSE": "CSE423",
            "DEPARTMENT": "IBR",
            "SECTION": "07",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1834",
            "COURSE": "CSE423",
            "DEPARTMENT": "IBR",
            "SECTION": "07",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1835",
            "COURSE": "CSE423",
            "DEPARTMENT": "TMD",
            "SECTION": "06",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1836",
            "COURSE": "CSE423",
            "DEPARTMENT": "TMD",
            "SECTION": "06",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1837",
            "COURSE": "CSE423",
            "DEPARTMENT": "TMD",
            "SECTION": "05",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1838",
            "COURSE": "CSE423",
            "DEPARTMENT": "TMD",
            "SECTION": "05",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1839",
            "COURSE": "CSE423",
            "DEPARTMENT": "AJA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1840",
            "COURSE": "CSE423",
            "DEPARTMENT": "AJA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1841",
            "COURSE": "CSE423",
            "DEPARTMENT": "MZU",
            "SECTION": "04",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1842",
            "COURSE": "CSE423",
            "DEPARTMENT": "MZU",
            "SECTION": "04",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1843",
            "COURSE": "CSE423",
            "DEPARTMENT": "IBR",
            "SECTION": "08",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1844",
            "COURSE": "CSE423",
            "DEPARTMENT": "IBR",
            "SECTION": "08",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1845",
            "COURSE": "CSE423",
            "DEPARTMENT": "IBR",
            "SECTION": "07",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1846",
            "COURSE": "CSE423",
            "DEPARTMENT": "IBR",
            "SECTION": "07",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1847",
            "COURSE": "CSE423",
            "DEPARTMENT": "DMH",
            "SECTION": "09",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1848",
            "COURSE": "CSE423",
            "DEPARTMENT": "DMH",
            "SECTION": "09",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1849",
            "COURSE": "CSE423",
            "DEPARTMENT": "AJA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1850",
            "COURSE": "CSE423",
            "DEPARTMENT": "AJA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1851",
            "COURSE": "CSE423",
            "DEPARTMENT": "DMH",
            "SECTION": "10",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1852",
            "COURSE": "CSE423",
            "DEPARTMENT": "DMH",
            "SECTION": "10",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1853",
            "COURSE": "CSE423",
            "DEPARTMENT": "MZU",
            "SECTION": "03",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1854",
            "COURSE": "CSE423",
            "DEPARTMENT": "MZU",
            "SECTION": "03",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1855",
            "COURSE": "CSE424",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "1856",
            "COURSE": "CSE424",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "1857",
            "COURSE": "CSE424",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1858",
            "COURSE": "CSE424",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1859",
            "COURSE": "CSE424",
            "DEPARTMENT": "AAR",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "06:00 PM",
            "END-TIME": "09:00 PM"
        },
        {
            "SL": "1860",
            "COURSE": "CSE425",
            "DEPARTMENT": "MMM",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1861",
            "COURSE": "CSE425",
            "DEPARTMENT": "MMM",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1862",
            "COURSE": "CSE425",
            "DEPARTMENT": "MMM",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1863",
            "COURSE": "CSE425",
            "DEPARTMENT": "MMM",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1864",
            "COURSE": "CSE426",
            "DEPARTMENT": "TSM",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1865",
            "COURSE": "CSE426",
            "DEPARTMENT": "TSM",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1866",
            "COURSE": "CSE427",
            "DEPARTMENT": "DFD",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1867",
            "COURSE": "CSE427",
            "DEPARTMENT": "DFD",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1868",
            "COURSE": "CSE427",
            "DEPARTMENT": "GRA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1869",
            "COURSE": "CSE427",
            "DEPARTMENT": "GRA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1870",
            "COURSE": "CSE427",
            "DEPARTMENT": "DFD",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1871",
            "COURSE": "CSE427",
            "DEPARTMENT": "DFD",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1872",
            "COURSE": "CSE427",
            "DEPARTMENT": "GRA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1873",
            "COURSE": "CSE427",
            "DEPARTMENT": "GRA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1874",
            "COURSE": "CSE428",
            "DEPARTMENT": "BRH",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1875",
            "COURSE": "CSE428",
            "DEPARTMENT": "BRH",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1876",
            "COURSE": "CSE428",
            "DEPARTMENT": "RRH",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1877",
            "COURSE": "CSE428",
            "DEPARTMENT": "RRH",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1878",
            "COURSE": "CSE428",
            "DEPARTMENT": "RRH",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1879",
            "COURSE": "CSE428",
            "DEPARTMENT": "RRH",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1880",
            "COURSE": "CSE428",
            "DEPARTMENT": "BRH",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1881",
            "COURSE": "CSE428",
            "DEPARTMENT": "BRH",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1882",
            "COURSE": "CSE431",
            "DEPARTMENT": "AAR",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1883",
            "COURSE": "CSE431",
            "DEPARTMENT": "AAR",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1884",
            "COURSE": "CSE437",
            "DEPARTMENT": "GRA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1885",
            "COURSE": "CSE437",
            "DEPARTMENT": "GRA",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1886",
            "COURSE": "CSE437",
            "DEPARTMENT": "GRA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1887",
            "COURSE": "CSE437",
            "DEPARTMENT": "GRA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1888",
            "COURSE": "CSE438",
            "DEPARTMENT": "AAR",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1889",
            "COURSE": "CSE438",
            "DEPARTMENT": "AAR",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1890",
            "COURSE": "CSE439",
            "DEPARTMENT": "AAR",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1891",
            "COURSE": "CSE439",
            "DEPARTMENT": "AAR",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1892",
            "COURSE": "CSE440",
            "DEPARTMENT": "FYS",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1893",
            "COURSE": "CSE440",
            "DEPARTMENT": "FYS",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1894",
            "COURSE": "CSE440",
            "DEPARTMENT": "FYS",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1895",
            "COURSE": "CSE440",
            "DEPARTMENT": "FYS",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1896",
            "COURSE": "CSE442",
            "DEPARTMENT": "AAR",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1897",
            "COURSE": "CSE442",
            "DEPARTMENT": "AAR",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1898",
            "COURSE": "CSE446",
            "DEPARTMENT": "SDF",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1899",
            "COURSE": "CSE446",
            "DEPARTMENT": "SDF",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1900",
            "COURSE": "CSE446",
            "DEPARTMENT": "SDF",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1901",
            "COURSE": "CSE446",
            "DEPARTMENT": "SDF",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1902",
            "COURSE": "CSE447",
            "DEPARTMENT": "MIH",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1903",
            "COURSE": "CSE447",
            "DEPARTMENT": "MIH",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1904",
            "COURSE": "CSE447",
            "DEPARTMENT": "MIH",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1905",
            "COURSE": "CSE447",
            "DEPARTMENT": "MIH",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1906",
            "COURSE": "CSE449",
            "DEPARTMENT": "AAR",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "06:00 PM",
            "END-TIME": "09:00 PM"
        },
        {
            "SL": "1907",
            "COURSE": "CSE450",
            "DEPARTMENT": "KKP",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1908",
            "COURSE": "CSE450",
            "DEPARTMENT": "KKP",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1909",
            "COURSE": "CSE450",
            "DEPARTMENT": "KKP",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1910",
            "COURSE": "CSE450",
            "DEPARTMENT": "KKP",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1911",
            "COURSE": "CSE460",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1912",
            "COURSE": "CSE460",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1913",
            "COURSE": "CSE460",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1914",
            "COURSE": "CSE460",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1915",
            "COURSE": "CSE460",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1916",
            "COURSE": "CSE460",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1917",
            "COURSE": "CSE460",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1918",
            "COURSE": "CSE460",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1919",
            "COURSE": "CSE460",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1920",
            "COURSE": "CSE460",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1921",
            "COURSE": "CSE460",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1922",
            "COURSE": "CSE460",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1923",
            "COURSE": "CSE460",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1924",
            "COURSE": "CSE460",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1925",
            "COURSE": "CSE460",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1926",
            "COURSE": "CSE460",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1927",
            "COURSE": "CSE460",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1928",
            "COURSE": "CSE460",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1929",
            "COURSE": "CSE460",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1930",
            "COURSE": "CSE460",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1931",
            "COURSE": "CSE460",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1932",
            "COURSE": "CSE460",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1933",
            "COURSE": "CSE460",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1934",
            "COURSE": "CSE460",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1935",
            "COURSE": "CSE460",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1936",
            "COURSE": "CSE460",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1937",
            "COURSE": "CSE460",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1938",
            "COURSE": "CSE460",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1939",
            "COURSE": "CSE460",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1940",
            "COURSE": "CSE460",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1941",
            "COURSE": "CSE460",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1942",
            "COURSE": "CSE460",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1943",
            "COURSE": "CSE461",
            "DEPARTMENT": "NLY",
            "SECTION": "08",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1944",
            "COURSE": "CSE461",
            "DEPARTMENT": "NLY",
            "SECTION": "08",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1945",
            "COURSE": "CSE461",
            "DEPARTMENT": "KHR",
            "SECTION": "06",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1946",
            "COURSE": "CSE461",
            "DEPARTMENT": "KHR",
            "SECTION": "06",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1947",
            "COURSE": "CSE461",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1948",
            "COURSE": "CSE461",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1949",
            "COURSE": "CSE461",
            "DEPARTMENT": "NLY",
            "SECTION": "07",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1950",
            "COURSE": "CSE461",
            "DEPARTMENT": "NLY",
            "SECTION": "07",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1951",
            "COURSE": "CSE461",
            "DEPARTMENT": "RAD",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1952",
            "COURSE": "CSE461",
            "DEPARTMENT": "RAD",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1953",
            "COURSE": "CSE461",
            "DEPARTMENT": "RAD",
            "SECTION": "04",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1954",
            "COURSE": "CSE461",
            "DEPARTMENT": "RAD",
            "SECTION": "04",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1955",
            "COURSE": "CSE461",
            "DEPARTMENT": "NLY",
            "SECTION": "09",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1956",
            "COURSE": "CSE461",
            "DEPARTMENT": "NLY",
            "SECTION": "09",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1957",
            "COURSE": "CSE461",
            "DEPARTMENT": "KHR",
            "SECTION": "05",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1958",
            "COURSE": "CSE461",
            "DEPARTMENT": "KHR",
            "SECTION": "05",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1959",
            "COURSE": "CSE461",
            "DEPARTMENT": "RAD",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1960",
            "COURSE": "CSE461",
            "DEPARTMENT": "RAD",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1961",
            "COURSE": "CSE461",
            "DEPARTMENT": "RAD",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1962",
            "COURSE": "CSE461",
            "DEPARTMENT": "RAD",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1963",
            "COURSE": "CSE461",
            "DEPARTMENT": "RAD",
            "SECTION": "04",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1964",
            "COURSE": "CSE461",
            "DEPARTMENT": "RAD",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1965",
            "COURSE": "CSE461",
            "DEPARTMENT": "RAD",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1966",
            "COURSE": "CSE461",
            "DEPARTMENT": "RAD",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1967",
            "COURSE": "CSE461",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1968",
            "COURSE": "CSE461",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1969",
            "COURSE": "CSE461",
            "DEPARTMENT": "NLY",
            "SECTION": "07",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1970",
            "COURSE": "CSE461",
            "DEPARTMENT": "NLY",
            "SECTION": "07",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1971",
            "COURSE": "CSE461",
            "DEPARTMENT": "KHR",
            "SECTION": "06",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1972",
            "COURSE": "CSE461",
            "DEPARTMENT": "KHR",
            "SECTION": "06",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1973",
            "COURSE": "CSE461",
            "DEPARTMENT": "KHR",
            "SECTION": "05",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1974",
            "COURSE": "CSE461",
            "DEPARTMENT": "KHR",
            "SECTION": "05",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1975",
            "COURSE": "CSE461",
            "DEPARTMENT": "RAD",
            "SECTION": "03",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1976",
            "COURSE": "CSE461",
            "DEPARTMENT": "RAD",
            "SECTION": "03",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "1977",
            "COURSE": "CSE461",
            "DEPARTMENT": "NLY",
            "SECTION": "09",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1978",
            "COURSE": "CSE461",
            "DEPARTMENT": "NLY",
            "SECTION": "09",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1979",
            "COURSE": "CSE461",
            "DEPARTMENT": "NLY",
            "SECTION": "08",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1980",
            "COURSE": "CSE461",
            "DEPARTMENT": "NLY",
            "SECTION": "08",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1981",
            "COURSE": "CSE461",
            "DEPARTMENT": "RAD",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1982",
            "COURSE": "CSE461",
            "DEPARTMENT": "RAD",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1983",
            "COURSE": "CSE470",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1984",
            "COURSE": "CSE470",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1985",
            "COURSE": "CSE470",
            "DEPARTMENT": "TIK",
            "SECTION": "04",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1986",
            "COURSE": "CSE470",
            "DEPARTMENT": "TIK",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "1987",
            "COURSE": "CSE470",
            "DEPARTMENT": "TIK",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1988",
            "COURSE": "CSE470",
            "DEPARTMENT": "TIK",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "1989",
            "COURSE": "CSE470",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1990",
            "COURSE": "CSE470",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "1991",
            "COURSE": "CSE470",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1992",
            "COURSE": "CSE470",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1993",
            "COURSE": "CSE470",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1994",
            "COURSE": "CSE470",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1995",
            "COURSE": "CSE470",
            "DEPARTMENT": "TIK",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1996",
            "COURSE": "CSE470",
            "DEPARTMENT": "TIK",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "1997",
            "COURSE": "CSE470",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1998",
            "COURSE": "CSE470",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "1999",
            "COURSE": "CSE470",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2000",
            "COURSE": "CSE470",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2001",
            "COURSE": "CSE470",
            "DEPARTMENT": "ADHN",
            "SECTION": "05",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2002",
            "COURSE": "CSE470",
            "DEPARTMENT": "ADHN",
            "SECTION": "05",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2003",
            "COURSE": "CSE470",
            "DEPARTMENT": "TIK",
            "SECTION": "03",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2004",
            "COURSE": "CSE470",
            "DEPARTMENT": "TIK",
            "SECTION": "03",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2005",
            "COURSE": "CSE471",
            "DEPARTMENT": "MIH",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2006",
            "COURSE": "CSE471",
            "DEPARTMENT": "MIH",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2007",
            "COURSE": "CSE471",
            "DEPARTMENT": "MIH",
            "SECTION": "04",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2008",
            "COURSE": "CSE471",
            "DEPARTMENT": "MIH",
            "SECTION": "04",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2009",
            "COURSE": "CSE471",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2010",
            "COURSE": "CSE471",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2011",
            "COURSE": "CSE471",
            "DEPARTMENT": "MIH",
            "SECTION": "05",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2012",
            "COURSE": "CSE471",
            "DEPARTMENT": "MIH",
            "SECTION": "05",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2013",
            "COURSE": "CSE471",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2014",
            "COURSE": "CSE471",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2015",
            "COURSE": "CSE471",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2016",
            "COURSE": "CSE471",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2017",
            "COURSE": "CSE471",
            "DEPARTMENT": "AQU",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2018",
            "COURSE": "CSE471",
            "DEPARTMENT": "AQU",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2019",
            "COURSE": "CSE471",
            "DEPARTMENT": "AQU",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2020",
            "COURSE": "CSE471",
            "DEPARTMENT": "AQU",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2021",
            "COURSE": "CSE471",
            "DEPARTMENT": "MIH",
            "SECTION": "04",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2022",
            "COURSE": "CSE471",
            "DEPARTMENT": "MIH",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2023",
            "COURSE": "CSE471",
            "DEPARTMENT": "AQU",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2024",
            "COURSE": "CSE471",
            "DEPARTMENT": "AQU",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2025",
            "COURSE": "CSE471",
            "DEPARTMENT": "MIH",
            "SECTION": "05",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2026",
            "COURSE": "CSE471",
            "DEPARTMENT": "MIH",
            "SECTION": "05",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2027",
            "COURSE": "CSE471",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2028",
            "COURSE": "CSE471",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2029",
            "COURSE": "CSE471",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2030",
            "COURSE": "CSE471",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2031",
            "COURSE": "CSE471",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2032",
            "COURSE": "CSE471",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2033",
            "COURSE": "CSE471",
            "DEPARTMENT": "AQU",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2034",
            "COURSE": "CSE471",
            "DEPARTMENT": "AQU",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2035",
            "COURSE": "CSE471",
            "DEPARTMENT": "MIH",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2036",
            "COURSE": "CSE471",
            "DEPARTMENT": "MIH",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2037",
            "COURSE": "CSE472",
            "DEPARTMENT": "JNM",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2038",
            "COURSE": "CSE472",
            "DEPARTMENT": "JNM",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2039",
            "COURSE": "CSE472",
            "DEPARTMENT": "JNM",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2040",
            "COURSE": "CSE472",
            "DEPARTMENT": "JNM",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2041",
            "COURSE": "CSE474",
            "DEPARTMENT": "IBU",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2042",
            "COURSE": "CSE474",
            "DEPARTMENT": "IBU",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2043",
            "COURSE": "CSE474",
            "DEPARTMENT": "IBU",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2044",
            "COURSE": "CSE474",
            "DEPARTMENT": "IBU",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2045",
            "COURSE": "CSE484",
            "DEPARTMENT": "JNM",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2046",
            "COURSE": "CSE484",
            "DEPARTMENT": "JNM",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2047",
            "COURSE": "CSE484",
            "DEPARTMENT": "JNM",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2048",
            "COURSE": "CSE484",
            "DEPARTMENT": "JNM",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2049",
            "COURSE": "CSE489",
            "DEPARTMENT": "ADR",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2050",
            "COURSE": "CSE489",
            "DEPARTMENT": "ADR",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2051",
            "COURSE": "CSE489",
            "DEPARTMENT": "ADR",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2052",
            "COURSE": "CSE489",
            "DEPARTMENT": "ADR",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2053",
            "COURSE": "CSE490",
            "DEPARTMENT": "SDF",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2054",
            "COURSE": "CSE490",
            "DEPARTMENT": "SDF",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2055",
            "COURSE": "CSE490",
            "DEPARTMENT": "SDF",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2056",
            "COURSE": "CSE490",
            "DEPARTMENT": "SDF",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2057",
            "COURSE": "CST201",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2058",
            "COURSE": "CST201",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2059",
            "COURSE": "CST302",
            "DEPARTMENT": "SNN",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2060",
            "COURSE": "CST302",
            "DEPARTMENT": "SNN",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2061",
            "COURSE": "CST303",
            "DEPARTMENT": "NOL",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2062",
            "COURSE": "CST303",
            "DEPARTMENT": "NOL",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2063",
            "COURSE": "CST304",
            "DEPARTMENT": "DHN",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2064",
            "COURSE": "CST304",
            "DEPARTMENT": "DHN",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2065",
            "COURSE": "CST304",
            "DEPARTMENT": "DRKR",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2066",
            "COURSE": "CST304",
            "DEPARTMENT": "DRKR",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2067",
            "COURSE": "CST305",
            "DEPARTMENT": "SHJ",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2068",
            "COURSE": "CST305",
            "DEPARTMENT": "SHJ",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2069",
            "COURSE": "CST306",
            "DEPARTMENT": "FHR",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2070",
            "COURSE": "CST306",
            "DEPARTMENT": "FHR",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2071",
            "COURSE": "DEV104",
            "DEPARTMENT": "SMH",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2072",
            "COURSE": "DEV104",
            "DEPARTMENT": "SMH",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2073",
            "COURSE": "ECE101",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2074",
            "COURSE": "ECE101",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2075",
            "COURSE": "ECE101",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2076",
            "COURSE": "ECE101",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2077",
            "COURSE": "ECE101",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2078",
            "COURSE": "ECE101",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2079",
            "COURSE": "ECE101",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2080",
            "COURSE": "ECE101",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2081",
            "COURSE": "ECE101",
            "DEPARTMENT": "LTBA",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2082",
            "COURSE": "ECE101",
            "DEPARTMENT": "LTBA",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2083",
            "COURSE": "ECE101",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2084",
            "COURSE": "ECE101",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2085",
            "COURSE": "ECE101",
            "DEPARTMENT": "LTBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2086",
            "COURSE": "ECE101",
            "DEPARTMENT": "LTBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2087",
            "COURSE": "ECE101",
            "DEPARTMENT": "LTBA",
            "SECTION": "04",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2088",
            "COURSE": "ECE101",
            "DEPARTMENT": "LTBA",
            "SECTION": "04",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2089",
            "COURSE": "ECE103",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2090",
            "COURSE": "ECE103",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2091",
            "COURSE": "ECE103",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2092",
            "COURSE": "ECE103",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2093",
            "COURSE": "ECE103",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2094",
            "COURSE": "ECE103",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2095",
            "COURSE": "ECE103",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2096",
            "COURSE": "ECE103",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2097",
            "COURSE": "ECE103",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2098",
            "COURSE": "ECE103",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2099",
            "COURSE": "ECE103",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2100",
            "COURSE": "ECE103",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2101",
            "COURSE": "ECE103",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2102",
            "COURSE": "ECE103",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2103",
            "COURSE": "ECE103",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2104",
            "COURSE": "ECE103",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2105",
            "COURSE": "ECE203",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2106",
            "COURSE": "ECE203",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2107",
            "COURSE": "ECE203",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2108",
            "COURSE": "ECE203",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2109",
            "COURSE": "ECE203",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2110",
            "COURSE": "ECE203",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2111",
            "COURSE": "ECE203",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2112",
            "COURSE": "ECE203",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2113",
            "COURSE": "ECE205",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2114",
            "COURSE": "ECE205",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2115",
            "COURSE": "ECE205",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2116",
            "COURSE": "ECE205",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2117",
            "COURSE": "ECE205",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2118",
            "COURSE": "ECE205",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2119",
            "COURSE": "ECE205",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2120",
            "COURSE": "ECE205",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2121",
            "COURSE": "ECE205",
            "DEPARTMENT": "LTBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2122",
            "COURSE": "ECE205",
            "DEPARTMENT": "LTBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2123",
            "COURSE": "ECE205",
            "DEPARTMENT": "LTBA",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2124",
            "COURSE": "ECE205",
            "DEPARTMENT": "LTBA",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2125",
            "COURSE": "ECE207",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2126",
            "COURSE": "ECE207",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2127",
            "COURSE": "ECE207",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2128",
            "COURSE": "ECE207",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2129",
            "COURSE": "ECE208",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2130",
            "COURSE": "ECE208",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2131",
            "COURSE": "ECE208",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2132",
            "COURSE": "ECE208",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2133",
            "COURSE": "ECE209",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2134",
            "COURSE": "ECE209",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2135",
            "COURSE": "ECE209",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2136",
            "COURSE": "ECE209",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2137",
            "COURSE": "ECE241",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2138",
            "COURSE": "ECE241",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2139",
            "COURSE": "ECE241",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2140",
            "COURSE": "ECE241",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2141",
            "COURSE": "ECE243",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2142",
            "COURSE": "ECE243",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2143",
            "COURSE": "ECE243",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2144",
            "COURSE": "ECE243",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2145",
            "COURSE": "ECE282",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2146",
            "COURSE": "ECE282",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2147",
            "COURSE": "ECE282",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2148",
            "COURSE": "ECE282",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2149",
            "COURSE": "ECE283",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2150",
            "COURSE": "ECE283",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2151",
            "COURSE": "ECE283",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2152",
            "COURSE": "ECE283",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2153",
            "COURSE": "ECE283",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2154",
            "COURSE": "ECE283",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2155",
            "COURSE": "ECE283",
            "DEPARTMENT": "LTBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2156",
            "COURSE": "ECE283",
            "DEPARTMENT": "LTBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2157",
            "COURSE": "ECE301",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2158",
            "COURSE": "ECE301",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2159",
            "COURSE": "ECE301",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2160",
            "COURSE": "ECE301",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2161",
            "COURSE": "ECE305",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2162",
            "COURSE": "ECE305",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2163",
            "COURSE": "ECE305",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2164",
            "COURSE": "ECE305",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2165",
            "COURSE": "ECE305",
            "DEPARTMENT": "LTBA",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2166",
            "COURSE": "ECE305",
            "DEPARTMENT": "LTBA",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2167",
            "COURSE": "ECE305",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2168",
            "COURSE": "ECE305",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2169",
            "COURSE": "ECE306",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2170",
            "COURSE": "ECE306",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2171",
            "COURSE": "ECE308",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2172",
            "COURSE": "ECE308",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2173",
            "COURSE": "ECE308",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2174",
            "COURSE": "ECE308",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2175",
            "COURSE": "ECE308",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2176",
            "COURSE": "ECE308",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2177",
            "COURSE": "ECE308",
            "DEPARTMENT": "LTBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2178",
            "COURSE": "ECE308",
            "DEPARTMENT": "LTBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2179",
            "COURSE": "ECE309",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2180",
            "COURSE": "ECE309",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2181",
            "COURSE": "ECE309",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2182",
            "COURSE": "ECE309",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2183",
            "COURSE": "ECE341",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2184",
            "COURSE": "ECE341",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2185",
            "COURSE": "ECE341",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2186",
            "COURSE": "ECE341",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2187",
            "COURSE": "ECE341",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2188",
            "COURSE": "ECE341",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2189",
            "COURSE": "ECE341",
            "DEPARTMENT": "LTBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2190",
            "COURSE": "ECE341",
            "DEPARTMENT": "LTBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2191",
            "COURSE": "ECE342",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2192",
            "COURSE": "ECE342",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2193",
            "COURSE": "ECE343",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2194",
            "COURSE": "ECE343",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2195",
            "COURSE": "ECE343",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2196",
            "COURSE": "ECE343",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2197",
            "COURSE": "ECE343",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2198",
            "COURSE": "ECE343",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2199",
            "COURSE": "ECE343",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2200",
            "COURSE": "ECE343",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2201",
            "COURSE": "ECE344",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2202",
            "COURSE": "ECE344",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2203",
            "COURSE": "ECE344",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2204",
            "COURSE": "ECE344",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2205",
            "COURSE": "ECE359",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2206",
            "COURSE": "ECE359",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2207",
            "COURSE": "ECE365",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2208",
            "COURSE": "ECE365",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2209",
            "COURSE": "ECE365",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2210",
            "COURSE": "ECE365",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2211",
            "COURSE": "ECE366",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2212",
            "COURSE": "ECE366",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2213",
            "COURSE": "ECE369",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2214",
            "COURSE": "ECE369",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2215",
            "COURSE": "ECE373",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2216",
            "COURSE": "ECE373",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2217",
            "COURSE": "ECE373",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2218",
            "COURSE": "ECE373",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2219",
            "COURSE": "ECE373",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2220",
            "COURSE": "ECE373",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2221",
            "COURSE": "ECE373",
            "DEPARTMENT": "LTBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2222",
            "COURSE": "ECE373",
            "DEPARTMENT": "LTBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2223",
            "COURSE": "ECE382",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2224",
            "COURSE": "ECE382",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2225",
            "COURSE": "ECE383",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2226",
            "COURSE": "ECE383",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2227",
            "COURSE": "ECE402",
            "DEPARTMENT": "CTBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2228",
            "COURSE": "ECE402",
            "DEPARTMENT": "CTBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2229",
            "COURSE": "ECE402",
            "DEPARTMENT": "DTBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2230",
            "COURSE": "ECE402",
            "DEPARTMENT": "DTBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2231",
            "COURSE": "ECE402",
            "DEPARTMENT": "PTBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2232",
            "COURSE": "ECE402",
            "DEPARTMENT": "PTBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2233",
            "COURSE": "ECE403",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2234",
            "COURSE": "ECE403",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2235",
            "COURSE": "ECE411",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2236",
            "COURSE": "ECE411",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2237",
            "COURSE": "ECE411",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2238",
            "COURSE": "ECE411",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2239",
            "COURSE": "ECE412",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2240",
            "COURSE": "ECE412",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2241",
            "COURSE": "ECE415",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2242",
            "COURSE": "ECE415",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2243",
            "COURSE": "ECE421",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2244",
            "COURSE": "ECE421",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2245",
            "COURSE": "ECE421",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2246",
            "COURSE": "ECE421",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2247",
            "COURSE": "ECE422",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2248",
            "COURSE": "ECE422",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2249",
            "COURSE": "ECE445",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2250",
            "COURSE": "ECE445",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2251",
            "COURSE": "ECE445",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2252",
            "COURSE": "ECE445",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2253",
            "COURSE": "ECE446",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2254",
            "COURSE": "ECE446",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2255",
            "COURSE": "ECE499",
            "DEPARTMENT": "CTBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2256",
            "COURSE": "ECE499",
            "DEPARTMENT": "CTBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2257",
            "COURSE": "ECE499",
            "DEPARTMENT": "DTBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2258",
            "COURSE": "ECE499",
            "DEPARTMENT": "DTBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2259",
            "COURSE": "ECE499",
            "DEPARTMENT": "PTBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2260",
            "COURSE": "ECE499",
            "DEPARTMENT": "PTBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2261",
            "COURSE": "ECO101",
            "DEPARTMENT": "ISQ",
            "SECTION": "06",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2262",
            "COURSE": "ECO101",
            "DEPARTMENT": "ISQ",
            "SECTION": "06",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2263",
            "COURSE": "ECO101",
            "DEPARTMENT": "RFU",
            "SECTION": "04",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2264",
            "COURSE": "ECO101",
            "DEPARTMENT": "RFU",
            "SECTION": "04",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2265",
            "COURSE": "ECO101",
            "DEPARTMENT": "MTS",
            "SECTION": "08",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2266",
            "COURSE": "ECO101",
            "DEPARTMENT": "MTS",
            "SECTION": "08",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2267",
            "COURSE": "ECO101",
            "DEPARTMENT": "ISQ",
            "SECTION": "05",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2268",
            "COURSE": "ECO101",
            "DEPARTMENT": "ISQ",
            "SECTION": "05",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2269",
            "COURSE": "ECO101",
            "DEPARTMENT": "HDR",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2270",
            "COURSE": "ECO101",
            "DEPARTMENT": "HDR",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2271",
            "COURSE": "ECO101",
            "DEPARTMENT": "RFU",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2272",
            "COURSE": "ECO101",
            "DEPARTMENT": "RFU",
            "SECTION": "03",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2273",
            "COURSE": "ECO101",
            "DEPARTMENT": "MTS",
            "SECTION": "07",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2274",
            "COURSE": "ECO101",
            "DEPARTMENT": "MTS",
            "SECTION": "07",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2275",
            "COURSE": "ECO101",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2276",
            "COURSE": "ECO101",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2277",
            "COURSE": "ECO101",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2278",
            "COURSE": "ECO101",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2279",
            "COURSE": "ECO101",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2280",
            "COURSE": "ECO101",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2281",
            "COURSE": "ECO101",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2282",
            "COURSE": "ECO101",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2283",
            "COURSE": "ECO101",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2284",
            "COURSE": "ECO101",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2285",
            "COURSE": "ECO101",
            "DEPARTMENT": "SIF",
            "SECTION": "09",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2286",
            "COURSE": "ECO101",
            "DEPARTMENT": "SIF",
            "SECTION": "09",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2287",
            "COURSE": "ECO102",
            "DEPARTMENT": "SIF",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2288",
            "COURSE": "ECO102",
            "DEPARTMENT": "SIF",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2289",
            "COURSE": "ECO102",
            "DEPARTMENT": "RFU",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2290",
            "COURSE": "ECO102",
            "DEPARTMENT": "RFU",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2291",
            "COURSE": "ECO102",
            "DEPARTMENT": "RUA",
            "SECTION": "04",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2292",
            "COURSE": "ECO102",
            "DEPARTMENT": "RUA",
            "SECTION": "04",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2293",
            "COURSE": "ECO102",
            "DEPARTMENT": "SIF",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2294",
            "COURSE": "ECO102",
            "DEPARTMENT": "SIF",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2295",
            "COURSE": "ECO102",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2296",
            "COURSE": "ECO102",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2297",
            "COURSE": "ECO104",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "12:15 PM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "2298",
            "COURSE": "ECO104",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:15 PM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "2299",
            "COURSE": "ECO104",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "02:55 PM"
        },
        {
            "SL": "2300",
            "COURSE": "ECO104",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "02:55 PM"
        },
        {
            "SL": "2301",
            "COURSE": "ECO201",
            "DEPARTMENT": "RFU",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2302",
            "COURSE": "ECO201",
            "DEPARTMENT": "RFU",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2303",
            "COURSE": "ECO201",
            "DEPARTMENT": "SSU",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2304",
            "COURSE": "ECO201",
            "DEPARTMENT": "SSU",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2305",
            "COURSE": "ECO202",
            "DEPARTMENT": "KMF",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2306",
            "COURSE": "ECO202",
            "DEPARTMENT": "KMF",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2307",
            "COURSE": "ECO202",
            "DEPARTMENT": "SSU",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2308",
            "COURSE": "ECO202",
            "DEPARTMENT": "SSU",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2309",
            "COURSE": "ECO206",
            "DEPARTMENT": "SSU",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2310",
            "COURSE": "ECO206",
            "DEPARTMENT": "SSU",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2311",
            "COURSE": "ECO207",
            "DEPARTMENT": "ISQ",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2312",
            "COURSE": "ECO207",
            "DEPARTMENT": "ISQ",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2313",
            "COURSE": "ECO208",
            "DEPARTMENT": "MTS",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2314",
            "COURSE": "ECO208",
            "DEPARTMENT": "MTS",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2315",
            "COURSE": "ECO208",
            "DEPARTMENT": "MTS",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2316",
            "COURSE": "ECO208",
            "DEPARTMENT": "MTS",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2317",
            "COURSE": "ECO209",
            "DEPARTMENT": "MFH",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2318",
            "COURSE": "ECO209",
            "DEPARTMENT": "MFH",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2319",
            "COURSE": "ECO209",
            "DEPARTMENT": "MFH",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2320",
            "COURSE": "ECO209",
            "DEPARTMENT": "MFH",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2321",
            "COURSE": "ECO303",
            "DEPARTMENT": "SBG",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2322",
            "COURSE": "ECO303",
            "DEPARTMENT": "SBG",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2323",
            "COURSE": "ECO307",
            "DEPARTMENT": "KMF",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2324",
            "COURSE": "ECO307",
            "DEPARTMENT": "KMF",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2325",
            "COURSE": "ECO308",
            "DEPARTMENT": "WRK",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2326",
            "COURSE": "ECO308",
            "DEPARTMENT": "WRK",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2327",
            "COURSE": "ECO309",
            "DEPARTMENT": "KMF",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2328",
            "COURSE": "ECO309",
            "DEPARTMENT": "KMF",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2329",
            "COURSE": "ECO310",
            "DEPARTMENT": "RUA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2330",
            "COURSE": "ECO310",
            "DEPARTMENT": "RUA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2331",
            "COURSE": "ECO311",
            "DEPARTMENT": "SBG",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2332",
            "COURSE": "ECO311",
            "DEPARTMENT": "SBG",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2333",
            "COURSE": "ECO324",
            "DEPARTMENT": "SIF",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2334",
            "COURSE": "ECO324",
            "DEPARTMENT": "SIF",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2335",
            "COURSE": "ECO430",
            "DEPARTMENT": "WRK",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2336",
            "COURSE": "ECO430",
            "DEPARTMENT": "WRK",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2337",
            "COURSE": "ECO431",
            "DEPARTMENT": "FMU",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2338",
            "COURSE": "ECO431",
            "DEPARTMENT": "FMU",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2339",
            "COURSE": "ECO432",
            "DEPARTMENT": "ISQ",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2340",
            "COURSE": "ECO432",
            "DEPARTMENT": "ISQ",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2341",
            "COURSE": "EEE101",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2342",
            "COURSE": "EEE101",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2343",
            "COURSE": "EEE101",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2344",
            "COURSE": "EEE101",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2345",
            "COURSE": "EEE101",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2346",
            "COURSE": "EEE101",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2347",
            "COURSE": "EEE101",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2348",
            "COURSE": "EEE101",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2349",
            "COURSE": "EEE101",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2350",
            "COURSE": "EEE101",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2351",
            "COURSE": "EEE101",
            "DEPARTMENT": "LTBA",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2352",
            "COURSE": "EEE101",
            "DEPARTMENT": "LTBA",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2353",
            "COURSE": "EEE101",
            "DEPARTMENT": "LTBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2354",
            "COURSE": "EEE101",
            "DEPARTMENT": "LTBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2355",
            "COURSE": "EEE101",
            "DEPARTMENT": "LTBA",
            "SECTION": "04",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2356",
            "COURSE": "EEE101",
            "DEPARTMENT": "LTBA",
            "SECTION": "04",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2357",
            "COURSE": "EEE103",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2358",
            "COURSE": "EEE103",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2359",
            "COURSE": "EEE103",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2360",
            "COURSE": "EEE103",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2361",
            "COURSE": "EEE103",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2362",
            "COURSE": "EEE103",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2363",
            "COURSE": "EEE103",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2364",
            "COURSE": "EEE103",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2365",
            "COURSE": "EEE103",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2366",
            "COURSE": "EEE103",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2367",
            "COURSE": "EEE103",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2368",
            "COURSE": "EEE103",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2369",
            "COURSE": "EEE103",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2370",
            "COURSE": "EEE103",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2371",
            "COURSE": "EEE103",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2372",
            "COURSE": "EEE103",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2373",
            "COURSE": "EEE203",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2374",
            "COURSE": "EEE203",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2375",
            "COURSE": "EEE203",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2376",
            "COURSE": "EEE203",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2377",
            "COURSE": "EEE203",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2378",
            "COURSE": "EEE203",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2379",
            "COURSE": "EEE203",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2380",
            "COURSE": "EEE203",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2381",
            "COURSE": "EEE203",
            "DEPARTMENT": "LTBA",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2382",
            "COURSE": "EEE203",
            "DEPARTMENT": "LTBA",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2383",
            "COURSE": "EEE203",
            "DEPARTMENT": "LTBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2384",
            "COURSE": "EEE203",
            "DEPARTMENT": "LTBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2385",
            "COURSE": "EEE203",
            "DEPARTMENT": "LTBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2386",
            "COURSE": "EEE203",
            "DEPARTMENT": "LTBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2387",
            "COURSE": "EEE203",
            "DEPARTMENT": "LTBA",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2388",
            "COURSE": "EEE203",
            "DEPARTMENT": "LTBA",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2389",
            "COURSE": "EEE205",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2390",
            "COURSE": "EEE205",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2391",
            "COURSE": "EEE205",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2392",
            "COURSE": "EEE205",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2393",
            "COURSE": "EEE205",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2394",
            "COURSE": "EEE205",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2395",
            "COURSE": "EEE205",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2396",
            "COURSE": "EEE205",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2397",
            "COURSE": "EEE205",
            "DEPARTMENT": "LTBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2398",
            "COURSE": "EEE205",
            "DEPARTMENT": "LTBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2399",
            "COURSE": "EEE205",
            "DEPARTMENT": "LTBA",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2400",
            "COURSE": "EEE205",
            "DEPARTMENT": "LTBA",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2401",
            "COURSE": "EEE207",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2402",
            "COURSE": "EEE207",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2403",
            "COURSE": "EEE207",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2404",
            "COURSE": "EEE207",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2405",
            "COURSE": "EEE208",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2406",
            "COURSE": "EEE208",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2407",
            "COURSE": "EEE208",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2408",
            "COURSE": "EEE208",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2409",
            "COURSE": "EEE209",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2410",
            "COURSE": "EEE209",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2411",
            "COURSE": "EEE209",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2412",
            "COURSE": "EEE209",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2413",
            "COURSE": "EEE221",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2414",
            "COURSE": "EEE221",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2415",
            "COURSE": "EEE221",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2416",
            "COURSE": "EEE221",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2417",
            "COURSE": "EEE221",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2418",
            "COURSE": "EEE221",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2419",
            "COURSE": "EEE221",
            "DEPARTMENT": "LTBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2420",
            "COURSE": "EEE221",
            "DEPARTMENT": "LTBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2421",
            "COURSE": "EEE221",
            "DEPARTMENT": "LTBA",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2422",
            "COURSE": "EEE221",
            "DEPARTMENT": "LTBA",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2423",
            "COURSE": "EEE221",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2424",
            "COURSE": "EEE221",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2425",
            "COURSE": "EEE241",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2426",
            "COURSE": "EEE241",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2427",
            "COURSE": "EEE241",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2428",
            "COURSE": "EEE241",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2429",
            "COURSE": "EEE243",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2430",
            "COURSE": "EEE243",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2431",
            "COURSE": "EEE243",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2432",
            "COURSE": "EEE243",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2433",
            "COURSE": "EEE282",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2434",
            "COURSE": "EEE282",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2435",
            "COURSE": "EEE282",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2436",
            "COURSE": "EEE282",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2437",
            "COURSE": "EEE283",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2438",
            "COURSE": "EEE283",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2439",
            "COURSE": "EEE283",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2440",
            "COURSE": "EEE283",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2441",
            "COURSE": "EEE283",
            "DEPARTMENT": "LTBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2442",
            "COURSE": "EEE283",
            "DEPARTMENT": "LTBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2443",
            "COURSE": "EEE283",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2444",
            "COURSE": "EEE283",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2445",
            "COURSE": "EEE301",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2446",
            "COURSE": "EEE301",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2447",
            "COURSE": "EEE301",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2448",
            "COURSE": "EEE301",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2449",
            "COURSE": "EEE302",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2450",
            "COURSE": "EEE302",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2451",
            "COURSE": "EEE302",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2452",
            "COURSE": "EEE302",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2453",
            "COURSE": "EEE305",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2454",
            "COURSE": "EEE305",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2455",
            "COURSE": "EEE305",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2456",
            "COURSE": "EEE305",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2457",
            "COURSE": "EEE305",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2458",
            "COURSE": "EEE305",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2459",
            "COURSE": "EEE305",
            "DEPARTMENT": "LTBA",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2460",
            "COURSE": "EEE305",
            "DEPARTMENT": "LTBA",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2461",
            "COURSE": "EEE306",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2462",
            "COURSE": "EEE306",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2463",
            "COURSE": "EEE306",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2464",
            "COURSE": "EEE306",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2465",
            "COURSE": "EEE308",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2466",
            "COURSE": "EEE308",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2467",
            "COURSE": "EEE308",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2468",
            "COURSE": "EEE308",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2469",
            "COURSE": "EEE308",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2470",
            "COURSE": "EEE308",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2471",
            "COURSE": "EEE308",
            "DEPARTMENT": "LTBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2472",
            "COURSE": "EEE308",
            "DEPARTMENT": "LTBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2473",
            "COURSE": "EEE309",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2474",
            "COURSE": "EEE309",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2475",
            "COURSE": "EEE309",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2476",
            "COURSE": "EEE309",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2477",
            "COURSE": "EEE321",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2478",
            "COURSE": "EEE321",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2479",
            "COURSE": "EEE321",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2480",
            "COURSE": "EEE321",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2481",
            "COURSE": "EEE321",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2482",
            "COURSE": "EEE321",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2483",
            "COURSE": "EEE321",
            "DEPARTMENT": "LTBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2484",
            "COURSE": "EEE321",
            "DEPARTMENT": "LTBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2485",
            "COURSE": "EEE322",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2486",
            "COURSE": "EEE322",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2487",
            "COURSE": "EEE322",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2488",
            "COURSE": "EEE322",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2489",
            "COURSE": "EEE341",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2490",
            "COURSE": "EEE341",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2491",
            "COURSE": "EEE341",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2492",
            "COURSE": "EEE341",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2493",
            "COURSE": "EEE341",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2494",
            "COURSE": "EEE341",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2495",
            "COURSE": "EEE341",
            "DEPARTMENT": "LTBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2496",
            "COURSE": "EEE341",
            "DEPARTMENT": "LTBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2497",
            "COURSE": "EEE342",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2498",
            "COURSE": "EEE342",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2499",
            "COURSE": "EEE342",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2500",
            "COURSE": "EEE342",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2501",
            "COURSE": "EEE343",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2502",
            "COURSE": "EEE343",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2503",
            "COURSE": "EEE343",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2504",
            "COURSE": "EEE343",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2505",
            "COURSE": "EEE343",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2506",
            "COURSE": "EEE343",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2507",
            "COURSE": "EEE343",
            "DEPARTMENT": "LTBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2508",
            "COURSE": "EEE343",
            "DEPARTMENT": "LTBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2509",
            "COURSE": "EEE344",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2510",
            "COURSE": "EEE344",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2511",
            "COURSE": "EEE344",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2512",
            "COURSE": "EEE344",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2513",
            "COURSE": "EEE345",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "03:05 PM",
            "END-TIME": "04:00 PM"
        },
        {
            "SL": "2514",
            "COURSE": "EEE345",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:05 PM",
            "END-TIME": "04:00 PM"
        },
        {
            "SL": "2515",
            "COURSE": "EEE359",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2516",
            "COURSE": "EEE359",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2517",
            "COURSE": "EEE365",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2518",
            "COURSE": "EEE365",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2519",
            "COURSE": "EEE365",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2520",
            "COURSE": "EEE365",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2521",
            "COURSE": "EEE365",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2522",
            "COURSE": "EEE365",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2523",
            "COURSE": "EEE366",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2524",
            "COURSE": "EEE366",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2525",
            "COURSE": "EEE366",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2526",
            "COURSE": "EEE366",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2527",
            "COURSE": "EEE369",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2528",
            "COURSE": "EEE369",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2529",
            "COURSE": "EEE373",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2530",
            "COURSE": "EEE373",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2531",
            "COURSE": "EEE373",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2532",
            "COURSE": "EEE373",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2533",
            "COURSE": "EEE373",
            "DEPARTMENT": "LTBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2534",
            "COURSE": "EEE373",
            "DEPARTMENT": "LTBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2535",
            "COURSE": "EEE373",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2536",
            "COURSE": "EEE373",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2537",
            "COURSE": "EEE382",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2538",
            "COURSE": "EEE382",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2539",
            "COURSE": "EEE383",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2540",
            "COURSE": "EEE383",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2541",
            "COURSE": "EEE384",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2542",
            "COURSE": "EEE384",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2543",
            "COURSE": "EEE385",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2544",
            "COURSE": "EEE385",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2545",
            "COURSE": "EEE385",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2546",
            "COURSE": "EEE385",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2547",
            "COURSE": "EEE400",
            "DEPARTMENT": "CTBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2548",
            "COURSE": "EEE400",
            "DEPARTMENT": "CTBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2549",
            "COURSE": "EEE400",
            "DEPARTMENT": "DTBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2550",
            "COURSE": "EEE400",
            "DEPARTMENT": "DTBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2551",
            "COURSE": "EEE400",
            "DEPARTMENT": "PTBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2552",
            "COURSE": "EEE400",
            "DEPARTMENT": "PTBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2553",
            "COURSE": "EEE403",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2554",
            "COURSE": "EEE403",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2555",
            "COURSE": "EEE411",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2556",
            "COURSE": "EEE411",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2557",
            "COURSE": "EEE411",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2558",
            "COURSE": "EEE411",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2559",
            "COURSE": "EEE412",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2560",
            "COURSE": "EEE412",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2561",
            "COURSE": "EEE415",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2562",
            "COURSE": "EEE415",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2563",
            "COURSE": "EEE421",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2564",
            "COURSE": "EEE421",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2565",
            "COURSE": "EEE421",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2566",
            "COURSE": "EEE421",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2567",
            "COURSE": "EEE422",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2568",
            "COURSE": "EEE422",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2569",
            "COURSE": "EEE423",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2570",
            "COURSE": "EEE423",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2571",
            "COURSE": "EEE435",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2572",
            "COURSE": "EEE435",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2573",
            "COURSE": "EEE445",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2574",
            "COURSE": "EEE445",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2575",
            "COURSE": "EEE445",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2576",
            "COURSE": "EEE445",
            "DEPARTMENT": "LTBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2577",
            "COURSE": "EEE446",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2578",
            "COURSE": "EEE446",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2579",
            "COURSE": "EEE499",
            "DEPARTMENT": "CTBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2580",
            "COURSE": "EEE499",
            "DEPARTMENT": "CTBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2581",
            "COURSE": "EEE499",
            "DEPARTMENT": "DTBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2582",
            "COURSE": "EEE499",
            "DEPARTMENT": "DTBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2583",
            "COURSE": "EEE499",
            "DEPARTMENT": "PTBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2584",
            "COURSE": "EEE499",
            "DEPARTMENT": "PTBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2585",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2586",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2587",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "21",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2588",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "21",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2589",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2590",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2591",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2592",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2595",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "29",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2596",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "29",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2601",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "22",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2602",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "22",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2603",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "19",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2604",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "19",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2605",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "26",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2606",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "26",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2607",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2608",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2609",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "25",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2610",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "25",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2611",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2612",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2619",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2620",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2621",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "23",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2622",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "23",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2623",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "15",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2624",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "15",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2625",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "14",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2626",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "14",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2627",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2628",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2629",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "24",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2630",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "24",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2631",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "27",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2632",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "27",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2635",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2636",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2639",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "28",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2640",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "28",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2641",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "30",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2642",
            "COURSE": "ENG091",
            "DEPARTMENT": "TBA",
            "SECTION": "30",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2645",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2646",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2647",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2648",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2649",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "14",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2650",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "14",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2651",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "33",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2652",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "33",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2653",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "15",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2654",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "15",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2655",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "21",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2656",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "21",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2657",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "24",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2658",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "24",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2659",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "36",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2660",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "36",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2663",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "38",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2664",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "38",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2665",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "34",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2666",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "34",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2667",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2668",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2673",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "39",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2674",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "39",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2675",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "37",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2676",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "37",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2677",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "30",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2678",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "30",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2679",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "25",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2680",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "25",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2683",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "19",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2684",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "19",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2685",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2686",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2691",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "27",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2692",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "27",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2693",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "23",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2694",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "23",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2699",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2700",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2701",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "29",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2702",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "29",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2703",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2704",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2705",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "26",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2706",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "26",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2707",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "32",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2708",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "32",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2711",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2712",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2713",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "31",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2714",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "31",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2715",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "40",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2716",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "40",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2717",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2718",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2723",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "35",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2724",
            "COURSE": "ENG101",
            "DEPARTMENT": "TBA",
            "SECTION": "35",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2725",
            "COURSE": "ENG102",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2726",
            "COURSE": "ENG102",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2731",
            "COURSE": "ENG102",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2732",
            "COURSE": "ENG102",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2735",
            "COURSE": "ENG102",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2736",
            "COURSE": "ENG102",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2741",
            "COURSE": "ENG103",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2742",
            "COURSE": "ENG103",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2743",
            "COURSE": "ENG111",
            "DEPARTMENT": "ATF",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2744",
            "COURSE": "ENG111",
            "DEPARTMENT": "ATF",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2745",
            "COURSE": "ENG111",
            "DEPARTMENT": "ATF",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2746",
            "COURSE": "ENG111",
            "DEPARTMENT": "ATF",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2747",
            "COURSE": "ENG113",
            "DEPARTMENT": "JHR",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2748",
            "COURSE": "ENG113",
            "DEPARTMENT": "JHR",
            "SECTION": "03",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2749",
            "COURSE": "ENG113",
            "DEPARTMENT": "JHR",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2750",
            "COURSE": "ENG113",
            "DEPARTMENT": "JHR",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2751",
            "COURSE": "ENG113",
            "DEPARTMENT": "JHR",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2752",
            "COURSE": "ENG113",
            "DEPARTMENT": "JHR",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2753",
            "COURSE": "ENG114",
            "DEPARTMENT": "STM",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2754",
            "COURSE": "ENG114",
            "DEPARTMENT": "STM",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2755",
            "COURSE": "ENG114",
            "DEPARTMENT": "STM",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2756",
            "COURSE": "ENG114",
            "DEPARTMENT": "STM",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2757",
            "COURSE": "ENG115",
            "DEPARTMENT": "MRW",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2758",
            "COURSE": "ENG115",
            "DEPARTMENT": "MRW",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2759",
            "COURSE": "ENG115",
            "DEPARTMENT": "MRW",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2760",
            "COURSE": "ENG115",
            "DEPARTMENT": "MRW",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2761",
            "COURSE": "ENG201",
            "DEPARTMENT": "RHU",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2762",
            "COURSE": "ENG201",
            "DEPARTMENT": "RHU",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2763",
            "COURSE": "ENG201",
            "DEPARTMENT": "RHU",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2764",
            "COURSE": "ENG201",
            "DEPARTMENT": "RHU",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2765",
            "COURSE": "ENG203",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2766",
            "COURSE": "ENG203",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2767",
            "COURSE": "ENG211",
            "DEPARTMENT": "NFH",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2768",
            "COURSE": "ENG211",
            "DEPARTMENT": "NFH",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2769",
            "COURSE": "ENG214",
            "DEPARTMENT": "RRC",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2770",
            "COURSE": "ENG214",
            "DEPARTMENT": "RRC",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2771",
            "COURSE": "ENG217",
            "DEPARTMENT": "RRC",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2772",
            "COURSE": "ENG217",
            "DEPARTMENT": "RRC",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2773",
            "COURSE": "ENG260",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2774",
            "COURSE": "ENG260",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2775",
            "COURSE": "ENG301",
            "DEPARTMENT": "MTM",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2776",
            "COURSE": "ENG301",
            "DEPARTMENT": "MTM",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2777",
            "COURSE": "ENG315",
            "DEPARTMENT": "ASL",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2778",
            "COURSE": "ENG315",
            "DEPARTMENT": "ASL",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2779",
            "COURSE": "ENG319",
            "DEPARTMENT": "SMN",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2780",
            "COURSE": "ENG319",
            "DEPARTMENT": "SMN",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2781",
            "COURSE": "ENG320",
            "DEPARTMENT": "MRW",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2782",
            "COURSE": "ENG320",
            "DEPARTMENT": "MRW",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2783",
            "COURSE": "ENG330",
            "DEPARTMENT": "ALA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2784",
            "COURSE": "ENG330",
            "DEPARTMENT": "ALA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2785",
            "COURSE": "ENG332",
            "DEPARTMENT": "ATF",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2786",
            "COURSE": "ENG332",
            "DEPARTMENT": "ATF",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2787",
            "COURSE": "ENG333",
            "DEPARTMENT": "TZS",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2788",
            "COURSE": "ENG333",
            "DEPARTMENT": "TZS",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2789",
            "COURSE": "ENG334",
            "DEPARTMENT": "FZS",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2790",
            "COURSE": "ENG334",
            "DEPARTMENT": "FZS",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2791",
            "COURSE": "ENG343",
            "DEPARTMENT": "FAZ",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2792",
            "COURSE": "ENG343",
            "DEPARTMENT": "FAZ",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2793",
            "COURSE": "ENG355",
            "DEPARTMENT": "SMN",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2794",
            "COURSE": "ENG355",
            "DEPARTMENT": "SMN",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2795",
            "COURSE": "ENG359",
            "DEPARTMENT": "RRC",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2796",
            "COURSE": "ENG359",
            "DEPARTMENT": "RRC",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2797",
            "COURSE": "ENG401",
            "DEPARTMENT": "RHU",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2798",
            "COURSE": "ENG401",
            "DEPARTMENT": "RHU",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2799",
            "COURSE": "ENG409",
            "DEPARTMENT": "NFH",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2800",
            "COURSE": "ENG409",
            "DEPARTMENT": "NFH",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2801",
            "COURSE": "ENG411",
            "DEPARTMENT": "ATF",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2802",
            "COURSE": "ENG411",
            "DEPARTMENT": "ATF",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2803",
            "COURSE": "ENG415",
            "DEPARTMENT": "STM",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2804",
            "COURSE": "ENG415",
            "DEPARTMENT": "STM",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2805",
            "COURSE": "ENG462",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2806",
            "COURSE": "ENG462",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2807",
            "COURSE": "ENG463",
            "DEPARTMENT": "MTM",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2808",
            "COURSE": "ENG463",
            "DEPARTMENT": "MTM",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2809",
            "COURSE": "ENG465",
            "DEPARTMENT": "SAA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2810",
            "COURSE": "ENG465",
            "DEPARTMENT": "SAA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2811",
            "COURSE": "ENV101",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "02:55 PM"
        },
        {
            "SL": "2812",
            "COURSE": "ENV101",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "02:55 PM"
        },
        {
            "SL": "2813",
            "COURSE": "ENV101",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "01:20 PM",
            "END-TIME": "02:15 PM"
        },
        {
            "SL": "2814",
            "COURSE": "ENV101",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "01:20 PM",
            "END-TIME": "02:15 PM"
        },
        {
            "SL": "2815",
            "COURSE": "ENV103",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2816",
            "COURSE": "ENV103",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2817",
            "COURSE": "ENV103",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2818",
            "COURSE": "ENV103",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2819",
            "COURSE": "ENV103",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2820",
            "COURSE": "ENV103",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2821",
            "COURSE": "ENV103",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2822",
            "COURSE": "ENV103",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2823",
            "COURSE": "ENV103",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2824",
            "COURSE": "ENV103",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2825",
            "COURSE": "ENV103",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2826",
            "COURSE": "ENV103",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2827",
            "COURSE": "ENV103",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2828",
            "COURSE": "ENV103",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2829",
            "COURSE": "ENV103",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2830",
            "COURSE": "ENV103",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2831",
            "COURSE": "ENV103",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2832",
            "COURSE": "ENV103",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2833",
            "COURSE": "ENV103",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2834",
            "COURSE": "ENV103",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2835",
            "COURSE": "ENV103",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2836",
            "COURSE": "ENV103",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2837",
            "COURSE": "ENV103",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2838",
            "COURSE": "ENV103",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2841",
            "COURSE": "ENV103",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2842",
            "COURSE": "ENV103",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2843",
            "COURSE": "FIN201",
            "DEPARTMENT": "SWS",
            "SECTION": "05",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2844",
            "COURSE": "FIN201",
            "DEPARTMENT": "SWS",
            "SECTION": "05",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2845",
            "COURSE": "FIN201",
            "DEPARTMENT": "NAC",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2846",
            "COURSE": "FIN201",
            "DEPARTMENT": "NAC",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2847",
            "COURSE": "FIN201",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2848",
            "COURSE": "FIN201",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2849",
            "COURSE": "FIN201",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2850",
            "COURSE": "FIN201",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2851",
            "COURSE": "FIN201",
            "DEPARTMENT": "NAC",
            "SECTION": "07",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2852",
            "COURSE": "FIN201",
            "DEPARTMENT": "NAC",
            "SECTION": "07",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2853",
            "COURSE": "FIN201",
            "DEPARTMENT": "SWS",
            "SECTION": "06",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2854",
            "COURSE": "FIN201",
            "DEPARTMENT": "SWS",
            "SECTION": "06",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2855",
            "COURSE": "FIN201",
            "DEPARTMENT": "EHO",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2856",
            "COURSE": "FIN201",
            "DEPARTMENT": "EHO",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2857",
            "COURSE": "FIN301",
            "DEPARTMENT": "AAC",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2858",
            "COURSE": "FIN301",
            "DEPARTMENT": "AAC",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2859",
            "COURSE": "FIN301",
            "DEPARTMENT": "ABM",
            "SECTION": "04",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2860",
            "COURSE": "FIN301",
            "DEPARTMENT": "ABM",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2861",
            "COURSE": "FIN301",
            "DEPARTMENT": "ABM",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2862",
            "COURSE": "FIN301",
            "DEPARTMENT": "ABM",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2863",
            "COURSE": "FIN301",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2864",
            "COURSE": "FIN301",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2865",
            "COURSE": "FIN301",
            "DEPARTMENT": "AAC",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2866",
            "COURSE": "FIN301",
            "DEPARTMENT": "AAC",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2867",
            "COURSE": "FIN421",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2868",
            "COURSE": "FIN421",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2869",
            "COURSE": "FIN421",
            "DEPARTMENT": "YMJ",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2870",
            "COURSE": "FIN421",
            "DEPARTMENT": "YMJ",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2871",
            "COURSE": "FIN421",
            "DEPARTMENT": "YMJ",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2872",
            "COURSE": "FIN421",
            "DEPARTMENT": "YMJ",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2873",
            "COURSE": "FIN422",
            "DEPARTMENT": "EHO",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2874",
            "COURSE": "FIN422",
            "DEPARTMENT": "EHO",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2875",
            "COURSE": "FIN423",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2876",
            "COURSE": "FIN423",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2877",
            "COURSE": "FIN424",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2878",
            "COURSE": "FIN424",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2879",
            "COURSE": "FIN425",
            "DEPARTMENT": "SWS",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2880",
            "COURSE": "FIN425",
            "DEPARTMENT": "SWS",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2881",
            "COURSE": "FIN427",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2882",
            "COURSE": "FIN427",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2883",
            "COURSE": "FIN441",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2884",
            "COURSE": "FIN441",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2885",
            "COURSE": "FRN101",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2886",
            "COURSE": "FRN101",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2887",
            "COURSE": "FRN101",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2888",
            "COURSE": "FRN101",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2889",
            "COURSE": "FRN101",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2890",
            "COURSE": "FRN101",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2891",
            "COURSE": "FRN101",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2892",
            "COURSE": "FRN101",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2893",
            "COURSE": "GEO101",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2894",
            "COURSE": "GEO101",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2895",
            "COURSE": "GEO101",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2896",
            "COURSE": "GEO101",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2897",
            "COURSE": "HST103",
            "DEPARTMENT": "SKH",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2898",
            "COURSE": "HST103",
            "DEPARTMENT": "SKH",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2899",
            "COURSE": "HST103",
            "DEPARTMENT": "SKH",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2900",
            "COURSE": "HST103",
            "DEPARTMENT": "SKH",
            "SECTION": "03",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2901",
            "COURSE": "HST103",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2902",
            "COURSE": "HST103",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2903",
            "COURSE": "HST103",
            "DEPARTMENT": "GMR",
            "SECTION": "04",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2904",
            "COURSE": "HST103",
            "DEPARTMENT": "GMR",
            "SECTION": "05",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2905",
            "COURSE": "HST103",
            "DEPARTMENT": "GMR",
            "SECTION": "05",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2906",
            "COURSE": "HST103",
            "DEPARTMENT": "GMR",
            "SECTION": "06",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2907",
            "COURSE": "HST103",
            "DEPARTMENT": "GMR",
            "SECTION": "06",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2908",
            "COURSE": "HST103",
            "DEPARTMENT": "SKH",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2909",
            "COURSE": "HST103",
            "DEPARTMENT": "SKH",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2910",
            "COURSE": "HST103",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2911",
            "COURSE": "HST103",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2912",
            "COURSE": "HST103",
            "DEPARTMENT": "GMR",
            "SECTION": "04",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2913",
            "COURSE": "HST202",
            "DEPARTMENT": "NAK",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2914",
            "COURSE": "HST202",
            "DEPARTMENT": "NAK",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2915",
            "COURSE": "HST302",
            "DEPARTMENT": "SKH",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2916",
            "COURSE": "HST302",
            "DEPARTMENT": "SKH",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2917",
            "COURSE": "HST305",
            "DEPARTMENT": "GMR",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2918",
            "COURSE": "HST305",
            "DEPARTMENT": "GMR",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2919",
            "COURSE": "HST406",
            "DEPARTMENT": "NAK",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2920",
            "COURSE": "HST406",
            "DEPARTMENT": "NAK",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2921",
            "COURSE": "HUM101",
            "DEPARTMENT": "MHF",
            "SECTION": "04",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2922",
            "COURSE": "HUM101",
            "DEPARTMENT": "MHF",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2923",
            "COURSE": "HUM101",
            "DEPARTMENT": "HSF",
            "SECTION": "07",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2924",
            "COURSE": "HUM101",
            "DEPARTMENT": "HSF",
            "SECTION": "07",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2925",
            "COURSE": "HUM101",
            "DEPARTMENT": "JSR",
            "SECTION": "10",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2926",
            "COURSE": "HUM101",
            "DEPARTMENT": "JSR",
            "SECTION": "10",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2927",
            "COURSE": "HUM101",
            "DEPARTMENT": "HSF",
            "SECTION": "08",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2928",
            "COURSE": "HUM101",
            "DEPARTMENT": "HSF",
            "SECTION": "08",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2929",
            "COURSE": "HUM101",
            "DEPARTMENT": "JSR",
            "SECTION": "09",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2930",
            "COURSE": "HUM101",
            "DEPARTMENT": "JSR",
            "SECTION": "09",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2931",
            "COURSE": "HUM101",
            "DEPARTMENT": "CWS",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2932",
            "COURSE": "HUM101",
            "DEPARTMENT": "CWS",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2933",
            "COURSE": "HUM101",
            "DEPARTMENT": "MHF",
            "SECTION": "05",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2934",
            "COURSE": "HUM101",
            "DEPARTMENT": "MHF",
            "SECTION": "05",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2935",
            "COURSE": "HUM101",
            "DEPARTMENT": "HSF",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2936",
            "COURSE": "HUM101",
            "DEPARTMENT": "HSF",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2937",
            "COURSE": "HUM101",
            "DEPARTMENT": "DRKR",
            "SECTION": "06",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2938",
            "COURSE": "HUM101",
            "DEPARTMENT": "DRKR",
            "SECTION": "06",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2939",
            "COURSE": "HUM101",
            "DEPARTMENT": "HSF",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2940",
            "COURSE": "HUM101",
            "DEPARTMENT": "HSF",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2941",
            "COURSE": "HUM112",
            "DEPARTMENT": "TNJ",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2942",
            "COURSE": "HUM112",
            "DEPARTMENT": "TNJ",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2943",
            "COURSE": "HUM112",
            "DEPARTMENT": "RPK",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2944",
            "COURSE": "HUM112",
            "DEPARTMENT": "RPK",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2945",
            "COURSE": "HUM112",
            "DEPARTMENT": "TNJ",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2946",
            "COURSE": "HUM112",
            "DEPARTMENT": "TNJ",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2947",
            "COURSE": "HUM217",
            "DEPARTMENT": "MHF",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2948",
            "COURSE": "HUM217",
            "DEPARTMENT": "MHF",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2949",
            "COURSE": "LAW101",
            "DEPARTMENT": "KSM",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2950",
            "COURSE": "LAW101",
            "DEPARTMENT": "KSM",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2951",
            "COURSE": "LAW101",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2952",
            "COURSE": "LAW101",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2953",
            "COURSE": "LAW102",
            "DEPARTMENT": "AAL",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2954",
            "COURSE": "LAW102",
            "DEPARTMENT": "AAL",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2955",
            "COURSE": "LAW102",
            "DEPARTMENT": "AAL",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2956",
            "COURSE": "LAW102",
            "DEPARTMENT": "AAL",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2959",
            "COURSE": "LAW103",
            "DEPARTMENT": "AAL",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2960",
            "COURSE": "LAW103",
            "DEPARTMENT": "AAL",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2961",
            "COURSE": "LAW103",
            "DEPARTMENT": "AAL",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2962",
            "COURSE": "LAW103",
            "DEPARTMENT": "AAL",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2963",
            "COURSE": "LAW104",
            "DEPARTMENT": "AQR",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2964",
            "COURSE": "LAW104",
            "DEPARTMENT": "AQR",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2965",
            "COURSE": "LAW104",
            "DEPARTMENT": "AQR",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2966",
            "COURSE": "LAW104",
            "DEPARTMENT": "AQR",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2967",
            "COURSE": "LAW201",
            "DEPARTMENT": "SRK",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2968",
            "COURSE": "LAW201",
            "DEPARTMENT": "SRK",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2969",
            "COURSE": "LAW201",
            "DEPARTMENT": "SRK",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2970",
            "COURSE": "LAW201",
            "DEPARTMENT": "SRK",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2971",
            "COURSE": "LAW202",
            "DEPARTMENT": "SRL",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2972",
            "COURSE": "LAW202",
            "DEPARTMENT": "SRL",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2973",
            "COURSE": "LAW202",
            "DEPARTMENT": "SRL",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2974",
            "COURSE": "LAW202",
            "DEPARTMENT": "SRL",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2975",
            "COURSE": "LAW203",
            "DEPARTMENT": "KSM",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2976",
            "COURSE": "LAW203",
            "DEPARTMENT": "KSM",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2977",
            "COURSE": "LAW203",
            "DEPARTMENT": "KSM",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2978",
            "COURSE": "LAW203",
            "DEPARTMENT": "KSM",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2979",
            "COURSE": "LAW204",
            "DEPARTMENT": "SZT",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2980",
            "COURSE": "LAW204",
            "DEPARTMENT": "SZT",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2981",
            "COURSE": "LAW204",
            "DEPARTMENT": "SZT",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2982",
            "COURSE": "LAW204",
            "DEPARTMENT": "SZT",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2983",
            "COURSE": "LAW205",
            "DEPARTMENT": "IMD",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2984",
            "COURSE": "LAW205",
            "DEPARTMENT": "IMD",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2985",
            "COURSE": "LAW205",
            "DEPARTMENT": "IMD",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2986",
            "COURSE": "LAW205",
            "DEPARTMENT": "IMD",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2987",
            "COURSE": "LAW205",
            "DEPARTMENT": "IMD",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2988",
            "COURSE": "LAW205",
            "DEPARTMENT": "IMD",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2989",
            "COURSE": "LAW301",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "2990",
            "COURSE": "LAW301",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "2991",
            "COURSE": "LAW301",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "2992",
            "COURSE": "LAW301",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "2993",
            "COURSE": "LAW302",
            "DEPARTMENT": "SRK",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2994",
            "COURSE": "LAW302",
            "DEPARTMENT": "SRK",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "2995",
            "COURSE": "LAW302",
            "DEPARTMENT": "SRK",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2996",
            "COURSE": "LAW302",
            "DEPARTMENT": "SRK",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "2997",
            "COURSE": "LAW303",
            "DEPARTMENT": "IMD",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2998",
            "COURSE": "LAW303",
            "DEPARTMENT": "IMD",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "2999",
            "COURSE": "LAW303",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3000",
            "COURSE": "LAW303",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3001",
            "COURSE": "LAW304",
            "DEPARTMENT": "AQR",
            "SECTION": "04",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3002",
            "COURSE": "LAW304",
            "DEPARTMENT": "AQR",
            "SECTION": "04",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3003",
            "COURSE": "LAW304",
            "DEPARTMENT": "MDM",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3004",
            "COURSE": "LAW304",
            "DEPARTMENT": "MDM",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3005",
            "COURSE": "LAW304",
            "DEPARTMENT": "AQR",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3006",
            "COURSE": "LAW304",
            "DEPARTMENT": "AQR",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3007",
            "COURSE": "LAW304",
            "DEPARTMENT": "MDM",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3008",
            "COURSE": "LAW304",
            "DEPARTMENT": "MDM",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3009",
            "COURSE": "LAW305",
            "DEPARTMENT": "MGK",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3010",
            "COURSE": "LAW305",
            "DEPARTMENT": "MGK",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3011",
            "COURSE": "LAW305",
            "DEPARTMENT": "MGK",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3012",
            "COURSE": "LAW305",
            "DEPARTMENT": "MGK",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3013",
            "COURSE": "LAW306",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3014",
            "COURSE": "LAW306",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3015",
            "COURSE": "LAW306",
            "DEPARTMENT": "SRL",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "3016",
            "COURSE": "LAW306",
            "DEPARTMENT": "SRL",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "3017",
            "COURSE": "LAW307",
            "DEPARTMENT": "SZT",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3018",
            "COURSE": "LAW307",
            "DEPARTMENT": "SZT",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3019",
            "COURSE": "LAW307",
            "DEPARTMENT": "SZT",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3020",
            "COURSE": "LAW307",
            "DEPARTMENT": "SZT",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3021",
            "COURSE": "LAW308",
            "DEPARTMENT": "MGK",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3022",
            "COURSE": "LAW308",
            "DEPARTMENT": "MGK",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3023",
            "COURSE": "LAW308",
            "DEPARTMENT": "MGK",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3024",
            "COURSE": "LAW308",
            "DEPARTMENT": "MGK",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3025",
            "COURSE": "LAW322",
            "DEPARTMENT": "AQR",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3026",
            "COURSE": "LAW322",
            "DEPARTMENT": "AQR",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3027",
            "COURSE": "LAW331",
            "DEPARTMENT": "IMD",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3028",
            "COURSE": "LAW331",
            "DEPARTMENT": "IMD",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3031",
            "COURSE": "LAW345",
            "DEPARTMENT": "AAL",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3032",
            "COURSE": "LAW345",
            "DEPARTMENT": "AAL",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3033",
            "COURSE": "LAW346",
            "DEPARTMENT": "MDM",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3034",
            "COURSE": "LAW346",
            "DEPARTMENT": "MDM",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3035",
            "COURSE": "LAW401",
            "DEPARTMENT": "SZT",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3036",
            "COURSE": "LAW401",
            "DEPARTMENT": "SZT",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3037",
            "COURSE": "LAW402",
            "DEPARTMENT": "MDM",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3038",
            "COURSE": "LAW402",
            "DEPARTMENT": "MDM",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3039",
            "COURSE": "LAW402",
            "DEPARTMENT": "MDM",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3040",
            "COURSE": "LAW402",
            "DEPARTMENT": "MDM",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3041",
            "COURSE": "LAW403",
            "DEPARTMENT": "TYS",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3042",
            "COURSE": "LAW403",
            "DEPARTMENT": "TYS",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3043",
            "COURSE": "LAW404",
            "DEPARTMENT": "SRL",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3044",
            "COURSE": "LAW404",
            "DEPARTMENT": "SRL",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3045",
            "COURSE": "LAW425",
            "DEPARTMENT": "SRL",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "3046",
            "COURSE": "LAW425",
            "DEPARTMENT": "SRL",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "3047",
            "COURSE": "LAW434",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3048",
            "COURSE": "LAW434",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3049",
            "COURSE": "LAW447",
            "DEPARTMENT": "SRK",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3050",
            "COURSE": "LAW447",
            "DEPARTMENT": "SRK",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3051",
            "COURSE": "MAT091",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3052",
            "COURSE": "MAT091",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3053",
            "COURSE": "MAT091",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3054",
            "COURSE": "MAT091",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3055",
            "COURSE": "MAT091",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3056",
            "COURSE": "MAT091",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3057",
            "COURSE": "MAT091",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3058",
            "COURSE": "MAT091",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3059",
            "COURSE": "MAT092",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3060",
            "COURSE": "MAT092",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3061",
            "COURSE": "MAT092",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3062",
            "COURSE": "MAT092",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3063",
            "COURSE": "MAT092",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3064",
            "COURSE": "MAT092",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3065",
            "COURSE": "MAT092",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3066",
            "COURSE": "MAT092",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3067",
            "COURSE": "MAT092",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3068",
            "COURSE": "MAT092",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3069",
            "COURSE": "MAT092",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3070",
            "COURSE": "MAT092",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3071",
            "COURSE": "MAT101",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3072",
            "COURSE": "MAT101",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3073",
            "COURSE": "MAT101",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3074",
            "COURSE": "MAT101",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3075",
            "COURSE": "MAT101",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3076",
            "COURSE": "MAT101",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3077",
            "COURSE": "MAT101",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3078",
            "COURSE": "MAT101",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3079",
            "COURSE": "MAT101",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3080",
            "COURSE": "MAT101",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3081",
            "COURSE": "MAT101",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3082",
            "COURSE": "MAT101",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3083",
            "COURSE": "MAT101",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3084",
            "COURSE": "MAT101",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3085",
            "COURSE": "MAT101",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3086",
            "COURSE": "MAT101",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3087",
            "COURSE": "MAT101",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3088",
            "COURSE": "MAT101",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3089",
            "COURSE": "MAT101",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3090",
            "COURSE": "MAT101",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3091",
            "COURSE": "MAT101",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3092",
            "COURSE": "MAT101",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3093",
            "COURSE": "MAT101",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3094",
            "COURSE": "MAT101",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3095",
            "COURSE": "MAT104",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "04:00 PM"
        },
        {
            "SL": "3096",
            "COURSE": "MAT105",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3097",
            "COURSE": "MAT105",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3098",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "14",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3099",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "14",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3100",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "24",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3101",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "24",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3102",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "21",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3103",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "21",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3104",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "17",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3105",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "17",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3106",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3107",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3108",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3109",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3110",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3111",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3112",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3113",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3114",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "20",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3115",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "20",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3116",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3117",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3118",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3119",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "22",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3120",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "22",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3121",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "23",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3122",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "23",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3123",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "25",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3124",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "25",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3125",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "16",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3126",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "16",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3127",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3128",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3129",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3130",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3131",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "15",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3132",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "15",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3133",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3134",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3135",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "19",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3136",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "19",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3137",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3138",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3139",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3140",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3141",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3142",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3143",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3144",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3145",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "18",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3146",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "18",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3147",
            "COURSE": "MAT110",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "13173",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "21",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3174",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "21",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3175",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "23",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3176",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "23",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3177",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3178",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3179",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3180",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3181",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3182",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3183",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "18",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3184",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "18",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3185",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3186",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3187",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "16",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3188",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "16",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3189",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "20",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3190",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "20",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3191",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3192",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3193",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "17",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3194",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "17",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3195",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "25",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3196",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "25",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3197",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3198",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3199",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "15",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3200",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "15",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3201",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "19",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3202",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "19",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3203",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3204",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3205",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "14",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3206",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "14",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3207",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "24",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3208",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "24",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3209",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3210",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3211",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3212",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3213",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3214",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3215",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3216",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3217",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3218",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3219",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "22",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3220",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "22",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3221",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3222",
            "COURSE": "MAT120",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3223",
            "COURSE": "MAT204",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3224",
            "COURSE": "MAT204",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3225",
            "COURSE": "MAT215",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3226",
            "COURSE": "MAT215",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3227",
            "COURSE": "MAT215",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3228",
            "COURSE": "MAT215",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3229",
            "COURSE": "MAT215",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3230",
            "COURSE": "MAT215",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3231",
            "COURSE": "MAT215",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3232",
            "COURSE": "MAT215",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3233",
            "COURSE": "MAT215",
            "DEPARTMENT": "TBA",
            "SECTION": "16",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3234",
            "COURSE": "MAT215",
            "DEPARTMENT": "TBA",
            "SECTION": "16",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3235",
            "COURSE": "MAT215",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3236",
            "COURSE": "MAT215",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3237",
            "COURSE": "MAT215",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3238",
            "COURSE": "MAT215",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3239",
            "COURSE": "MAT215",
            "DEPARTMENT": "TBA",
            "SECTION": "18",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3240",
            "COURSE": "MAT215",
            "DEPARTMENT": "TBA",
            "SECTION": "18",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3241",
            "COURSE": "MAT215",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3242",
            "COURSE": "MAT215",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3243",
            "COURSE": "MAT215",
            "DEPARTMENT": "TBA",
            "SECTION": "14",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3244",
            "COURSE": "MAT215",
            "DEPARTMENT": "TBA",
            "SECTION": "14",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3245",
            "COURSE": "MAT215",
            "DEPARTMENT": "TBA",
            "SECTION": "15",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3246",
            "COURSE": "MAT215",
            "DEPARTMENT": "TBA",
            "SECTION": "15",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3247",
            "COURSE": "MAT215",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3248",
            "COURSE": "MAT215",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3249",
            "COURSE": "MAT215",
            "DEPARTMENT": "TBA",
            "SECTION": "17",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3250",
            "COURSE": "MAT215",
            "DEPARTMENT": "TBA",
            "SECTION": "17",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3251",
            "COURSE": "MAT215",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3252",
            "COURSE": "MAT215",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3253",
            "COURSE": "MAT215",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3254",
            "COURSE": "MAT215",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3255",
            "COURSE": "MAT215",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3256",
            "COURSE": "MAT215",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3257",
            "COURSE": "MAT215",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3258",
            "COURSE": "MAT215",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3259",
            "COURSE": "MAT215",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3260",
            "COURSE": "MAT215",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3261",
            "COURSE": "MAT216",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3262",
            "COURSE": "MAT216",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3263",
            "COURSE": "MAT216",
            "DEPARTMENT": "TBA",
            "SECTION": "17",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3264",
            "COURSE": "MAT216",
            "DEPARTMENT": "TBA",
            "SECTION": "17",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3265",
            "COURSE": "MAT216",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3266",
            "COURSE": "MAT216",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3267",
            "COURSE": "MAT216",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3268",
            "COURSE": "MAT216",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3269",
            "COURSE": "MAT216",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3270",
            "COURSE": "MAT216",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3271",
            "COURSE": "MAT216",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3272",
            "COURSE": "MAT216",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3273",
            "COURSE": "MAT216",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3274",
            "COURSE": "MAT216",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3275",
            "COURSE": "MAT216",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3276",
            "COURSE": "MAT216",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3277",
            "COURSE": "MAT216",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3278",
            "COURSE": "MAT216",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3279",
            "COURSE": "MAT216",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3280",
            "COURSE": "MAT216",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3281",
            "COURSE": "MAT216",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3282",
            "COURSE": "MAT216",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3283",
            "COURSE": "MAT216",
            "DEPARTMENT": "TBA",
            "SECTION": "15",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3284",
            "COURSE": "MAT216",
            "DEPARTMENT": "TBA",
            "SECTION": "15",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3285",
            "COURSE": "MAT216",
            "DEPARTMENT": "TBA",
            "SECTION": "18",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3286",
            "COURSE": "MAT216",
            "DEPARTMENT": "TBA",
            "SECTION": "18",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3287",
            "COURSE": "MAT216",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3288",
            "COURSE": "MAT216",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3289",
            "COURSE": "MAT216",
            "DEPARTMENT": "TBA",
            "SECTION": "16",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3290",
            "COURSE": "MAT216",
            "DEPARTMENT": "TBA",
            "SECTION": "16",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3291",
            "COURSE": "MAT216",
            "DEPARTMENT": "TBA",
            "SECTION": "14",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3292",
            "COURSE": "MAT216",
            "DEPARTMENT": "TBA",
            "SECTION": "14",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3293",
            "COURSE": "MAT216",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3294",
            "COURSE": "MAT216",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3295",
            "COURSE": "MAT216",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3296",
            "COURSE": "MAT216",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3297",
            "COURSE": "MAT221",
            "DEPARTMENT": "RJN",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3298",
            "COURSE": "MAT221",
            "DEPARTMENT": "RJN",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3301",
            "COURSE": "MAT411",
            "DEPARTMENT": "HHC",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3302",
            "COURSE": "MAT411",
            "DEPARTMENT": "HHC",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3303",
            "COURSE": "MEE344",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "01:20 PM",
            "END-TIME": "02:15 PM"
        },
        {
            "SL": "3304",
            "COURSE": "MEE344",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "01:20 PM",
            "END-TIME": "02:15 PM"
        },
        {
            "SL": "3305",
            "COURSE": "MGT201",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3306",
            "COURSE": "MGT201",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3307",
            "COURSE": "MGT201",
            "DEPARTMENT": "ADI",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3308",
            "COURSE": "MGT201",
            "DEPARTMENT": "ADI",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3309",
            "COURSE": "MGT213",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3310",
            "COURSE": "MGT213",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3311",
            "COURSE": "MGT213",
            "DEPARTMENT": "TKM",
            "SECTION": "04",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3312",
            "COURSE": "MGT213",
            "DEPARTMENT": "TKM",
            "SECTION": "04",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3313",
            "COURSE": "MGT213",
            "DEPARTMENT": "UWA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3314",
            "COURSE": "MGT213",
            "DEPARTMENT": "UWA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3315",
            "COURSE": "MGT213",
            "DEPARTMENT": "UWA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3316",
            "COURSE": "MGT213",
            "DEPARTMENT": "UWA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3317",
            "COURSE": "MGT213",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3318",
            "COURSE": "MGT213",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3319",
            "COURSE": "MGT213",
            "DEPARTMENT": "TKM",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3320",
            "COURSE": "MGT213",
            "DEPARTMENT": "TKM",
            "SECTION": "03",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3321",
            "COURSE": "MGT301",
            "DEPARTMENT": "ZHM",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3322",
            "COURSE": "MGT301",
            "DEPARTMENT": "ZHM",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3323",
            "COURSE": "MGT301",
            "DEPARTMENT": "ZHM",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3324",
            "COURSE": "MGT301",
            "DEPARTMENT": "ZHM",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3325",
            "COURSE": "MGT301",
            "DEPARTMENT": "ZHM",
            "SECTION": "03",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3326",
            "COURSE": "MGT301",
            "DEPARTMENT": "ZHM",
            "SECTION": "03",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3327",
            "COURSE": "MGT301",
            "DEPARTMENT": "TWA",
            "SECTION": "04",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3328",
            "COURSE": "MGT301",
            "DEPARTMENT": "TWA",
            "SECTION": "04",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3329",
            "COURSE": "MGT301",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3330",
            "COURSE": "MGT301",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3331",
            "COURSE": "MGT421",
            "DEPARTMENT": "ABD",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3332",
            "COURSE": "MGT421",
            "DEPARTMENT": "ABD",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3333",
            "COURSE": "MGT422",
            "DEPARTMENT": "RBB",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3334",
            "COURSE": "MGT422",
            "DEPARTMENT": "RBB",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3335",
            "COURSE": "MGT423",
            "DEPARTMENT": "ADI",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3336",
            "COURSE": "MGT423",
            "DEPARTMENT": "ADI",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3337",
            "COURSE": "MGT424",
            "DEPARTMENT": "TWA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "3338",
            "COURSE": "MGT424",
            "DEPARTMENT": "TWA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "3339",
            "COURSE": "MGT425",
            "DEPARTMENT": "NZM",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3340",
            "COURSE": "MGT425",
            "DEPARTMENT": "NZM",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3341",
            "COURSE": "MGT427",
            "DEPARTMENT": "NZM",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3342",
            "COURSE": "MGT427",
            "DEPARTMENT": "NZM",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3343",
            "COURSE": "MGT431",
            "DEPARTMENT": "FEA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3344",
            "COURSE": "MGT431",
            "DEPARTMENT": "FEA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3345",
            "COURSE": "MGT480",
            "DEPARTMENT": "AHD",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3346",
            "COURSE": "MGT480",
            "DEPARTMENT": "AHD",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3347",
            "COURSE": "MGT480",
            "DEPARTMENT": "ABD",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3348",
            "COURSE": "MGT480",
            "DEPARTMENT": "ABD",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3349",
            "COURSE": "MGT480",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "MONDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "3350",
            "COURSE": "MGT480",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "3351",
            "COURSE": "MIC101",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3352",
            "COURSE": "MIC101",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3353",
            "COURSE": "MIC101",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3354",
            "COURSE": "MIC101",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3355",
            "COURSE": "MIC101",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3356",
            "COURSE": "MIC101",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3357",
            "COURSE": "MIC102",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3358",
            "COURSE": "MIC102",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3359",
            "COURSE": "MIC102",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3360",
            "COURSE": "MIC102",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3361",
            "COURSE": "MIC102",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3362",
            "COURSE": "MIC102",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "23379",
            "COURSE": "MIC201",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3380",
            "COURSE": "MIC201",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3381",
            "COURSE": "MIC201",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3382",
            "COURSE": "MIC201",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3383",
            "COURSE": "MIC201",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3384",
            "COURSE": "MIC201",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3385",
            "COURSE": "MIC202",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3386",
            "COURSE": "MIC202",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3387",
            "COURSE": "MIC202",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3388",
            "COURSE": "MIC202",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3389",
            "COURSE": "MIC202",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3390",
            "COURSE": "MIC202",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3391",
            "COURSE": "MIC203",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3392",
            "COURSE": "MIC203",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3393",
            "COURSE": "MIC203",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "3394",
            "COURSE": "MIC203",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "3395",
            "COURSE": "MIC203",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3396",
            "COURSE": "MIC203",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3397",
            "COURSE": "MIC204",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3398",
            "COURSE": "MIC204",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3399",
            "COURSE": "MIC204",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3400",
            "COURSE": "MIC204",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3401",
            "COURSE": "MIC206",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3402",
            "COURSE": "MIC206",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3403",
            "COURSE": "MIC206",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3404",
            "COURSE": "MIC206",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "23415",
            "COURSE": "MIC300",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3416",
            "COURSE": "MIC300",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3417",
            "COURSE": "MIC300",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3418",
            "COURSE": "MIC300",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3419",
            "COURSE": "MIC301",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3420",
            "COURSE": "MIC301",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3421",
            "COURSE": "MIC301",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3422",
            "COURSE": "MIC301",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3423",
            "COURSE": "MIC302",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3424",
            "COURSE": "MIC302",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3425",
            "COURSE": "MIC303",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3426",
            "COURSE": "MIC303",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3427",
            "COURSE": "MIC306",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3428",
            "COURSE": "MIC306",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3429",
            "COURSE": "MIC308",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3430",
            "COURSE": "MIC308",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3431",
            "COURSE": "MIC310",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3432",
            "COURSE": "MIC310",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3433",
            "COURSE": "MIC310",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3434",
            "COURSE": "MIC310",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "13441",
            "COURSE": "MIC400",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "FRIDAY",
            "START-TIME": "06:00 PM",
            "END-TIME": "09:00 PM"
        },
        {
            "SL": "00003442",
            "COURSE": "MIC401",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3443",
            "COURSE": "MIC401",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3444",
            "COURSE": "MIC402",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3445",
            "COURSE": "MIC402",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3446",
            "COURSE": "MIC403",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "3447",
            "COURSE": "MIC403",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "3448",
            "COURSE": "MIC404",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3449",
            "COURSE": "MIC404",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3450",
            "COURSE": "MIC406",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3451",
            "COURSE": "MIC406",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3452",
            "COURSE": "MIC407",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3453",
            "COURSE": "MIC407",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3454",
            "COURSE": "MIC407",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3455",
            "COURSE": "MIC407",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3456",
            "COURSE": "MIC450",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "FRIDAY",
            "START-TIME": "06:00 PM",
            "END-TIME": "09:00 PM"
        },
        {
            "SL": "23463",
            "COURSE": "MKT201",
            "DEPARTMENT": "SDI",
            "SECTION": "04",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3464",
            "COURSE": "MKT201",
            "DEPARTMENT": "SDI",
            "SECTION": "04",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3465",
            "COURSE": "MKT201",
            "DEPARTMENT": "MKT",
            "SECTION": "05",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3466",
            "COURSE": "MKT201",
            "DEPARTMENT": "MKT",
            "SECTION": "05",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3467",
            "COURSE": "MKT201",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3468",
            "COURSE": "MKT201",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3469",
            "COURSE": "MKT201",
            "DEPARTMENT": "TZK",
            "SECTION": "06",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3470",
            "COURSE": "MKT201",
            "DEPARTMENT": "TZK",
            "SECTION": "06",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3471",
            "COURSE": "MKT201",
            "DEPARTMENT": "SDI",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3472",
            "COURSE": "MKT201",
            "DEPARTMENT": "SDI",
            "SECTION": "03",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3473",
            "COURSE": "MKT201",
            "DEPARTMENT": "TZK",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "3474",
            "COURSE": "MKT201",
            "DEPARTMENT": "TZK",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "3475",
            "COURSE": "MKT201",
            "DEPARTMENT": "MKT",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3476",
            "COURSE": "MKT201",
            "DEPARTMENT": "MKT",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3477",
            "COURSE": "MKT301",
            "DEPARTMENT": "TAK",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3478",
            "COURSE": "MKT301",
            "DEPARTMENT": "TAK",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3479",
            "COURSE": "MKT301",
            "DEPARTMENT": "UWA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3480",
            "COURSE": "MKT301",
            "DEPARTMENT": "UWA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3481",
            "COURSE": "MKT301",
            "DEPARTMENT": "UWA",
            "SECTION": "04",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3482",
            "COURSE": "MKT301",
            "DEPARTMENT": "UWA",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3483",
            "COURSE": "MKT301",
            "DEPARTMENT": "TAK",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3484",
            "COURSE": "MKT301",
            "DEPARTMENT": "TAK",
            "SECTION": "03",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3485",
            "COURSE": "MKT421",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3486",
            "COURSE": "MKT421",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3487",
            "COURSE": "MKT421",
            "DEPARTMENT": "MFE",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3488",
            "COURSE": "MKT421",
            "DEPARTMENT": "MFE",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3489",
            "COURSE": "MKT423",
            "DEPARTMENT": "EKR",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3490",
            "COURSE": "MKT423",
            "DEPARTMENT": "EKR",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3491",
            "COURSE": "MKT425",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3492",
            "COURSE": "MKT425",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3493",
            "COURSE": "MKT426",
            "DEPARTMENT": "TZK",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "3494",
            "COURSE": "MKT426",
            "DEPARTMENT": "TZK",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "05:00 PM",
            "END-TIME": "06:20 PM"
        },
        {
            "SL": "3495",
            "COURSE": "MKT428",
            "DEPARTMENT": "LSK",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3496",
            "COURSE": "MKT428",
            "DEPARTMENT": "LSK",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3497",
            "COURSE": "MKT433",
            "DEPARTMENT": "AAK",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3498",
            "COURSE": "MKT433",
            "DEPARTMENT": "AAK",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3499",
            "COURSE": "MSC221",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3500",
            "COURSE": "MSC221",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3501",
            "COURSE": "MSC221",
            "DEPARTMENT": "NJL",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3502",
            "COURSE": "MSC221",
            "DEPARTMENT": "NJL",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3503",
            "COURSE": "MSC221",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3504",
            "COURSE": "MSC221",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3505",
            "COURSE": "MSC221",
            "DEPARTMENT": "SHV",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3506",
            "COURSE": "MSC221",
            "DEPARTMENT": "SHV",
            "SECTION": "03",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3507",
            "COURSE": "MSC221",
            "DEPARTMENT": "NJL",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3508",
            "COURSE": "MSC221",
            "DEPARTMENT": "NJL",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3509",
            "COURSE": "MSC301",
            "DEPARTMENT": "SMU",
            "SECTION": "04",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3510",
            "COURSE": "MSC301",
            "DEPARTMENT": "SMU",
            "SECTION": "04",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3511",
            "COURSE": "MSC301",
            "DEPARTMENT": "ZHL",
            "SECTION": "05",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3512",
            "COURSE": "MSC301",
            "DEPARTMENT": "ZHL",
            "SECTION": "05",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3513",
            "COURSE": "MSC301",
            "DEPARTMENT": "SMB",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3514",
            "COURSE": "MSC301",
            "DEPARTMENT": "SMB",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3515",
            "COURSE": "MSC301",
            "DEPARTMENT": "DMA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3516",
            "COURSE": "MSC301",
            "DEPARTMENT": "DMA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3517",
            "COURSE": "MSC301",
            "DEPARTMENT": "HMC",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3518",
            "COURSE": "MSC301",
            "DEPARTMENT": "HMC",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3519",
            "COURSE": "MSC321",
            "DEPARTMENT": "SHV",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3520",
            "COURSE": "MSC321",
            "DEPARTMENT": "SHV",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3521",
            "COURSE": "MSC321",
            "DEPARTMENT": "SHV",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3522",
            "COURSE": "MSC321",
            "DEPARTMENT": "SHV",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3523",
            "COURSE": "MSC321",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3524",
            "COURSE": "MSC321",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3525",
            "COURSE": "MSC321",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3526",
            "COURSE": "MSC321",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3527",
            "COURSE": "MSC442",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3528",
            "COURSE": "MSC442",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3529",
            "COURSE": "MSC443",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3530",
            "COURSE": "MSC443",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3531",
            "COURSE": "MSC445",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3532",
            "COURSE": "MSC445",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3533",
            "COURSE": "MSC449",
            "DEPARTMENT": "SHV",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3534",
            "COURSE": "MSC449",
            "DEPARTMENT": "SHV",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3535",
            "COURSE": "PHI521",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "10:05 AM",
            "END-TIME": "11:00 AM"
        },
        {
            "SL": "3536",
            "COURSE": "PHI521",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "10:05 AM",
            "END-TIME": "11:00 AM"
        },
        {
            "SL": "3537",
            "COURSE": "PHY101",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3538",
            "COURSE": "PHY101",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3539",
            "COURSE": "PHY102",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "04:00 PM"
        },
        {
            "SL": "13604",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "25",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3605",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "25",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3606",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "17",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3607",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "17",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3608",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "21",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3609",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "21",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3610",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "26",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3611",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "26",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3612",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "29",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3613",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "29",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3614",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "19",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3615",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "19",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3616",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3617",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3618",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "28",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3619",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "28",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3620",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3621",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3622",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "20",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3623",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "20",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3624",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3625",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3626",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "31",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3627",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "31",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3628",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "30",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3629",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "30",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3630",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3631",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3632",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "22",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3633",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "22",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3634",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "23",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3635",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "23",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3636",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3637",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3638",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "32",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3639",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "32",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3640",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3641",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3642",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3643",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3644",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "14",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3645",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "14",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3646",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3647",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3648",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "18",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3649",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "18",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3650",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3651",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3652",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "15",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3653",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "15",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3654",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "27",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3655",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "27",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3656",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "16",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3657",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "16",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3658",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "24",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3659",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "24",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3660",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3661",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3662",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3663",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3664",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3665",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3666",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3667",
            "COURSE": "PHY111",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "33720",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "26",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3721",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "26",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3722",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3723",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3724",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3725",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3726",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3727",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3728",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3729",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3730",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3731",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3732",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3733",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3734",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3735",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3736",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "23",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3737",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "23",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3738",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "21",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3739",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "21",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3740",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "17",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3741",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "17",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3742",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "22",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3743",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "22",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3744",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "24",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3745",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "24",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3746",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3747",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3748",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3749",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3750",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "16",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3751",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "16",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3752",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "19",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3753",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "19",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3754",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3755",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3756",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "15",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3757",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "15",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3758",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3759",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3760",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3761",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3762",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "18",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3763",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "18",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3764",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "25",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3765",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "25",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3766",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "14",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3767",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "14",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3768",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "20",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3769",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "20",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3770",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3771",
            "COURSE": "PHY112",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3772",
            "COURSE": "PHY113",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3773",
            "COURSE": "PHY113",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3774",
            "COURSE": "PHY201",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3775",
            "COURSE": "PHY201",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3776",
            "COURSE": "PHY204",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3777",
            "COURSE": "PHY204",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3778",
            "COURSE": "PHY301",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3779",
            "COURSE": "PHY301",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3781",
            "COURSE": "POL101",
            "DEPARTMENT": "SHJ",
            "SECTION": "05",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3782",
            "COURSE": "POL101",
            "DEPARTMENT": "SHJ",
            "SECTION": "05",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3783",
            "COURSE": "POL101",
            "DEPARTMENT": "SHJ",
            "SECTION": "04",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3784",
            "COURSE": "POL101",
            "DEPARTMENT": "SHJ",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3785",
            "COURSE": "POL101",
            "DEPARTMENT": "SHJ",
            "SECTION": "06",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3786",
            "COURSE": "POL101",
            "DEPARTMENT": "SHJ",
            "SECTION": "06",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3787",
            "COURSE": "POL101",
            "DEPARTMENT": "NOL",
            "SECTION": "02",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3788",
            "COURSE": "POL101",
            "DEPARTMENT": "NOL",
            "SECTION": "02",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3789",
            "COURSE": "POL101",
            "DEPARTMENT": "ATU",
            "SECTION": "08",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3790",
            "COURSE": "POL101",
            "DEPARTMENT": "ATU",
            "SECTION": "08",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3791",
            "COURSE": "POL101",
            "DEPARTMENT": "ATU",
            "SECTION": "07",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3792",
            "COURSE": "POL101",
            "DEPARTMENT": "ATU",
            "SECTION": "07",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3793",
            "COURSE": "POL101",
            "DEPARTMENT": "SHJ",
            "SECTION": "09",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3794",
            "COURSE": "POL101",
            "DEPARTMENT": "SHJ",
            "SECTION": "09",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3795",
            "COURSE": "POL101",
            "DEPARTMENT": "NOL",
            "SECTION": "01",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3796",
            "COURSE": "POL101",
            "DEPARTMENT": "NOL",
            "SECTION": "01",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3797",
            "COURSE": "POL101",
            "DEPARTMENT": "ATU",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3798",
            "COURSE": "POL101",
            "DEPARTMENT": "ATU",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3799",
            "COURSE": "POL102",
            "DEPARTMENT": "RPK",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3800",
            "COURSE": "POL102",
            "DEPARTMENT": "RPK",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3801",
            "COURSE": "POL102",
            "DEPARTMENT": "NOL",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3802",
            "COURSE": "POL102",
            "DEPARTMENT": "NOL",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3803",
            "COURSE": "POL103",
            "DEPARTMENT": "ATU",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3804",
            "COURSE": "POL103",
            "DEPARTMENT": "ATU",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3805",
            "COURSE": "POL201",
            "DEPARTMENT": "SMH",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3806",
            "COURSE": "POL201",
            "DEPARTMENT": "SMH",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3807",
            "COURSE": "PSY101",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3808",
            "COURSE": "PSY101",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3809",
            "COURSE": "PSY101",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3810",
            "COURSE": "PSY101",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3811",
            "COURSE": "PSY101",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3812",
            "COURSE": "PSY101",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3813",
            "COURSE": "PSY101",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3814",
            "COURSE": "PSY101",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3815",
            "COURSE": "PSY101",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3816",
            "COURSE": "PSY101",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3817",
            "COURSE": "PSY101",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3818",
            "COURSE": "PSY101",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3819",
            "COURSE": "PSY101",
            "DEPARTMENT": "SNN",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3820",
            "COURSE": "PSY101",
            "DEPARTMENT": "SNN",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3821",
            "COURSE": "PSY101",
            "DEPARTMENT": "SNN",
            "SECTION": "02",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3822",
            "COURSE": "PSY101",
            "DEPARTMENT": "SNN",
            "SECTION": "02",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3823",
            "COURSE": "PSY101",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3824",
            "COURSE": "PSY101",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3825",
            "COURSE": "PSY102",
            "DEPARTMENT": "SNN",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3826",
            "COURSE": "PSY102",
            "DEPARTMENT": "SNN",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3827",
            "COURSE": "PSY421",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "MONDAY",
            "START-TIME": "12:15 PM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "3828",
            "COURSE": "PSY421",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:15 PM",
            "END-TIME": "01:10 PM"
        },
        {
            "SL": "3829",
            "COURSE": "SOC101",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3830",
            "COURSE": "SOC101",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3831",
            "COURSE": "SOC101",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3832",
            "COURSE": "SOC101",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3833",
            "COURSE": "SOC101",
            "DEPARTMENT": "ALM",
            "SECTION": "07",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3834",
            "COURSE": "SOC101",
            "DEPARTMENT": "ALM",
            "SECTION": "07",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3835",
            "COURSE": "SOC101",
            "DEPARTMENT": "MET",
            "SECTION": "09",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3836",
            "COURSE": "SOC101",
            "DEPARTMENT": "MET",
            "SECTION": "09",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3837",
            "COURSE": "SOC101",
            "DEPARTMENT": "ALM",
            "SECTION": "06",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3838",
            "COURSE": "SOC101",
            "DEPARTMENT": "ALM",
            "SECTION": "06",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3839",
            "COURSE": "SOC101",
            "DEPARTMENT": "ALM",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3840",
            "COURSE": "SOC101",
            "DEPARTMENT": "ALM",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3841",
            "COURSE": "SOC101",
            "DEPARTMENT": "MET",
            "SECTION": "04",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3842",
            "COURSE": "SOC101",
            "DEPARTMENT": "MET",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3843",
            "COURSE": "SOC101",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3844",
            "COURSE": "SOC101",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3845",
            "COURSE": "SOC101",
            "DEPARTMENT": "SHR",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3846",
            "COURSE": "SOC101",
            "DEPARTMENT": "SHR",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3847",
            "COURSE": "SOC101",
            "DEPARTMENT": "MET",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3848",
            "COURSE": "SOC101",
            "DEPARTMENT": "MET",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3849",
            "COURSE": "SOC101",
            "DEPARTMENT": "MET",
            "SECTION": "08",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3850",
            "COURSE": "SOC101",
            "DEPARTMENT": "MET",
            "SECTION": "08",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3851",
            "COURSE": "STA101",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3852",
            "COURSE": "STA101",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3853",
            "COURSE": "STA101",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3854",
            "COURSE": "STA101",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3855",
            "COURSE": "STA101",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3856",
            "COURSE": "STA101",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3857",
            "COURSE": "STA101",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3858",
            "COURSE": "STA101",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3859",
            "COURSE": "STA101",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3860",
            "COURSE": "STA101",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3861",
            "COURSE": "STA101",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3862",
            "COURSE": "STA101",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3863",
            "COURSE": "STA101",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3864",
            "COURSE": "STA101",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3865",
            "COURSE": "STA101",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3866",
            "COURSE": "STA101",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3867",
            "COURSE": "STA101",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3868",
            "COURSE": "STA101",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3869",
            "COURSE": "STA101",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3870",
            "COURSE": "STA101",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3871",
            "COURSE": "STA101",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3872",
            "COURSE": "STA101",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3873",
            "COURSE": "STA101",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3874",
            "COURSE": "STA101",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3875",
            "COURSE": "STA101",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3876",
            "COURSE": "STA101",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3877",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "15",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3878",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "15",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3879",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3880",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "06",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3881",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "TUESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3882",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "05",
            "DAY": "SUNDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3883",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "14",
            "DAY": "WEDNESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3884",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "14",
            "DAY": "MONDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3885",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "20",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3886",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "20",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3887",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "32",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3888",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "32",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3889",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "19",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3890",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "19",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3891",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3892",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "08",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3893",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "38",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3894",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "38",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3895",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3896",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "02",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3897",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "30",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3898",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "30",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3899",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3900",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "11",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3901",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "TUESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3902",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "01",
            "DAY": "SUNDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3903",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "27",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3904",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "27",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3905",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "24",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3906",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "24",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3907",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "26",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3908",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "26",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3909",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "34",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3910",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "34",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3911",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "31",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3912",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "31",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3913",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "21",
            "DAY": "WEDNESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3914",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "21",
            "DAY": "MONDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3915",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "TUESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3916",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "07",
            "DAY": "SUNDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3917",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3918",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "03",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3919",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "16",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3920",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "16",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3921",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "28",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3922",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "28",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3923",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "22",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3924",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "22",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3925",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "29",
            "DAY": "THURSDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3926",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "29",
            "DAY": "SATURDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3927",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3928",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "13",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3929",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "25",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3930",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "25",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3931",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "TUESDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3932",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "04",
            "DAY": "SUNDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3933",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "18",
            "DAY": "WEDNESDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3934",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "18",
            "DAY": "MONDAY",
            "START-TIME": "12:30 PM",
            "END-TIME": "01:50 PM"
        },
        {
            "SL": "3935",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "17",
            "DAY": "WEDNESDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3936",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "17",
            "DAY": "MONDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3937",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "23",
            "DAY": "WEDNESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3938",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "23",
            "DAY": "MONDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3939",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "35",
            "DAY": "THURSDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3940",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "35",
            "DAY": "SATURDAY",
            "START-TIME": "09:30 AM",
            "END-TIME": "10:50 AM"
        },
        {
            "SL": "3941",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "39",
            "DAY": "SATURDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3942",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "40",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3943",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "40",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3944",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "41",
            "DAY": "THURSDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3945",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "41",
            "DAY": "SATURDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3946",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3947",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "10",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3948",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "33",
            "DAY": "SATURDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3949",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "TUESDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3950",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "09",
            "DAY": "SUNDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        },
        {
            "SL": "3951",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "TUESDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3952",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "12",
            "DAY": "SUNDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3953",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "37",
            "DAY": "THURSDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3954",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "37",
            "DAY": "SATURDAY",
            "START-TIME": "11:00 AM",
            "END-TIME": "12:20 PM"
        },
        {
            "SL": "3955",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "33",
            "DAY": "THURSDAY",
            "START-TIME": "03:30 PM",
            "END-TIME": "04:50 PM"
        },
        {
            "SL": "3956",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "36",
            "DAY": "WEDNESDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3957",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "36",
            "DAY": "MONDAY",
            "START-TIME": "08:00 AM",
            "END-TIME": "09:20 AM"
        },
        {
            "SL": "3958",
            "COURSE": "STA201",
            "DEPARTMENT": "TBA",
            "SECTION": "39",
            "DAY": "THURSDAY",
            "START-TIME": "02:00 PM",
            "END-TIME": "03:20 PM"
        }
];



document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('search-button').addEventListener('click', searchCourse);
});

function searchCourse() {
    const input = document.getElementById('course-input').value.toUpperCase();
    const results = courseData.filter(data => data.COURSE.toUpperCase() === input);

    displayResults(results);
}

function displayResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (results.length > 0) {
        results.forEach(result => {
            const courseInfo = `${result.COURSE} - ${result.SECTION}`;
            const buttonHTML = `<button onclick="addToSchedule('${courseInfo}', '${result.DAY}', '${result['START-TIME']}')">Add to Schedule</button>`;
            resultsDiv.innerHTML += `<p>${courseInfo} - ${result.DAY} - ${result['START-TIME']} ${buttonHTML}</p>`;
        });
    } else {
        resultsDiv.innerHTML = '<p>No matching courses found.</p>';
    }
}

function addToSchedule(courseInfo, day, time) {
    const scheduleTable = document.getElementById('schedule-planner');
    const days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
    const dayIndex = days.indexOf(day.toUpperCase()); // No +1 because the header row is not included in `days`

    const formattedTime = time.replace(' ', '').toUpperCase(); // E.g., "03:30PM"
    const timeId = `${day}-${formattedTime}`; // E.g., "TUESDAY-03:30PM"
    const cell = document.getElementById(timeId);

    if (cell) {
        cell.innerText = courseInfo;
    } else {
        console.error('Could not find the table cell with ID:', timeId);
    }
}
