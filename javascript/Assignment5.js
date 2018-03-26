var area = document.getElementById("area");



area.addEventListener("change", function() {
    if (area.value == "show1") {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response = JSON.parse(xhttp.responseText)
                var customers = response.GetAllCustomersResult;
                var text = ''
                for (var i = 1; i < customers.length; i++) {
                    var temp = '<tr><td>' + customers[i].CustomerID + '</td><td>' + customers[i].CompanyName + '</td><td>' + customers[i].City + '</td></tr>'
                    text += temp;
                }
                document.getElementById('customerDetails').innerHTML = text

            }
        };
        xhttp.open("GET", "https://student.business.uab.edu/jsonwebservice/service1.svc/getAllCustomers", true);
        xhttp.send();
        document.getElementById('section2').style.display = 'none'
        document.getElementById('section3').style.display = 'none'
        document.getElementById('section1').style.display = 'block'
    } else if (area.value == "show2") {
        document.getElementById('section1').style.display = 'none'
        document.getElementById('section3').style.display = 'none'
        document.getElementById('section2').style.display = 'block'
    } else if (area.value == "show3") {
        document.getElementById('section1').style.display = 'none'
        document.getElementById('section3').style.display = 'block'
        document.getElementById('section2').style.display = 'none'
    } else {
        document.getElementById('section1').style.display = 'none'
        document.getElementById('section2').style.display = 'none'
    }
});

function getCustomerOrderHistory() {
    var cid = document.getElementById('id1').value;
    if (!cid) alert('Please enter Customer ID.')
    else {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response = JSON.parse(xhttp.responseText)
                var text = ''
                for (var i = 1; i < response.length; i++) {
                    var temp = '<tr><td>' + response[i].ProductName + '</td><td>' + response[i].Total + '</td></tr>'
                    text += temp;
                }
                document.getElementById('orderHistoryDetails').innerHTML = text

            }
        };
        xhttp.open("GET", "https://student.business.uab.edu/jsonwebservice/service1.svc/getCustomerOrderHistory/" + cid, true);
        xhttp.send();
    }
}

function getOrdersForCustomer() {
    var cid = document.getElementById('id2').value;
    if (!cid) alert('Please enter Customer ID.')
    else {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response = JSON.parse(xhttp.responseText)
                console.log(response)
                orders = response.GetOrdersForCustomerResult;
                var text = ''
                for (var i = 1; i < orders.length; i++) {
                    var temp = '<table><tr><td>Order Date</td><td>' + orders[i].OrderDate + '</td></tr><tr><td>Order ID</td><td>' + orders[i].OrderID + '</td></tr><tr><td>Shipping Address</td><td>' + orders[i].ShipAddress + '</td></tr><tr><td>Shipping City</td><td>' + orders[i].ShipCity + '</td></tr><tr><td>Shipment Name</td><td>' + orders[i].ShipName + '</td></tr><tr><td>Shipping Postcode</td><td>' + orders[i].ShipPostcode + '</td></tr><tr><td>Shipped Date</td><td>' + orders[i].ShippedDate + '</td></tr><br></table>'
                    text += temp;
                }
                document.getElementById('orderDetails').innerHTML = text

            }
        };
        xhttp.open("GET", "https://student.business.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/" + cid, true);
        xhttp.send();
    }
}