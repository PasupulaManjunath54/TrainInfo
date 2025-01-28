let trainsInfo=[
    {
      "number": "12301",
      "name": "Rajdhani Express",
      "from": "NDLS",
      "to": "CSTM",
      "departure": "16:30",
      "arrival": "08:15"
    },
    {
      "number": "12101",
      "name": "Jnaneswari Express",
      "from": "CSTM",
      "to": "HWH",
      "departure": "20:35",
      "arrival": "15:10"
    },
    {
      "number": "12678",
      "name": "Bangalore Mail",
      "from": "SBC",
      "to": "MAS",
      "departure": "22:00",
      "arrival": "05:50"
    },
    {
      "number": "12842",
      "name": "Coromandel Express",
      "from": "MAS",
      "to": "HWH",
      "departure": "08:45",
      "arrival": "04:50"
    },
    {
      "number": "12307",
      "name": "Howrah Junction Rajdhani",
      "from": "HWH",
      "to": "NDLS",
      "departure": "14:05",
      "arrival": "10:00"
    },
    {
      "number": "12418",
      "name": "Prayagraj Express",
      "from": "ALD",
      "to": "NDLS",
      "departure": "22:10",
      "arrival": "06:50"
    },
    {
      "number": "12231",
      "name": "Lucknow Mail",
      "from": "LKO",
      "to": "NDLS",
      "departure": "22:45",
      "arrival": "06:55"
    },
    {
      "number": "12309",
      "name": "Patna Rajdhani Express",
      "from": "PNBE",
      "to": "NDLS",
      "departure": "19:20",
      "arrival": "07:40"
    },
    {
      "number": "12155",
      "name": "Bhopal Express",
      "from": "BPL",
      "to": "NDLS",
      "departure": "21:00",
      "arrival": "06:35"
    },
    {
      "number": "12425",
      "name": "Jammu Rajdhani Express",
      "from": "JAT",
      "to": "NDLS",
      "departure": "20:40",
      "arrival": "05:45"
    },
    {
      "number": "12925",
      "name": "Paschim Express",
      "from": "ADI",
      "to": "NDLS",
      "departure": "18:30",
      "arrival": "06:55"
    },
    {
      "number": "12724",
      "name": "Telangana Express",
      "from": "SC",
      "to": "NDLS",
      "departure": "06:25",
      "arrival": "07:20"
    },
    {
      "number": "12591",
      "name": "Gorakhdham Express",
      "from": "GKP",
      "to": "NDLS",
      "departure": "15:15",
      "arrival": "05:10"
    },
    {
      "number": "11020",
      "name": "Konark Express",
      "from": "KYN",
      "to": "BBS",
      "departure": "15:00",
      "arrival": "17:50"
    },
    {
      "number": "12626",
      "name": "Kerala Express",
      "from": "TVC",
      "to": "NDLS",
      "departure": "14:00",
      "arrival": "13:45"
    }
  ];
let stationInfo=[
    { "code": "NDLS", "name": "New Delhi", "location": "Delhi" },
    { "code": "CSTM", "name": "Chhatrapati Shivaji Maharaj Terminus", "location": "Mumbai" },
    { "code": "SBC", "name": "Bangalore City Junction", "location": "Bangalore" },
    { "code": "MAS", "name": "Chennai Central", "location": "Chennai" },
    { "code": "HWH", "name": "Howrah Junction", "location": "Kolkata" },
    { "code": "ALD", "name": "Prayagraj Junction", "location": "Prayagraj" },
    { "code": "LKO", "name": "Lucknow Junction", "location": "Lucknow" },
    { "code": "PNBE", "name": "Patna Junction", "location": "Patna" },
    { "code": "BPL", "name": "Bhopal Junction", "location": "Bhopal" },
    { "code": "JAT", "name": "Jammu Tawi", "location": "Jammu" },
    { "code": "ADI", "name": "Ahmedabad Junction", "location": "Ahmedabad" },
    { "code": "SC", "name": "Secunderabad Junction", "location": "Hyderabad" },
    { "code": "GKP", "name": "Gorakhpur Junction", "location": "Gorakhpur" },
    { "code": "KYN", "name": "Kalyan Junction", "location": "Mumbai Suburban" },
    { "code": "TVC", "name": "Trivandrum Central", "location": "Thiruvananthapuram" }
  ];

