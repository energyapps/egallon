(function ($) {

$(document).ready(function() {
//Load state price json
    var data = [
  {
    "state":"US Average",
    "stateabbrev":"US",
    "electric_raw":12.35,
    "eproxy":1.22
  },
  {
    "state":"Alabama",
    "stateabbrev":"AL",
    "electric_raw":11.78,
    "eproxy":1.16
  },
  {
    "state":"Alaska",
    "stateabbrev":"AK",
    "electric_raw":19.64,
    "eproxy":1.94
  },
  {
    "state":"Arizona",
    "stateabbrev":"AZ",
    "electric_raw":11.55,
    "eproxy":1.14
  },
  {
    "state":"Arkansas",
    "stateabbrev":"AR",
    "electric_raw":9.02,
    "eproxy":0.89
  },
  {
    "state":"California",
    "stateabbrev":"CA",
    "electric_raw":17.04,
    "eproxy":1.68
  },
  {
    "state":"Colorado",
    "stateabbrev":"CO",
    "electric_raw":11.74,
    "eproxy":1.16
  },
  {
    "state":"Connecticut",
    "stateabbrev":"CT",
    "electric_raw":21.94,
    "eproxy":2.17
  },
  {
    "state":"Delaware",
    "stateabbrev":"DE",
    "electric_raw":12.73,
    "eproxy":1.26
  },
  {
    "state":"District of Columbia",
    "stateabbrev":"DC",
    "electric_raw":12.29,
    "eproxy":1.21
  },
  {
    "state":"Florida",
    "stateabbrev":"FL",
    "electric_raw":11.63,
    "eproxy":1.15
  },
  {
    "state":"Georgia",
    "stateabbrev":"GA",
    "electric_raw":10.58,
    "eproxy":1.04
  },
  {
    "state":"Hawaii",
    "stateabbrev":"HI",
    "electric_raw":31.2,
    "eproxy":3.08
  },
  {
    "state":"Idaho",
    "stateabbrev":"ID",
    "electric_raw":9.59,
    "eproxy":0.95
  },
  {
    "state":"Illinois",
    "stateabbrev":"IL",
    "electric_raw":11.95,
    "eproxy":1.18
  },
  {
    "state":"Indiana",
    "stateabbrev":"IN",
    "electric_raw":10.79,
    "eproxy":1.06
  },
  {
    "state":"Iowa",
    "stateabbrev":"IA",
    "electric_raw":10.87,
    "eproxy":1.07
  },
  {
    "state":"Kansas",
    "stateabbrev":"KS",
    "electric_raw":12.05,
    "eproxy":1.19
  },
  {
    "state":"Kentucky",
    "stateabbrev":"KY",
    "electric_raw":9.75,
    "eproxy":0.96
  },
  {
    "state":"Louisiana",
    "stateabbrev":"LA",
    "electric_raw":8.81,
    "eproxy":0.87
  },
  {
    "state":"Maine",
    "stateabbrev":"ME",
    "electric_raw":15.51,
    "eproxy":1.53
  },
  {
    "state":"Maryland",
    "stateabbrev":"MD",
    "electric_raw":13.16,
    "eproxy":1.301
  },
  {
    "state":"Massachusetts",
    "stateabbrev":"MA",
    "electric_raw":22.12,
    "eproxy":2.18
  },
  {
    "state":"Michigan",
    "stateabbrev":"MI",
    "electric_raw":13.81,
    "eproxy":1.36
  },
  {
    "state":"Minnesota",
    "stateabbrev":"MN",
    "electric_raw":11.54,
    "eproxy":1.14
  },
  {
    "state":"Mississippi",
    "stateabbrev":"MS",
    "electric_raw":11.11,
    "eproxy":1.101
  },
  {
    "state":"Missouri",
    "stateabbrev":"MO",
    "electric_raw":9.5,
    "eproxy":0.94
  },
  {
    "state":"Montana",
    "stateabbrev":"MT",
    "electric_raw":10.64,
    "eproxy":1.05
  },
  {
    "state":"Nebraska",
    "stateabbrev":"NE",
    "electric_raw":9.76,
    "eproxy":0.96
  },
  {
    "state":"Nevada",
    "stateabbrev":"NV",
    "electric_raw":13.62,
    "eproxy":1.34
  },
  {
    "state":"New Hampshire",
    "stateabbrev":"NH",
    "electric_raw":19.56,
    "eproxy":1.93
  },
  {
    "state":"New Jersey",
    "stateabbrev":"NJ",
    "electric_raw":15.56,
    "eproxy":1.54
  },
  {
    "state":"New Mexico",
    "stateabbrev":"NM",
    "electric_raw":12.1,
    "eproxy":1.19
  },
  {
    "state":"New York",
    "stateabbrev":"NY",
    "electric_raw":19.15,
    "eproxy":1.89
  },
  {
    "state":"North Carolina",
    "stateabbrev":"NC",
    "electric_raw":11.24,
    "eproxy":1.11
  },
  {
    "state":"North Dakota",
    "stateabbrev":"ND",
    "electric_raw":8.78,
    "eproxy":0.87
  },
  {
    "state":"Ohio",
    "stateabbrev":"OH",
    "electric_raw":12.16,
    "eproxy":1.201
  },
  {
    "state":"Oklahoma",
    "stateabbrev":"OK",
    "electric_raw":9.51,
    "eproxy":0.94
  },
  {
    "state":"Oregon",
    "stateabbrev":"OR",
    "electric_raw":10.5,
    "eproxy":1.04
  },
  {
    "state":"Pennsylvania",
    "stateabbrev":"PA",
    "electric_raw":13.13,
    "eproxy":1.301
  },
  {
    "state":"Rhode Island",
    "stateabbrev":"RI",
    "electric_raw":20.05,
    "eproxy":1.98
  },
  {
    "state":"South Carolina",
    "stateabbrev":"SC",
    "electric_raw":12.22,
    "eproxy":1.21
  },
  {
    "state":"South Dakota",
    "stateabbrev":"SD",
    "electric_raw":10.17,
    "eproxy":1.001
  },
  {
    "state":"Tennessee",
    "stateabbrev":"TN",
    "electric_raw":9.82,
    "eproxy":0.97
  },
  {
    "state":"Texas",
    "stateabbrev":"TX",
    "electric_raw":11.64,
    "eproxy":1.15
  },
  {
    "state":"Utah",
    "stateabbrev":"UT",
    "electric_raw":10.49,
    "eproxy":1.04
  },
  {
    "state":"Vermont",
    "stateabbrev":"VT",
    "electric_raw":16.68,
    "eproxy":1.65
  },
  {
    "state":"Virginia",
    "stateabbrev":"VA",
    "electric_raw":10.94,
    "eproxy":1.08
  },
  {
    "state":"Washington",
    "stateabbrev":"WA",
    "electric_raw":8.68,
    "eproxy":0.86
  },
  {
    "state":"West Virginia",
    "stateabbrev":"WV",
    "electric_raw":9.63,
    "eproxy":0.95
  },
  {
    "state":"Wisconsin",
    "stateabbrev":"WI",
    "electric_raw":13.97,
    "eproxy":1.38
  },
  {
    "state":"Wyoming",
    "stateabbrev":"WY",
    "electric_raw":10.62,
    "eproxy":1.05
  }
]
        //Populate select dropdown menu
        var mySelect = $('#mySelect');
            $.each(data, function(i) {
              mySelect.append(
                $('<option></option>').val(data[i].stateabbrev).html(data[i].state)
            );
        });

        //load gas data
        var gas_data = [
  {
    "loc":"US",
    "loc_abbrev":"US",
    "price":2.78
  },
  {
    "loc":"East Coast",
    "loc_abbrev":"EC",
    "price":2.671
  },
  {
    "loc":"New England",
    "loc_abbrev":"NE",
    "price":2.724
  },
  {
    "loc":"Central Atlantic",
    "loc_abbrev":"CAT",
    "price":2.741
  },
  {
    "loc":"Lower Atlantic",
    "loc_abbrev":"LAT",
    "price":2.603
  },
  {
    "loc":"Midwest",
    "loc_abbrev":"MW",
    "price":2.694
  },
  {
    "loc":"Gulf Coast",
    "loc_abbrev":"GC",
    "price":2.483
  },
  {
    "loc":"Rocky Mountain",
    "loc_abbrev":"RM",
    "price":2.738
  },
  {
    "loc":"West Coast",
    "loc_abbrev":"WC",
    "price":3.444
  },
  {
    "loc":"West Coast less California",
    "loc_abbrev":"WCLC",
    "price":3.014
  },
  {
    "loc":"California",
    "loc_abbrev":"CA",
    "price":3.693
  },
  {
    "loc":"Colorado",
    "loc_abbrev":"CO",
    "price":2.592
  },
  {
    "loc":"Florida",
    "loc_abbrev":"FL",
    "price":2.598
  },
  {
    "loc":"Massachusetts",
    "loc_abbrev":"MA",
    "price":2.672
  },
  {
    "loc":"Minnesota",
    "loc_abbrev":"MN",
    "price":2.571
  },
  {
    "loc":"New York",
    "loc_abbrev":"NY",
    "price":2.831
  },
  {
    "loc":"Ohio",
    "loc_abbrev":"OH",
    "price":2.838
  },
  {
    "loc":"Texas",
    "loc_abbrev":"TX",
    "price":2.481
  },
  {
    "loc":"Washington",
    "loc_abbrev":"WA",
    "price":3.023
  }
]

        var loop2 = ["onestG","tenthstG","hundrethstG","onestE","tenthstE","hundrethstE","name","price1","price2"];
        var html2 = [];
        //loading a json above and then for loop to define them below using a for loop. 5/6.
    
        for (var i = 0; i<loop2.length; i++) {
            html2.push(document.getElementById(loop2[i]));
        };  

        //load initial values

                var onesG = String(gas_data[0].price).charAt(0);
                var tenthsG = String(gas_data[0].price).charAt(2);
                var hundrethsG = String(gas_data[0].price).charAt(3);
                                
                var onesE = String(data[0].eproxy).charAt(0);
                var tenthsE = String(data[0].eproxy).charAt(2);
                var hundrethsE = String(data[0].eproxy).charAt(3);

                //put those characters collected into the appropriate innerHTML

                html2[0].innerHTML=onesG;
                html2[1].innerHTML=tenthsG;
                html2[2].innerHTML=hundrethsG;
                

                html2[3].innerHTML=onesE;
                html2[4].innerHTML=tenthsE;
                html2[5].innerHTML=hundrethsE;

//                html2[6].innerHTML=data.features[0].state;
//                html2[7].innerHTML="The price of gasoline is <strong>$"+data.features[0].regular+"</strong> per gallon.";
//                html2[8].innerHTML="The price of electricity is <strong>$"+data.features[0].eproxy+"</strong> per egallon.";


        //what happens when you select a state
            $('select').change(function (e){
            e.preventDefault();
            for (var i=0;i<data.length;i++)
            {
                //When the value selected equals the JSONs state abbreviation, gather the data at specific characters
                if (this.value === data[i].stateabbrev) {
                                    
                    var onesE = String(data[i].eproxy).charAt(0);
                    var tenthsE = String(data[i].eproxy).charAt(2);
                    var hundrethsE = String(data[i].eproxy).charAt(3);

                    //put those characters collected into the appropriate innerHTML

                    html2[3].innerHTML=onesE;
                    html2[4].innerHTML=tenthsE;
                    html2[5].innerHTML=hundrethsE;
                };
            }

            if (this.value === "MA" ||this.value === "NY" ||this.value === "FL" ||this.value === "OH" ||this.value === "TX" ||this.value === "CO" ||this.value === "CA" ||this.value === "WA" || this.value === "MN") 
            {
                    for (var i=0;i<gas_data.length;i++)
                        {
                            //When the value selected equals the JSONs state abbreviation, gather the data at specific characters
                            if (this.value === gas_data[i].loc_abbrev) {
                                            
                                var onesG = String(gas_data[i].price).charAt(0);
                                var tenthsG = String(gas_data[i].price).charAt(2);
                                var hundrethsG = String(gas_data[i].price).charAt(3);    

                                html2[0].innerHTML=onesG;
                                html2[1].innerHTML=tenthsG; 
                                html2[2].innerHTML=hundrethsG;

                            };
                        }
            } 

            else{

                var pr;
                if (this.value === "ME" ||this.value === "NH" ||this.value === "VT" ||this.value === "NH" ||this.value === "CT" ||this.value === "RI") 
                {pr = gas_data[2].price;}            
                else if (this.value === "NY" ||this.value === "PA" ||this.value === "NJ" ||this.value === "DE" ||this.value === "MD" || this.value === "DC")
                {pr = gas_data[3].price;}            
                else if (this.value === "WV" ||this.value === "VA" ||this.value === "NC" ||this.value === "SC" ||this.value === "GA" )
                {pr = gas_data[4].price;}            
                else if (this.value === "AL" ||this.value === "MS" ||this.value === "AR" ||this.value === "LA" ||this.value === "NM" )
                {pr = gas_data[6].price;}            
                else if (this.value === "WY" ||this.value === "MT" ||this.value === "ID" ||this.value === "UT" )
                {pr = gas_data[7].price;}            
                else if (this.value === "OR" ||this.value === "NV" ||this.value === "AZ" ||this.value === "AK" ||this.value === "HI" )
                {pr = gas_data[9].price;}            
                else if (this.value === "ND" ||this.value === "SD" ||this.value === "NE" ||this.value === "KS" ||this.value === "OK" ||this.value === "MO" ||this.value === "IA" ||this.value === "WI" ||this.value === "MI" ||this.value === "IL" ||this.value === "IN" ||this.value === "KY" ||this.value === "TN" )
                {pr = gas_data[5].price;} 
                else if (this.value === "US")
                {pr = gas_data[0].price;}            

                var onesG = String(pr).charAt(0);
                var tenthsG = String(pr).charAt(2);
                var hundrethsG = String(pr).charAt(3);       

                html2[0].innerHTML=onesG;
                html2[1].innerHTML=tenthsG; 
                html2[2].innerHTML=hundrethsG;

            };

     });
   
  });

}(jQuery));

