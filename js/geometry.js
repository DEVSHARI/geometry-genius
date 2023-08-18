    function clickHandler(triangle){
        const triangleBase = document.getElementById('triangle-base');
        const triangleInputBaseString = triangleBase.value;
        const triangleBaseInputValue = parseFloat(triangleInputBaseString);

        triangleBase.value = '';


        const triangleHeight = document.getElementById('triangle-height');
        const triangleInputHeightString = triangleHeight.value;
        const triangleHeightInputValue = parseFloat(triangleInputHeightString);
        
        triangleHeight.value = '';

        const total = 0.5 * triangleBaseInputValue * triangleHeightInputValue;

        const triangleSum = document.getElementById('triangle-sum');

        triangleSum.innerText = total.toFixed(2);

    }



    // rectangle calculation

    function clickHandler2(rectangle){
        const rectangleWidth = document.getElementById('rectangle-width');
        const rectangleInputWidthString = rectangleWidth.value;
        const rectangleInputWidth = parseFloat(rectangleInputWidthString);

        const rectangleLength = document.getElementById('rectangle-length');
        const rectangleInputLengthString = rectangleLength.value
        const rectangleInputLength = parseFloat(rectangleInputLengthString)

        const total = rectangleInputWidth * rectangleInputLength;

        const rectangleSum = document.getElementById('rectangle-sum');

        rectangleSum.innerText = total.toFixed(2);

        rectangleWidth.value = '';
        rectangleLength.value = '';
    }


    // Parallelogram calculation/funtional

    function clickHandler3(){
        const width = getInputValue('parallelogram-base')
        const height = getInputValue('parallelogram-height')
        
        const area = width * height;

        getOutputValue('parallelogram-sum', area)
    }

    // rhombus area calculation

    function clickHandler4(){
        const diagonal1 = getInputValue('rhombus-diagonal1')
        const diagonal2 = getInputValue('rhombus-diagonal2')

        const area = (0.5 * diagonal1 * diagonal2).toFixed(2)
        
        getOutputValue('rhombus-sum', area)
    }

    // pentagon area calculation

    function clickHandler5(){
        const perimeter = getInputValue('pentagon-perimeter')
        const apothem = getInputValue('pentagon-apothem');

        const area = (0.5 * perimeter * apothem).toFixed(2)

        getOutputValue('pentagon-sum', area)
    }

    // ellipse area calculation
    
    function clickHandler6(){
        const major = getInputValue('ellipse-major');
        const minor = getInputValue('ellipse-minor');
        const pi = Math.PI
        const area = (pi * major * minor).toFixed(2);

        getOutputValue('ellipse-sum', area);
    }


    function getInputValue (inputId){
        const inputField1 = document.getElementById(inputId);
        const fieldValueString = inputField1.value;
        const value = parseFloat(fieldValueString)

        return value;
    }

    function getOutputValue (outputId, area){
        const outputValue = document.getElementById(outputId)
        outputValue.innerText = area;
    } 