let stationsBetween=[
  {
    "from": "NDLS",
    "to": "CSTM",
    "trains": [
      {
        "number": "12301",
        "name": "Rajdhani Express",
        "departure": "16:30",
        "arrival": "08:15"
      },
      {
        "number": "12951",
        "name": "Mumbai Rajdhani",
        "departure": "16:50",
        "arrival": "08:35"
      },
      {
        "number": "12137",
        "name": "Punjab Mail",
        "departure": "05:15",
        "arrival": "07:55"
      }
    ]
  },
  {
    "from": "SBC",
    "to": "MAS",
    "trains": [
      {
        "number": "12678",
        "name": "Bangalore Mail",
        "departure": "22:00",
        "arrival": "05:50"
      },
      {
        "number": "12028",
        "name": "Shatabdi Express",
        "departure": "06:00",
        "arrival": "11:10"
      },
      {
        "number": "12296",
        "name": "Sanghamitra Express",
        "departure": "20:30",
        "arrival": "06:30"
      }
    ]
  },
  {
    "from": "HWH",
    "to": "NDLS",
    "trains": [
      {
        "number": "12307",
        "name": "Howrah Rajdhani Express",
        "departure": "14:05",
        "arrival": "10:00"
      },
      {
        "number": "12301",
        "name": "Kolkata Rajdhani",
        "departure": "16:55",
        "arrival": "10:05"
      },
      {
        "number": "12274",
        "name": "Duronto Express",
        "departure": "08:00",
        "arrival": "06:10"
      }
    ]
  },
  {
    "from": "LKO",
    "to": "NDLS",
    "trains": [
      {
        "number": "12231",
        "name": "Lucknow Mail",
        "departure": "22:45",
        "arrival": "06:55"
      },
      {
        "number": "12003",
        "name": "Lucknow Shatabdi Express",
        "departure": "15:35",
        "arrival": "21:15"
      },
      {
        "number": "14205",
        "name": "Ayodhya Express",
        "departure": "23:10",
        "arrival": "08:20"
      }
    ]
  },
  {
    "from": "SC",
    "to": "NDLS",
    "trains": [
      {
        "number": "12723",
        "name": "Telangana Express",
        "departure": "06:25",
        "arrival": "07:20"
      },
      {
        "number": "12707",
        "name": "AP Sampark Kranti",
        "departure": "18:00",
        "arrival": "07:30"
      },
      {
        "number": "12647",
        "name": "Karnataka Express",
        "departure": "19:20",
        "arrival": "06:40"
      }
    ]
  }
];
let search_Specific_TS_Info_ByLOC=(e)=>
{
    e.preventDefault();
    let searchedValue = document.getElementById("search-station").value;
searchedValue = searchedValue.charAt(0).toUpperCase() + searchedValue.slice(1).toLowerCase();

    // console.log(searchedValue);
    let locPresent=false;
    if (searchedValue) 
    {
      for(let i=0;i<=stationInfo.length-1;i++)
      {
        if (searchedValue==stationInfo[i].location) 
        {
          locPresent=true;
          document.getElementById("results").style.cssText=`
          height:300px;
          width:250px;
          border:solid 1px blue;
          background: linear-gradient(to right, #6a11cb, #2575fc);
          margin:auto;
          margin-top:60px;
          `;
          document.getElementById("details1").innerHTML="Station Code: "+stationInfo[i].code;
          document.getElementById("details2").innerHTML="Station Name: "+stationInfo[i].name;
          document.getElementById("details3").innerHTML="Station Location: "+stationInfo[i].location;
          break;
        }
        else
        {
          locPresent=false;
        }
      }
    } 
    else 
    {
      alert("Invalid Location Name");  
    }
    if (locPresent) {
      true;
    } 
    else
    {
      alert("Location not Found")
    }
}

