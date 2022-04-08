function saturdayFun(someActivity){
    return (Boolean(someActivity)) ? (`This Saturday, I want to ${someActivity}!`) : 
    (`This Saturday, I want to roller-skate!`);
}

function mondayWork(workActivity){
    return (Boolean(workActivity)) ? (`This Monday, I will ${workActivity}.`) : 
    (`This Monday, I will go to the office.`);
}

function wrapAdjective(highlight){
    return function(msg = "special"){
        return `You are ${highlight}${msg}${highlight}!`;
    }
}