(function ($) {
$(document).ready(function() {

    var timesRun = 0;

    //on load, cycle through numbers to data
    var mp = setInterval(function () {
                minutePlay()
                
            }, 60);
    var sp = setInterval(function () {
                secondPlay()
            }, 90);
    var ml = setInterval(function () {
                milliPlay()
            }, 120); 
    var mp2 = setInterval(function () {
                minutePlay2()
            }, 70);
    var sp2 = setInterval(function () {
                secondPlay2()
            }, 100);
    var ml2 = setInterval(function () {
                milliPlay2();
                //step through time to get to 8 times (there are 7 li's in html)
                timesRun += 1;

                //when it gets to 8 times, chop it off.     
                if(timesRun === 8){
                    clearInterval(mp);
                    clearInterval(sp);
                    clearInterval(ml);
                    clearInterval(mp2);
                    clearInterval(sp2);
                    clearInterval(ml2);
                }
            }, 140);   

//on select, cycle through numbers to new data
  $('select').change(function (e){
    //reset iterations variable to 0
    var timesRun = 0;

    //On select when last child, reset to no active, so that we can start process of function correctly.
    var bb = $("ul.secondPlay li.active"); 
    if (bb.is(":last-child")) {
        $("ul.secondPlay li").removeClass("active");
        $("ul.minutePlay li").removeClass("active");
        $("ul.milliPlay li").removeClass("active");
        $("ul.secondPlay2 li").removeClass("active");
        $("ul.minutePlay2 li").removeClass("active");
        $("ul.milliPlay2 li").removeClass("active");
    };
    
    var mp = setInterval(function () {
                minutePlay()
                
            }, 60);
    var sp = setInterval(function () {
                secondPlay()
            }, 90);
    var ml = setInterval(function () {
                milliPlay()
            }, 120); 
    var mp2 = setInterval(function () {
                minutePlay2()
            }, 70);
    var sp2 = setInterval(function () {
                secondPlay2()
            }, 100);
    var ml2 = setInterval(function () {
                milliPlay2();
                //step through time to get to 8 times (there are 7 li's in html)
                timesRun += 1;

                //when it gets to 8 times, chop it off.     
                if(timesRun === 8){
                    clearInterval(mp);
                    clearInterval(sp);
                    clearInterval(ml);
                    clearInterval(mp2);
                    clearInterval(sp2);
                    clearInterval(ml2);
                }
            }, 140);                  
    });


    function milliPlay() {
        $("body").removeClass("play");
        var aa = $("ul.milliPlay li.active");

//if nothing in aa, go through sequence to step through number to next li
        if (aa.html() == undefined) {
            aa = $("ul.milliPlay li").eq(0);
            aa.addClass("before")
                //.removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");

        }
        //On last child add active and stop their
        else if (aa.is(":last-child")) {
            $("ul.milliPlay li").removeClass("before");
            aa.addClass("before").removeClass("active");
            //aa = $("ul.milliPlay li").eq(0);
            aa.addClass("active")
                .closest("body")
                .addClass("play");
        }
        //normally, (not first/last) cycle through, add active to next li, take away current active
        else {
            $("ul.milliPlay li").removeClass("before");
            aa.addClass("before")
                .removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");
        }

    }

    

    function secondPlay() {
        $("body").removeClass("play");
        var aa = $("ul.secondPlay li.active");

        if (aa.html() == undefined) {
            aa = $("ul.secondPlay li").eq(0);
            aa.addClass("before")
                //.removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");

        }
        else if (aa.is(":last-child")) {
            $("ul.secondPlay li").removeClass("before");
            aa.addClass("before").removeClass("active");
            //aa = $("ul.secondPlay li").eq(0);
            aa.addClass("active")
                .closest("body")
                .addClass("play");
        }
        else {
            $("ul.secondPlay li").removeClass("before");
            aa.addClass("before")
                .removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");
        }

    }

    function minutePlay() {
        $("body").removeClass("play");
        var aa = $("ul.minutePlay li.active");

        if (aa.html() == undefined) {
            aa = $("ul.minutePlay li").eq(0);
            aa.addClass("before")
                //.removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");

        }
        else if (aa.is(":last-child")) {
            $("ul.minutePlay li").removeClass("before");
            aa.addClass("before").removeClass("active");
           // aa = $("ul.minutePlay li").eq(0);
            aa.addClass("active")
                .closest("body")
                .addClass("play");
        }
        else {
            $("ul.minutePlay li").removeClass("before");
            aa.addClass("before")
                .removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");
        }

    }


    function secondPlay2() {
        $("body").removeClass("play");
        var aa = $("ul.secondPlay2 li.active");

        if (aa.html() == undefined) {
            aa = $("ul.secondPlay2 li").eq(0);
            aa.addClass("before")
                //.removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");

        }
        else if (aa.is(":last-child")) {
            $("ul.secondPlay2 li").removeClass("before");
            aa.addClass("before").removeClass("active");
            //aa = $("ul.secondPlay li").eq(0);
            aa.addClass("active")
                .closest("body")
                .addClass("play");
        }
        else {
            $("ul.secondPlay2 li").removeClass("before");
            aa.addClass("before")
                .removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");
        }

    }

    function minutePlay2() {
        $("body").removeClass("play");
        var aa = $("ul.minutePlay2 li.active");

        if (aa.html() == undefined) {
            aa = $("ul.minutePlay2 li").eq(0);
            aa.addClass("before")
                //.removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");

        }
        else if (aa.is(":last-child")) {
            $("ul.minutePlay2 li").removeClass("before");
            aa.addClass("before").removeClass("active");
           // aa = $("ul.minutePlay2 li").eq(0);
            aa.addClass("active")
                .closest("body")
                .addClass("play");
        }
        else {
            $("ul.minutePlay2 li").removeClass("before");
            aa.addClass("before")
                .removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");
        }

    }


function milliPlay2() {
        $("body").removeClass("play");
        var aa = $("ul.milliPlay2 li.active");

//if nothing in aa, go through sequence to step through number to next li
        if (aa.html() == undefined) {
            aa = $("ul.milliPlay2 li").eq(0);
            aa.addClass("before")
                //.removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");

        }
        //On last child add active and stop their
        else if (aa.is(":last-child")) {
            $("ul.milliPlay2 li").removeClass("before");
            aa.addClass("before").removeClass("active");
            //aa = $("ul.milliPlay2 li").eq(0);
            aa.addClass("active")
                .closest("body")
                .addClass("play");
        }
        //normally, (not first/last) cycle through, add active to next li, take away current active
        else {
            $("ul.milliPlay2 li").removeClass("before");
            aa.addClass("before")
                .removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");
        }

    }
    
});
}(jQuery));

function getIEVersion(){
    var agent = navigator.userAgent;
    var reg = /MSIE\s?(\d+)(?:\.(\d+))?/i;
    var matches = agent.match(reg);
    if (matches != null) {
        return { major: matches[1], minor: matches[2] };
    }
    return { major: "-1", minor: "-1" };
}

var ie_version =  getIEVersion();
var is_ie10 = ie_version.major == 10;

if (is_ie10 === true) {alert("Internet Explorer 10 does not fully support this feature.");};