let Train_ByNameOrByNumber=(e)=>
{
  e.preventDefault();
    let searchOfTrain=document.getElementById("search-train").value.trim();
    let trainNumberOrName=false;
  if(searchOfTrain)
  {
      for(let i=0;i<=stationInfo.length-1;i++)
      {
          if(trainsInfo[i].number==searchOfTrain||trainsInfo[i].name==searchOfTrain)
          {
            trainNumberOrName=true;
              document.getElementById("results").style.cssText=`
                  height:300px;
                  width:250px;
                  border:solid 1px blue;
                  background: linear-gradient(to right, #6a11cb, #2575fc);
                  margin:auto;
                  margin-top:60px;
              `;
              document.getElementById("details1").innerHTML="Train Number: "+trainsInfo[i].number;
              document.getElementById("details2").innerHTML="Train Name: "+trainsInfo[i].name;
              document.getElementById("details3").innerHTML="train starts from: "+trainsInfo[i].from;
              document.getElementById("details4").innerHTML="train ends at: "+trainsInfo[i].to;
              document.getElementById("details5").innerHTML="Train Departure: "+trainsInfo[i].departure;
              document.getElementById("details6").innerHTML="Train Arrival: "+trainsInfo[i].arrival;
              break;
          }
          else
          {
            trainNumberOrName=false;
          }
      }
  }
  else
  {
      alert("Train not found");
  }
  if (trainNumberOrName) {
    true;
  } 
  else 
  {
    alert("Incorrect Train Number")  
  }
}

let stationsBetween_ByFromAndTo = (e) => {
  e.preventDefault();
  let trainFrom = document.getElementById("train-starts").value.trim().toUpperCase();
  let trainTo = document.getElementById("train-ends").value.trim().toUpperCase();
  let trainFromPresent = false;
  let trainToPresent = false;

  if (trainFrom && trainTo) {
    for (let i = 0; i <= stationsBetween.length - 1; i++) {
      if (trainFrom === stationsBetween[i].from && trainTo === stationsBetween[i].to) {
        trainFromPresent = true;
        trainToPresent = true;
        document.getElementById("results").style.cssText = `
          height: 300px;
          width: 500px;
          border: solid 1px blue;
          background: linear-gradient(to right, #6a11cb, #2575fc);
          margin: auto;
          margin-top: 60px;
          padding: 10px;
        `;

        // Clear any previous results
        document.getElementById("results").innerHTML = "<h3>Trains Between Stations:</h3>";

        // Append train details
        stationsBetween[i].trains.forEach((train) => {
          let trainDetails = document.createElement("p");
          trainDetails.innerHTML = `
            Train Number: ${train.number} <br>
            Train Name: ${train.name} <br>
            Departure: ${train.departure} <br>
            Arrival: ${train.arrival} <br>
            <hr>
          `;
          document.getElementById("results").appendChild(trainDetails);
        });
        break;
      }
    }
  } else {
    alert("Invalid FROM or TO!!!");
  }

  if (!trainFromPresent || !trainToPresent) {
    alert("No trains found between the specified stations!");
  }
};

