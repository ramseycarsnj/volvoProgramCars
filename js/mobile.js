$(document).ready(function() {
  var vehicleArray = [

    ['VOU1638',
    '2016 Volvo V60 T5 Premier AWD',
    'http://www.volvocarsramsey.com/used/Volvo/2016-Volvo-V60-ramsey-nj-7de0a8660a0e0ae8294096d1a8cbc021.htm',
    '30,900',
    '7,050',
    '2.5L I5 20V Turbocharged',
    'Black',
    '20 city/29 hwy'],

    ['VOU1633',
    '2016 Volvo V60 T5 Premier AWD',
    'http://www.volvocarsramsey.com/used/Volvo/2016-Volvo-V60-ramsey-nj-7de0a9a20a0e0ae8294096d1bf088010.htm',
    '30,900',
    '9,899',
    '2.5: I5 20V Turbocharged',
    'Grey',
    '20 city/29 hwy'],

    ['VOU1645',
    '2017 Volvo S60 T5 AWD',
    'http://www.volvocarsramsey.com/used/Volvo/2017-Volvo-S60-ramsey-nj-7de0aeef0a0e0ae8294096d1d1be954d.htm',
    '30,900',
    '8,837',
    'Drive-E 2.0L I4 16V Turbocharged',
    'Silver',
    '23 city/31 hwy'],

    ['VOU1641',
    '2017 Volvo S60 T5 AWD',
    'http://www.volvocarsramsey.com/used/Volvo/2017-Volvo-S60-ramsey-nj-7de0a8d80a0e0ae8294096d11818dfbe.htm',
    '30,900',
    '11,989',
    'Drive-E 2.0L I4 16V Turbocharged',
    'Grey',
    '23 city/ 31 hwy'],

    ['VOU1632',
    '2016 Volvo V60 T5 Premier AWD',
    'http://www.volvocarsramsey.com/used/Volvo/2016-Volvo-V60-ramsey-nj-7de0a80b0a0e0ae8294096d1c53ed066.htm',
    '30,900',
    '12,475',
    '2.5L I5 20V Turbocharged',
    'White',
    '20 city/29 hwy'],

    ['VOU1630',
    '2017 Volvo S60 T5 AWD',
    'http://www.volvocarsramsey.com/used/Volvo/2017-Volvo-S60-ramsey-nj-7de0a7d00a0e0ae8294096d1848e8485.htm',
    '30,900',
    '8,565',
    'Drive-E 2.0L I4 16V Turbocharged',
    'Black',
    '23 city/31  hwy'],

    ['VOU1643',
    '2017 Volvo S60 T5 AWD',
    'http://www.volvocarsramsey.com/used/Volvo/2017-Volvo-S60-ramsey-nj-7de0aec70a0e0ae8294096d1dd8123a4.htm',
    '30,900',
    '9,153',
    'Drive-E 2.0L I4 16V Turbocharged',
    'Black',
    '23 city/31 hwy'],

    ['VOU1642',
    '2017 Volvo S60 T5 AWD',
    'http://www.volvocarsramsey.com/used/Volvo/2017-Volvo-S60-ramsey-nj-7de0ab570a0e0ae8294096d198dac403.htm',
    '30,900',
    '11,389',
    'Drive-E 2.0L I4 16V Turbocharged',
    'Silver',
    '23 city/31 hwy'],

    ['VOU1640',
    '2017 Volvo S60 T5 AWD',
    'http://www.volvocarsramsey.com/used/Volvo/2017-Volvo-S60-ramsey-nj-7de0aabb0a0e0ae8294096d194eda694.htm',
    '30,900',
    '8,080',
    'Drive-E 2.0L I4 16V Turbocharged',
    'White',
    '23 city/31 hwy'],

    ['VOU1646',
    '2017 Volvo S60 T5 AWD',
    'http://www.volvocarsramsey.com/used/Volvo/2017-Volvo-S60-ramsey-nj-7de0af1b0a0e0ae8294096d112a2d502.htm',
    '30,900',
    '10,170',
    'Drive-E 2.0L I4 16V Turbocharged',
    'Silver',
    '23 city/ 31 hwy'],

    ['VOU1636',
    '2016 Volvo V60 T5 Premier AWD',
    'http://www.volvocarsramsey.com/used/Volvo/2016-Volvo-V60-ramsey-nj-7de0aaf00a0e0ae8294096d1abcd5aa8.htm',
    '30,900',
    '9,616',
    '2.5L I5 20V Turbocharged',
    'White',
    '20 city/29 hwy'],

    ['VOU1637',
    '2016 Volvo V60 T5 Premier',
    'http://www.volvocarsramsey.com/used/Volvo/2016-Volvo-V60-ramsey-nj-7de0aa350a0e0ae8294096d1bcb4879b.htm',
    '30,900',
    '9,927',
    '2.5L I5 20V Turbocharged',
    'Black',
    '20 city/29 hwy'],

    ['VOU1638',
    '2017 Volvo V60 T5 Premier',
    'http://www.volvocarsramsey.com/used/Volvo/2016-Volvo-V60-ramsey-nj-7de0a8660a0e0ae8294096d1a8cbc021.htm',
    '30,900',
    '7,070',
    'Drive-E 2.0L I4 16V Turbocharged',
    'Black',
    '20 city/ 29 hwy'],

    ['VOU1639',
    '2016 Volvo V60 T5 Premier',
    'http://www.volvocarsramsey.com/used/Volvo/2016-Volvo-V60-ramsey-nj-7de0a9e90a0e0ae8294096d19b79f29f.htm',
    '30,900',
    '8,957',
    'Drive-E 2.0L I4 16V Turbocharged',
    'Black',
    '20 city/ 29 hwy'],

    ['VOU1631',
    '2017 Volvo V60 T5 Premier',
    'http://www.volvocarsramsey.com/used/Volvo/2016-Volvo-V60-ramsey-nj-7de0a8960a0e0ae8294096d18e06e615.htm',
    '30,900',
    '15,785',
    'Drive-E 2.0L I4 16V Turbocharged',
    'Black',
    '20 city/ 29 hwy']

  ];

  for (var i = 0; i < vehicleArray.length; i++) {
    $('.contentContainer').append('<div class="vehicleContainer"><div class="leftSpanColumn"><h1 class="vehicleTitle">'
    + vehicleArray[i][1] + '</h1><h1 class="price"><sup>$</sup>'
    + vehicleArray[i][3] + '</h1><a href="https://pictures.dealer.com/ramseyvolvovcna/d042e4bf0a0e0acc40518cc59c6e81e7.pdf" target="_blank" class="volvo cpo download"><img src="inc/cpo.jpg" class="cpoImg" alt="cpo image" /></a><img src="inc/'
    + vehicleArray[i][0] + '/'
    + vehicleArray[i][0] + '_1.jpg" name="mainVehicleImg" alt="Vehicle Image" class="mainImg ' + vehicleArray[i][0] + ' primary mainImg1"><img src="inc/'
    + vehicleArray[i][0] + '/'
    + vehicleArray[i][0] + '_2.jpg" alt="Vehicle Image" class="mainImg mainImg2"></a><img src="inc/'
    + vehicleArray[i][0] + '/'
    + vehicleArray[i][0] + '_3.jpg" alt="Vehicle Image" class="mainImg mainImg3"></a><img src="inc/'
    + vehicleArray[i][0] + '/'
    + vehicleArray[i][0] + '_4.jpg" alt="Vehicle Image" class="mainImg mainImg4"></a><img src="inc/'
    + vehicleArray[i][0] + '/'
    + vehicleArray[i][0] + '_5.jpg" alt="Vehicle Image" class="mainImg mainImg5"></a><img src="inc/'
    + vehicleArray[i][0] + '/'
    + vehicleArray[i][0] + '_6.jpg" alt="Vehicle Image" class="mainImg mainImg6"></a><div class="supImages"><img src="inc/'
    + vehicleArray[i][0] + '/'
    + vehicleArray[i][0] + '_1.jpg" alt="supporting image" name="supVehicleImg1" class="supImg supImg1" /><img src="inc/'
    + vehicleArray[i][0] + '/'
    + vehicleArray[i][0] + '_2.jpg" alt="supporting image" class="supImg supImg2" /><img src="inc/'
    + vehicleArray[i][0] + '/'
    + vehicleArray[i][0] + '_3.jpg" alt="supporting image" class="supImg supImg3"><img src="inc/'
    + vehicleArray[i][0] + '/'
    + vehicleArray[i][0] + '_4.jpg" alt="supporting image" class="supImg supImg4"><img src="inc/'
    + vehicleArray[i][0] + '/'
    + vehicleArray[i][0] + '_5.jpg" alt="supporting image" class="supImg supImg5"><img src="inc/'
    + vehicleArray[i][0] + '/'
    + vehicleArray[i][0] + '_6.jpg" alt="supporting image" class="supImg supImg6"></div></div><div class="rightSpanColumn"><ul><li class="mileage"><strong>Mileage:</strong> '
    + vehicleArray[i][4] + '</li><li class="extColor"><strong>Color:</strong> '
    + vehicleArray[i][6] + '</li><li class="engineType"><strong>Engine:</strong> '
    + vehicleArray[i][6] + '</li><li class="mpg"><strong>MPG:</strong> '
    + vehicleArray[i][7] + '</li><li class="stockNumber"><strong>Stock:</strong> '
    + vehicleArray[i][0] + '</li></ul><a href="'
    + vehicleArray[i][2] + '" class="vehicleCTA" target="_blank">VIEW VEHICLE</a></div></div>');

    $('.mainImg').hide();
    $('.primary').show();

    $('.supImg1').click(function(event){
      $('.mainImg').hide();
      $('.mainImg1').show();
    });
    $('.supImg2').click(function(event){
      $('.mainImg').hide();
      $('.mainImg2').show();
    });
    $('.supImg3').click(function(event){
      $('.mainImg').hide();
      $('.mainImg3').show();
    });
    $('.supImg4').click(function(event){
      $('.mainImg').hide();
      $('.mainImg4').show();
    });
    $('.supImg5').click(function(event){
      $('.mainImg').hide();
      $('.mainImg5').show();
    });
    $('.supImg6').click(function(event){
      $('.mainImg').hide();
      $('.mainImg6').show();
    });
  }

});
