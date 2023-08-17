    function clickHandler(triangle){
        const triangleBase = document.getElementById('triangle-base');
        const triangleInputBaseString = triangleBase.value;
        const triangleBaseInputValue = parseFloat(triangleInputBaseString);

        triangleBase.value = '';


        const triangleHeight = document.getElementById('triangle-height');
        const triangleInputHeightstring = triangleHeight.value;
        const triangleHeightInputValue = parseFloat(triangleInputHeightstring);
        
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