let schduleInfo=[
  {
    "train_number": "12301",
    "train_name": "Rajdhani Express",
    "schedule": [
      { "station": "NDLS", "station_name": "New Delhi", "arrival": "N/A", "departure": "16:30" },
      { "station": "MB", "station_name": "Meerut City", "arrival": "17:15", "departure": "17:17" },
      { "station": "GZB", "station_name": "Ghaziabad Junction", "arrival": "18:00", "departure": "18:05" },
      { "station": "ALD", "station_name": "Allahabad Junction", "arrival": "21:30", "departure": "21:35" },
      { "station": "PNBE", "station_name": "Patna Junction", "arrival": "23:20", "departure": "23:25" },
      { "station": "BGP", "station_name": "Bhagalpur Junction", "arrival": "01:00", "departure": "01:05" },
      { "station": "HWH", "station_name": "Howrah Junction", "arrival": "08:15", "departure": "N/A" }
    ]
  },
  {
    "train_number": "12101",
    "train_name": "Jnaneswari Express",
    "schedule": [
      { "station": "CSTM", "station_name": "Chhatrapati Shivaji Maharaj Terminus", "arrival": "N/A", "departure": "20:35" },
      { "station": "BCT", "station_name": "Bandra Terminus", "arrival": "21:05", "departure": "21:07" },
      { "station": "KHAR", "station_name": "Khar Road", "arrival": "21:20", "departure": "21:22" },
      { "station": "VAPI", "station_name": "Vapi", "arrival": "23:15", "departure": "23:20" },
      { "station": "SURAT", "station_name": "Surat", "arrival": "01:00", "departure": "01:05" },
      { "station": "BPL", "station_name": "Bhopal Junction", "arrival": "06:30", "departure": "06:35" },
      { "station": "HUM", "station_name": "Humayun Nagar", "arrival": "09:10", "departure": "09:12" }
    ]
  },
  {
    "train_number": "12678",
    "train_name": "Bangalore Mail",
    "schedule": [
      { "station": "SBC", "station_name": "Bangalore City Junction", "arrival": "N/A", "departure": "22:00" },
      { "station": "MYS", "station_name": "Mysore Junction", "arrival": "23:30", "departure": "23:35" },
      { "station": "HASS", "station_name": "Hassan", "arrival": "00:50", "departure": "00:55" },
      { "station": "TUMK", "station_name": "Tumkur", "arrival": "02:30", "departure": "02:35" },
      { "station": "MAS", "station_name": "Chennai Central", "arrival": "05:50", "departure": "N/A" }
    ]
  },
  {
    "train_number": "12842",
    "train_name": "Coromandel Express",
    "schedule": [
      { "station": "MAS", "station_name": "Chennai Central", "arrival": "N/A", "departure": "08:45" },
      { "station": "SAK", "station_name": "Sakkottai", "arrival": "09:20", "departure": "09:22" },
      { "station": "VPT", "station_name": "Vijayawada Junction", "arrival": "15:00", "departure": "15:05" },
      { "station": "BZA", "station_name": "Brahmanapalli", "arrival": "16:50", "departure": "16:55" },
      { "station": "HWH", "station_name": "Howrah Junction", "arrival": "04:50", "departure": "N/A" }
    ]
  },
  {
    "train_number": "12137",
    "train_name": "Punjab Mail",
    "schedule": [
      { "station": "NDLS", "station_name": "New Delhi", "arrival": "N/A", "departure": "05:15" },
      { "station": "GZB", "station_name": "Ghaziabad Junction", "arrival": "06:00", "departure": "06:05" },
      { "station": "LKO", "station_name": "Lucknow Junction", "arrival": "09:30", "departure": "09:35" },
      { "station": "PNBE", "station_name": "Patna Junction", "arrival": "14:30", "departure": "14:35" },
      { "station": "HUM", "station_name": "Humayun Nagar", "arrival": "19:45", "departure": "19:50" }
    ]
  },
  {
    "train_number": "12231",
    "train_name": "Lucknow Mail",
    "schedule": [
      { "station": "LKO", "station_name": "Lucknow Junction", "arrival": "N/A", "departure": "22:45" },
      { "station": "HUM", "station_name": "Humayun Nagar", "arrival": "23:50", "departure": "23:55" },
      { "station": "NDLS", "station_name": "New Delhi", "arrival": "06:55", "departure": "N/A" }
    ]
  },
  {
    "train_number": "12028",
    "train_name": "Shatabdi Express",
    "schedule": [
      { "station": "SBC", "station_name": "Bangalore City Junction", "arrival": "N/A", "departure": "06:00" },
      { "station": "MYS", "station_name": "Mysore Junction", "arrival": "06:50", "departure": "06:55" },
      { "station": "TUMK", "station_name": "Tumkur", "arrival": "08:30", "departure": "08:35" },
      { "station": "MAS", "station_name": "Chennai Central", "arrival": "11:10", "departure": "N/A" }
    ]
  },
  {
    "train_number": "12951",
    "train_name": "Mumbai Rajdhani",
    "schedule": [
      { "station": "NDLS", "station_name": "New Delhi", "arrival": "N/A", "departure": "16:50" },
      { "station": "BCT", "station_name": "Bandra Terminus", "arrival": "17:30", "departure": "17:35" },
      { "station": "BPL", "station_name": "Bhopal Junction", "arrival": "22:05", "departure": "22:10" },
      { "station": "SURAT", "station_name": "Surat", "arrival": "01:25", "departure": "01:30" },
      { "station": "CSTM", "station_name": "Chhatrapati Shivaji Maharaj Terminus", "arrival": "08:35", "departure": "N/A" }
    ]
  },
  {
    "train_number": "12418",
    "train_name": "Prayagraj Express",
    "schedule": [
      { "station": "ALD", "station_name": "Allahabad Junction", "arrival": "N/A", "departure": "22:10" },
      { "station": "MB", "station_name": "Meerut City", "arrival": "01:05", "departure": "01:10" },
      { "station": "JAT", "station_name": "Jammu Tawi", "arrival": "05:35", "departure": "05:40" },
      { "station": "GZB", "station_name": "Ghaziabad Junction", "arrival": "07:10", "departure": "07:15" },
      { "station": "NDLS", "station_name": "New Delhi", "arrival": "06:50", "departure": "N/A" }
    ]
  },
  {
    "train_number": "12425",
    "train_name": "Jammu Rajdhani Express",
    "schedule": [
      { "station": "JAT", "station_name": "Jammu Tawi", "arrival": "N/A", "departure": "20:40" },
      { "station": "GZB", "station_name": "Ghaziabad Junction", "arrival": "01:05", "departure": "01:10" },
      { "station": "BPL", "station_name": "Bhopal Junction", "arrival": "05:30", "departure": "05:35" },
      { "station": "NDLS", "station_name": "New Delhi", "arrival": "08:30", "departure": "N/A" }
    ]
  },
  {
    "train_number": "12274",
    "train_name": "Duronto Express",
    "schedule": [
      { "station": "HWH", "station_name": "Howrah Junction", "arrival": "N/A", "departure": "08:00" },
      { "station": "PNBE", "station_name": "Patna Junction", "arrival": "10:50", "departure": "10:55" },
      { "station": "ALD", "station_name": "Allahabad Junction", "arrival": "13:10", "departure": "13:15" },
      { "station": "NDLS", "station_name": "New Delhi", "arrival": "18:15", "departure": "N/A" }
    ]
  },
  {
    "train_number": "12903",
    "train_name": "Madhya Pradesh Sampark Kranti",
    "schedule": [
      { "station": "BPL", "station_name": "Bhopal Junction", "arrival": "N/A", "departure": "14:20" },
      { "station": "NOD", "station_name": "Narmadapuram", "arrival": "15:00", "departure": "15:05" },
      { "station": "BPL", "station_name": "Bhopal Junction", "arrival": "16:00", "departure": "16:05" }
    ]
  }
];
let trainScheduleByTrainNumber=(e)=>
{
  e.preventDefault();
  let trainNumber = document.getElementById("get-train-schedule").value;
  // console.log(trainNumber);
  let trainNumberPresent=false;
  if(trainNumber)
  {
    for(let i=0;i<=schduleInfo.length-1;i++)
    {
      if(trainNumber==schduleInfo[i].train_number)
      {
        trainNumberPresent=true;
        document.getElementById("results").style.cssText=`
          height:300px;
          width:250px;
          border:solid 1px blue;
          background: linear-gradient(to right, #6a11cb, #2575fc);
          margin:auto;
          margin-top:60px;
          `;
          for(let j=0;j<=schduleInfo[i].schedule.length-1;j++)
          {
            document.getElementById("details1").innerHTML="Train Stop: "+schduleInfo[i].schedule[j].station;
            document.getElementById("details2").innerHTML="Station Name: "+schduleInfo[i].schedule[j].station_name;
            document.getElementById("details3").innerHTML="Arrival Time: "+schduleInfo[i].schedule[j].departure;
            document.getElementById("details4").innerHTML="Departure Time: "+schduleInfo[i].schedule[j].arrival;
          }
          break;
      }
    }
  }
  else{
    alert("Please enter the train number");
  }
  if(trainNumberPresent)
  {
    true;
  }
  else{
    alert("Train number not found");
  }
}

