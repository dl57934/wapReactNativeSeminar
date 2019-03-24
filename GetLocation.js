const GetLocation = () => {
  navigator.geolocation.getCurrentPosition(data => {
    console.log(data);
  });
};

export default GetLocation;
