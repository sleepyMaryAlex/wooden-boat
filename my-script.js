(function () {
    let button = document.querySelector("#myButton");
    button.addEventListener("click", sendForm, false);

    let reg = /^[A-ZА-ЯЁ\s-]+$/i;
    let regTel = /^\d{9}$/;
    let userNameTextBox = document.querySelector("#name");
    let userTelTextBox = document.querySelector("#tel");
    let boatSize = document.querySelector("#boatSize");
    let numberOfSetsOfOars = document.querySelector("#numberOfSetsOfOars");
    let antiseptic = document.querySelectorAll('input[name="antiseptic"]');
    let gap = document.querySelectorAll('input[name="gap"]');
    let coloring = document.querySelectorAll('input[name="color"]');
    let deliver = document.querySelectorAll('input[name="deliver"]');
    let coloringYes = document.querySelector("#coloringYes");
    let coloringNo = document.querySelector("#coloringNo");
    let deliveryYes = document.querySelector("#deliveryYes");
    let deliveryNo = document.querySelector("#deliveryNo");
    let coloring2 = document.querySelector("#coloring2");
    let address = document.querySelector("#address");
    let myForm = document.querySelector("#myForm");
    let span1 = document.querySelector(".span1");
    let span2 = document.querySelector(".span2");
    let span3 = document.querySelector(".span3");
    let span4 = document.querySelector(".span4");
    let span5 = document.querySelector(".span5");
    let span6 = document.querySelector(".span6");
    let span7 = document.querySelector(".span7");
    let span8 = document.querySelector(".span8");
    let span9 = document.querySelector(".span9");
    let span10 = document.querySelector(".span10");

    let antisepticYes = document.querySelector("#antisepticYes");
    let antisepticNo = document.querySelector("#antisepticNo");
    let bitumen = document.querySelector("#bitumen");
    let sealant = document.querySelector("#sealant");
    let gapsNo = document.querySelector("#gapsNo");
    let changing = document.querySelector(".changing");

    function sendForm(event) {
        event.preventDefault();
        let validationResult = validateUserData();

        if (validationResult.userNameResult) {
            userNameTextBox.style.borderColor = "rgba(65, 95, 80, 0.7)";
            span1.innerHTML = "";
        } else {
            userNameTextBox.style.borderColor = "rgba(151, 43, 24, 0.7)";
            span1.innerHTML = "Введите имя правильно";
        }

        if (validationResult.userTelResult) {
            userTelTextBox.style.borderColor = "rgba(65, 95, 80, 0.7)";
            span2.innerHTML = "";
        } else {
            userTelTextBox.style.borderColor = "rgba(151, 43, 24, 0.7)";
            span2.innerHTML = "Номер введен некорректно";
        }

        if (validationResult.userBoatSizeResult) {
            boatSize.style.borderColor = "rgba(65, 95, 80, 0.7)";
            span3.innerHTML = "";
        } else {
            boatSize.style.borderColor = "rgba(151, 43, 24, 0.7)";
            span3.innerHTML = "Выберите размер";
        }

        if (validationResult.userSetsOfOarsResult) {
            numberOfSetsOfOars.style.borderColor = "rgba(65, 95, 80, 0.7)";
            span10.innerHTML = "";
        } else {
            numberOfSetsOfOars.style.borderColor = "rgba(151, 43, 24, 0.7)";
            span10.innerHTML = "Введите число от 1 до 10-ти";
        }

        if (validationResult.userAntisepticResult) {
            span4.innerHTML = "";
        } else {
            span4.innerHTML = "Выберите значение";
        }

        if (validationResult.userGapResult) {
            span5.innerHTML = "";
        } else {
            span5.innerHTML = "Выберите значение";
        }

        if (validationResult.userColoringResult) {
            span6.innerHTML = "";
        } else {
            span6.innerHTML = "Выберите значение";
        }

        if (validationResult.userDeliverResult) {
            span7.innerHTML = "";
        } else {
            span7.innerHTML = "Выберите значение";
        }

        if (validationResult.userColoring2Result) {
            coloring2.style.borderColor = "rgba(65, 95, 80, 0.7)";
            span8.innerHTML = "";
        } else {
            coloring2.style.borderColor = "rgba(151, 43, 24, 0.7)";
            span8.innerHTML = "Введите цвет";
        }

        if (validationResult.userAddressResult) {
            address.style.borderColor = "rgba(65, 95, 80, 0.7)";
            span9.innerHTML = "";
        } else {
            address.style.borderColor = "rgba(151, 43, 24, 0.7)";
            span9.innerHTML = "Введите Ваш адрес";
        }

        if (validationResult.userNameResult && validationResult.userTelResult && validationResult.userBoatSizeResult && validationResult.userSetsOfOarsResult && validationResult.userAntisepticResult && validationResult.userGapResult && validationResult.userColoringResult && validationResult.userDeliverResult && validationResult.userColoring2Result && validationResult.userAddressResult) {
            alert("Ваша заказ принят. С Вами свяжутся в ближайшее время");

            let ant = document.querySelector('input[name="antiseptic"]:checked');
            let gaps = document.querySelector('input[name="gap"]:checked');
            let coloringYesOrNo = document.querySelector('input[name="color"]:checked');
            let deliveryYesOrNo = document.querySelector('input[name="deliver"]:checked');

            class Users {
                constructor(name, tel, size, oars, antisept, gaps, coloringYesOrNo, color, deliveryYesOrNo, addr) {
                    this.name = name;
                    this.tel = tel;
                    this.size = size;
                    this.oars = oars;
                    this.antisept = antisept;
                    this.gaps = gaps;
                    this.coloringYesOrNo = coloringYesOrNo;
                    this.color = color;
                    this.deliveryYesOrNo = deliveryYesOrNo;
                    this.addr = addr;
                }
                info() {
                    console.log(`Покупатель ${this.name} заказывает лодку размером ${this.size}м, с ${this.oars} комплектом(ами) весел, ${this.antisept}. Обработка щелей ${this.gaps}. Окрашивание ${this.coloringYesOrNo} (цвет: ${this.color}). Доставка ${this.deliveryYesOrNo} (адрес: ${this.addr}). Телефон: +375${this.tel}`);
                }
            }
            let user = new Users(userNameTextBox.value, userTelTextBox.value, boatSize.value, numberOfSetsOfOars.value, ant.value, gaps.value, coloringYesOrNo.value, coloring2.value, deliveryYesOrNo.value, address.value);
            console.log(user.info());
            myForm.reset();
            changing.textContent = 0;
        } else {
            alert("Ваша заказ не принят. Введите данные корректно");
        }
    }

    function validateUserData() {
        let userName = userNameTextBox.value;
        let userTel = userTelTextBox.value;
        let userBoatSize = boatSize.value;
        let userSetsOfOars = numberOfSetsOfOars.value;
        let userColoring = coloring2.value;
        let userAddress = address.value;

        let validationResult = {
            userNameResult: validateUserName(userName),
            userTelResult: validateUserTel(userTel),
            userBoatSizeResult: validateBoatSize(userBoatSize),
            userSetsOfOarsResult: validateOars(userSetsOfOars),
            userAntisepticResult: validationAntiseptic(antiseptic),
            userGapResult: validateGap(gap),
            userColoringResult: validateColoring(coloring),
            userDeliverResult: validateDeliver(deliver),
            userColoring2Result: validateColoring2(coloringYes, coloringNo, userColoring),
            userAddressResult: validateAddress(deliveryYes, deliveryNo, userAddress)
        };
        return validationResult;
    }

    function validateUserName(userName) {
        if (userName.match(reg)) {
            return true;
        } else {
            return false;
        }
    }

    function validateUserTel(userTel) {
        if (userTel.match(regTel)) {
            return true;
        } else {
            return false;
        }
    }

    function validateBoatSize(userBoatSize) {
        if (userBoatSize !== "" && userBoatSize >= 3.7 && userBoatSize <= 4.6){
            return true;
        } else {
            return false;
        }
    }

    function validateOars(userSetsOfOars) {
        if (userSetsOfOars !== "" && userSetsOfOars >= 0 && userSetsOfOars <= 10) {
            return true;
        } else {
            return false;
        }
    }

    function validationAntiseptic(antiseptic) {
        for (let antis of antiseptic) {
            if (antis.checked) {
                return true;
            }
        }
        return false;
    }

    function validateGap(gap) {
        for (let g of gap) {
            if (g.checked) {
                return true;
            }
        }
        return false;
    }

    function validateColoring(coloring) {
        for (let c of coloring) {
            if (c.checked) {
                return true;
            }
        }
        return false;
    }

    function validateDeliver(deliver) {
        for (let d of deliver) {
            if (d.checked) {
                return true;
            }
        }
        return false;
    }

    function validateColoring2(coloringYes, coloringNo, userColoring) {
        if (coloringYes.checked && userColoring.match(reg)) {
            return true;
        } else if (coloringNo.checked) {
            return true;
        } else {
            return false;
        }
    }

    function validateAddress(deliveryYes, deliveryNo, userAddress) {
        if (deliveryYes.checked && userAddress !== "") {
            return true;
        } else if (deliveryNo.checked) {
            return true;
        } else {
            return false;
        }
    }

// ===========================================


    function calcPriceOfOars(numberOfSetsOfOars) {
        return numberOfSetsOfOars * 25;
    }

    function calcPriceOfAntiseptic(antisepticYes, antisepticNo) {
        if (antisepticYes.checked) {
            return 20;
        } else if (antisepticNo.checked) {
            return 0;
        } else if (!antisepticYes.checked && !antisepticNo.checked) {
            return 0;
        }
    }

    function calcPriceOfGaps(bitumen, sealant, gapsNo) {
        if (bitumen.checked) {
            return 10;
        } else if (sealant.checked) {
            return 25;
        } else if (gapsNo.checked) {
            return 0;
        } else if (!bitumen.checked && !sealant.checked && !gapsNo.checked) {
            return 0;
        }
    }

    function calcPriceOfColoring(coloringYes, coloringNo) {
        if (coloringYes.checked) {
            return 25;
        } else if (coloringNo.checked) {
            return 0;
        } else if (!coloringYes.checked && !coloringNo.checked) {
            return 0;
        }
    }

    function getSumParameters() {
        return {
            priceOfOars: calcPriceOfOars(numberOfSetsOfOars.value),
            priceOfAntiseptic: calcPriceOfAntiseptic(antisepticYes, antisepticNo),
            priceOfGaps: calcPriceOfGaps(bitumen, sealant, gapsNo),
            priceOfColoring: calcPriceOfColoring(coloringYes, coloringNo)
        };
    }

    function calculateSum() {
        let parameters = getSumParameters();
        let price = 475 + parameters.priceOfOars + parameters.priceOfAntiseptic + parameters.priceOfGaps + parameters.priceOfColoring;
        changing.textContent = price;
    }

    numberOfSetsOfOars.addEventListener("change", calculateSum, false);
    antisepticYes.addEventListener("change", calculateSum, false);
    antisepticNo.addEventListener("change", calculateSum, false);
    bitumen.addEventListener("change", calculateSum, false);
    sealant.addEventListener("change", calculateSum, false);
    gapsNo.addEventListener("change", calculateSum, false);
    coloringYes.addEventListener("change", calculateSum, false);
    coloringNo.addEventListener("change", calculateSum, false);

})();