let pnr_status=[
  {
    "pnr": "2345678901",
    "train_number": "12301",
    "train_name": "Rajdhani Express",
    "status": "CNF",
    "boarding_point": "NDLS",
    "journey_date": "2025-01-28",
    "passenger_details": [
      {
        "passenger_name": "John Doe",
        "age": 30,
        "gender": "M",
        "berth": "2A",
        "status": "Confirmed"
      },
      {
        "passenger_name": "Jane Smith",
        "age": 28,
        "gender": "F",
        "berth": "2A",
        "status": "Confirmed"
      }
    ],
    "seat_availability": {
      "2A": { "total_seats": 40, "available_seats": 10 },
      "3A": { "total_seats": 50, "available_seats": 20 }
    },
    "reservation_status": "BOOKED"
  },
  {
    "pnr": "2345678902",
    "train_number": "12101",
    "train_name": "Jnaneswari Express",
    "status": "WL",
    "boarding_point": "CSTM",
    "journey_date": "2025-01-29",
    "passenger_details": [
      {
        "passenger_name": "Ravi Kumar",
        "age": 35,
        "gender": "M",
        "berth": "SL",
        "status": "Waitlisted"
      }
    ],
    "seat_availability": {
      "SL": { "total_seats": 60, "available_seats": 0 },
      "3A": { "total_seats": 50, "available_seats": 15 }
    },
    "reservation_status": "WAITLISTED"
  },
  {
    "pnr": "2345678903",
    "train_number": "12678",
    "train_name": "Bangalore Mail",
    "status": "CNF",
    "boarding_point": "SBC",
    "journey_date": "2025-01-30",
    "passenger_details": [
      {
        "passenger_name": "Sara Ali",
        "age": 26,
        "gender": "F",
        "berth": "3A",
        "status": "Confirmed"
      }
    ],
    "seat_availability": {
      "2A": { "total_seats": 40, "available_seats": 8 },
      "3A": { "total_seats": 50, "available_seats": 25 }
    },
    "reservation_status": "BOOKED"
  },
  {
    "pnr": "2345678904",
    "train_number": "12842",
    "train_name": "Coromandel Express",
    "status": "CNF",
    "boarding_point": "MAS",
    "journey_date": "2025-01-30",
    "passenger_details": [
      {
        "passenger_name": "Ajay Verma",
        "age": 45,
        "gender": "M",
        "berth": "2A",
        "status": "Confirmed"
      }
    ],
    "seat_availability": {
      "2A": { "total_seats": 40, "available_seats": 12 },
      "3A": { "total_seats": 50, "available_seats": 18 }
    },
    "reservation_status": "BOOKED"
  },
  {
    "pnr": "2345678905",
    "train_number": "12137",
    "train_name": "Punjab Mail",
    "status": "WL",
    "boarding_point": "NDLS",
    "journey_date": "2025-01-31",
    "passenger_details": [
      {
        "passenger_name": "Neha Sharma",
        "age": 23,
        "gender": "F",
        "berth": "3A",
        "status": "Waitlisted"
      }
    ],
    "seat_availability": {
      "3A": { "total_seats": 50, "available_seats": 0 },
      "SL": { "total_seats": 60, "available_seats": 25 }
    },
    "reservation_status": "WAITLISTED"
  },
  {
    "pnr": "2345678906",
    "train_number": "12231",
    "train_name": "Lucknow Mail",
    "status": "CNF",
    "boarding_point": "LKO",
    "journey_date": "2025-02-01",
    "passenger_details": [
      {
        "passenger_name": "Ravi Kumar",
        "age": 30,
        "gender": "M",
        "berth": "2A",
        "status": "Confirmed"
      }
    ],
    "seat_availability": {
      "2A": { "total_seats": 40, "available_seats": 5 },
      "SL": { "total_seats": 60, "available_seats": 20 }
    },
    "reservation_status": "BOOKED"
  },
  {
    "pnr": "2345678907",
    "train_number": "12028",
    "train_name": "Shatabdi Express",
    "status": "CNF",
    "boarding_point": "SBC",
    "journey_date": "2025-02-01",
    "passenger_details": [
      {
        "passenger_name": "Anita Raj",
        "age": 40,
        "gender": "F",
        "berth": "SL",
        "status": "Confirmed"
      }
    ],
    "seat_availability": {
      "2A": { "total_seats": 40, "available_seats": 30 },
      "SL": { "total_seats": 60, "available_seats": 10 }
    },
    "reservation_status": "BOOKED"
  },
  {
    "pnr": "2345678908",
    "train_number": "12951",
    "train_name": "Mumbai Rajdhani",
    "status": "CNF",
    "boarding_point": "NDLS",
    "journey_date": "2025-02-02",
    "passenger_details": [
      {
        "passenger_name": "Amit Soni",
        "age": 50,
        "gender": "M",
        "berth": "2A",
        "status": "Confirmed"
      }
    ],
    "seat_availability": {
      "2A": { "total_seats": 40, "available_seats": 15 },
      "3A": { "total_seats": 50, "available_seats": 5 }
    },
    "reservation_status": "BOOKED"
  },
  {
    "pnr": "2345678909",
    "train_number": "12418",
    "train_name": "Prayagraj Express",
    "status": "WL",
    "boarding_point": "ALD",
    "journey_date": "2025-02-02",
    "passenger_details": [
      {
        "passenger_name": "Vikram Singh",
        "age": 32,
        "gender": "M",
        "berth": "3A",
        "status": "Waitlisted"
      }
    ],
    "seat_availability": {
      "2A": { "total_seats": 40, "available_seats": 0 },
      "SL": { "total_seats": 60, "available_seats": 20 }
    },
    "reservation_status": "WAITLISTED"
  },
  {
    "pnr": "2345678910",
    "train_number": "12425",
    "train_name": "Jammu Rajdhani Express",
    "status": "CNF",
    "boarding_point": "JAT",
    "journey_date": "2025-02-03",
    "passenger_details": [
      {
        "passenger_name": "Kavita Patel",
        "age": 29,
        "gender": "F",
        "berth": "2A",
        "status": "Confirmed"
      }
    ],
    "seat_availability": {
      "2A": { "total_seats": 40, "available_seats": 18 },
      "3A": { "total_seats": 50, "available_seats": 7 }
    },
    "reservation_status": "BOOKED"
  },
  {
    "pnr": "2345678911",
    "train_number": "12274",
    "train_name": "Duronto Express",
    "status": "CNF",
    "boarding_point": "HWH",
    "journey_date": "2025-02-04",
    "passenger_details": [
      {
        "passenger_name": "Manoj Gupta",
        "age": 38,
        "gender": "M",
        "berth": "3A",
        "status": "Confirmed"
      }
    ],
    "seat_availability": {
      "2A": { "total_seats": 40, "available_seats": 8 },
      "SL": { "total_seats": 60, "available_seats": 20 }
    },
    "reservation_status": "BOOKED"
  },
  {
    "pnr": "2345678912",
    "train_number": "12903",
    "train_name": "Madhya Pradesh Sampark Kranti",
    "status": "CNF",
    "boarding_point": "BPL",
    "journey_date": "2025-02-05",
    "passenger_details": [
      {
        "passenger_name": "Priya Yadav",
        "age": 26,
        "gender": "F",
        "berth": "2A",
        "status": "Confirmed"
      }
    ],
    "seat_availability": {
      "2A": { "total_seats": 40, "available_seats": 10 },
      "SL": { "total_seats": 60, "available_seats": 35 }
    },
    "reservation_status": "BOOKED"
  },
  {
    "pnr": "2345678913",
    "train_number": "12236",
    "train_name": "Satyagrah Express",
    "status": "CNF",
    "boarding_point": "MDU",
    "journey_date": "2025-02-06",
    "passenger_details": [
      {
        "passenger_name": "Amit Kumar",
        "age": 42,
        "gender": "M",
        "berth": "2A",
        "status": "Confirmed"
      }
    ],
    "seat_availability": {
      "2A": { "total_seats": 40, "available_seats": 12 },
      "SL": { "total_seats": 60, "available_seats": 20 }
    },
    "reservation_status": "BOOKED"
  },
  {
    "pnr": "2345678914",
    "train_number": "12448",
    "train_name": "Ganga Dham Express",
    "status": "WL",
    "boarding_point": "PNBE",
    "journey_date": "2025-02-07",
    "passenger_details": [
      {
        "passenger_name": "Sunita Verma",
        "age": 33,
        "gender": "F",
        "berth": "3A",
        "status": "Waitlisted"
      }
    ],
    "seat_availability": {
      "3A": { "total_seats": 50, "available_seats": 0 },
      "SL": { "total_seats": 60, "available_seats": 25 }
    },
    "reservation_status": "WAITLISTED"
  },
  {
    "pnr": "2345678915",
    "train_number": "12953",
    "train_name": "Rajdhani Express",
    "status": "CNF",
    "boarding_point": "NDLS",
    "journey_date": "2025-02-08",
    "passenger_details": [
      {
        "passenger_name": "Arvind Shukla",
        "age": 29,
        "gender": "M",
        "berth": "2A",
        "status": "Confirmed"
      }
    ],
    "seat_availability": {
      "2A": { "total_seats": 40, "available_seats": 10 },
      "3A": { "total_seats": 50, "available_seats": 5 }
    },
    "reservation_status": "BOOKED"
  }
];
let ticketPnrStatus=(e)=>
{
  let pnrNumber=document.getElementById("get-pnr-station").value.trim();
  let pnrPresent=false;
  if (pnrNumber) 
  {
    for(let i=0;i<=pnr_status.length-1;i++)
      {
        if(pnrNumber==pnr_status[i].pnr)
        {
          pnrPresent=true;
          document.getElementById("results").style.cssText=`
              height:300px;
              width:250px;
              border:solid 1px blue;
              background: linear-gradient(to right, #6a11cb, #2575fc);
              margin:auto;
              margin-top:60px;
              `;
              document.getElementById("details1").innerHTML="PNR Number: "+pnr_status[i].pnr;
              document.getElementById("details2").innerHTML="Train Number: "+pnr_status[i].train_number;
                document.getElementById("details3").innerHTML="PNR Status: "+pnr_status[i].passenger_details[0].status;
              document.getElementById("details4").innerHTML="PNR reservation status: "+pnr_status[i].reservation_status;
              break;
        }
        else
        {
          pnrPresent=false;
        }
      }  
  } 
  else {
    alert("Invalid PNR Number");
  }
  if(pnrPresent)
  {
    true;
  }
  else{
    alert("PNR Number not found");
  }
}