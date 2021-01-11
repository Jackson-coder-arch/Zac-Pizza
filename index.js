function getPizzaOrder(pizzaType,crustType,extraToppings,pizzaQuantity,delivery,pizzaSize) {
    this.pizzaType = pizzaType;
    this.crustType = crustType;
    this.extraToppings = extraToppings;
    this.pizzaQuantity = pizzaQuantity;
    this.delivery = delivery;
    this.pizzaSize = pizzaSize;
    this.sizePrice=0;
    this.crustPrice = 0;
    this.toppingPrice = 0;
    this.deliveryPrice = 0;
    this.price = 0;
};
getPizzaOrder.prototype.finalPrice = function () {
    if (this.pizzaSize === "small") {
        this.sizePrice = 400;
    } else if (this.pizzaSize === "medium") {
        this.sizePrice = 700;
    }else if (this.pizzaSize === "large") {
        this.sizePrice = 1500;
    };
    if (this.crustType === "stuffed") {
        this.crustPrice = 150;
    } else if (this.crustType === "thick") {
        this.crustPrice = 200;
    }else if (this.crustType === "Crispy") {
        this.crustPrice = 150;
    }else if (this.crustType === "gluten-free") {
        this.crustPrice = 200;
    };
    if (this.pizzaSize === "small") {
        this.toppingPrice = 100;
    }else if (this.pizzaSize === "medium") {
        this.toppingPrice = 150;
    }else if (this.pizzaSize === "large") {
        this.toppingPrice = 200;
    };
    this.price =(this.sizePrice +this.crustPrice + this.toppingPrice) * this.pizzaQuantity;
};
getPizzaOrder.prototype.toBeDelivered = function () {
    if (this.delivery === "deliver") {
        this.price += 300;
    }else if(this.delivery ==="collect") {
        this.price +=0;
    };
};
function resetFieldValues () {
    pizzaSize = "";
    pizzaType = "";
    extraToppings = "";
    crustType = "";
    $("#pizza-quantity").val("");
};
 start of my user logic
 $(document).ready(function() {
     var modal = $(".ordering-plate");
     var placeOrder = $(".place-order");
     var close = $(".close-thing")
     placeOrder.click(function() {
         modal.show();
     });
     close.click(function() {
         modal.hide();
     });
    $(".what-you-want").submit(function(event) {
        event.preventDefault();
        var pizzaSize = $("#pizza-size").val();
        
        var pizzaType = $("#pizzatype").val();
        
        var crustType = $("#crusttype").val();
        
        var extraToppings = $("#toppings").val();
        
        var pizzaQuantity = parseInt($("#pizza-quantity").val());
     
        var delivery = $("#delivery").val();
       
        var newPizzaOrder = new getPizzaOrder(pizzaType,crustType,extraToppings,pizzaQuantity,delivery,pizzaSize);
        newPizzaOrder.finalPrice();
      
        newPizzaOrder.toBeDelivered();
        alert ("you have ordered " + pizzaQuantity + " " + pizzaSize + " " + pizzaType + " pizza(s) with a  " + crustType + " crust and  " + extraToppings + " topping. It will be " + delivery + " .");
        alert ("The total cost is  " + newPizzaOrder.price + " /=");
        resetFieldValues();
    });
    $("#delivery").click(function() {
        $("#contactform").slideDown();
      });
      $("#submitbutton").click(function(event) {
        event.preventDefault();
        var inputtedFirstName = $("input#first-name").val();
        var inputtedLastName = $("input#last-name").val();
        var inputtedEmailAddress = $("input#email-address").val();
        var inputtedPhoneNumber = $("input#phone-number").val();
        alert(inputtedFirstName + " " + inputtedLastName + " Your order will be ready in 15mins and will be delivered in the next 20 mins")
        // $("#contactform").hide();
        var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedEmailAddress, inputtedPhoneNumber);
        $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
        $("input#first-name").val("");
        $("input#last-name").val("");
        $("input#email-address").val("");
        $("input#phone-number").val();
        $(".contact").last().click(function() {
          $("#show-contact").show();
          $("#show-contact h2").text(newContact.firstName);
          $(".first-name").text(newContact.firstName);
          $(".last-name").text(newContact.lastName);
          $(".email-address").text(newContact.email);
          $(".phone-number").text(newContact.phonenumber);
        });
      });
      $(".sendicon").click(function(event) {
        alert("Thank you for your feedback");
      });
});
