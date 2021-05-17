$('#apiOneRun').click(function() {

  $.ajax({
    url: "libs/php/getWeather.php",
    type: 'POST',
    dataType: 'json',
    data: {
      north: $('#north').val(),
      south: $('#south').val(),
      east: $('#east').val(),
      west: $('#west').val()
    },
    success: function(result) {
      console.log(JSON.stringify(result));

      if (result.status.name == "ok") {
        $('#txtClouds').html(result['data'][0]['clouds']);
        $('#txtDew').html(result['data'][0]['dewPoint']);
        $('#txtTemperature').html(result['data'][0]['temperature']);
        $('#txtHumidity').html(result['data'][0]['humidity']);
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {

    }
  });
});

$('#apiTwoRun').click(function() {

  $.ajax({
    url: "libs/php/getPostalInfo.php",
    type: 'POST',
    dataType: 'json',
    data: {
      postalcode: $('#postalcode').val(),
      country: $('#country').val(),
      radius: $('#radius').val()
    },
    success: function(result) {

      console.log(JSON.stringify(result));

      if (result.status.name == "ok") {

        $('#txtAdminCode').html(result['data'][0]['adminCode2']);
        $('#txtAdminName').html(result['data'][0]['adminName2']);
        $('#txtPostalCode').html(result['data'][0]['postalCode']);
        $('#txtPlaceName').html(result['data'][0]['placeName']);

      }

    },
    error: function(jqXHR, textStatus, errorThrown) {

    }
  });

});


$('#apiThreeRun').click(function() {

  $.ajax({
    url: "libs/php/getEarthInfo.php",
    type: 'POST',
    dataType: 'json',
    data: {
      north: $('#northE').val(),
      south: $('#southE').val(),
      east: $('#eastE').val(),
      west: $('#westE').val()
    },
    success: function(result) {

      console.log(JSON.stringify(result));

      if (result.status.name == "ok") {

        $('#txtEarthId').html(result['data'][0]['eqid']);
        $('#txtMagnitude').html(result['data'][0]['magnitude']);
        $('#txtLat').html(result['data'][0]['lat']);
        $('#txtLong').html(result['data'][0]['lng']);

      }

    },
    error: function(jqXHR, textStatus, errorThrown) {

    }
  });

});
