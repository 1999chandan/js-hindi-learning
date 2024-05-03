

document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value)/100;
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector('#results');
    const notHeight = (height==='' || height<0 || isNaN(height));
    const notWeight = (weight === '' || weight<0 || isNaN(weight));
    
    if(notHeight || notWeight){
        if(notHeight && notWeight){
            // result.appendChild(document.createTextNode(`Please provide valid height!!`))
            result.innerHTML = `Please provide valid height and weight`;
        }else if(notWeight){
            // result.appendChild(document.createTextNode(`Please provide valid weight!!`))
            result.innerHTML = `Please provide valid weight`;
        }else{
            result.innerHTML = `Please provide valid height`;
        }
    }
    else{
        const bmi = (weight/(height*height)).toFixed(2);
        // result.appendChild(document.createTextNode(`Your BMI is: ${bmi}`));
        if(bmi< 18.6){
            result.innerHTML = `You are under wight, your BMI is: ${bmi} `;
        }else if((24.9 >=  bmi )&& (bmi >= 18.6) ){
            result.innerHTML = `You have normal BMI, your BMI is: ${bmi} `;
        }else{
            result.innerHTML = `You are overweight, your BMI is: ${bmi}`;
        }
        
    }

})